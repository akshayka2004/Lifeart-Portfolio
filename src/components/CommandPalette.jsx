import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search,
  ArrowUpRight,
  Palette,
  Grid,
  Copy,
  Layers,
  X
} from 'lucide-react';

export default function CommandPalette({
  isOpen,
  onClose,
  projects,
  onSelectProject,
  onSelectTheme,
  onToggleGrid,
  onCopyEmail
}) {
  const [query, setQuery] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setQuery('');
      setTimeout(() => inputRef.current?.focus(), 40);
    }
  }, [isOpen]);

  const filteredProjects = projects.filter(
    (p) =>
      p.title.toLowerCase().includes(query.toLowerCase()) ||
      p.category.toLowerCase().includes(query.toLowerCase()) ||
      p.client.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.18 }}
          className="cmd-backdrop"
          onClick={(e) => {
            if (e.target === e.currentTarget) onClose();
          }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 12 }}
            transition={{ type: 'spring', stiffness: 360, damping: 28 }}
            className="cmd-modal"
            role="dialog"
            aria-modal="true"
            aria-label="Executive Directory & Command Palette"
          >
            <div className="cmd-search-bar">
              <Search size={16} className="cmd-search-icon" />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search client case studies, service lines, or actions..."
                className="cmd-input"
              />
              <button
                type="button"
                onClick={onClose}
                className="icon-chip font-mono"
                aria-label="Close Command Palette"
              >
                <X size={13} />
                <span>ESC</span>
              </button>
            </div>

            <div className="cmd-results">
              {/* Case Studies Group */}
              <div className="cmd-group-title font-mono">
                <Layers size={12} />
                <span>CLIENT ENGAGEMENTS &amp; CASE BRIEFS ({filteredProjects.length})</span>
              </div>

              {filteredProjects.map((project) => (
                <button
                  key={project.id}
                  type="button"
                  onClick={() => {
                    onSelectProject(projects.indexOf(project));
                    onClose();
                  }}
                  className="cmd-item"
                >
                  <div className="cmd-item-left">
                    <span className="font-mono cmd-item-id">{project.id}</span>
                    <div>
                      <div className="font-serif cmd-item-title">{project.title}</div>
                      <div className="font-mono cmd-item-sub">
                        {project.category} • {project.client}
                      </div>
                    </div>
                  </div>
                  <span className="font-mono cmd-item-badge">
                    {project.impact} <ArrowUpRight size={13} />
                  </span>
                </button>
              ))}

              {/* Corporate Themes & Actions */}
              <div className="cmd-group-title font-mono" style={{ marginTop: '0.85rem' }}>
                <Palette size={12} />
                <span>CORPORATE PALETTES &amp; QUICK ACTIONS</span>
              </div>

              <button
                type="button"
                onClick={() => {
                  onSelectTheme('atelier');
                  onClose();
                }}
                className="cmd-item"
              >
                <span className="cmd-item-left">
                  <span className="theme-dot" style={{ background: '#B85A3A' }} />
                  <span>Activate Warm Executive Palette (Light)</span>
                </span>
                <span className="font-mono cmd-item-sub">Theme</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  onSelectTheme('obsidian');
                  onClose();
                }}
                className="cmd-item"
              >
                <span className="cmd-item-left">
                  <span className="theme-dot" style={{ background: '#141413' }} />
                  <span>Activate Obsidian Dark Palette</span>
                </span>
                <span className="font-mono cmd-item-sub">Theme</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  onSelectTheme('botanical');
                  onClose();
                }}
                className="cmd-item"
              >
                <span className="cmd-item-left">
                  <span className="theme-dot" style={{ background: '#2D6A4F' }} />
                  <span>Activate Emerald Capital Palette</span>
                </span>
                <span className="font-mono cmd-item-sub">Theme</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  onToggleGrid();
                  onClose();
                }}
                className="cmd-item"
              >
                <span className="cmd-item-left">
                  <Grid size={14} />
                  <span>Toggle Structural Blueprint Grid</span>
                </span>
                <span className="font-mono cmd-item-sub">Shortcut: G</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  onCopyEmail();
                  onClose();
                }}
                className="cmd-item"
              >
                <span className="cmd-item-left">
                  <Copy size={14} />
                  <span>Copy Advisory Desk Email (advisory@lifeart.business)</span>
                </span>
                <span className="font-mono cmd-item-sub">Clipboard</span>
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
