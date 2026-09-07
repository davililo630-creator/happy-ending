import express from 'express';
import crypto from 'node:crypto';
import { DatabaseSync } from 'node:sqlite';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const db = new DatabaseSync(path.join(__dirname, 'bookings.sqlite'));
const sessions = new Set();
const adminPassword = process.env.ADMIN_PASSWORD || 'noir-lotus-admin';

db.exec(`CREATE TABLE IF NOT EXISTS bookings (id INTEGER PRIMARY KEY AUTOINCREMENT, reference TEXT UNIQUE NOT NULL, name TEXT NOT NULL, phone TEXT NOT NULL, email TEXT, service TEXT NOT NULL, price INTEGER NOT NULL, date TEXT NOT NULL, time TEXT NOT NULL, guests INTEGER NOT NULL DEFAULT 1, notes TEXT, status TEXT NOT NULL DEFAULT 'PENDING', created_at TEXT NOT NULL)`);
app.use(express.json());
app.use(express.static(path.join(__dirname, 'dist')));
const clean = (value) => typeof value === 'string' ? value.trim() : value;
app.post('/api/bookings', (req, res) => { const body = req.body || {}; const required = ['name', 'phone', 'service', 'price', 'date', 'time']; if (required.some((field) => !body[field])) return res.status(400).json({ error: 'Please complete all required fields.' }); const reference = `NLS-${new Date().getFullYear()}-${crypto.randomBytes(3).toString('hex').toUpperCase()}`; db.prepare('INSERT INTO bookings (reference, name, phone, email, service, price, date, time, guests, notes, created_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)').run(reference, clean(body.name), clean(body.phone), clean(body.email) || '', clean(body.service), Number(body.price), clean(body.date), clean(body.time), Number(body.guests || 1), clean(body.notes) || '', new Date().toISOString()); res.status(201).json({ reference }); });
app.post('/api/admin/login', (req, res) => { if (req.body?.password !== adminPassword) return res.status(401).json({ error: 'Incorrect password.' }); const token = crypto.randomBytes(24).toString('hex'); sessions.add(token); res.json({ token }); });
function auth(req, res, next) { const token = req.headers.authorization?.replace('Bearer ', ''); if (!token || !sessions.has(token)) return res.status(401).json({ error: 'Unauthorised.' }); next(); }
app.get('/api/admin/bookings', auth, (req, res) => { const filters = []; const values = []; if (req.query.status) { filters.push('status = ?'); values.push(req.query.status); } if (req.query.service) { filters.push('service = ?'); values.push(req.query.service); } if (req.query.date) { filters.push('date = ?'); values.push(req.query.date); } const where = filters.length ? `WHERE ${filters.join(' AND ')}` : ''; res.json(db.prepare(`SELECT * FROM bookings ${where} ORDER BY created_at DESC`).all(...values)); });
app.patch('/api/admin/bookings/:id', auth, (req, res) => { const allowed = ['PENDING', 'CONFIRMED', 'COMPLETED', 'CANCELLED']; if (!allowed.includes(req.body?.status)) return res.status(400).json({ error: 'Invalid status.' }); db.prepare('UPDATE bookings SET status = ? WHERE id = ?').run(req.body.status, Number(req.params.id)); res.json({ ok: true }); });
app.use((req, res) => res.sendFile(path.join(__dirname, 'dist', 'index.html')));
const port = process.env.PORT || 8787;
app.listen(port, () => console.log(`Happy Ending Massage Spa server running on http://localhost:${port}`));
