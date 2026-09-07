# Happy Ending Massage Spa

Premium dark luxury massage and wellness website for Westlands, Nairobi.

## Run locally

```bash
npm install
npm run dev
```

The Vite client runs on `http://localhost:5173` and the booking API runs on `http://localhost:8787`.

For a production-style check:

```bash
npm run build
npm start
```

Bookings are stored in a persistent local SQLite database at runtime. Set `ADMIN_PASSWORD` before starting the server to protect `/admin`; the local development fallback is `noir-lotus-admin`.

## Key routes

- `/` public spa website
- `/booking` dedicated booking form
- `/admin` authenticated booking management

All spa photographs are stored under `public/assets/images`. The current `public/assets/logo-mark.svg` is a local temporary brand mark because no uploaded official logo was present in the workspace; replace that asset with the supplied logo file when available.