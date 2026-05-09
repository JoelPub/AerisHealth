# Coding Interview Assessment — Solutions

This repository contains solutions for the Coding Interview Assessment.

Structure:
- `A/` — Task A: Mystic Waves (Python)
- `B/` — Task B: CargoCraft Fleet (Python)
- `C/` — Task C: API scenario answers (Markdown)
- `frontend/` — Frontend PDP demo (React + Vite)

Running the Python tasks

Both Python scripts read from stdin and print results to stdout. Example usage:

```bash
# Task A
python A/task_A_mystic_waves.py <<EOF
4
1 4
2 5
3 6
4 7
EOF

# Task B
python B/task_B_cargocraft_fleet.py <<EOF
4
4
7
24
998244353998244352
EOF
```

Frontend

1. Open a terminal and install dependencies:

```bash
cd frontend
npm install
```

2. Start dev server:

```bash
npm run dev
```

3. Open the app at the URL printed by Vite (usually http://localhost:5173).

Notes and assumptions

- The frontend uses a local mock API (`frontend/src/mockApi.js`).
- Python solutions are implemented for the constraints described in the assessment.
- See `C/task_C_xero_api.md` for detailed API answers.
