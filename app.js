/**
 * LIFEART PORTFOLIO — "THE TACTILE ATELIER"
 * Interactive Portfolio Engine (Mobile-First, Zero Dependencies)
 */

const PROJECTS = [
  {
    id: '01',
    title: 'Kanso Architectural Audio',
    category: 'Product',
    year: '2026',
    client: 'Kanso Acoustics (Tokyo / Zurich)',
    role: 'Design Direction & Frontend Architecture',
    impact: '+68% Mobile Engagement',
    featured: true,
    gradient: 'linear-gradient(135deg, #2E211C 0%, #7C422B 58%, #C87353 100%)',
    svgPattern: `
      <circle cx="82%" cy="48%" r="120" stroke="white" stroke-width="1" fill="none" />
      <circle cx="82%" cy="48%" r="80" stroke="white" stroke-width="0.75" stroke-dasharray="5 5" fill="none" />
      <circle cx="82%" cy="48%" r="40" stroke="white" stroke-width="1.2" fill="none" />
      <path d="M 20 190 Q 220 40 480 180" stroke="white" stroke-width="1" fill="none" />
    `,
    summary: 'Tactile spatial audio controller and flagship e-commerce monograph engineered for one-handed mobile exploration.',
    challenge: 'High-end acoustic hardware brands routinely rely on 40MB desktop WebGL scenes that overheat mobile devices, resulting in high bounce rates and buried acoustic specifications.',
    solution: 'Replaced heavy 3D embeds with a 60fps touch-responsive radial frequency dial, progressive spec sheets, and an editorial hardware gallery that loads in 0.4 seconds on 4G connections.',
    deliverables: ['Mobile-First Design System', 'Spatial Audio UI', 'Bespoke E-Commerce Flow', 'Interactive Spec Sheet']
  },
  {
    id: '02',
    title: 'Vespera Botanical Apothecary',
    category: 'Brand',
    year: '2025',
    client: 'Vespera Labs (Copenhagen)',
    role: 'Brand Identity & Digital Flagship',
    impact: '3.2× Direct Checkout Rate',
    featured: false,
    gradient: 'linear-gradient(135deg, #17271E 0%, #2F5740 58%, #689377 100%)',
    svgPattern: `
      <rect x="65%" y="18%" width="140" height="140" rx="70" stroke="white" stroke-width="1" fill="none" />
      <line x1="10%" y1="80%" x2="90%" y2="20%" stroke="white" stroke-width="0.8" stroke-dasharray="4 4" />
      <circle cx="72%" cy="52%" r="36" stroke="white" stroke-width="1" fill="none" />
    `,
    summary: 'Sensory digital flagship with an interactive slide-up formulation diagnostics drawer.',
    challenge: 'Translating the calm, tactile ritual of an in-person botanical consultation into a mobile browser without multi-page quiz fatigue.',
    solution: 'Crafted a warm parchment editorial catalog paired with a zero-reload slide-up Regimen Builder that lets visitors diagnose skin needs and assemble custom kits in three thumb taps.',
    deliverables: ['Visual Identity & Packaging', 'Editorial Art Direction', 'Slide-Up Regimen Builder', 'Shopify Headless UI']
  },
  {
    id: '03',
    title: 'Aether Autonomous Treasury',
    category: 'Creative Dev',
    year: '2025',
    client: 'Aether Protocol (New York)',
    role: 'Principal Product Designer',
    impact: 'Awwwards SOTD & +49% Activation',
    featured: false,
    gradient: 'linear-gradient(135deg, #171D26 0%, #30415B 58%, #647D9E 100%)',
    svgPattern: `
      <path d="M 40 160 L 140 90 L 230 125 L 340 45 L 440 70" stroke="white" stroke-width="1.5" fill="none" />
      <line x1="140" y1="90" x2="140" y2="220" stroke="white" stroke-width="0.6" stroke-dasharray="3 3" />
      <line x1="340" y1="45" x2="340" y2="220" stroke="white" stroke-width="0.6" stroke-dasharray="3 3" />
    `,
    summary: 'Institutional wealth telemetry distilled into calm, high-precision editorial cards.',
    challenge: 'Financial treasury platforms overwhelm mobile executives with dense 14-column spreadsheets and microscopic tap targets.',
    solution: 'Re-architected complex liquidity metrics into progressive-disclosure cards, natural-language executive briefs, and one-tap approval workflows.',
    deliverables: ['Product Architecture', 'Mobile Telemetry Cards', 'Design Tokens', 'React / TypeScript Kit']
  },
  {
    id: '04',
    title: 'Mono Type Foundry & Specimen',
    category: 'Creative Dev',
    year: '2025',
    client: 'Mono Type Collective (Berlin)',
    role: 'Creative Technologist & Lead Designer',
    impact: '18,000+ Designer Bookmarks',
    featured: false,
    gradient: 'linear-gradient(135deg, #252321 0%, #4E4943 58%, #857D74 100%)',
    svgPattern: `
      <text x="62%" y="68%" fill="white" font-family="Georgia, serif" font-style="italic" font-size="140" opacity="0.55">Aa</text>
      <line x1="0" y1="70%" x2="100%" y2="70%" stroke="white" stroke-width="0.75" stroke-dasharray="4 4" />
    `,
    summary: 'Kinetic variable font playground engineered specifically for mobile touch gestures.',
    challenge: 'Digital type specimens are almost exclusively built for desktop mice and wide studio monitors, leaving mobile visitors with static text.',
    solution: 'Built a touch-velocity variable axis scrubber that lets designers test optical size, weight, and italic slant with natural two-finger gestures and instant licensing checkout.',
    deliverables: ['Variable Font Engine', 'Touch Gesture UI', 'Specimen Monograph', 'Custom Checkout']
  },
  {
    id: '05',
    title: 'Solstice Architectural Pavilion',
    category: 'Spatial',
    year: '2024',
    client: 'Nordic Biennale (Oslo)',
    role: 'Exhibition & Digital Companion Lead',
    impact: '94% Visitor Companion Adoption',
    featured: false,
    gradient: 'linear-gradient(135deg, #2B2118 0%, #6E4F35 58%, #B58B63 100%)',
    svgPattern: `
      <polygon points="280,25 390,195 170,195" stroke="white" stroke-width="1.1" fill="none" />
      <circle cx="280" cy="135" r="45" stroke="white" stroke-width="0.8" fill="none" />
    `,
    summary: 'Location-aware architectural audio guide and spatial exhibition archive.',
    challenge: 'Museum visitors hate downloading 150MB native apps at the entrance just to read curator notes and listen to spatial commentary.',
    solution: 'Created an instant-loading progressive web monograph triggered via NFC plaques, complete with offline audio caching and architectural blueprints.',
    deliverables: ['NFC Web App', 'Spatial Audio Player', 'Exhibition Wayfinding', 'Print & Digital Identity']
  },
  {
    id: '06',
    title: 'Lumina Editorial Reader',
    category: 'Product',
    year: '2024',
    client: 'Lumina Press (London)',
    role: 'Founding Product Designer',
    impact: '4.9★ App Store • 42m Avg Session',
    featured: false,
    gradient: 'linear-gradient(135deg, #211C27 0%, #4B3B5C 58%, #836C99 100%)',
    svgPattern: `
      <rect x="64%" y="20%" width="110" height="150" stroke="white" stroke-width="1" fill="none" />
      <rect x="68%" y="26%" width="110" height="150" stroke="white" stroke-width="0.75" fill="none" />
    `,
    summary: 'Distraction-free longform reading environment with tactile margin annotations.',
    challenge: 'Digital reading apps either mimic skeuomorphic page curls poorly or strip away all editorial warmth into sterile text walls.',
    solution: 'Designed an adaptive typographic rhythm engine with ambient paper tone shifts, thumb-zone footnote peeks, and shareable quote cards.',
    deliverables: ['Reading Engine UX', 'Adaptive Typography', 'Design System', 'iOS & Web Prototype']
  }
];

const THEMES = ['atelier', 'obsidian', 'botanical'];
const THEME_LABELS = {
  atelier: 'Warm Atelier',
  obsidian: 'Obsidian Dark',
  botanical: 'Botanical Sage'
};

let state = {
  filter: 'all',
  viewMode: 'gallery', // 'gallery' | 'index'
  theme: localStorage.getItem('lifeart_theme') || 'atelier',
  activeCaseIndex: 0,
  selectedScope: 'Flagship Web & Brand',
  selectedTimeline: 'Q4 / Immediate'
};

/* --------------------------------------------------------------------------
   1. RENDER PROJECTS (CARDS & INDEX VIEWS)
   -------------------------------------------------------------------------- */
function renderProjects() {
  const galleryEl = document.getElementById('projects-gallery');
  const indexEl = document.getElementById('projects-index');
  if (!galleryEl || !indexEl) return;

  const filtered = state.filter === 'all'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === state.filter);

  // Render Gallery Cards
  galleryEl.innerHTML = filtered.map((project) => {
    const originalIdx = PROJECTS.indexOf(project);
    const spanClass = (project.featured && state.filter === 'all') ? 'featured-span' : '';
    return `
      <article
        class="project-card ${spanClass}"
        tabindex="0"
        role="button"
        aria-label="Open case study for ${project.title}"
        onclick="openCaseStudy(${originalIdx})"
        onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();openCaseStudy(${originalIdx});}"
      >
        <div class="project-card-header font-mono">
          <span>${project.id} — ${project.category.toUpperCase()}</span>
          <span>${project.client} • ${project.year}</span>
        </div>
        <div class="project-card-body">
          <div class="project-visual" style="background: ${project.gradient};">
            <svg class="project-visual-art" viewBox="0 0 500 240" preserveAspectRatio="xMidYMid slice">
              ${project.svgPattern}
            </svg>
            <div class="project-visual-top font-mono">
              <span>${project.role}</span>
              <span class="project-impact-badge">${project.impact}</span>
            </div>
            <h3 class="project-visual-title font-serif italic">${project.title}</h3>
          </div>
          <div class="project-footer">
            <p class="project-summary">${project.summary}</p>
            <span class="project-cta font-mono">Case Study →</span>
          </div>
        </div>
      </article>
    `;
  }).join('');

  // Render Editorial Index Rows
  indexEl.innerHTML = filtered.map((project) => {
    const originalIdx = PROJECTS.indexOf(project);
    return `
      <div
        class="index-row"
        tabindex="0"
        role="button"
        aria-label="Inspect case study for ${project.title}"
        onclick="openCaseStudy(${originalIdx})"
        onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();openCaseStudy(${originalIdx});}"
      >
        <span class="index-num font-mono">${project.id}</span>
        <div>
          <div class="index-title font-serif">${project.title}</div>
          <div class="font-mono" style="font-size: 0.75rem; color: var(--ink-muted);">${project.client}</div>
        </div>
        <div class="index-role">${project.role}</div>
        <div class="index-impact font-mono">${project.impact}</div>
        <div class="index-year font-mono">${project.year} ↗</div>
      </div>
    `;
  }).join('');
}

/* --------------------------------------------------------------------------
   2. FILTER & VIEW SWITCHERS
   -------------------------------------------------------------------------- */
function setFilter(category) {
  state.filter = category;
  document.querySelectorAll('.filter-pill').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.filter === category);
  });
  renderProjects();
}

function setViewMode(mode) {
  state.viewMode = mode;
  const galleryEl = document.getElementById('projects-gallery');
  const indexEl = document.getElementById('projects-index');
  const btnGallery = document.getElementById('btn-view-gallery');
  const btnIndex = document.getElementById('btn-view-index');

  if (mode === 'gallery') {
    galleryEl.classList.remove('hidden');
    indexEl.classList.add('hidden');
    btnGallery.classList.add('active');
    btnIndex.classList.remove('active');
  } else {
    galleryEl.classList.add('hidden');
    indexEl.classList.remove('hidden');
    btnIndex.classList.add('active');
    btnGallery.classList.remove('active');
  }
}

/* --------------------------------------------------------------------------
   3. SLIDE-UP CASE STUDY DRAWER
   -------------------------------------------------------------------------- */
function openCaseStudy(index) {
  state.activeCaseIndex = index;
  const p = PROJECTS[index];
  if (!p) return;

  document.getElementById('drawer-meta-index').textContent = `ARCHIVE ${p.id} / 0${PROJECTS.length} — ${p.category.toUpperCase()}`;
  document.getElementById('drawer-title').textContent = p.title;
  document.getElementById('drawer-subtitle').textContent = p.summary;

  const banner = document.getElementById('drawer-banner');
  banner.style.background = p.gradient;

  document.getElementById('drawer-client').textContent = p.client;
  document.getElementById('drawer-role').textContent = p.role;
  document.getElementById('drawer-year').textContent = p.year;
  document.getElementById('drawer-impact').textContent = p.impact;

  document.getElementById('drawer-challenge').textContent = p.challenge;
  document.getElementById('drawer-solution').textContent = p.solution;

  const delivContainer = document.getElementById('drawer-deliverables');
  delivContainer.innerHTML = p.deliverables
    .map(d => `<span class="deliverable-tag font-mono">${d}</span>`)
    .join('');

  const backdrop = document.getElementById('case-study-drawer');
  backdrop.classList.add('open');
  backdrop.setAttribute('aria-hidden', 'false');
  document.body.classList.add('drawer-open');
}

function closeCaseStudy() {
  const backdrop = document.getElementById('case-study-drawer');
  if (!backdrop) return;
  backdrop.classList.remove('open');
  backdrop.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('drawer-open');
}

function navigateCaseStudy(direction) {
  const nextIndex = (state.activeCaseIndex + direction + PROJECTS.length) % PROJECTS.length;
  openCaseStudy(nextIndex);
}

/* --------------------------------------------------------------------------
   4. THEME ENGINE (WARM ATELIER / OBSIDIAN / BOTANICAL)
   -------------------------------------------------------------------------- */
function applyTheme(themeName) {
  if (!THEMES.includes(themeName)) themeName = 'atelier';
  state.theme = themeName;
  document.documentElement.setAttribute('data-theme', themeName);
  localStorage.setItem('lifeart_theme', themeName);

  const labelEl = document.getElementById('dock-theme-label');
  if (labelEl) {
    labelEl.textContent = THEME_LABELS[themeName];
  }
}

function cycleTheme() {
  const nextIdx = (THEMES.indexOf(state.theme) + 1) % THEMES.length;
  applyTheme(THEMES[nextIdx]);
}

function toggleBlueprintGrid() {
  document.body.classList.toggle('show-blueprint');
  const btn = document.getElementById('grid-toggle-btn');
  if (btn) {
    const active = document.body.classList.contains('show-blueprint');
    btn.setAttribute('aria-pressed', String(active));
    btn.style.borderColor = active ? 'var(--accent)' : '';
  }
}

/* --------------------------------------------------------------------------
   5. INTERACTIVE INQUIRY COMPOSER & ONE-TAP COPY
   -------------------------------------------------------------------------- */
function selectInquiryOption(type, value, btnEl) {
  if (type === 'scope') {
    state.selectedScope = value;
    document.querySelectorAll('[data-scope]').forEach(el => el.classList.remove('selected'));
  } else if (type === 'timeline') {
    state.selectedTimeline = value;
    document.querySelectorAll('[data-timeline]').forEach(el => el.classList.remove('selected'));
  }
  btnEl.classList.add('selected');
  updateComposedPreview();
}

function updateComposedPreview() {
  const preview = document.getElementById('inquiry-preview');
  const mailLink = document.getElementById('mailto-direct-link');
  if (!preview) return;

  const subject = encodeURIComponent(`LifeArt Inquiry: ${state.selectedScope} (${state.selectedTimeline})`);
  const bodyText = `Hi LifeArt Studio — We're interested in collaborating on a ${state.selectedScope} engagement targeting ${state.selectedTimeline}.`;
  preview.textContent = `"${bodyText}"`;

  if (mailLink) {
    mailLink.href = `mailto:hello@lifeart.studio?subject=${subject}&body=${encodeURIComponent(bodyText)}`;
  }
}

function copyStudioEmail() {
  const email = 'hello@lifeart.studio';
  const badge = document.getElementById('copy-status-badge');

  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(email).catch(() => {});
  }

  if (badge) {
    const original = badge.textContent;
    badge.textContent = '✓ Copied hello@lifeart.studio';
    setTimeout(() => {
      badge.textContent = original;
    }, 2400);
  }
}

/* --------------------------------------------------------------------------
   6. LIVE STUDIO CLOCK & SCROLL SPY
   -------------------------------------------------------------------------- */
function updateLiveClock() {
  const clockEl = document.getElementById('studio-clock');
  if (!clockEl) return;
  const now = new Date();
  const timeStr = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false });
  clockEl.textContent = `LOCAL • ${timeStr}`;
}

function initScrollSpy() {
  const sections = ['hero', 'work', 'craft', 'story', 'contact'];
  const dockLinks = document.querySelectorAll('.dock-link[data-section]');

  window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY + 240;
    let current = 'hero';
    for (const id of sections) {
      const el = document.getElementById(id);
      if (el && el.offsetTop <= scrollPos) {
        current = id;
      }
    }
    dockLinks.forEach(link => {
      link.classList.toggle('active', link.dataset.section === current);
    });
  }, { passive: true });
}

/* --------------------------------------------------------------------------
   7. INITIALIZATION & KEYBOARD SHORTCUTS
   -------------------------------------------------------------------------- */
document.addEventListener('DOMContentLoaded', () => {
  applyTheme(state.theme);
  renderProjects();
  updateComposedPreview();
  updateLiveClock();
  setInterval(updateLiveClock, 30000);
  initScrollSpy();

  // Keyboard shortcuts for Case Study Drawer & Grid Toggle
  document.addEventListener('keydown', (e) => {
    const drawerOpen = document.body.classList.contains('drawer-open');
    if (drawerOpen) {
      if (e.key === 'Escape') closeCaseStudy();
      if (e.key === 'ArrowRight') navigateCaseStudy(1);
      if (e.key === 'ArrowLeft') navigateCaseStudy(-1);
    } else if (e.key.toLowerCase() === 'g' && !['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) {
      toggleBlueprintGrid();
    }
  });
});

