<img width="735" height="1307" alt="WhatsApp Image 2026-09-06 at 3 06 11 PM" src="https://github.com/user-attachments/assets/3c7264c2-f6d0-46a0-a4e3-90264b7d4ab8" />
<img width="720" height="1165" alt="WhatsApp Image 2026-09-06 at 3 06 12 PM" src="https://github.com/user-attachments/assets/4714c169-386d-4d67-8a15-a8f9940fb5d1" />
<img width="736" height="1089" alt="WhatsApp Image 2026-09-06 at 3 06 12 PM (1)" src="https://github.com/user-attachments/assets/eab139b6-5e58-4989-9cb9-48cd9dc4a877" />
<img width="736" height="1308" alt="WhatsApp Image 2026-09-06 at 3 06 13 PM" src="https://github.com/user-attachments/assets/3d720d83-ceb4-422a-b851-642ecd3c9220" />
<img width="736" height="1308" alt="WhatsApp Image 2026-09-06 at 3 05 57 PM" src="https://github.com/user-attachments/assets/f1fba0fe-92ed-400b-8512-64904fcacc53" />
<img width="736" height="981" alt="WhatsApp Image 2026-09-06 at 3 05 56 PM" src="https://github.com/user-attachments/assets/eb0f7787-3998-44bf-994b-d20bad0bb789" />
<img width="736" height="962" alt="WhatsApp Image 2026-09-06 at 3 05 56 PM (1)" src="https://github.com/user-attachments/assets/de9700b9-0f91-4cf7-adee-70c33ecbaf88" />
<img width="736" height="957" alt="WhatsApp Image 2026-09-06 at 3 05 55 PM" src="https://github.com/user-attachments/assets/42a13c35-e288-4bb0-888f-d786b8d92e15" />
<img width="736" height="981" alt="WhatsApp Image 2026-09-06 at 3 05 55 PM (1)" src="https://github.com/user-attachments/assets/1632ea6d-14bb-43be-b50c-d888be0d5a10" />
<img width="1536" height="1536" alt="WhatsApp Image 2026-09-06 at 3 05 15 PM (1)" src="https://github.com/user-attachments/assets/998b1a23-da66-440c-a42b-8143d428328e" />
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
