import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, BookOpen, ChevronDown, CheckCircle2, X } from 'lucide-react';
import { CONSULTANCY_PILLARS, CAPABILITY_METRICS, FAQ_ITEMS } from '../content/company';

export default function ConsultancyAndFaqSection({ onInquire }) {
  const [openFaqId, setOpenFaqId] = useState(FAQ_ITEMS[0].id);
  const [activeArticle, setActiveArticle] = useState(null);

  const toggleFaq = (id) => {
    setOpenFaqId((prev) => (prev === id ? null : id));
  };

  return (
    <>
      {/* SECTION A: 3 Business & IT Consultancy Pillars from lifeartgroup.in */}
      <section className="editorial-section" style={{ borderTop: '1px solid var(--color-border)' }}>
        <div className="executive-container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1.25rem', marginBottom: '2.5rem' }}>
            <div style={{ maxWidth: '680px' }}>
              <span className="editorial-eyebrow-dark">04 // ADVISORY, TALENT &amp; GROWTH PILLARS</span>
              <h2 className="font-serif" style={{ fontSize: 'clamp(1.9rem, 3.6vw, 3.25rem)', color: 'var(--color-forest)', fontWeight: 600, lineHeight: 1.15 }}>
                Software Consultancy, Resource Augmentation &amp; TeleSales Support
              </h2>
              <p style={{ color: 'var(--color-muted)', fontSize: '0.94rem', marginTop: '0.65rem', lineHeight: 1.6 }}>
                Beyond our 12 enterprise ERP platforms, Lifeart Group partners with businesses across three strategic growth pillars published by our advisory desk.
              </p>
            </div>
          </div>

          {/* 3 Consultancy Cards */}
          <div className="consultancy-pillars-grid">
            {CONSULTANCY_PILLARS.map((pillar, idx) => (
              <motion.article
                key={pillar.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: idx * 0.1 }}
                className="consultancy-pillar-card"
              >
                <div className="consultancy-card-media" onClick={() => setActiveArticle(pillar)}>
                  <img src={pillar.image} alt={pillar.title} loading="lazy" />
                  <span className="consultancy-card-badge">{pillar.category}</span>
                </div>

                <div className="consultancy-card-body">
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.74rem', color: 'var(--color-champagne)', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                    <span>PILLAR {pillar.number}</span>
                    <span>{pillar.readTime}</span>
                  </div>

                  <h3
                    className="font-serif consultancy-card-title"
                    onClick={() => setActiveArticle(pillar)}
                  >
                    {pillar.title}
                  </h3>

                  <p className="consultancy-card-summary">{pillar.summary}</p>

                  <ul className="consultancy-highlights-list">
                    {pillar.highlights.slice(0, 3).map((pt, i) => (
                      <li key={i}>
                        <CheckCircle2 size={14} style={{ color: 'var(--color-forest)', flexShrink: 0, marginTop: '3px' }} />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="consultancy-card-footer">
                    <button
                      type="button"
                      onClick={() => setActiveArticle(pillar)}
                      className="erp-quick-view-btn"
                    >
                      <BookOpen size={14} />
                      <span>Read Executive Brief</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => onInquire && onInquire(`Consultation Enquiry: ${pillar.title}`)}
                      className="erp-explore-btn"
                    >
                      <span>Engage Desk</span>
                      <ArrowRight size={13} />
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION B: Animated Capability Progress Bars & Interactive FAQ Accordion */}
      <section className="editorial-section" style={{ backgroundColor: 'var(--color-ivory-surface)', borderTop: '1px solid var(--color-border)' }}>
        <div className="executive-container">
          <div className="capability-faq-grid">
            {/* Left Column: Animated Capability Progress Bars */}
            <div>
              <span className="editorial-eyebrow-dark">05 // OPERATIONAL BENCHMARKS</span>
              <h2 className="font-serif" style={{ fontSize: 'clamp(1.85rem, 3.2vw, 2.85rem)', color: 'var(--color-forest)', fontWeight: 600, lineHeight: 1.15, marginBottom: '0.85rem' }}>
                Digital Products &amp; Practice Maturity
              </h2>
              <p style={{ color: 'var(--color-muted)', fontSize: '0.92rem', lineHeight: 1.6, marginBottom: '2rem' }}>
                Our multidisciplinary teams combine custom software engineering with hands-on operational consultancy and revenue support.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {CAPABILITY_METRICS.map((metric, idx) => (
                  <div key={metric.label} className="capability-bar-item">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.4rem' }}>
                      <span className="font-serif" style={{ fontSize: '1.15rem', fontWeight: 600, color: 'var(--color-forest)' }}>
                        {metric.label}
                      </span>
                      <span className="font-serif" style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--color-forest)' }}>
                        {metric.percentage}%
                      </span>
                    </div>
                    <div className="capability-bar-track">
                      <motion.div
                        className="capability-bar-fill"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${metric.percentage}%` }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ duration: 1.1, delay: idx * 0.12, ease: [0.16, 1, 0.3, 1] }}
                      />
                    </div>
                    <p style={{ fontSize: '0.8rem', color: 'var(--color-muted)', marginTop: '0.35rem' }}>
                      {metric.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Interactive Questions & Answers Accordion (from lifeartgroup.in) */}
            <div>
              <span className="editorial-eyebrow-dark">QUESTIONS &amp; ANSWERS</span>
              <h2 className="font-serif" style={{ fontSize: 'clamp(1.85rem, 3.2vw, 2.85rem)', color: 'var(--color-forest)', fontWeight: 600, lineHeight: 1.15, marginBottom: '0.85rem' }}>
                Our goal is to help you run daily tasks effortlessly.
              </h2>
              <p style={{ color: 'var(--color-muted)', fontSize: '0.92rem', lineHeight: 1.6, marginBottom: '1.75rem' }}>
                Direct answers regarding ERP customization, data migration timelines, resource augmentation, and SLA governance.
              </p>

              <div className="executive-faq-list">
                {FAQ_ITEMS.map((item, idx) => {
                  const isOpen = openFaqId === item.id;
                  return (
                    <div key={item.id} className={`executive-faq-item ${isOpen ? 'open' : ''}`}>
                      <button
                        type="button"
                        onClick={() => toggleFaq(item.id)}
                        className="executive-faq-trigger"
                        aria-expanded={isOpen}
                      >
                        <span className="font-serif faq-trigger-question">
                          <span style={{ color: 'var(--color-champagne)', marginRight: '0.6rem' }}>0{idx + 1}.</span>
                          {item.question}
                        </span>
                        <motion.span
                          animate={{ rotate: isOpen ? 180 : 0 }}
                          transition={{ duration: 0.25 }}
                          style={{ color: 'var(--color-forest)', flexShrink: 0, display: 'inline-flex' }}
                        >
                          <ChevronDown size={18} />
                        </motion.span>
                      </button>

                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.28, ease: 'easeInOut' }}
                            style={{ overflow: 'hidden' }}
                          >
                            <div className="executive-faq-answer">
                              {item.answer}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Executive Article Reader Modal */}
      <AnimatePresence>
        {activeArticle && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="executive-modal-backdrop"
            onClick={() => setActiveArticle(null)}
            role="dialog"
            aria-modal="true"
            aria-labelledby="article-modal-title"
          >
            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.97 }}
              transition={{ duration: 0.25 }}
              className="executive-modal-card"
              onClick={(e) => e.stopPropagation()}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem', marginBottom: '1rem' }}>
                <div>
                  <span className="editorial-eyebrow-dark" style={{ marginBottom: '0.25rem' }}>
                    {activeArticle.category} • {activeArticle.readTime}
                  </span>
                  <h3 id="article-modal-title" className="font-serif" style={{ fontSize: 'clamp(1.5rem, 2.8vw, 2.15rem)', color: 'var(--color-forest)', lineHeight: 1.2 }}>
                    {activeArticle.title}
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => setActiveArticle(null)}
                  aria-label="Close Executive Brief"
                  style={{ padding: '0.4rem', border: '1px solid var(--color-border)', color: 'var(--color-forest)' }}
                >
                  <X size={18} />
                </button>
              </div>

              <img
                src={activeArticle.image}
                alt={activeArticle.title}
                style={{ width: '100%', height: '210px', objectFit: 'cover', marginBottom: '1.25rem', border: '1px solid var(--color-border)' }}
              />

              {activeArticle.fullContent.map((para, i) => (
                <p key={i} style={{ fontSize: '0.93rem', color: 'var(--color-charcoal)', lineHeight: 1.65, marginBottom: '0.95rem' }}>
                  {para}
                </p>
              ))}

              <div style={{ backgroundColor: 'var(--color-ivory-surface)', padding: '1.15rem', border: '1px solid var(--color-border)', marginTop: '1rem', marginBottom: '1.25rem' }}>
                <div style={{ fontSize: '0.74rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-forest)', marginBottom: '0.65rem' }}>
                  Key Executive Takeaways
                </div>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {activeArticle.highlights.map((h, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--color-charcoal)' }}>
                      <CheckCircle2 size={14} style={{ color: 'var(--color-forest)', flexShrink: 0, marginTop: '3px' }} />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.75rem', borderTop: '1px solid var(--color-border)', paddingTop: '1rem' }}>
                <button
                  type="button"
                  onClick={() => {
                    const title = activeArticle.title;
                    setActiveArticle(null);
                    if (onInquire) onInquire(`Consultation Enquiry regarding: ${title}`);
                  }}
                  className="btn-executive-primary"
                >
                  <span>Discuss This Service with Lifeart</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

