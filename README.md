# Lifeart Business Services Pvt. Ltd. — The Executive Identity

A complete, responsive corporate portfolio website built strictly according to the approved **Design 01: The Executive Identity** specification.

## 01. Visual & Architectural Identity
- **Approved Palette:**
  - Forest Green: `#142C26` (Primary dark anchor, dark hero/CTA/footer surfaces)
  - Warm Ivory: `#F3F0E8` (Primary light page background & content sections)
  - Champagne: `#C3AA7B` (Fine borders, subtle accents, and restrained hover details)
  - Charcoal: `#242522` (High-contrast, readable primary text on light surfaces)
  - Muted Text: `#68716C`
  - Pale Green: `#E8EEE9` (Subtle tinted panels)
- **Approved Typography:**
  - Display / Editorial: `Cormorant Garamond` (Hero statement, major section headings)
  - Interface / Body: `DM Sans` (Navigation, paragraphs, forms, utility labels)
- **Compositional Direction:** Asymmetric editorial layouts, documentary business photography, numbered editorial lists, fine rules, and zero decorative icon bloat or neon artifacts.

## 02. Implemented Information Architecture
- **Home (`/`)**: Dark forest-green hero with editorial serif statement, company introduction split, numbered practice areas, 4-step approach, verified case studies, and closing executive CTA.
- **About Us (`/about`)**: Company background, corporate purpose, partnership philosophy, and verified corporate facts.
- **Services (`/services`)**: Numbered service catalog with target audience descriptors and directional scope inspection links.
- **Service Detail (`/services/[slug]`)**: Value statement, business challenge addressed, target audience, and bulleted deliverables.
- **Our Work (`/work`)**: Portfolio index of client engagements with verified outcomes.
- **Project Detail (`/work/[slug]`)**: Case study context, problem, approach, deliverables, and substantiated metrics.
- **Contact (`/contact`)**: Headquarters address, office hours, official corporate email, and an accessible contact form with client-side validation and status feedback.
- **Privacy Policy (`/privacy`)** & **Terms (`/terms`)**: Approved governance and confidentiality disclaimers.

## 03. Central Content Layer
All company facts, service offerings, case studies, and contact details are centralized in:
- `src/content/company.js`

To update company information, edit this central file without altering layout components.

## 04. Local Development & Production Build
```bash
# Install dependencies
npm install

# Run local development server
npm run dev

# Build production bundle
npm run build
```

## 05. Verification & QA Status
- **Build**: Successfully compiles production assets with zero errors (`npm run build`).
- **Responsive Matrix**: Optimized for 390px (mobile), 768px (tablet), and 1440px (desktop).
- **Accessibility**: Full semantic HTML5 landmarks, visible focus states, and compliant contrast ratios across Ivory and Forest Green surfaces.

