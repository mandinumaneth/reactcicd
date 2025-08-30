# React CI/CD Demo

A simple **React + Vite + TailwindCSS** project demonstrating **CI/CD with GitHub Actions** and deployment to **GitHub Pages**.

---

## Features

- Vite + React setup
- TailwindCSS v3+ for styling
- Automatic **build and deployment** with GitHub Actions
- Hosted on **GitHub Pages**
- Full CI/CD workflow for any push to the `main` branch

---

## Project Structure

```
reactcicd/
├─ node_modules/
├─ public/
├─ src/
│  ├─ assets/
│  ├─ components/
│  └─ App.jsx
├─ .github/
│  └─ workflows/
│     └─ deploy.yml
├─ dist/ # auto-generated build folder
├─ index.html
├─ package.json
├─ tailwind.config.js
└─ vite.config.js
```

---

## Tech Stack

- **React** – Frontend framework
- **Vite** – Fast development server & build tool
- **TailwindCSS v3+** – Utility-first CSS framework
- **GitHub Actions** – CI/CD automation
- **GitHub Pages** – Free static site hosting

---

## Setup Instructions

1. Clone the repository:

   ```bash
   git clone https://github.com/mandinumaneth/reactcicd.git
   cd reactcicd
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the app locally:

   ```bash
   npm run dev
   ```

4. Build the project:

   ```bash
   npm run build
   ```

5. Deploy is automatic via GitHub Actions on every push to main.

---

## CI/CD Workflow

The workflow is defined in `.github/workflows/deploy.yml`.

On every push to the main branch:

- Install dependencies (`npm install`)
- Build the project (`npm run build`)
- Deploy the `dist/` folder to GitHub Pages

---

## Live Demo

Access the deployed app here: [https://mandinumaneth.github.io/reactcicd/](https://mandinumaneth.github.io/reactcicd/)

---

## Notes

- Make sure the dist folder path in `deploy.yml` matches your build output (`dist/` for Vite).
- Ensure the `GITHUB_TOKEN` secret is available (auto-provided by GitHub Actions).
- TailwindCSS is configured with `tailwind.config.js` and `postcss.config.js`.
