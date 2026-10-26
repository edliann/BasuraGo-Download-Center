# BasuraGo Download Center

A standalone responsive React + TypeScript + CSS website for the BasuraGo Customer APK, Rider APK, and Admin web portal. The supplied city-valley artwork is bundled locally and used as the hero background.

## Requirements
- Node.js 20.19+ or 22.12+ recommended for current Vite releases
- npm

## Run locally

```bash
npm install
npm run dev
```

Open the local URL printed by Vite.

## Verify a production build

```bash
npm run build
npm run preview
```

## Before launch
- Replace the disabled Customer and Rider buttons with real HTTPS APK URLs when release builds are ready.
- Add the deployed Admin Portal URL when available.
- Confirm app package IDs, signing, release versions, and update process.
- Consider replacing the Google Fonts import with locally hosted fonts if the site must work without third-party font requests.

The download and admin actions are intentionally disabled placeholders. No real APK links are included yet.
