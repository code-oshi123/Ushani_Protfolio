# Ushani Perera ✦ Personal Portfolio & QA Engineering Showcase

<div align="center">

![Portfolio Banner](https://img.shields.io/badge/Ushani-Portfolio-8B5CF6?style=for-the-badge&logoColor=white)
![React](https://img.shields.io/badge/React_19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite_8-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS_v4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)
![Dark Mode](https://img.shields.io/badge/Theme-Soft_Midnight_&_Light-1D1629?style=for-the-badge)

<p align="center">
  <b>Computer Science Undergraduate • Quality Assurance (QA) Engineer • Full-Stack Developer</b>
</p>

<p align="center">
  <i>"I build, test & improve digital experiences with a quality-first mindset."</i>
</p>

[Explore Projects](#-4-selected-work-workjsx) • [QA Case Study](#-5-featured-qa-case-study-qacasestudyjsx--qacasestudymodaljsx) • [Medium Articles](#-9-my-articles-articlesjsx) • [Get In Touch](#-11-footer--recruiter-contact-contactjsx)

</div>

---

## 🌟 Overview

This repository houses the modern, single-page portfolio of **Ushani Perera**, a final-year Computer Science undergraduate at the University of Staffordshire (partnered with APIIT Sri Lanka) and an active **Intern QA Engineer** at Neirah Tech Solution.

The portfolio bridges software engineering with methodical Quality Assurance. It showcases automated & manual test suites, verified project case studies, academic milestones, and published Medium writing within an interactive aesthetic inspired by lavender violet tones and a **"Soft Midnight"** dark mode.

---

## 🛠️ Tech Stack & Architecture

- **Core Framework:** [React 19](https://react.dev/) with functional components & modern hooks.
- **Build Tooling:** [Vite 8](https://vite.dev/) with hot module replacement (HMR) and optimized rollup production bundles.
- **Styling & CSS:** [Tailwind CSS v4](https://tailwindcss.com/) with custom `@theme` variables, CSS layers, and dynamic `@custom-variant dark`.
- **Animations & Micro-interactions:** [Framer Motion](https://www.framer.com/motion/) for staggered reveals, layout transitions, animated counters, and floating particles.
- **Icons:** [Lucide React](https://lucide.dev/) for clean UI iconography.
- **Linting:** [Oxlint](https://oxc.rs/) for high-speed JavaScript/React linting.

---

## 🎨 Design System: "Soft Midnight" & Lavender

The portfolio features a theme toggle with local storage persistence and two design modes:

| Element | Light Theme ("Dreamy Lavender") | Dark Theme ("Soft Midnight") |
| :--- | :--- | :--- |
| **Main Background** | `#F6F3F9` / `#FAF7FF` | `#100B18` |
| **Secondary Background** | `#FAF8FE` | `#17111F` |
| **Card Surface** | `#FAF8FE` / `#FFFFFF` | `#1D1629` |
| **Elevated Surfaces** | `#FFFFFF` | `#261D35` |
| **Primary Accent** | `#8B5CF6` (Vibrant Violet) | `#A78BFA` (Lavender Violet) |
| **Soft Accent** | `#C4B5FD` (Soft Lavender) | `#C4B5FD` / `#DDD3F5` |
| **Primary Text (Headings)** | `#3B1C54` / `#2D1B4E` (Deep Plum) | `#F5EFFB` (Luminous Soft White) |
| **Secondary Text (Body)** | `#2D2633` (Charcoal, 70–85%) | `#C5B9D3` (Muted Lavender) |
| **Borders** | `#ECE4FA` / `#DDD3F5` | `rgba(167, 139, 250, 0.15)` / `#2D2140` |

### Typography
- **Headings & Display:** `Playfair Display` (Classic Editorial Serif)
- **Body & Controls:** `Plus Jakarta Sans` (Clean, Modern Sans-Serif)
- **Personal Signature:** `Caveat` (Handwritten Script Accent)
- **Code & Telemetry:** Monospace (`font-mono`)

---

## 📑 Portfolio Sections & Available Data

The application is structured into the following sections:

```
Navbar (Fixed Header + Theme Toggle)
  ├── 1. Hero Section (Interactive Tech & QA Console)
  ├── 2. About Me (Traits & Workspace Flat-lay)
  ├── 3. Selected Work (5 Projects + Filter Tabs + Modals)
  ├── 4. Featured QA Case Study (SauceDemo Login + Full Report Modal)
  ├── 5. QA Lifecycle & Methodology (5-Step Process & Skills)
  ├── 6. Technical Skills & Certifications (Categories + Counters)
  ├── 7. Experience & Education Timeline (Work + Degrees + References)
  ├── 8. Core Strengths & Currently Exploring (Workplace Mindset & Tags)
  ├── 9. My Articles (Medium Writing & Editorial Cards)
  ├── 10. QA Philosophy (Quote & Genuine Notebook Visual)
  └── 11. Footer / Contact (Recruiter CTAs + Social Links)
```

---

### 📌 1. Navigation (`Navbar.jsx` & `ThemeToggle.jsx`)
- **Brand Identity:** Script logo `"Ushani. ✦"` with animated hover star.
- **Navigation Links:** Smooth scroll anchors to `#home`, `#about`, `#work`, `#qa`, `#skills`, `#experience`, and `#contact`.
- **Dynamic Header:** Switches to a backdrop blur background (`backdrop-blur-md`) with subtle border when scrolled past 20px.
- **Theme Toggle:** Sun/Moon toggle button with animated transitions, persisting light/dark preference to `localStorage`.
- **Modal Lock:** Automatically hides the fixed navbar during modal dialogs to prevent header overlaps.

---

### 📌 2. Hero Section (`Hero.jsx`)
- **Headline:** `"I build, test & improve digital experiences."`
- **Roles:** Computer Science Undergraduate • QA Engineer • Developer.
- **Description:** *"I enjoy turning ideas into reliable digital experiences — from building applications to exploring them through a quality-focused mindset."*
- **Primary CTAs:**
  - `View My Work` (Smooth scroll to `#work`)
  - `Explore Me` (Smooth scroll to `#about`)
- **4-Pill Mindset Bar:**
  1. **Build (`</>`)** — with purpose
  2. **Test (`🔍`)** — with curiosity
  3. **Solve (`💡`)** — with logic
  4. **Improve (`✦`)** — with care
- **Interactive Tech & QA Workspace Console:**
  - **Dual Tabs:**
    - `quality-spec.ts`: Illustrative Test Automation Concept (`describe`, `test`, user authentication assertions).
    - `api-contract.json`: Illustrative API Verification Schema (Postman, REST GET endpoint, expected status `200 OK`).
  - **Live Test Runner Widget:** Simulates test execution (`tests/sample-flow.spec.ts`) with animated progress bar and clear `"SIMULATED DEMO"` badge.
  - **Satellite Telemetry Cards:**
    - Top Right: `QA CORE PRACTICE` — `Functional & Regression Testing` • `Manual Testing & Test Case Design`.
    - Bottom Left: `API & TOOLING` — `API Validation with Postman` • `Responsive UI Verification`.
  - **Toolchain Badges:** Playwright, Postman, Selenium, React.

---

### 📌 3. About Me (`About.jsx`)
- **Headline:** `"A little about me ✦"`
- **Summary:** An introduction reflecting Ushani's academic background and quality-focused development approach.
- **6 Interactive Trait Badges (with micro-hint previews on hover/click):**
  1. 🧠 **Problem Solver** — Root cause analysis & debugging
  2. 👁️ **Detail Oriented** — Catching pixel & edge discrepancies
  3. ⚡ **Quick Learner** — Rapid adaptation to frameworks & tools
  4. 🎯 **Quality Focused** — Dedicated to thorough verification & defect prevention
  5. 🤝 **Team Player** — Agile & cross-functional collaboration
  6. 🔍 **Always Curious** — Exploring deep system behaviors
- **Visual Scene:** Illustrated 3D desk flat-lay workspace (`about_desk_illustration.png`).

---

### 📌 4. Selected Work (`Work.jsx`)
Features interactive category filter tabs (**All**, **🌐 Web & PWA**, **📱 Mobile Apps**, **💻 Systems**), live preview containers, tech stack tags, and comprehensive modal popups with QA testing details.

#### Available Projects:
1. **Urban Harvest Hub**
   - **Role:** Developer & QA
   - **Category:** Web / PWA
   - **Tagline:** Sustainable Community & Harvest Platform
   - **Tech Stack:** `PWA`, `React`, `Node.js`, `MySQL`, `Tailwind CSS`
   - **QA Highlights:** Service worker caching verification, input boundary validation, responsive mobile UX.
   - **Links:** [Live Demo](https://urban-harvest-pwa.vercel.app/) • [GitHub Repo](https://github.com/code-oshi123/Urban_Harvest_PWA.git)
2. **Bloomy Twist — Handmade Flower Shop (Demo)**
   - **Role:** Developer & QA
   - **Category:** Web
   - **Tagline:** Local flower market & E-commerce demo
   - **Tech Stack:** `HTML`, `Tailwind CSS (CDN)`, `Vanilla JavaScript`
   - **QA Highlights:** Real-time order state transition validation, cart price edge case testing, low-bandwidth testing.
   - **Links:** [Live Demo](https://bollom-twiat-your-flower-shop.netlify.app/) • [GitHub Repo](https://github.com/code-oshi123/flower-shop.git)
3. **Urban Harvest 101**
   - **Role:** Developer & QA
   - **Category:** Systems / SPA
   - **Tagline:** Inventory & Sustainable Lifestyle Platform
   - **Tech Stack:** `React 18`, `Vite`, `React Router DOM`, `Axios`, `Tailwind CSS`, `OpenWeather API`
   - **QA Highlights:** JWT token expiry & unauthorized route access testing, input validation, multi-language localization.
   - **Links:** [Live Demo](https://urban-harvst-hub.vercel.app/) • [GitHub Repo](https://github.com/code-oshi123/Urban_Harvst_Hub.git)
4. **Supplier Management System**
   - **Role:** QA & Developer & PM & BA
   - **Category:** System / Enterprise
   - **Tagline:** Procurement Analytics & Vendor Tracking
   - **Tech Stack:** `React`, `Node.js`, `MySQL`, `Postman`, `Chart.js`
   - **QA Highlights:** Postman API payload validation for vendor endpoints, sorting & pagination tests, SLA calculations.
   - **Links:** [Live Demo](https://nestle-dms-frontend.vercel.app/) • [GitHub Repo](https://github.com/code-oshi123/nestle-dms-frontend.git)
5. **stemoras-shop.vercel.app**
   - **Role:** QA & Developer
   - **Category:** Web
   - **Tagline:** Local Flower Shop for Handcrafted Arrangements
   - **Tech Stack:** `HTML`, `Tailwind CSS (CDN)`, `Vanilla JavaScript`
   - **QA Highlights:** Real-time order validation, cart price calculation, cross-browser compatibility.
   - **Links:** [Live Demo](https://stemoras-shop.vercel.app/) • [GitHub Repo](https://github.com/code-oshi123/Stemoras.git)

---

### 📌 5. Featured QA Case Study (`QaCaseStudy.jsx` & `QaCaseStudyModal.jsx`)
A case study based on the test execution of the **SauceDemo Login Functionality**:
- **Target Application:** `saucedemo.com/login`
- **Execution Pass Rate:** 100% (4 / 4 test cases passed)
- **Nuance Note:** A "Passed" status indicates that observed application behavior matched the expected result for that specific scenario under test. It reflects successful verification of these 4 authentication flows, rather than a claim that the entire application is defect-free.
- **Test Scenarios Covered:**
  - `TC_LOGIN_001`: Valid Credentials (Standard User $\to$ user successfully logs in)
  - `TC_LOGIN_002`: Valid Username with Incorrect Password (Login prevented, error: `Epic sadface: Username and password do not match any user in this service.`)
  - `TC_LOGIN_003`: Both Username and Password Empty (Login prevented, error: `Epic sadface: Username is required.`)
  - `TC_LOGIN_004`: Valid Username with Empty Password (Login prevented, error: `Epic sadface: Password is required.`)
- **Interactive Report Modal:**
  - Collapsible test cases with step-by-step reproduction instructions, test data, expected vs. actual outcomes, and screenshot evidence lightbox.
  - Downloadable test documentation action button.

---

### 📌 6. QA Lifecycle & Methodology (`QaSection.jsx`)
A 5-step structured quality assurance approach:
1. 🧭 **EXPLORE — Requirements Analysis & Scenario Mapping:** User story deconstruction, edge-case brainstorming, traceability matrix, and risk-based prioritization.
2. 🧪 **TEST — Methodical Test Execution:** Manual testing, REST API validation in Postman, automated scripts in Playwright, and cross-browser verification.
3. 🔍 **FIND — Defect Isolation & Root Cause Analysis:** Identifying edge-case bugs, console errors, UI inconsistencies, and performance bottlenecks.
4. 📝 **REPORT — Crystal-Clear Defect Documentation:** Step-by-step reproduction, logs, network payloads, severity/priority assignment.
5. ✨ **IMPROVE — Regression & Continuous Enhancement:** Fix verification, regression suites, release candidates, and team feedback loops.

---

### 📌 7. Technical Skills & Certifications (`Skills.jsx`)
- **Animated Counters:**
  - 10+ Testing Competencies
  - 8+ Development Technologies
  - 6 Professional Certifications
- **Categorized Skills:**
  - **QA & Testing:** Manual Testing, Test Case Design, Defect Lifecycle, API Testing (Postman), Automated Testing (Playwright), Functional & Regression Testing, UI/UX Layout Checks, Agile (Scrum) & Waterfall.
  - **Development:** JavaScript (ES6+), React.js, React Native, Node.js, Python, C#, HTML5, CSS3, Tailwind CSS, REST APIs.
  - **Databases & Tools:** Postman, Git & GitHub, MySQL, PostgreSQL, Playwright, Trello, Linux OS, AWS Cloud Foundations.
- **6 Professional Certifications:**
  - 🛡️ Ethical Hacking (Security Fundamentals)
  - 🐍 Python Programming (Core Software Logic)
  - 🗄️ Database Management (SQL & Data Modeling)
  - 🐧 Linux Administration (System & Server CLI)
  - 🌐 Networking Fundamentals (Protocols & Routing)
  - 📋 Project Management (Agile & Coordination)

---

### 📌 8. Experience & Education Timeline (`Experience.jsx`)
Filterable by **All**, **Work Experience**, and **Education**:

#### Work Experience:
- **Intern QA Engineer** — *Neirah Tech Solution (Pvt) Ltd.* (July 2026 — Present)
  - Enterprise ERP Quality Assurance, API validation with Postman, manual test authoring, regression cycles.
- **Developer & QA** — *First Client Project: E-Commerce Flower Shop* (2026)
  - Commercial floral shop development, end-to-end checkout validation, usability testing.
- **Team Lead & QA** — *Delivery Management System* (2025)
  - Agile team leadership, sprint planning, automated testing with Playwright.
- **Developer & QA** — *Ticket Management System* (2025)
  - Object-oriented C# development, regression testing, calculation logic debugging.

#### Education:
- **BSc (Hons) Computer Science (3rd Year)** — *University of Staffordshire (UK) & APIIT Sri Lanka* (2024 — Present)
  - Specializing in Software Quality Assurance, Software Engineering, and Enterprise Systems.
- **Computing Foundation** — *APIIT Sri Lanka* (2024 / 2023)
  - Foundations of computer systems, database design, and algorithmic problem solving.
- **G.C.E. Ordinary Level (O/L)** — *National Examination Board* (2022 / 2023)
  - **9 A's Distinction** across all 9 subjects.

#### Academic References:
- **K.M. Shani Alwis** — Lecturer, APIIT Sri Lanka (Contact details available upon request)
- **Tharaka Dulaj** — Lecturer, APIIT Sri Lanka (Contact details available upon request)

---

### 📌 9. Core Strengths & Currently Exploring (`Strengths.jsx`)
- **Core Strengths:**
  1. 🧠 **Analytical Thinking** — Logical investigation and problem breakdown.
  2. 👁️ **Attention to Detail** — Catching minor edge inconsistencies.
  3. 💡 **Problem Solving** — Practical and structured bug resolutions.
  4. 🤝 **Team Collaboration** — Cross-functional developer partnership.
  5. ⚡ **Continuous Learning** — Evolving with new QA technologies.
  6. 🎯 **Quality Mindset** — Focus on product reliability and UX.
- **Currently Exploring 🌙:**
  - Selenium Automation • Playwright • Postman & REST API • Cypress E2E • Performance Testing (JMeter) • CI/CD Quality Gates • BDD / Cucumber • Test Planning & Strategy.

---

### 📌 10. My Articles on Medium (`Articles.jsx`)
Editorial cards linking directly to Ushani's published writing on Medium:
1. **“A Beginner's Guide to QA — Part 1: Before You Start Testing”**
   - Tag: `QA Fundamentals` • `4 min read`
   - Description: *An introductory guide to the things to understand before starting software testing.*
   - Link: [Read on Medium ↗](https://medium.com/@ushaniprarthana593/a-beginners-guide-to-qa-part-1-before-you-start-testing-ba3ee0443931?sharedUserId=ushaniprarthana593)
2. **“My QA Journey So Far: From a Beginner to a QA Intern”**
   - Tag: `Career & Growth` • `5 min read`
   - Description: *A personal reflection on learning quality assurance and taking the first steps into the industry.*
   - Link: [Read on Medium ↗](https://medium.com/@ushaniprarthana593/my-qa-journey-so-far-from-a-beginner-to-a-qa-intern-224eb838cfc6)
- **Profile Call to Action:** *"Explore more of my writing on Medium ↗"* $\to$ [Ushani's Medium Profile](https://medium.com/@ushaniprarthana593)

---

### 📌 11. QA Philosophy (`QaPhilosophy.jsx`)
- **Philosophy Statement:**
  > *"I believe good QA is about looking beyond whether something works — it’s about understanding how it feels, noticing what others might miss, and helping create a better experience for the people who use it."*
- **Visual Element:** High-resolution genuine QA notebook photo asset (`qa_philosophy_notebook.jpg`).

---

### 📌 12. Footer & Recruiter Contact (`Contact.jsx`)
- **Headline:** *"Looking for someone curious, detail-oriented and quality-focused? Let's connect."*
- **Recruiter Actions:**
  - `View My Projects` $\to$ `#work`
  - `Download CV` $\to$ One-click download of official `Ushani_Perera_CV.pdf`
  - `LinkedIn` $\to$ Direct link to [LinkedIn Profile](https://www.linkedin.com/in/ushani-perera-36a95433a/)
- **Social Media Icons:**
  - [Medium Profile](https://medium.com/@ushaniprarthana593) (Official brand monogram SVG)
  - [GitHub Profile](https://github.com/code-oshi123)

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (version `18.0.0` or higher recommended)
- `npm` or `pnpm`

### Installation
Clone the repository and install project dependencies:
```bash
git clone https://github.com/code-oshi123/Ushani_Protfolio.git
cd Ushani_Protfolio
npm install
```

### Development Server
Start the local Vite development server with hot-reload enabled:
```bash
npm run dev
```
Open [http://localhost:5173/](http://localhost:5173/) in your web browser.

### Production Build
Create an optimized production build in the `dist/` directory:
```bash
npm run build
```

To preview the production build locally:
```bash
npm run preview
```

### Linting
Run the fast Oxlint linter:
```bash
npm run lint
```

---

## 📁 Project Directory Structure

```
ushani/
├── public/
│   └── Ushani_Perera_CV.pdf          # Official Downloadable CV
├── src/
│   ├── assets/                       # Images, illustrations, and notebook photos
│   │   ├── about_desk_illustration.png
│   │   ├── project_card_01.png ... 05.png
│   │   ├── qa_philosophy_notebook.jpg
│   │   └── ushani_transparent.png
│   ├── components/                   # Modular React components
│   │   ├── About.jsx                 # Bio, traits, and workspace illustration
│   │   ├── Articles.jsx              # Medium publications & editorial cards
│   │   ├── Contact.jsx               # Recruiter CTA, footer & social links
│   │   ├── CustomCursor.jsx          # Interactive mouse follower & trail
│   │   ├── Experience.jsx            # Experience, education & academic references
│   │   ├── Hero.jsx                  # Interactive QA terminal, telemetry & bio
│   │   ├── Navbar.jsx                # Fixed navigation & mobile drawer
│   │   ├── QaCaseStudy.jsx           # SauceDemo featured QA case study
│   │   ├── QaCaseStudyModal.jsx      # Test case execution modal dialog
│   │   ├── QaPhilosophy.jsx          # QA philosophy statement & notebook visual
│   │   ├── QaSection.jsx             # 5-step QA lifecycle & core skill tags
│   │   ├── Skills.jsx                # Skills breakdown & certifications
│   │   ├── Strengths.jsx             # Core workplace strengths & Currently Exploring
│   │   ├── ThemeToggle.jsx           # Dark / Light mode switch
│   │   └── Work.jsx                  # Projects portfolio & preview modals
│   ├── App.jsx                       # Main application shell & section composition
│   ├── index.css                     # Tailwind CSS v4, theme tokens & custom animations
│   └── main.jsx                      # React 19 root entrypoint
├── index.html                        # HTML template & SEO metadata
├── package.json                      # Dependencies and npm scripts
├── vite.config.js                    # Vite configuration with React & Tailwind plugins
└── README.md                         # Project documentation
```

---

## 👩‍💻 Author & Connect

**Ushani Perera**  
*Computer Science Undergraduate & QA Engineer*

- 💼 **LinkedIn:** [linkedin.com/in/ushani-perera-36a95433a](https://www.linkedin.com/in/ushani-perera-36a95433a/)
- 🐙 **GitHub:** [github.com/code-oshi123](https://github.com/code-oshi123)
- ✍️ **Medium:** [medium.com/@ushaniprarthana593](https://medium.com/@ushaniprarthana593)
- 📄 **Resume:** Available for direct download via the portfolio footer.

---

<div align="center">
  <sub>Designed & built with 💜 by Ushani • © 2026 All Rights Reserved</sub>
</div>
