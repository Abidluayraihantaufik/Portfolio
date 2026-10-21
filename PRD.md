# Product Requirement Document (PRD)
## Personal Portfolio Website — Abid Lu'ay Raihan Taufik

---

### 1. Document Overview & Metadata
* **Project Name:** Personal Portfolio & Career Showcase
* **Owner / Candidate:** Abid Lu'ay Raihan Taufik
* **Target Roles:** Data Analyst | Web Developer | IT Helpdesk
* **Affiliation:** Universitas Pelita Bangsa
* **Contact Info:**
  * **Email:** abidluay204@gmail.com
  * **Phone / WhatsApp:** +62 895-3778-64560
  * **LinkedIn:** [Abid Lu'ay Raihan Taufik](https://linkedin.com)
* **Tech Stack:** React.js (Vite / Next.js), Tailwind CSS, Lucide React / React Icons, Framer Motion (Optional for subtle animations), i18n (Language Context)
* **Target Audience:** Recruiters, Tech Leads, HR Professionals, Clients, and Professional Network.

---

### 2. Objectives & Vision
* Build a modern, highly professional, responsive, and elegant portfolio website.
* Highlight triple-threat technical competencies: **Data Analytics**, **Web Development**, and **IT Helpdesk / Technical Support**.
* Provide seamless bilingual support (**Indonesian (ID)** & **English (EN)**) for broader career reach.
* Implement an **"Elegant Dark"** aesthetic: modern dark mode with refined slate/zinc accents, smooth gradients, subtle borders, and zero clutter or neon overload.

---

### 3. Design System & UI/UX Guidelines

#### 3.1 Color Palette ("Elegant Dark")
* **Background Primary:** `#090a0f` / `zinc-950` (Deep obsidian black)
* **Background Secondary / Cards:** `#12131a` / `zinc-900/80` with glassmorphism border (`border-zinc-800/60`)
* **Background Accent / Hover:** `#1c1e29` / `zinc-800`
* **Text Primary:** `#f8fafc` / `slate-50` (Crisp high-contrast white)
* **Text Secondary / Muted:** `#94a3b8` / `slate-400`
* **Brand Highlight / Accent:** 
  * Accent Primary: `#38bdf8` (Electric Sky Cyan - subtle tech glow)
  * Accent Secondary: `#6366f1` (Indigo / Data accent)
  * Success / Active State: `#10b981` (Emerald green indicator for availability)

#### 3.2 Typography
* **Font Family:** `Inter`, `Plus Jakarta Sans`, or `Geist Sans` (Clean, tech-forward sans-serif)
* **Hierarchy:**
  * Hero Title: `text-4xl md:text-6xl font-extrabold tracking-tight`
  * Section Headers: `text-2xl md:text-3xl font-bold`
  * Subheaders & Tags: `text-sm font-semibold uppercase tracking-wider`
  * Body Text: `text-base md:text-lg leading-relaxed text-slate-300`

#### 3.3 UI Components & Interactions
* Sticky, semi-transparent frosted glass Navbar (`backdrop-blur-md bg-zinc-950/75`).
* Responsive Hamburger Drawer for Mobile navigation.
* Smooth scroll navigation with active section highlighting.
* Clean interactive cards with subtle scale/border glow on hover (`transition-all duration-300`).
* Language toggle (ID / EN) switch with persistent state (`localStorage`).

---

### 4. Information Architecture & Navigation Structure

The single-page application (SPA) consists of the following sections:

```
[Sticky Navbar: Logo/Name | Home | About | Skills & Roles | Certificate | Contact | CV Button | ID/EN Toggle]
 │
 ├── 1. Hero Section (Introduction, Quick Stats, CTA Buttons)
 ├── 2. About Me (Bio, Universitas Pelita Bangsa, Career Objective)
 ├── 3. Triple Domain Showcase (Data Analyst | Web Developer | IT Helpdesk)
 ├── 4. Experience & Education Timeline
 ├── 5. Certificates & Credentials (Interactive Grid + Modal Preview)
 ├── 6. Featured Projects (Filterable by Data / Web / IT)
 ├── 7. Contact Section (Direct Message Form, Direct Email/WA links)
 └── Footer (Quick links, Socials, Copyright & Status)
```

---

### 5. Detailed Section Specifications

#### 5.1 Navigation Bar (Header)
* **Position:** Fixed top, full width, `z-50`, frosted glass effect.
* **Left:** Brand logo/initials (`<ALR />` or `Abid Lu'ay`).
* **Center (Desktop):** Links to `#home`, `#about`, `#skills`, `#certificate`, `#contact`.
* **Right Actions:**
  * **Download CV Button:** Icon + "Download CV" (dynamic download based on language or standard PDF).
  * **Language Switcher (Toggle):** Compact badge switch displaying `ID | EN` with active state indicator.
* **Mobile View:**
  * Hamburger menu trigger (`lucide-react: Menu / X`).
  * Full-height slide-over drawer containing all navigation links, CV download, and language switch.

#### 5.2 Hero Section (`#home`)
* **Headline:** 
  * *EN:* "Hi, I'm Abid Lu'ay Raihan Taufik"
  * *ID:* "Halo, Saya Abid Lu'ay Raihan Taufik"
* **Sub-headline (Typewriter/Pill badges):** Data Analyst • Web Developer • IT Helpdesk
* **Brief Pitch:** Bridging data-driven insights, modern web interfaces, and robust IT infrastructure solutions.
* **Call-to-Action (CTA):**
  * Primary: "Contact Me" (Scrolls to `#contact`)
  * Secondary: "View Projects & Certs" (Scrolls to `#certificate` / `#projects`)
* **Badges/Availability:** Pulsing green badge `🟢 Available for Opportunities`.

#### 5.3 About Section (`#about`)
* **Academic Background:** Universitas Pelita Bangsa (Informatics / Computer Science / Related Field).
* **Summary Card:** Multi-disciplinary background combining analytical problem-solving, full-stack software development, and proactive IT operations management.
* **Key Pillars Card Grid:**
  1. **Analytical Thinking:** Transforming complex raw datasets into actionable executive insights.
  2. **Modern Web Engineering:** Building responsive, fast, and accessible digital products.
  3. **Technical Support & Infrastructure:** Troubleshooting hardware/software, network configuration, and SLA management.

#### 5.4 Skills & Domains Section (`#skills`)
Categorized tab or grid layout:
* **Domain 1: Data Analytics**
  * Tools: Python (Pandas, NumPy, Matplotlib), SQL (PostgreSQL, MySQL), Power BI / Tableau, Excel (Advanced).
* **Domain 2: Web Development**
  * Tools: React.js, Next.js, Tailwind CSS, JavaScript/TypeScript, Node.js, RESTful APIs, Git/GitHub.
* **Domain 3: IT Helpdesk & Support**
  * Tools: Troubleshooting (Windows/Linux), LAN/WAN Network Basics, Hardware Maintenance, Remote Desktop Support, Ticket Management.

#### 5.5 Certificates & Achievements Section (`#certificate`)
* **Display Format:** Interactive grid cards with certificate badge, issuer, date, credential ID, and "Verify Credential" link/modal.
* **Filter Tags:** All | Data Analysis | Web Dev | IT & Network.
* **Sample Items:** Professional certifications from Coursera, Dicoding, Google, Cisco, BNSP, or university achievements.

#### 5.6 Contact Section (`#contact`)
* **Left Column (Direct Contact Info):**
  * Email card: `abidluay990@gmail.com` with one-click "Copy to Clipboard" / `mailto:`.
  * WhatsApp / Phone card: `0895377864560` with direct WhatsApp API link (`https://wa.me/62895377864560`).
  * LinkedIn profile link button with icon.
  * Location / Campus: Universitas Pelita Bangsa / Cikarang / Bekasi / Greater Jakarta.
* **Right Column (Interactive Contact Form):**
  * Inputs: Name, Email, Subject, Message.
  * Submission: Integrated via EmailJS / Formspree or custom API route.

#### 5.7 Footer
* Compact minimalist footer with copyright notice `© 2026 Abid Lu'ay Raihan Taufik. Built with React & Tailwind CSS.`
* Back-to-top floating button.

---

### 6. Bilingual Localization (i18n) Matrix

| Component Key | Indonesian (ID) | English (EN) |
|---|---|---|
| `nav.home` | Beranda | Home |
| `nav.about` | Tentang Saya | About |
| `nav.skills` | Keahlian | Skills |
| `nav.certificate` | Sertifikat | Certificates |
| `nav.contact` | Kontak | Contact |
| `nav.cv` | Unduh CV | Download CV |
| `hero.role` | Data Analyst • Web Developer • IT Helpdesk | Data Analyst • Web Developer • IT Helpdesk |
| `hero.cta_contact` | Hubungi Saya | Get in Touch |
| `hero.cta_work` | Lihat Portofolio | View Portfolio |
| `about.title` | Tentang Saya | About Me |
| `about.univ` | Mahasiswa / Lulusan Universitas Pelita Bangsa | Student / Graduate at Universitas Pelita Bangsa |
| `cert.view` | Lihat Sertifikat | View Credential |
| `contact.title` | Mari Terhubung | Let's Connect |
| `contact.subtitle` | Terbuka untuk peluang kerja full-time, freelance, dan kolaborasi. | Open for full-time roles, freelance projects, and collaborations. |

---

### 7. Technical Architecture & Implementation Details

#### 7.1 Recommended Directory Structure (React + Tailwind)
```
portfolio-abid/
├── public/
│   ├── assets/
│   │   ├── cv-id.pdf
│   │   ├── cv-en.pdf
│   │   └── certs/
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── MobileDrawer.jsx
│   │   ├── LanguageToggle.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Certificates.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── context/
│   │   └── LanguageContext.jsx
│   ├── data/
│   │   ├── content.json / translations.js
│   │   ├── certificates.js
│   │   └── projects.js
│   ├── styles/
│   │   └── globals.css
│   ├── App.jsx
│   └── main.jsx
├── tailwind.config.js
├── package.json
└── README.md
```

#### 7.2 Tailwind CSS Configuration Excerpt
```javascript
// tailwind.config.js
module.exports = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        darkBg: '#090a0f',
        cardBg: '#12131a',
        cardBorder: '#1e202e',
        accentCyan: '#38bdf8',
        accentIndigo: '#6366f1'
      }
    }
  },
  plugins: []
}
```

---

### 8. Non-Functional Requirements (NFR)
1. **Responsiveness:** 100% fluid across Mobile (320px - 480px), Tablet (768px - 1024px), and Desktop (>1024px, 1440px).
2. **Performance:** Google Lighthouse score > 90 across Performance, Accessibility, Best Practices, and SEO.
3. **Accessibility (a11y):** WCAG AA compliance with clear focus rings, semantic HTML (`<nav>`, `<main>`, `<section>`, `<footer>`), and descriptive `aria-label` tags.
4. **Fast Load Times:** Optimized SVG icons and WebP formatted certificate images.

---

### 9. Delivery Milestones & Checklist
- [x] Phase 1: PRD Specification & Architecture Design
- [ ] Phase 2: Project Setup (Vite + React + Tailwind CSS + Lucide Icons)
- [ ] Phase 3: Implement Bilingual Context (`LanguageContext`)
- [ ] Phase 4: Build Core Components (Navbar, Hero, About, Skills, Certs, Contact)
- [ ] Phase 5: Integrate CV Download & WhatsApp/Email links
- [ ] Phase 6: Responsive & Cross-Browser Testing
- [ ] Phase 7: Deployment (Vercel / Netlify / GitHub Pages)