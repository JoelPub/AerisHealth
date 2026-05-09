# PDP Frontend

A minimal React + Vite demo for the Product Detail Page (PDP).

## Run

Install dependencies and start dev server:

```bash
cd frontend
npm install
npm run dev
```

Open http://localhost:5173

## Notes
- Uses local mock API (`src/mockApi.js`).
- Handles loading, error, out-of-stock and add-to-cart flows.
- Image lazy loads and inputs validate quantity against stock.
