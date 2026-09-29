# Wakisha Electrical Engineering & Sales Services - Official Website

A Next.js (App Router) website built from the official company profile and presentation guide for **Wakisha Electrical Engineering & Sales Services**.

## Overview & Architecture

The website is designed and structured according to the **Platform Map** provided in the guide:

- **Homepage (`/`)**:
  - Hero section featuring the company tagline, trust badges, and creative engineering visuals.
  - Nationwide regional presence banner (Nairobi Headquarters, Coast, Western, Central, and Eastern regions).
  - Quick statistics strip (Founded in 2017, 4+ regions, 100% compliance rate, 24/7 emergency response).
  - Core introduction and mission/vision overview.
  - Featured engineering & management services catalog.
  - **Why Work With Us**: The 4 proven pillars (Reliability, Efficiency, Communication, Scalability) with direct engineering Q&As.
  - **Complete Projects Showcase**: Real-world field executions (Utawala Solar, Wajir Electric Fence, Hayat Hotel, Erita Jewellery).
  - **Client Testimonials**: Authentic client reviews regarding circuit optimization, substation delivery, and turnkey execution.
  - High-impact call-to-action banner: *"Let's Maximize Your System's Power Transmission and Load Capacity Together"*.

- **About Us (`/about`)**:
  - Detailed company foundation and Nairobi headquarters overview.
  - Regional operational hubs across Kenya (Coast, Western, Central, and Eastern).
  - Corporate Mission, Vision, and Core Values.
  - Compliance with international engineering standards:
    - **FIDIC Engineer** contractual administration.
    - **Austrian Construction Work Coordination Act (BauKG)** health and safety planning.
    - Systematic circuit optimization to eliminate power loss.

- **Services Offered (`/services`)**:
  - Comprehensive service specifications:
    1. Project Management & Owner's Representative Services
    2. Project Control & Site Supervision
    3. Project Monitoring, Construction Monitoring & Bank Auditing
    4. Solar PV & Renewable Energy Systems (Commercial, Industrial & Residential)
    5. High-Security Electric Fencing & Perimeter Protection
    6. Smart Home & Building Automation
    7. Commercial & Architectural Lighting Engineering
    8. Master Planning, BOQ Cost Planning & Progress Control
    9. Technical Due Diligence & Forensic Electrical Audits
    10. FIDIC Engineering & BauKG Health & Safety Planning
    11. Expert Opinions & Construction Economics Consulting

- **Complete Projects (`/projects`)**:
  - Detailed case studies with actual project imagery extracted from the guide:
    - **Utawala Solar Projects** (Rooftop Photovoltaic arrays, hybrid inverters & battery backup).
    - **Wajir High-Security Electric Fence** (Perimeter defense in extreme arid climates with solar energizers).
    - **Hayat Hotel Erita** (Luxury architectural lighting, staircase illumination & hotel suites).
    - **Erita Jewellery West Gate** (High-CRI retail track lighting & precision display cases at Westgate Mall).
    - **Smart Kitchen & Interior Automation** (Concealed task lighting & residential automated load control).
  - Category filtering tabs and site inspection photo gallery.

- **Contact & Consultations (`/contact`)**:
  - Direct contact coordinates:
    - **Phone**: `+254 721270075` (click-to-call & WhatsApp integration)
    - **Email**: `wakisha4@gmail.com`
    - **Website**: `www.wakishaelectricalengineering.com`
    - **Headquarters**: Nairobi, Kenya
  - Interactive, accessible Consultation & Quote Request form.
  - Frequently Asked Questions (FAQs) covering testing guarantees, cost savings, communication, and system scalability.

---

## SEO: robots.txt & sitemap.xml

As specified, both search engine indexing files are provided with Next.js App Router metadata generators and static fallbacks:

- **`robots.txt`**:
  - Generated via `src/app/robots.ts` and available at [`/robots.txt`](file:///public/robots.txt).
  - Conforms to standard robot exclusion protocols and declares the XML sitemap location.
- **`sitemap.xml`**:
  - Generated via `src/app/sitemap.ts` and available at [`/sitemap.xml`](file:///public/sitemap.xml).
  - Pre-indexes all primary routes (`/`, `/about`, `/services`, `/projects`, `/contact`) with change frequencies and priority rankings.

---

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Icons**: Lucide React
- **Assets**: Extracted high-resolution authentic imagery and brand vector logo

---

## Getting Started

### Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build & Run
```bash
npm run build
npm run start
```
