# SJ Consultancy

> Premium healthcare quality & accreditation consultancy web application built with Next.js 16 (App Router), React 19, Tailwind CSS v4, Framer Motion, and TypeScript.

---

## 📌 Project Overview

**SJ Consultancy** is a specialized firm offering end-to-end consultancy for healthcare facilities across India. Core domains include:
- **NABH Accreditation** (National Accreditation Board for Hospitals & Healthcare Providers)
- **NABL Accreditation** (Laboratories & Diagnostics)
- **Behavior-Driven Hospital Planning & Development**
- **SOPs & Documentation** (Apex Manuals, Clinical Protocols, Quality Indicators)
- **Hospital Staff Training & Mock Audits**
- **Green Smart Hospital Solutions**

---

## 🛠️ Tech Stack

| Category | Technology |
|---|---|
| **Framework** | [Next.js 16](https://nextjs.org/) (App Router, Turbopack) |
| **Language** | [TypeScript 5](https://www.typescriptlang.org/) |
| **UI Library** | [React 19](https://react.dev/) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) (`@tailwindcss/postcss`) |
| **Icons** | [Lucide React](https://lucide.dev/) |
| **Animations** | [Framer Motion](https://www.framer.com/motion/) & [GSAP](https://gsap.com/) |
| **Smooth Scrolling** | [Lenis](https://github.com/darkroomengineering/lenis) |
| **Class Utilities** | `clsx`, `tailwind-merge`, `class-variance-authority` |
| **Linting** | ESLint 9 (`eslint-config-next`) |

---

## 📁 Project Architecture & File Index

```text
SJ-Consultancy/
├── public/                     # Static assets (images, icons)
│   ├── doctor-removebg.png     # Hero section doctor illustration
│   └── *.svg                   # Standard SVG vectors
├── src/
│   ├── app/                    # Next.js App Router routes & layouts
│   │   ├── layout.tsx          # Root layout (fonts, navbar, footer, Lenis scroller)
│   │   ├── page.tsx            # Home page (Hero, TrustStrip, About, Services, WhyChooseUs, Team, Testimonials)
│   │   ├── globals.css         # Tailwind CSS v4 root tokens & typography
│   │   ├── about/
│   │   │   └── page.tsx        # Company story, mission & vision, team, why choose us
│   │   ├── services/
│   │   │   └── page.tsx        # Accreditation services, training, pricing breakdown
│   │   ├── process/
│   │   │   └── page.tsx        # 6-step accreditation roadmap & timeline summary
│   │   └── contact/
│   │       └── page.tsx        # Contact details, inquiry form, office location
│   ├── components/
│   │   ├── layout/             # Global layout elements
│   │   │   ├── Navbar.tsx      # Navigation bar with responsive links & CTA
│   │   │   ├── Footer.tsx      # Multi-column footer with contact info & quick links
│   │   │   └── SmoothScroller.tsx # Lenis smooth scroll wrapper
│   │   ├── sections/           # Reusable page sections
│   │   │   ├── AboutPreview.tsx
│   │   │   ├── HospitalShowcase.tsx
│   │   │   ├── OurTeam.tsx
│   │   │   ├── ProcessPreview.tsx
│   │   │   ├── ServicesPreview.tsx
│   │   │   ├── Testimonials.tsx
│   │   │   ├── TrustStrip.tsx
│   │   │   └── WhyChooseUs.tsx
│   │   └── ui/                 # Reusable UI primitives
│   │       ├── Button.tsx      # CVA button with motion animation & loading states
│   │       └── Hero.tsx        # Configurable hero banner with responsive layout
│   └── lib/
│       └── utils.ts            # Class merging utility (clsx + tailwind-merge)
├── AGENTS.md                   # Agent guidelines & Next.js rules
├── CLAUDE.md                   # Agent entrypoint
├── eslint.config.mjs           # ESLint configuration
├── next.config.ts              # Next.js configuration
├── package.json                # Project dependencies and npm scripts
├── postcss.config.mjs          # PostCSS configuration for Tailwind CSS v4
└── tsconfig.json               # TypeScript configuration
```

---

## 🧭 Routes & Pages

| Route | File Path | Description |
|---|---|---|
| `/` | `src/app/page.tsx` | Main landing page featuring key service highlights, team, and reviews |
| `/about` | `src/app/about/page.tsx` | Company background, mission, vision, and leadership |
| `/services` | `src/app/services/page.tsx` | Detailed breakdown of NABH/NABL services, training & fees |
| `/process` | `src/app/process/page.tsx` | 6-step accreditation process timeline & duration |
| `/contact` | `src/app/contact/page.tsx` | Office address, phone numbers, contact form, and location map |

---

## 🚀 Getting Started

### Prerequisites
- Node.js >= 20.x
- npm, pnpm, or yarn

### 1. Installation
```bash
npm install
```

### 2. Development Server
Run the local dev server:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build & Production
To create an optimized production build:
```bash
npm run build
npm start
```

### 4. Linting
Run ESLint:
```bash
npm run lint
```

---

## 🔧 Git Configuration

This repository is configured with:
```bash
git config user.name "canvasLayerDev"
git config user.email "dev@canvaslayer.com"
```
Remote origin:
`git@github.com-canvasLayerDev:canvasLayerDev/SJ-Consultancy.git`
