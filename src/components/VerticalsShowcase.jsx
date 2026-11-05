import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  CheckCircle2, 
  Layers, 
  Eye, 
  X, 
  Radio, 
  ShieldCheck, 
  Users, 
  Cpu, 
  Landmark, 
  Megaphone,
  Sparkles
} from 'lucide-react';
import { VERTICALS } from '../content/company';

const VERTICAL_ICONS = {
  'media-broadcasting': Radio,
  'tactical-communication-solutions': ShieldCheck,
  'collaboration-networking-events': Users,
  'information-technology-solutions': Cpu,
  'government-relations': Landmark,
  'pr-activations-branding': Megaphone
};

const CATEGORIES = [
  'All Verticals',
  'Creative & Broadcast Infrastructure',
  'Mission-Critical Telecommunications',
  'Institutional Conclaves & B2B Summits',
  'Enterprise ERP & Software Engineering',
  'Public Policy & Institutional Liaison',
  'Strategic Communications & Brand Authority'
];

export default function VerticalsShowcase({
  onSelectVertical,
  onNavigateErp,
  onInquireVertical,
  standalone = false
}) {
  const [selectedCategory, setSelectedCategory] = useState('All Verticals');
  const [activeVerticalModal, setActiveVerticalModal] = useState(null);

  const filteredVerticals = selectedCategory === 'All Verticals'
    ? VERTICALS
    : VERTICALS.filter((v) => v.category === selectedCategory);

  return (
    <div className="verticals-showcase-wrap">
      {/* Category Filter Pills */}
      <div className="verticals-category-pills" role="tablist" aria-label="Filter Verticals">
        {['All Verticals', 'Media & Comms', 'Enterprise IT', 'Institutional & PR'].map((group) => {
          let isActive = false;
          if (group === 'All Verticals' && selectedCategory === 'All Verticals') isActive = true;
          if (group === 'Media & Comms' && (selectedCategory === 'Creative & Broadcast Infrastructure' || selectedCategory === 'Mission-Critical Telecommunications')) isActive = true;
          if (group === 'Enterprise IT' && selectedCategory === 'Enterprise ERP & Software Engineering') isActive = true;
          if (group === 'Institutional & Brand' && (selectedCategory === 'Institutional Conclaves & B2B Summits' || selectedCategory === 'Public Policy & Institutional Liaison' || selectedCategory === 'Strategic Communications & Brand Authority')) isActive = true;

          return (
            <button
              key={group}
              type="button"
              className={`erp-category-pill ${isActive ? 'active' : ''}`}
              onClick={() => {
                if (group === 'All Verticals') setSelectedCategory('All Verticals');
                if (group === 'Media & Comms') setSelectedCategory('Creative & Broadcast Infrastructure');
                if (group === 'Enterprise IT') setSelectedCategory('Enterprise ERP & Software Engineering');
                if (group === 'Institutional & Brand') setSelectedCategory('Strategic Communications & Brand Authority');
              }}
            >
              <span>{group}</span>
              {group === 'All Verticals' && <span className="erp-pill-badge">{VERTICALS.length}</span>}
            </button>
          );
        })}
      </div>

      {/* Grid of 6 Verticals */}
      <div className="verticals-grid">
        <AnimatePresence mode="popLayout">
          {filteredVerticals.map((vert, idx) => {
            const IconComponent = VERTICAL_ICONS[vert.slug] || Layers;
            return (
              <motion.article
                key={vert.slug}
                layout
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.35, delay: idx * 0.05 }}
                className="vertical-editorial-card"
              >
                {/* Media Banner */}
                <div 
                  className="vertical-card-media"
                  onClick={() => setActiveVerticalModal(vert)}
                >
                  <img
                    src={vert.image}
                    alt={vert.title}
                    className="vertical-card-img"
                    loading="lazy"
                  />
                  <div className="vertical-card-overlay">
                    <span className="font-serif vertical-num">{vert.number}</span>
                    <span className="vertical-badge">{vert.category}</span>
                  </div>
                </div>

                {/* Content Body */}
                <div className="vertical-card-body">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.45rem', color: 'var(--color-champagne)' }}>
                    <IconComponent size={16} />
                    <span style={{ fontSize: '0.72rem', letterSpacing: '0.08em', textTransform: 'uppercase', fontWeight: 600 }}>
                      VERTICAL {vert.number}
                    </span>
                  </div>

                  <h3 
                    className="font-serif vertical-card-title"
                    onClick={() => setActiveVerticalModal(vert)}
                  >
                    {vert.title}
                  </h3>

                  <p className="vertical-card-tagline">
                    {vert.tagline}
                  </p>

                  {/* Impact Metric Strip */}
                  <div className="vertical-metric-strip">
                    <span style={{ fontWeight: 600, color: 'var(--color-forest)' }}>{vert.metrics.primary}</span>
                    <span style={{ color: 'var(--color-champagne)' }}>•</span>
                    <span style={{ color: 'var(--color-muted)' }}>{vert.metrics.secondary}</span>
                  </div>

                  {/* Deliverables snippet */}
                  <ul className="vertical-deliverables-snippet">
                    {vert.deliverables.slice(0, 2).map((d, i) => (
                      <li key={i}>
                        <CheckCircle2 size={13} style={{ color: 'var(--color-forest)', flexShrink: 0, marginTop: '2px' }} />
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Action Row */}
                  <div className="vertical-card-actions">
                    <button
                      type="button"
                      onClick={() => setActiveVerticalModal(vert)}
                      className="erp-quick-view-btn"
                    >
                      <Eye size={13} />
                      <span>Inspect Dossier</span>
                    </button>

                    {vert.hasErpCatalogLink ? (
                      <button
                        type="button"
                        onClick={() => onNavigateErp ? onNavigateErp() : setActiveVerticalModal(vert)}
                        className="erp-explore-btn"
                      >
                        <span>12 ERP Systems</span>
                        <ArrowRight size={13} />
                      </button>
                    ) : (
                      <button
                        type="button"
                        onClick={() => onInquireVertical ? onInquireVertical(`Consultation Enquiry: ${vert.title}`) : setActiveVerticalModal(vert)}
                        className="erp-explore-btn"
                      >
                        <span>Engage Desk</span>
                        <ArrowRight size={13} />
                      </button>
                    )}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Full Vertical Dossier Modal */}
      <AnimatePresence>
        {activeVerticalModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="executive-modal-backdrop"
            onClick={() => setActiveVerticalModal(null)}
            role="dialog"
            aria-modal="true"
            aria-labelledby="vertical-modal-title"
          >
            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.97 }}
              transition={{ duration: 0.25 }}
              className="executive-modal-card"
              onClick={(e) => e.stopPropagation()}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem', marginBottom: '1.25rem' }}>
                <div>
                  <span className="editorial-eyebrow-dark" style={{ marginBottom: '0.25rem' }}>
                    VERTICAL {activeVerticalModal.number} // {activeVerticalModal.category}
                  </span>
                  <h3 id="vertical-modal-title" className="font-serif" style={{ fontSize: 'clamp(1.75rem, 3.2vw, 2.35rem)', color: 'var(--color-forest)', lineHeight: 1.15 }}>
                    {activeVerticalModal.title}
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => setActiveVerticalModal(null)}
                  aria-label="Close Vertical Dossier"
                  style={{ padding: '0.4rem', border: '1px solid var(--color-border)', color: 'var(--color-forest)' }}
                >
                  <X size={18} />
                </button>
              </div>

              <div style={{ position: 'relative', height: '220px', marginBottom: '1.25rem', overflow: 'hidden', border: '1px solid var(--color-border)' }}>
                <img
                  src={activeVerticalModal.image}
                  alt={activeVerticalModal.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div style={{ position: 'absolute', bottom: '0.75rem', left: '0.75rem', right: '0.75rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ padding: '0.3rem 0.65rem', backgroundColor: 'var(--color-forest)', color: 'var(--color-champagne)', fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                    {activeVerticalModal.metrics.primary}
                  </span>
                  <span style={{ padding: '0.3rem 0.65rem', backgroundColor: 'rgba(20, 44, 38, 0.9)', color: 'var(--color-ivory)', fontSize: '0.72rem' }}>
                    {activeVerticalModal.metrics.secondary}
                  </span>
                </div>
              </div>

              <p style={{ fontSize: '0.98rem', color: 'var(--color-charcoal)', lineHeight: 1.65, marginBottom: '1.25rem' }}>
                {activeVerticalModal.summary}
              </p>

              <div style={{ padding: '1rem 1.25rem', backgroundColor: 'var(--color-pale-green)', borderLeft: '3px solid var(--color-forest)', marginBottom: '1.25rem' }}>
                <div style={{ fontSize: '0.72rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-forest)', marginBottom: '0.25rem' }}>
                  Strategic Challenge Solved
                </div>
                <p style={{ fontSize: '0.88rem', color: 'var(--color-charcoal)', lineHeight: 1.55 }}>
                  {activeVerticalModal.challenge}
                </p>
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <div style={{ fontSize: '0.76rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-forest)', marginBottom: '0.75rem' }}>
                  Key Capabilities &amp; Institutional Deliverables
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '0.75rem' }}>
                  {activeVerticalModal.deliverables.map((item, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.55rem', fontSize: '0.86rem', color: 'var(--color-charcoal)', padding: '0.65rem 0.85rem', backgroundColor: '#FFFFFF', border: '1px solid var(--color-border)' }}>
                      <CheckCircle2 size={15} style={{ color: 'var(--color-forest)', flexShrink: 0, marginTop: '2px' }} />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.75rem', borderTop: '1px solid var(--color-border)', paddingTop: '1.25rem' }}>
                {activeVerticalModal.hasErpCatalogLink ? (
                  <button
                    type="button"
                    onClick={() => {
                      setActiveVerticalModal(null);
                      if (onNavigateErp) onNavigateErp();
                    }}
                    className="btn-executive-dark-outline"
                  >
                    <span>Browse 12 Specialized ERP Systems</span>
                    <ArrowRight size={14} />
                  </button>
                ) : (
                  <div style={{ fontSize: '0.8rem', color: 'var(--color-muted)' }}>
                    HQ: Trivandrum, Kerala • Global Execution
                  </div>
                )}

                <button
                  type="button"
                  onClick={() => {
                    const title = activeVerticalModal.title;
                    setActiveVerticalModal(null);
                    if (onInquireVertical) onInquireVertical(`Strategic Engagement Enquiry: ${title}`);
                  }}
                  className="btn-executive-primary"
                >
                  <span>Engage This Vertical Desk</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
