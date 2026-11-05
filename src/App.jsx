import React, { useState, useEffect } from 'react';
import { ArrowRight, CheckCircle2, Phone, Mail, MapPin, Clock, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import '../executive.css';
import SiteHeader from './components/SiteHeader';
import SiteFooter from './components/SiteFooter';
import ContactForm from './components/ContactForm';
import EditorialPreloader from './components/EditorialPreloader';
import InteractiveProductMatrix from './components/InteractiveProductMatrix';
import OperationalRoiSimulator from './components/OperationalRoiSimulator';
import EditorialTopologyCanvas from './components/EditorialTopologyCanvas';
import EditorialMarquee from './components/EditorialMarquee';
import ErpCatalogGrid from './components/ErpCatalogGrid';
import ConsultancyAndFaqSection from './components/ConsultancyAndFaqSection';
import {
  COMPANY,
  HERO_SLIDES,
  ERP_SYSTEMS,
  SERVICES,
  PROJECTS,
  APPROACH_STEPS,
  DIFFERENTIATORS
} from './content/company';

export default function App() {
  const [loadingComplete, setLoadingComplete] = useState(false);
  const [activeRoute, setActiveRoute] = useState('home');
  const [activeServiceSlug, setActiveServiceSlug] = useState(null);
  const [activeProjectSlug, setActiveProjectSlug] = useState(null);
  const [inquiryPrefill, setInquiryPrefill] = useState('');
  const [heroSlideIdx, setHeroSlideIdx] = useState(0);
  const [routeTransitioning, setRouteTransitioning] = useState(false);

  // Auto-advance the Hero 01 / 02 / 03 slide switcher (inspired by lifeartgroup.in)
  useEffect(() => {
    if (activeRoute !== 'home') return undefined;
    const interval = setInterval(() => {
      setHeroSlideIdx((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6500);
    return () => clearInterval(interval);
  }, [activeRoute]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeRoute, activeServiceSlug, activeProjectSlug]);

  const handleNavigate = (route, slug = null) => {
    setRouteTransitioning(true);
    setActiveRoute(route);
    if (route === 'service-detail') setActiveServiceSlug(slug);
    if (route === 'project-detail') setActiveProjectSlug(slug);
    setTimeout(() => {
      setRouteTransitioning(false);
    }, 360);
  };

  const handleSimulatorInquire = (brief) => {
    setInquiryPrefill(brief);
    handleNavigate('contact');
  };

  const currentService = SERVICES.find((s) => s.slug === activeServiceSlug) || SERVICES[0];
  const currentProject = PROJECTS.find((p) => p.slug === activeProjectSlug) || PROJECTS[0];
  const currentHeroSlide = HERO_SLIDES[heroSlideIdx] || HERO_SLIDES[0];

  return (
    <div className="executive-app">
      {/* Dynamic Element 01: Initial Preloader Animation */}
      <AnimatePresence>
        {!loadingComplete && (
          <EditorialPreloader onComplete={() => setLoadingComplete(true)} />
        )}
      </AnimatePresence>

      {/* Top Route Transition Loading Bar */}
      <AnimatePresence>
        {routeTransitioning && (
          <motion.div
            initial={{ scaleX: 0, opacity: 1 }}
            animate={{ scaleX: 1, opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="route-loading-bar"
          />
        )}
      </AnimatePresence>

      {/* 01. Global Header */}
      <SiteHeader activeRoute={activeRoute} onNavigate={handleNavigate} />

      {/* ROUTE 01: HOME PAGE */}
      {activeRoute === 'home' && (
        <main>
          {/* Hero Section: Dark Forest Green Anchor with Interactive 01 / 02 / 03 Slide Switcher */}
          <section className="hero-editorial-section" aria-labelledby="hero-heading">
            <div className="executive-container">
              <div className="hero-editorial-grid">
                <div>
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentHeroSlide.index}
                      initial={{ opacity: 0, y: 18 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -14 }}
                      transition={{ duration: 0.45 }}
                    >
                      <div className="editorial-eyebrow">
                        <span>{currentHeroSlide.eyebrow}</span>
                      </div>
                      <h1 id="hero-heading" className="hero-large-serif-headline font-serif">
                        {currentHeroSlide.headlinePrefix}{' '}
                        <em>{currentHeroSlide.headlineHighlight}</em>
                      </h1>
                      <p className="hero-supporting-prose">
                        {currentHeroSlide.description}
                      </p>
                      <div className="hero-btn-row">
                        <button
                          onClick={() => handleNavigate(currentHeroSlide.primaryCta.route)}
                          className="btn-executive-primary"
                        >
                          <span>{currentHeroSlide.primaryCta.label}</span>
                          <ArrowRight size={15} />
                        </button>
                        <button
                          onClick={() => handleNavigate('contact')}
                          className="btn-executive-outline"
                        >
                          <span>Discuss Engagement</span>
                        </button>
                      </div>
                    </motion.div>
                  </AnimatePresence>

                  {/* Interactive 01 / 02 / 03 Hero Slide Switcher (from lifeartgroup.in) */}
                  <div className="hero-slide-switcher" role="tablist" aria-label="Hero Highlights">
                    {HERO_SLIDES.map((slide, idx) => {
                      const isActive = idx === heroSlideIdx;
                      return (
                        <button
                          key={slide.index}
                          type="button"
                          role="tab"
                          aria-selected={isActive}
                          onClick={() => setHeroSlideIdx(idx)}
                          className={`hero-slide-tab ${isActive ? 'active' : ''}`}
                        >
                          <div className="hero-slide-tab-top">
                            <span className="font-serif hero-slide-num">{slide.index}</span>
                            <span className="hero-slide-metric">{slide.metricValue}</span>
                          </div>
                          <span className="hero-slide-label">{slide.metricLabel}</span>
                          <div className="hero-slide-progress-track">
                            {isActive && (
                              <motion.div
                                key={`bar-${heroSlideIdx}`}
                                initial={{ width: '0%' }}
                                animate={{ width: '100%' }}
                                transition={{ duration: 6.5, ease: 'linear' }}
                                className="hero-slide-progress-fill"
                              />
                            )}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Hero Visual Frame + Dynamic Topology Canvas */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                >
                  <div className="hero-visual-frame">
                    <AnimatePresence mode="wait">
                      <motion.img
                        key={currentHeroSlide.image}
                        src={currentHeroSlide.image}
                        alt={currentHeroSlide.caption}
                        className="hero-visual-image"
                        initial={{ opacity: 0.35, scale: 1.03 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0.35 }}
                        transition={{ duration: 0.5 }}
                        loading="eager"
                      />
                    </AnimatePresence>
                    <div
                      style={{
                        padding: '0.65rem 0.25rem 0.15rem',
                        display: 'flex',
                        justifyContent: 'space-between',
                        fontSize: '0.72rem',
                        color: 'var(--color-champagne)'
                      }}
                    >
                      <span>{currentHeroSlide.caption}</span>
                      <span>SLIDE {currentHeroSlide.index} / 03</span>
                    </div>
                  </div>

                  {/* Dynamic Element 02: Interactive Global Shared Services Topology Canvas */}
                  <EditorialTopologyCanvas />
                </motion.div>
              </div>
            </div>
          </section>

          {/* Dynamic Element 03: Kinetic Editorial Marquee Ribbon (inspired by lifeartgroup.in) */}
          <EditorialMarquee
            variant="dark"
            onSelectServices={() => handleNavigate('services')}
          />

          {/* Section 01: Company Introduction Split */}
          <section className="editorial-section">
            <div className="executive-container">
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                  gap: '2.5rem',
                  alignItems: 'center'
                }}
              >
                <div>
                  <span className="editorial-eyebrow-dark">01 // THE ORGANISATION</span>
                  <h2
                    className="font-serif"
                    style={{
                      fontSize: 'clamp(2rem, 3.8vw, 3.25rem)',
                      color: 'var(--color-forest)',
                      lineHeight: 1.15,
                      marginBottom: '1.25rem',
                      fontWeight: 600
                    }}
                  >
                    Operational excellence, institutionalized across 12 industry verticals.
                  </h2>
                  <p
                    style={{
                      color: 'var(--color-charcoal)',
                      fontSize: '1rem',
                      lineHeight: 1.65,
                      marginBottom: '1rem'
                    }}
                  >
                    {COMPANY.overview}
                  </p>
                  <p
                    style={{
                      color: 'var(--color-muted)',
                      fontSize: '0.92rem',
                      lineHeight: 1.65,
                      marginBottom: '1.75rem'
                    }}
                  >
                    Whether deploying our Hospital, School, Production, or Boutique ERP platforms—or scaling your team via Resource Augmentation and TeleSales Support—we engineer reliable operational systems.
                  </p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                    <button
                      onClick={() => handleNavigate('about')}
                      className="btn-executive-dark-outline"
                    >
                      <span>Discover Lifeart Group</span>
                      <ArrowRight size={14} />
                    </button>
                    <button
                      onClick={() => handleNavigate('insights')}
                      className="btn-executive-primary"
                    >
                      <span>Consultancy &amp; Insights</span>
                      <ArrowRight size={14} />
                    </button>
                  </div>
                </div>

                <div
                  style={{
                    border: '1px solid var(--color-border)',
                    padding: '0.5rem',
                    backgroundColor: 'var(--color-ivory-surface)'
                  }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=80"
                    alt="Corporate boardroom and structured executive meeting"
                    style={{
                      width: '100%',
                      height: 'clamp(240px, 40vw, 380px)',
                      objectFit: 'cover',
                      display: 'block'
                    }}
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Section 02: All 12 Enterprise ERP & Management Systems (with Category Filter, Shimmer Loader & Load More) */}
          <section
            className="editorial-section"
            style={{
              backgroundColor: 'var(--color-ivory-surface)',
              borderTop: '1px solid var(--color-border)'
            }}
          >
            <div className="executive-container">
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  flexWrap: 'wrap',
                  gap: '1rem',
                  marginBottom: '1rem'
                }}
              >
                <div>
                  <span className="editorial-eyebrow-dark">
                    02 // 12 DEPLOYED ERP &amp; MANAGEMENT PLATFORMS
                  </span>
                  <h2
                    className="font-serif"
                    style={{
                      fontSize: 'clamp(1.85rem, 3.5vw, 3.25rem)',
                      color: 'var(--color-forest)',
                      fontWeight: 600
                    }}
                  >
                    Enterprise Software Suite ({ERP_SYSTEMS.length} Industry Systems)
                  </h2>
                  <p style={{ color: 'var(--color-muted)', fontSize: '0.94rem', marginTop: '0.4rem', maxWidth: '680px' }}>
                    Filter by industry sector, inspect module deliverables, or click &ldquo;Load More ERP Systems&rdquo; to browse all 12 production-ready management solutions from Lifeart Group.
                  </p>
                </div>
                <button
                  onClick={() => handleNavigate('services')}
                  className="btn-executive-dark-outline"
                >
                  <span>Full 12-System Index</span>
                  <ArrowRight size={14} />
                </button>
              </div>

              {/* Dynamic Element 04: Interactive 12-ERP Grid with Shimmer Skeleton Loader & Quick-Spec Drawer */}
              <ErpCatalogGrid
                initialVisibleCount={6}
                onSelectService={(slug) => handleNavigate('service-detail', slug)}
                onInquireSystem={handleSimulatorInquire}
              />

              {/* Dynamic Element 05: Interactive Product Matrix */}
              <InteractiveProductMatrix
                onSelectService={(slug) => handleNavigate('service-detail', slug)}
              />

              {/* Dynamic Element 06: Interactive Value & OpEx Simulator */}
              <OperationalRoiSimulator onInquire={handleSimulatorInquire} />
            </div>
          </section>

          {/* Section 03: Disciplined 4-Step Approach */}
          <section className="editorial-section">
            <div className="executive-container">
              <div style={{ maxWidth: '640px', marginBottom: '2.5rem' }}>
                <span className="editorial-eyebrow-dark">03 // OUR METHODOLOGY</span>
                <h2
                  className="font-serif"
                  style={{
                    fontSize: 'clamp(1.85rem, 3.5vw, 3.25rem)',
                    color: 'var(--color-forest)',
                    fontWeight: 600
                  }}
                >
                  A Disciplined Approach to Long-Term Value
                </h2>
                <p
                  style={{
                    color: 'var(--color-muted)',
                    fontSize: '0.92rem',
                    marginTop: '0.65rem',
                    lineHeight: 1.6
                  }}
                >
                  {COMPANY.approachIntro}
                </p>
              </div>

              <div className="approach-steps-grid">
                {APPROACH_STEPS.map((step) => (
                  <div key={step.step} className="approach-step-card">
                    <div className="approach-step-num font-serif">{step.step}</div>
                    <h3 className="approach-step-title font-serif">{step.title}</h3>
                    <p className="approach-step-desc">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Dynamic Element 07: 3 Consultancy Pillars + Animated Capability Progress Bars + FAQ Accordion */}
          <ConsultancyAndFaqSection onInquire={handleSimulatorInquire} />

          {/* Section 06: Selected Work / Case Studies */}
          <section
            className="editorial-section"
            style={{
              backgroundColor: 'var(--color-ivory)',
              borderTop: '1px solid var(--color-border)'
            }}
          >
            <div className="executive-container">
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  flexWrap: 'wrap',
                  gap: '1rem',
                  marginBottom: '2.5rem'
                }}
              >
                <div>
                  <span className="editorial-eyebrow-dark">06 // EVIDENCE OF DELIVERY</span>
                  <h2
                    className="font-serif"
                    style={{
                      fontSize: 'clamp(1.85rem, 3.5vw, 3.25rem)',
                      color: 'var(--color-forest)',
                      fontWeight: 600
                    }}
                  >
                    Selected Client Implementations
                  </h2>
                </div>
                <button
                  onClick={() => handleNavigate('work')}
                  className="btn-executive-dark-outline"
                >
                  <span>All Case Studies</span>
                  <ArrowRight size={14} />
                </button>
              </div>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                  gap: '1.75rem'
                }}
              >
                {PROJECTS.map((proj) => (
                  <article
                    key={proj.slug}
                    onClick={() => handleNavigate('project-detail', proj.slug)}
                    className="project-editorial-card"
                    style={{ cursor: 'pointer' }}
                  >
                    <div className="project-card-image-wrap">
                      <img
                        src={proj.coverImage}
                        alt={proj.title}
                        className="project-card-image"
                        loading="lazy"
                      />
                    </div>
                    <div className="project-card-body">
                      <div className="project-card-category">{proj.category}</div>
                      <h3 className="project-card-title font-serif">{proj.title}</h3>
                      <p className="project-card-summary">{proj.summary}</p>
                      <div className="project-card-outcome">
                        Outcome: {proj.outcome}
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* Section 07: Why Lifeart (Verified Differentiators) */}
          <section
            className="editorial-section"
            style={{
              backgroundColor: 'var(--color-ivory-surface)',
              borderTop: '1px solid var(--color-border)'
            }}
          >
            <div className="executive-container">
              <div style={{ maxWidth: '620px', marginBottom: '2.5rem' }}>
                <span className="editorial-eyebrow-dark">07 // PRINCIPLES OF EXCELLENCE</span>
                <h2
                  className="font-serif"
                  style={{
                    fontSize: 'clamp(1.85rem, 3.5vw, 3.25rem)',
                    color: 'var(--color-forest)',
                    fontWeight: 600
                  }}
                >
                  Why Enterprises Choose Lifeart Group
                </h2>
              </div>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                  gap: '2rem',
                  borderTop: '1px solid var(--color-border)',
                  paddingTop: '2rem'
                }}
              >
                {DIFFERENTIATORS.map((d) => (
                  <div key={d.num}>
                    <div
                      className="font-serif"
                      style={{
                        fontSize: '1.5rem',
                        color: 'var(--color-champagne)',
                        marginBottom: '0.4rem'
                      }}
                    >
                      {d.num}
                    </div>
                    <h3
                      className="font-serif"
                      style={{
                        fontSize: '1.25rem',
                        color: 'var(--color-forest)',
                        fontWeight: 600,
                        marginBottom: '0.5rem'
                      }}
                    >
                      {d.heading}
                    </h3>
                    <p
                      style={{
                        color: 'var(--color-muted)',
                        fontSize: '0.88rem',
                        lineHeight: 1.55
                      }}
                    >
                      {d.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Section 08: Closing Executive CTA */}
          <section className="closing-cta-section">
            <div
              className="executive-container text-center"
              style={{ maxWidth: '780px', margin: '0 auto', textAlign: 'center' }}
            >
              <div className="editorial-eyebrow" style={{ justifyContent: 'center' }}>
                <span>INITIATE ENGAGEMENT</span>
              </div>
              <h2
                className="font-serif"
                style={{
                  fontSize: 'clamp(2.1rem, 4vw, 3.85rem)',
                  color: 'var(--color-ivory)',
                  fontWeight: 500,
                  lineHeight: 1.15,
                  marginBottom: '1.25rem'
                }}
              >
                Ready to optimize your business operations?
              </h2>
              <p
                style={{
                  color: 'rgba(243, 240, 232, 0.8)',
                  fontSize: '0.98rem',
                  lineHeight: 1.6,
                  marginBottom: '2rem'
                }}
              >
                Schedule a consultation with Lifeart Group in Trivandrum ({COMPANY.contactPhone}) or online to discuss any of our 12 ERP platforms, software consultancy, resource augmentation, or telesales support.
              </p>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  gap: '0.75rem',
                  flexWrap: 'wrap'
                }}
              >
                <button
                  onClick={() => handleNavigate('contact')}
                  className="btn-executive-primary"
                >
                  <span>Submit an Enquiry</span>
                  <ArrowRight size={15} />
                </button>
                <button
                  onClick={() => handleNavigate('services')}
                  className="btn-executive-outline"
                >
                  <span>Browse All 12 ERP Systems</span>
                </button>
              </div>
            </div>
          </section>
        </main>
      )}

      {/* ROUTE 02: ABOUT US */}
      {activeRoute === 'about' && (
        <main className="editorial-section">
          <div className="executive-container">
            <div style={{ maxWidth: '820px', marginBottom: '3rem' }}>
              <span className="editorial-eyebrow-dark">ABOUT LIFEART GROUP</span>
              <h1
                className="font-serif"
                style={{
                  fontSize: 'clamp(2.4rem, 4.5vw, 4.25rem)',
                  color: 'var(--color-forest)',
                  fontWeight: 500,
                  lineHeight: 1.1,
                  marginBottom: '1.25rem'
                }}
              >
                Built on precision, stewardship, and verified execution.
              </h1>
              <p
                style={{
                  fontSize: '1.05rem',
                  color: 'var(--color-charcoal)',
                  lineHeight: 1.65
                }}
              >
                {COMPANY.legalName} ({COMPANY.brandName}) is headquartered in Trivandrum, Kerala, delivering 12 domain-specialized enterprise ERP platforms, Software &amp; Service Consultancy, Resource Augmentation, and TeleSales Support.
              </p>
            </div>

            <div style={{ marginBottom: '3rem' }}>
              <img
                src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1400&q=80"
                alt="Lifeart Group business operations"
                style={{
                  width: '100%',
                  height: 'clamp(240px, 40vw, 420px)',
                  objectFit: 'cover',
                  display: 'block',
                  border: '1px solid var(--color-border)'
                }}
                loading="lazy"
              />
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '2.5rem',
                marginBottom: '4rem'
              }}
            >
              <div>
                <h3
                  className="font-serif"
                  style={{
                    fontSize: '1.65rem',
                    color: 'var(--color-forest)',
                    marginBottom: '0.75rem',
                    fontWeight: 600
                  }}
                >
                  Corporate Purpose
                </h3>
                <p
                  style={{
                    color: 'var(--color-muted)',
                    fontSize: '0.92rem',
                    lineHeight: 1.65
                  }}
                >
                  Our objective is simple: to make daily business operations reliable, compliant, and cost-efficient. We bridge the gap between high-level management strategy and daily shopfloor, hospital, clinic, retail, hotel, and classroom realities.
                </p>
              </div>

              <div>
                <h3
                  className="font-serif"
                  style={{
                    fontSize: '1.65rem',
                    color: 'var(--color-forest)',
                    marginBottom: '0.75rem',
                    fontWeight: 600
                  }}
                >
                  How We Partner
                </h3>
                <p
                  style={{
                    color: 'var(--color-muted)',
                    fontSize: '0.92rem',
                    lineHeight: 1.65
                  }}
                >
                  We work as an integrated technology and operational arm for our clients. Engagements are governed by transparent service levels with designated technical directors who remain directly accountable for deployment, training, and SLA support.
                </p>
              </div>
            </div>

            <ConsultancyAndFaqSection onInquire={handleSimulatorInquire} />
          </div>
        </main>
      )}

      {/* ROUTE 03: 12 ERP SYSTEMS & SERVICE CATALOG */}
      {activeRoute === 'services' && (
        <main className="editorial-section">
          <div className="executive-container">
            <div style={{ maxWidth: '820px', marginBottom: '2rem' }}>
              <span className="editorial-eyebrow-dark">
                COMPLETE 12-SYSTEM ENTERPRISE CATALOG
              </span>
              <h1
                className="font-serif"
                style={{
                  fontSize: 'clamp(2.4rem, 4.5vw, 4.25rem)',
                  color: 'var(--color-forest)',
                  fontWeight: 500,
                  lineHeight: 1.1,
                  marginBottom: '1.25rem'
                }}
              >
                12 Specialized ERP &amp; Management Systems
              </h1>
              <p
                style={{
                  fontSize: '1.05rem',
                  color: 'var(--color-muted)',
                  lineHeight: 1.65
                }}
              >
                Every Lifeart Group management system is tailored for its vertical with on-site or remote staff training, legacy data migration, and continuous SLA support.
              </p>
            </div>

            {/* Interactive 12-ERP Grid showing all 12 systems */}
            <ErpCatalogGrid
              initialVisibleCount={12}
              onSelectService={(slug) => handleNavigate('service-detail', slug)}
              onInquireSystem={handleSimulatorInquire}
            />

            {/* Editorial Index Table of all 12 Systems */}
            <div style={{ marginTop: '4rem' }}>
              <span className="editorial-eyebrow-dark">INDEX DIRECTORY</span>
              <h2 className="font-serif" style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', color: 'var(--color-forest)', marginBottom: '1.5rem' }}>
                Quick Specification Directory (01 — 12)
              </h2>
              <div className="numbered-editorial-list" style={{ marginBottom: '2rem' }}>
                {SERVICES.map((s) => (
                  <div
                    key={s.slug}
                    onClick={() => handleNavigate('service-detail', s.slug)}
                    className="numbered-editorial-row"
                  >
                    <div className="row-index-num font-serif">{s.number}</div>
                    <div>
                      <div className="row-service-title font-serif">{s.title}</div>
                      <div
                        style={{
                          fontSize: '0.75rem',
                          color: 'var(--color-champagne)',
                          textTransform: 'uppercase',
                          letterSpacing: '0.06em',
                          marginTop: '0.3rem'
                        }}
                      >
                        {s.category} • {s.metrics.speed}
                      </div>
                    </div>
                    <div className="row-service-desc">{s.shortDescription}</div>
                    <div className="row-service-cta">
                      <span>Inspect Scope</span>
                      <ArrowRight size={14} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      )}

      {/* ROUTE 03B: CONSULTANCY & INSIGHTS */}
      {activeRoute === 'insights' && (
        <main>
          <div className="executive-container" style={{ paddingTop: 'clamp(3rem, 5vw, 5rem)' }}>
            <div style={{ maxWidth: '820px' }}>
              <span className="editorial-eyebrow-dark">ADVISORY &amp; GROWTH DESK</span>
              <h1
                className="font-serif"
                style={{
                  fontSize: 'clamp(2.4rem, 4.5vw, 4.25rem)',
                  color: 'var(--color-forest)',
                  fontWeight: 500,
                  lineHeight: 1.1,
                  marginBottom: '1rem'
                }}
              >
                Consultancy Pillars, Resource Scaling &amp; TeleSales
              </h1>
              <p style={{ fontSize: '1.05rem', color: 'var(--color-muted)', lineHeight: 1.65 }}>
                Explore our published insights on Software &amp; Service Consultancy, flexible Resource Augmentation, and revenue-focused TeleSales Support.
              </p>
            </div>
          </div>
          <ConsultancyAndFaqSection onInquire={handleSimulatorInquire} />
        </main>
      )}

      {/* ROUTE 04: SERVICE DETAIL TEMPLATE */}
      {activeRoute === 'service-detail' && currentService && (
        <main className="editorial-section">
          <div className="executive-container">
            <button
              onClick={() => handleNavigate('services')}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.35rem',
                fontSize: '0.8rem',
                textTransform: 'uppercase',
                color: 'var(--color-forest)',
                fontWeight: 600,
                letterSpacing: '0.08em',
                marginBottom: '1.5rem'
              }}
            >
              &larr; Back to All 12 ERP Systems
            </button>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '2.5rem',
                alignItems: 'center',
                marginBottom: '3rem'
              }}
            >
              <div>
                <div className="editorial-eyebrow-dark">
                  <span>
                    SYSTEM {currentService.number} // {currentService.category}
                  </span>
                </div>
                <h1
                  className="font-serif"
                  style={{
                    fontSize: 'clamp(2.2rem, 4vw, 3.85rem)',
                    color: 'var(--color-forest)',
                    fontWeight: 500,
                    lineHeight: 1.15,
                    marginBottom: '1.25rem'
                  }}
                >
                  {currentService.title}
                </h1>
                <p
                  style={{
                    fontSize: '1.05rem',
                    color: 'var(--color-charcoal)',
                    lineHeight: 1.65,
                    marginBottom: '1.25rem'
                  }}
                >
                  {currentService.shortDescription}
                </p>
                {currentService.metrics && (
                  <div style={{ display: 'inline-flex', gap: '1rem', padding: '0.65rem 1rem', backgroundColor: 'var(--color-pale-green)', border: '1px solid var(--color-border)', fontSize: '0.82rem', fontWeight: 600, color: 'var(--color-forest)' }}>
                    <span>{currentService.metrics.speed}</span>
                    <span>•</span>
                    <span>{currentService.metrics.accuracy}</span>
                  </div>
                )}
              </div>

              {currentService.image && (
                <div style={{ border: '1px solid var(--color-border)', padding: '0.5rem', backgroundColor: '#FFFFFF' }}>
                  <img
                    src={currentService.image}
                    alt={currentService.title}
                    style={{ width: '100%', height: 'clamp(220px, 35vw, 340px)', objectFit: 'cover', display: 'block' }}
                  />
                </div>
              )}
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '2.5rem',
                borderTop: '1px solid var(--color-border)',
                paddingTop: '2.5rem',
                marginBottom: '3rem'
              }}
            >
              <div>
                <h3
                  className="font-serif"
                  style={{
                    fontSize: '1.5rem',
                    color: 'var(--color-forest)',
                    marginBottom: '0.65rem',
                    fontWeight: 600
                  }}
                >
                  Business Challenge Addressed
                </h3>
                <p
                  style={{
                    color: 'var(--color-muted)',
                    fontSize: '0.92rem',
                    lineHeight: 1.65,
                    marginBottom: '1.75rem'
                  }}
                >
                  {currentService.challenge}
                </p>

                <h3
                  className="font-serif"
                  style={{
                    fontSize: '1.5rem',
                    color: 'var(--color-forest)',
                    marginBottom: '0.65rem',
                    fontWeight: 600
                  }}
                >
                  Target Audience
                </h3>
                <p
                  style={{
                    color: 'var(--color-muted)',
                    fontSize: '0.92rem',
                    lineHeight: 1.65
                  }}
                >
                  {currentService.audience}
                </p>
              </div>

              <div
                style={{
                  backgroundColor: 'var(--color-ivory-surface)',
                  padding: '1.75rem',
                  border: '1px solid var(--color-border)'
                }}
              >
                <h3
                  className="font-serif"
                  style={{
                    fontSize: '1.5rem',
                    color: 'var(--color-forest)',
                    marginBottom: '1rem',
                    fontWeight: 600
                  }}
                >
                  Verified Module Deliverables
                </h3>
                <ul
                  style={{
                    listStyle: 'none',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.85rem'
                  }}
                >
                  {currentService.deliverables.map((item, idx) => (
                    <li
                      key={idx}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '0.65rem',
                        fontSize: '0.9rem',
                        color: 'var(--color-charcoal)'
                      }}
                    >
                      <CheckCircle2 size={16} style={{ color: 'var(--color-forest)', flexShrink: 0, marginTop: '2px' }} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div
              style={{
                backgroundColor: 'var(--color-forest)',
                color: 'var(--color-ivory)',
                padding: '2.25rem 1.75rem',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '1.5rem'
              }}
            >
              <div>
                <h3
                  className="font-serif"
                  style={{ fontSize: '1.65rem', marginBottom: '0.4rem' }}
                >
                  Schedule a live demonstration of {currentService.title}
                </h3>
                <p
                  style={{
                    fontSize: '0.88rem',
                    color: 'rgba(243, 240, 232, 0.8)'
                  }}
                >
                  Our Trivandrum engineering desk will demonstrate this platform tailored to your organizational workflow.
                </p>
              </div>
              <button
                onClick={() => handleSimulatorInquire(`Live Demo Request: ${currentService.title}`)}
                className="btn-executive-primary"
              >
                <span>Request Live Demo</span>
                <ArrowRight size={15} />
              </button>
            </div>
          </div>
        </main>
      )}

      {/* ROUTE 05: PORTFOLIO / OUR WORK INDEX */}
      {activeRoute === 'work' && (
        <main className="editorial-section">
          <div className="executive-container">
            <div style={{ maxWidth: '820px', marginBottom: '3rem' }}>
              <span className="editorial-eyebrow-dark">VERIFIED CASE STUDIES</span>
              <h1
                className="font-serif"
                style={{
                  fontSize: 'clamp(2.4rem, 4.5vw, 4.25rem)',
                  color: 'var(--color-forest)',
                  fontWeight: 500,
                  lineHeight: 1.1,
                  marginBottom: '1.25rem'
                }}
              >
                Evidence of Operational Excellence
              </h1>
              <p
                style={{
                  fontSize: '1.05rem',
                  color: 'var(--color-muted)',
                  lineHeight: 1.65
                }}
              >
                A review of selected operational transformations and ERP implementations executed by Lifeart Group.
              </p>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '2rem'
              }}
            >
              {PROJECTS.map((proj) => (
                <article
                  key={proj.slug}
                  onClick={() => handleNavigate('project-detail', proj.slug)}
                  className="project-editorial-card"
                  style={{ cursor: 'pointer' }}
                >
                  <div className="project-card-image-wrap">
                    <img
                      src={proj.coverImage}
                      alt={proj.title}
                      className="project-card-image"
                      loading="lazy"
                    />
                  </div>
                  <div className="project-card-body">
                    <div className="project-card-category">{proj.category}</div>
                    <h3 className="project-card-title font-serif">{proj.title}</h3>
                    <p className="project-card-summary">{proj.summary}</p>
                    <div className="project-card-outcome">
                      Outcome: {proj.outcome}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </main>
      )}

      {/* ROUTE 06: PROJECT DETAIL TEMPLATE */}
      {activeRoute === 'project-detail' && currentProject && (
        <main className="editorial-section">
          <div className="executive-container">
            <button
              onClick={() => handleNavigate('work')}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.35rem',
                fontSize: '0.8rem',
                textTransform: 'uppercase',
                color: 'var(--color-forest)',
                fontWeight: 600,
                letterSpacing: '0.08em',
                marginBottom: '1.5rem'
              }}
            >
              &larr; Back to Selected Work
            </button>

            <div style={{ maxWidth: '880px', marginBottom: '2.5rem' }}>
              <div className="editorial-eyebrow-dark">
                <span>
                  CASE STUDY {currentProject.number} // {currentProject.category}
                </span>
              </div>
              <h1
                className="font-serif"
                style={{
                  fontSize: 'clamp(2.2rem, 4vw, 3.85rem)',
                  color: 'var(--color-forest)',
                  fontWeight: 500,
                  lineHeight: 1.15,
                  marginBottom: '1rem'
                }}
              >
                {currentProject.title}
              </h1>
              <div style={{ fontSize: '0.95rem', color: 'var(--color-muted)' }}>
                Client Partner: <strong>{currentProject.clientLabel}</strong>
              </div>
            </div>

            <div style={{ marginBottom: '3rem' }}>
              <img
                src={currentProject.coverImage}
                alt={currentProject.title}
                style={{
                  width: '100%',
                  height: 'clamp(240px, 40vw, 420px)',
                  objectFit: 'cover',
                  display: 'block',
                  border: '1px solid var(--color-border)'
                }}
                loading="lazy"
              />
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '2.5rem',
                borderTop: '1px solid var(--color-border)',
                paddingTop: '2.5rem',
                marginBottom: '3rem'
              }}
            >
              <div>
                <h3
                  className="font-serif"
                  style={{
                    fontSize: '1.5rem',
                    color: 'var(--color-forest)',
                    marginBottom: '0.65rem',
                    fontWeight: 600
                  }}
                >
                  The Challenge
                </h3>
                <p
                  style={{
                    color: 'var(--color-muted)',
                    fontSize: '0.92rem',
                    lineHeight: 1.65,
                    marginBottom: '1.75rem'
                  }}
                >
                  {currentProject.challenge}
                </p>

                <h3
                  className="font-serif"
                  style={{
                    fontSize: '1.5rem',
                    color: 'var(--color-forest)',
                    marginBottom: '0.65rem',
                    fontWeight: 600
                  }}
                >
                  The Approach &amp; Execution
                </h3>
                <p
                  style={{
                    color: 'var(--color-muted)',
                    fontSize: '0.92rem',
                    lineHeight: 1.65
                  }}
                >
                  {currentProject.approach}
                </p>
              </div>

              <div
                style={{
                  backgroundColor: 'var(--color-ivory-surface)',
                  padding: '1.75rem',
                  border: '1px solid var(--color-border)'
                }}
              >
                <h3
                  className="font-serif"
                  style={{
                    fontSize: '1.5rem',
                    color: 'var(--color-forest)',
                    marginBottom: '0.85rem',
                    fontWeight: 600
                  }}
                >
                  Deliverables Produced
                </h3>
                <ul
                  style={{
                    listStyle: 'none',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.75rem',
                    marginBottom: '1.75rem'
                  }}
                >
                  {currentProject.deliverables.map((item, idx) => (
                    <li
                      key={idx}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '0.65rem',
                        fontSize: '0.9rem',
                        color: 'var(--color-charcoal)'
                      }}
                    >
                      <span style={{ color: 'var(--color-forest)', fontWeight: 700 }}>
                        &bull;
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div
                  style={{
                    borderTop: '1px solid var(--color-border)',
                    paddingTop: '1rem'
                  }}
                >
                  <span
                    style={{
                      fontSize: '0.72rem',
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                      color: 'var(--color-forest)',
                      fontWeight: 600,
                      display: 'block',
                      marginBottom: '0.25rem'
                    }}
                  >
                    SUBSTANTIATED OUTCOME
                  </span>
                  <div
                    className="font-serif"
                    style={{
                      fontSize: '1.25rem',
                      color: 'var(--color-forest)',
                      fontWeight: 600
                    }}
                  >
                    {currentProject.outcome}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      )}

      {/* ROUTE 07: CONTACT & ENQUIRY */}
      {activeRoute === 'contact' && (
        <main className="editorial-section">
          <div className="executive-container">
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '3rem',
                alignItems: 'flex-start'
              }}
            >
              <div>
                <span className="editorial-eyebrow-dark">CORPORATE DIALOGUE</span>
                <h1
                  className="font-serif"
                  style={{
                    fontSize: 'clamp(2.4rem, 4.5vw, 4.25rem)',
                    color: 'var(--color-forest)',
                    fontWeight: 500,
                    lineHeight: 1.1,
                    marginBottom: '1.25rem'
                  }}
                >
                  Initiate a formal discussion with our desk.
                </h1>
                <p
                  style={{
                    fontSize: '1.05rem',
                    color: 'var(--color-charcoal)',
                    lineHeight: 1.65,
                    marginBottom: '2rem'
                  }}
                >
                  Submit details regarding your operational requirements, software demo requests, resource augmentation, or schedule a consultation with Lifeart Group in Trivandrum, Kerala.
                </p>

                {inquiryPrefill && (
                  <div
                    style={{
                      padding: '0.85rem 1rem',
                      backgroundColor: 'var(--color-pale-green)',
                      border: '1px solid var(--color-forest)',
                      marginBottom: '1.5rem',
                      fontSize: '0.85rem',
                      color: 'var(--color-forest)'
                    }}
                  >
                    <strong>Selected Subject:</strong> {inquiryPrefill}
                  </div>
                )}

                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1.25rem',
                    borderTop: '1px solid var(--color-border)',
                    paddingTop: '1.75rem'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                    <MapPin size={18} style={{ color: 'var(--color-forest)', marginTop: '3px', flexShrink: 0 }} />
                    <div>
                      <span
                        style={{
                          fontSize: '0.72rem',
                          textTransform: 'uppercase',
                          letterSpacing: '0.1em',
                          color: 'var(--color-muted)',
                          display: 'block',
                          marginBottom: '0.2rem'
                        }}
                      >
                        HEADQUARTERS ADDRESS
                      </span>
                      <strong style={{ color: 'var(--color-forest)', fontSize: '0.92rem' }}>
                        {COMPANY.legalName} ({COMPANY.brandName})<br />
                        {COMPANY.corporateAddress}
                      </strong>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                    <Phone size={18} style={{ color: 'var(--color-forest)', marginTop: '3px', flexShrink: 0 }} />
                    <div>
                      <span
                        style={{
                          fontSize: '0.72rem',
                          textTransform: 'uppercase',
                          letterSpacing: '0.1em',
                          color: 'var(--color-muted)',
                          display: 'block',
                          marginBottom: '0.2rem'
                        }}
                      >
                        DIRECT CONSULTATION PHONE
                      </span>
                      <a
                        href="tel:+918590212345"
                        style={{
                          color: 'var(--color-forest)',
                          fontWeight: 600,
                          fontSize: '0.95rem'
                        }}
                      >
                        {COMPANY.contactPhone}
                      </a>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                    <Mail size={18} style={{ color: 'var(--color-forest)', marginTop: '3px', flexShrink: 0 }} />
                    <div>
                      <span
                        style={{
                          fontSize: '0.72rem',
                          textTransform: 'uppercase',
                          letterSpacing: '0.1em',
                          color: 'var(--color-muted)',
                          display: 'block',
                          marginBottom: '0.2rem'
                        }}
                      >
                        OFFICIAL ENQUIRY EMAIL
                      </span>
                      <a
                        href={`mailto:${COMPANY.enquiryEmail}`}
                        style={{
                          color: 'var(--color-forest)',
                          fontWeight: 600,
                          fontSize: '0.92rem'
                        }}
                      >
                        {COMPANY.enquiryEmail}
                      </a>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                    <Clock size={18} style={{ color: 'var(--color-forest)', marginTop: '3px', flexShrink: 0 }} />
                    <div>
                      <span
                        style={{
                          fontSize: '0.72rem',
                          textTransform: 'uppercase',
                          letterSpacing: '0.1em',
                          color: 'var(--color-muted)',
                          display: 'block',
                          marginBottom: '0.2rem'
                        }}
                      >
                        OFFICE HOURS
                      </span>
                      <span style={{ color: 'var(--color-charcoal)', fontSize: '0.92rem' }}>
                        {COMPANY.workingHours}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <ContactForm />
              </div>
            </div>
          </div>
        </main>
      )}

      {/* ROUTE 08: PRIVACY POLICY */}
      {activeRoute === 'privacy' && (
        <main className="editorial-section">
          <div className="executive-container" style={{ maxWidth: '820px' }}>
            <span className="editorial-eyebrow-dark">LEGAL INFORMATION</span>
            <h1
              className="font-serif"
              style={{
                fontSize: 'clamp(2.2rem, 4vw, 3rem)',
                color: 'var(--color-forest)',
                marginBottom: '1.25rem'
              }}
            >
              Privacy &amp; Data Governance Policy
            </h1>
            <p
              style={{
                color: 'var(--color-muted)',
                lineHeight: 1.65,
                marginBottom: '1.25rem'
              }}
            >
              {COMPANY.legalName} ({COMPANY.brandName}) is committed to the protection and confidentiality of all business information, stakeholder contact details, and corporate inquiries received via this website.
            </p>
            <h3
              className="font-serif"
              style={{
                fontSize: '1.4rem',
                color: 'var(--color-forest)',
                marginTop: '1.75rem',
                marginBottom: '0.65rem'
              }}
            >
              Collection &amp; Utilization of Inquiries
            </h3>
            <p
              style={{
                color: 'var(--color-muted)',
                lineHeight: 1.65,
                marginBottom: '1.25rem'
              }}
            >
              Information provided via our corporate contact form is used solely for the purpose of communicating regarding potential business services and software engagements. We do not sell, rent, or distribute corporate stakeholder details to third-party marketing entities.
            </p>
            <h3
              className="font-serif"
              style={{
                fontSize: '1.4rem',
                color: 'var(--color-forest)',
                marginTop: '1.75rem',
                marginBottom: '0.65rem'
              }}
            >
              Non-Disclosure &amp; Confidentiality
            </h3>
            <p
              style={{
                color: 'var(--color-muted)',
                lineHeight: 1.65,
                marginBottom: '2rem'
              }}
            >
              Prior to exchanging proprietary operational or financial documentation, Lifeart enters into standard mutual non-disclosure agreements (NDAs) to protect all parties.
            </p>
            <button
              onClick={() => handleNavigate('home')}
              className="btn-executive-dark-outline"
            >
              &larr; Return to Homepage
            </button>
          </div>
        </main>
      )}

      {/* ROUTE 09: TERMS OF SERVICE */}
      {activeRoute === 'terms' && (
        <main className="editorial-section">
          <div className="executive-container" style={{ maxWidth: '820px' }}>
            <span className="editorial-eyebrow-dark">LEGAL INFORMATION</span>
            <h1
              className="font-serif"
              style={{
                fontSize: 'clamp(2.2rem, 4vw, 3rem)',
                color: 'var(--color-forest)',
                marginBottom: '1.25rem'
              }}
            >
              Terms of Engagement &amp; Website Use
            </h1>
            <p
              style={{
                color: 'var(--color-muted)',
                lineHeight: 1.65,
                marginBottom: '1.25rem'
              }}
            >
              This corporate website provides general information regarding the services, ERP products, and capabilities offered by {COMPANY.legalName}.
            </p>
            <p
              style={{
                color: 'var(--color-muted)',
                lineHeight: 1.65,
                marginBottom: '2rem'
              }}
            >
              All professional software licensing, implementation services, and managed operations are governed exclusively by formal Master Services Agreements (MSAs) and Statements of Work (SOWs) executed directly between client organizations and Lifeart Business Services Pvt. Ltd.
            </p>
            <button
              onClick={() => handleNavigate('home')}
              className="btn-executive-dark-outline"
            >
              &larr; Return to Homepage
            </button>
          </div>
        </main>
      )}

      {/* 02. Global Footer */}
      <SiteFooter onNavigate={handleNavigate} />
    </div>
  );
}
