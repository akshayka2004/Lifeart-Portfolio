import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Search, Sparkles, CheckCircle2, Layers, Eye, X, Loader2 } from 'lucide-react';
import { ERP_SYSTEMS } from '../content/company';

const CATEGORIES = [
  'All Systems',
  'Retail & Lifestyle',
  'Healthcare & Medical',
  'Manufacturing & Projects',
  'Hospitality & Dining',
  'Education & Services'
];

export default function ErpCatalogGrid({
  initialVisibleCount = 6,
  onSelectService,
  onInquireSystem
}) {
  const [selectedCategory, setSelectedCategory] = useState('All Systems');
  const [searchQuery, setSearchQuery] = useState('');
  const [visibleCount, setVisibleCount] = useState(initialVisibleCount);
  const [isLoadingComponent, setIsLoadingComponent] = useState(false);
  const [loadingLabel, setLoadingLabel] = useState('');
  const [quickPreviewSystem, setQuickPreviewSystem] = useState(null);

  const filteredSystems = ERP_SYSTEMS.filter((item) => {
    const matchesCategory =
      selectedCategory === 'All Systems' || item.category === selectedCategory;
    const matchesSearch =
      !searchQuery.trim() ||
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const displayedSystems =
    selectedCategory === 'All Systems' && !searchQuery.trim()
      ? filteredSystems.slice(0, visibleCount)
      : filteredSystems;

  const triggerComponentLoad = (actionLabel, callback) => {
    setIsLoadingComponent(true);
    setLoadingLabel(actionLabel);
    setTimeout(() => {
      callback();
      setIsLoadingComponent(false);
    }, 420);
  };

  const handleCategoryChange = (category) => {
    if (category === selectedCategory) return;
    triggerComponentLoad(`Loading ${category} modules...`, () => {
      setSelectedCategory(category);
      if (category === 'All Systems') {
        setVisibleCount(initialVisibleCount);
      }
    });
  };

  const handleLoadMore = () => {
    triggerComponentLoad('Fetching remaining Lifeart ERP modules...', () => {
      setVisibleCount(ERP_SYSTEMS.length);
    });
  };

  const handleShowInitial = () => {
    triggerComponentLoad('Compacting catalog view...', () => {
      setVisibleCount(initialVisibleCount);
    });
  };

  return (
    <div style={{ marginTop: '2.5rem' }}>
      {/* Filter & Search Control Bar */}
      <div className="erp-filter-toolbar">
        <div className="erp-category-pills" role="tablist" aria-label="Filter ERP Systems by Sector">
          {CATEGORIES.map((category) => {
            const active = selectedCategory === category;
            const count =
              category === 'All Systems'
                ? ERP_SYSTEMS.length
                : ERP_SYSTEMS.filter((s) => s.category === category).length;
            return (
              <button
                key={category}
                role="tab"
                aria-selected={active}
                onClick={() => handleCategoryChange(category)}
                className={`erp-category-pill ${active ? 'active' : ''}`}
              >
                <span>{category}</span>
                <span className="erp-pill-badge">{count}</span>
              </button>
            );
          })}
        </div>

        <div className="erp-search-box">
          <Search size={15} style={{ color: 'var(--color-muted)', flexShrink: 0 }} />
          <input
            type="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search 12 ERP systems (e.g. Hospital, Boutique, POS)..."
            aria-label="Search ERP Systems"
            className="erp-search-input"
          />
        </div>
      </div>

      {/* Component Loading Shimmer Skeleton OR Live Cards Grid */}
      {isLoadingComponent ? (
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1rem', fontSize: '0.8rem', color: 'var(--color-forest)', fontWeight: 600 }}>
            <Loader2 size={15} className="spin-icon" />
            <span>{loadingLabel || 'Synchronizing ERP catalog...'}</span>
          </div>
          <div className="erp-catalog-grid" aria-busy="true">
            {[1, 2, 3].map((n) => (
              <div key={n} className="erp-skeleton-card">
                <div className="skeleton-shimmer skeleton-img" />
                <div style={{ padding: '1.35rem' }}>
                  <div className="skeleton-shimmer skeleton-line-xs" />
                  <div className="skeleton-shimmer skeleton-line-lg" />
                  <div className="skeleton-shimmer skeleton-line-md" />
                  <div className="skeleton-shimmer skeleton-line-sm" />
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <motion.div layout className="erp-catalog-grid">
          <AnimatePresence mode="popLayout">
            {displayedSystems.map((system, idx) => (
              <motion.article
                key={system.slug}
                layout
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.32, delay: idx * 0.04 }}
                className="erp-system-card"
              >
                {/* Image Header with Number & Category Badge */}
                <div
                  className="erp-card-media"
                  onClick={() => onSelectService && onSelectService(system.slug)}
                >
                  <img
                    src={system.image}
                    alt={system.title}
                    className="erp-card-img"
                    loading="lazy"
                  />
                  <div className="erp-card-overlay-top">
                    <span className="erp-card-num font-serif">{system.number}</span>
                    <span className="erp-card-cat">{system.category}</span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="erp-card-content">
                  <h3
                    className="erp-card-title font-serif"
                    onClick={() => onSelectService && onSelectService(system.slug)}
                  >
                    {system.title}
                  </h3>
                  <p className="erp-card-desc">{system.shortDescription}</p>

                  {/* Key Metrics Strip */}
                  <div className="erp-card-metrics">
                    <span>{system.metrics.speed}</span>
                    <span style={{ color: 'var(--color-champagne)' }}>•</span>
                    <span>{system.metrics.accuracy}</span>
                  </div>

                  {/* Top 2 Deliverables Preview */}
                  <ul className="erp-card-QuickList">
                    {system.deliverables.slice(0, 2).map((d, i) => (
                      <li key={i}>
                        <CheckCircle2 size={13} style={{ color: 'var(--color-forest)', flexShrink: 0, marginTop: '2px' }} />
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Card Footer Actions */}
                  <div className="erp-card-actions">
                    <button
                      type="button"
                      onClick={() => setQuickPreviewSystem(system)}
                      className="erp-quick-view-btn"
                    >
                      <Eye size={13} />
                      <span>Quick Spec</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => onSelectService && onSelectService(system.slug)}
                      className="erp-explore-btn"
                    >
                      <span>Full Module</span>
                      <ArrowRight size={13} />
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      )}

      {/* Load More / Show Less Interactive Trigger (mirrors lifeartgroup.in Load More button) */}
      {selectedCategory === 'All Systems' && !searchQuery.trim() && (
        <div style={{ marginTop: '2.25rem', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.65rem' }}>
          <div style={{ fontSize: '0.78rem', color: 'var(--color-muted)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
            Showing <strong>{displayedSystems.length}</strong> of <strong>{ERP_SYSTEMS.length}</strong> Deployed Lifeart ERP Platforms
          </div>
          {visibleCount < ERP_SYSTEMS.length ? (
            <button
              type="button"
              onClick={handleLoadMore}
              className="btn-executive-dark-outline"
              disabled={isLoadingComponent}
            >
              <Layers size={15} />
              <span>Load More ERP Systems (+{ERP_SYSTEMS.length - visibleCount} Modules)</span>
            </button>
          ) : (
            initialVisibleCount < ERP_SYSTEMS.length && (
              <button
                type="button"
                onClick={handleShowInitial}
                className="btn-executive-dark-outline"
              >
                <span>Show Featured Systems ({initialVisibleCount})</span>
              </button>
            )
          )}
        </div>
      )}

      {/* Interactive Quick-Spec Modal Drawer */}
      <AnimatePresence>
        {quickPreviewSystem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="executive-modal-backdrop"
            onClick={() => setQuickPreviewSystem(null)}
            role="dialog"
            aria-modal="true"
            aria-labelledby="quick-spec-title"
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
                    MODULE {quickPreviewSystem.number} // {quickPreviewSystem.category}
                  </span>
                  <h3 id="quick-spec-title" className="font-serif" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.25rem)', color: 'var(--color-forest)', lineHeight: 1.15 }}>
                    {quickPreviewSystem.title}
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => setQuickPreviewSystem(null)}
                  aria-label="Close Quick Specification"
                  style={{ padding: '0.4rem', border: '1px solid var(--color-border)', color: 'var(--color-forest)' }}
                >
                  <X size={18} />
                </button>
              </div>

              <p style={{ fontSize: '0.94rem', color: 'var(--color-charcoal)', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                {quickPreviewSystem.shortDescription}
              </p>

              <div style={{ padding: '1rem', backgroundColor: 'var(--color-pale-green)', borderLeft: '3px solid var(--color-forest)', marginBottom: '1.25rem' }}>
                <div style={{ fontSize: '0.72rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-forest)', marginBottom: '0.25rem' }}>
                  Operational Bottleneck Solved
                </div>
                <p style={{ fontSize: '0.86rem', color: 'var(--color-charcoal)', lineHeight: 1.55 }}>
                  {quickPreviewSystem.challenge}
                </p>
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <div style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-forest)', marginBottom: '0.65rem' }}>
                  Core Module Capabilities
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0.65rem' }}>
                  {quickPreviewSystem.deliverables.map((item, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.86rem', color: 'var(--color-charcoal)', padding: '0.55rem 0.75rem', backgroundColor: '#FFFFFF', border: '1px solid var(--color-border)' }}>
                      <CheckCircle2 size={15} style={{ color: 'var(--color-forest)', flexShrink: 0, marginTop: '2px' }} />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.75rem', borderTop: '1px solid var(--color-border)', paddingTop: '1.25rem' }}>
                <button
                  type="button"
                  onClick={() => {
                    const slug = quickPreviewSystem.slug;
                    setQuickPreviewSystem(null);
                    if (onSelectService) onSelectService(slug);
                  }}
                  className="btn-executive-dark-outline"
                >
                  <span>Open Full Specification</span>
                  <ArrowRight size={14} />
                </button>
                <button
                  type="button"
                  onClick={() => {
                    const title = quickPreviewSystem.title;
                    setQuickPreviewSystem(null);
                    if (onInquireSystem) onInquireSystem(`Requesting Live Demo & Proposal for: ${title}`);
                  }}
                  className="btn-executive-primary"
                >
                  <span>Request Live Demo</span>
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

