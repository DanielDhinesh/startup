# 🚀 Dam Tech Solutions — Quick Start Guide

Welcome to **Dam Tech Solutions**, a modern, responsive web application built with **React 19**, **Vite**, and **Lucide Icons**.

---

## 📋 Prerequisites

Before running this project, make sure you have the following installed on your machine:

- **Node.js**: `v18.0.0` or higher (Download from [nodejs.org](https://nodejs.org/))
- **npm**: `v9.0.0` or higher (comes bundled with Node.js)
- **Git**: (Optional, for version control)

---

## ⚡ Quick Start Guide

Follow these simple steps to set up and run the application locally:

### 1️⃣ Clone or Navigate to the Project

Open your terminal or PowerShell and navigate to the project directory:

```bash
cd "c:\Users\DanialG\Dev\Dam Tech Solutions\startup"
```

### 2️⃣ Install Dependencies

Install all required npm packages:

```bash
npm install
```

### 3️⃣ Start the Development Server

Launch the Vite local development server:

```bash
npm run dev
```

Once started, click the local URL shown in your terminal (usually `http://localhost:5173`) to open the app in your browser!

---

## 📜 Available NPM Scripts

In the project directory, you can run:

| Command | Description |
| :--- | :--- |
| `npm run dev` | Starts the local development server with Hot Module Replacement (HMR). |
| `npm run build` | Compiles and optimizes the app for production in the `dist/` folder. |
| `npm run preview` | Serves the production build locally to test performance before deploying. |
| `npm run lint` | Runs **Oxlint** to check for code quality and syntax issues. |

---

## 📂 Project Structure

```text
startup/
├── public/                 # Static public assets
├── src/
│   ├── assets/             # Media and static images
│   ├── components/         # React Components
│   │   ├── Navbar.jsx                  # Main navigation bar
│   │   ├── HeroSection.jsx             # Hero banner with CTA
│   │   ├── ServicesGrid.jsx            # Core service offerings
│   │   ├── InteractiveSoftwareDemo.jsx # Live software demo component
│   │   ├── PricingEstimator.jsx        # Project cost estimator
│   │   ├── ROICalculator.jsx           # ROI calculation tool
│   │   ├── WhyChooseUs.jsx             # Key differentiators & features
│   │   ├── ContactSection.jsx          # Interactive contact form
│   │   ├── Footer.jsx                  # Site footer
│   │   ├── ClientInfoNoticeModal.jsx   # Info modal popup
│   │   └── ColorPalettePickerModal.jsx # Theme switcher modal
│   ├── App.jsx             # Main application container
│   ├── App.css             # Component-level styles
│   ├── index.css           # Design tokens & global utility CSS
│   └── main.jsx            # Application entry point
├── package.json            # Project dependencies & scripts
├── vite.config.js          # Vite build configuration
└── .gitignore              # Git ignore rules
```

---

## 📤 Pushing to Git / GitHub

If you want to push this project to a remote Git repository:

```bash
# 1. Initialize Git (if not already initialized)
git init

# 2. Stage all files
git add .

# 3. Create your first commit
git commit -m "Initial commit"

# 4. Set default branch to main
git branch -M main

# 5. Link your GitHub repository
git remote add origin https://github.com/<your-username>/<your-repo-name>.git

# 6. Push to remote
git push -u origin main
```

---

## 🧰 Tech Stack Summary

- **Frontend:** React 19 + JSX
- **Build Tooling:** Vite 8
- **Icons:** Lucide React
- **Animations / Effects:** Canvas Confetti
- **Code Linter:** Oxlint
