import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calculator, TrendingUp, RotateCcw } from 'lucide-react';

export default function InteractiveAtelierLab() {
  const [headcount, setHeadcount] = useState(250);
  const [manualLoad, setManualLoad] = useState(42); // %
  const [serviceTier, setServiceTier] = useState('full'); // 'bpo' | 'automation' | 'full'
  const [activeQuarter, setActiveQuarter] = useState(7);

  const resetSimulator = () => {
    setHeadcount(250);
    setManualLoad(42);
    setServiceTier('full');
    setActiveQuarter(7);
  };

  // Calculate realistic annual savings & hours reclaimed
  const tierMultiplier =
    serviceTier === 'full' ? 1.35 : serviceTier === 'automation' ? 1.1 : 0.95;
  const annualSavings = Math.round(
    headcount * (manualLoad / 100) * 18500 * tierMultiplier
  );
  const hoursReclaimed = Math.round(
    headcount * (manualLoad / 100) * 620 * tierMultiplier
  );

  const formattedSavings =
    annualSavings >= 1000000
      ? `$${(annualSavings / 1000000).toFixed(2)}M`
      : `$${Math.round(annualSavings / 1000)}K`;

  const bars = Array.from({ length: 16 }, (_, i) => {
    const growthCurve = Math.min(96, 24 + i * 4.6 * tierMultiplier);
    const dist = Math.abs(i - activeQuarter);
    const boost = dist === 0 ? 8 : dist === 1 ? 4 : 0;
    return {
      index: i,
      height: Math.min(98, Math.max(18, growthCurve + boost))
    };
  });

  return (
    <div className="bento-card bento-span-3 interactive-lab-card">
      <div className="lab-header">
        <div>
          <span className="bento-tag font-mono">
            <Calculator size={12} style={{ display: 'inline', marginRight: 5 }} />
            04 / INTERACTIVE ENTERPRISE ROI &amp; EFFICIENCY SIMULATOR
          </span>
          <h3 className="bento-title font-serif">
            Estimate Your Operational Cost Savings &amp; Margin Expansion
          </h3>
        </div>
        <button
          type="button"
          onClick={resetSimulator}
          className="icon-chip font-mono"
          title="Reset Simulator Parameters"
        >
          <RotateCcw size={12} />
          <span>Reset</span>
        </button>
      </div>

      <div className="lab-grid">
        {/* Left: Interactive OpEx Savings Calculator */}
        <div className="lab-panel">
          <div className="lab-panel-meta font-mono">
            <span>PROJECTED ANNUAL IMPACT</span>
            <span>{hoursReclaimed.toLocaleString()} HRS RECLAIMED / YR</span>
          </div>

          <div className="specimen-stage">
            <motion.div
              key={formattedSavings}
              initial={{ scale: 0.94, opacity: 0.7 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              style={{ textAlign: 'center' }}
            >
              <div className="specimen-display font-serif italic" style={{ color: 'var(--accent)' }}>
                {formattedSavings} <span style={{ fontSize: '1.15rem', color: 'var(--ink-muted)' }}>/ yr saved</span>
              </div>
              <div className="font-mono" style={{ fontSize: '0.72rem', color: 'var(--ink-secondary)', marginTop: '0.35rem' }}>
                EST. 38% OPEX REDUCTION • 99.8% SLA BENCHMARK
              </div>
            </motion.div>
          </div>

          <div className="lab-controls">
            <label className="lab-slider-label font-mono">
              <span>Operational Headcount ({headcount})</span>
              <input
                type="range"
                min="50"
                max="1500"
                step="25"
                value={headcount}
                onChange={(e) => setHeadcount(parseInt(e.target.value, 10))}
              />
            </label>

            <label className="lab-slider-label font-mono">
              <span>Manual Process Load ({manualLoad}%)</span>
              <input
                type="range"
                min="15"
                max="75"
                step="5"
                value={manualLoad}
                onChange={(e) => setManualLoad(parseInt(e.target.value, 10))}
              />
            </label>

            <div className="lab-pill-row">
              <button
                type="button"
                onClick={() => setServiceTier('bpo')}
                className={`scope-btn font-mono ${serviceTier === 'bpo' ? 'selected' : ''}`}
              >
                Managed BPO
              </button>
              <button
                type="button"
                onClick={() => setServiceTier('automation')}
                className={`scope-btn font-mono ${serviceTier === 'automation' ? 'selected' : ''}`}
              >
                ERP &amp; Automation
              </button>
              <button
                type="button"
                onClick={() => setServiceTier('full')}
                className={`scope-btn font-mono ${serviceTier === 'full' ? 'selected' : ''}`}
              >
                Full Transformation
              </button>
            </div>
          </div>
        </div>

        {/* Right: 16-Milestone Efficiency & Margin Trajectory */}
        <div className="lab-panel">
          <div className="lab-panel-meta font-mono">
            <span>
              <TrendingUp size={12} style={{ display: 'inline', marginRight: 4 }} />
              EFFICIENCY VELOCITY CURVE (SCRUB TIMELINE)
            </span>
            <span>
              MONTH #{String(activeQuarter + 1).padStart(2, '0')} • +{Math.round(bars[activeQuarter].height * 0.65)}% ROI
            </span>
          </div>

          <div
            className="harmonic-bars-stage"
            onPointerMove={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              const ratio = Math.max(0, Math.min(0.99, (e.clientX - rect.left) / rect.width));
              setActiveQuarter(Math.floor(ratio * 16));
            }}
          >
            {bars.map((b) => (
              <div
                key={b.index}
                onClick={() => setActiveQuarter(b.index)}
                className="harmonic-bar-slot"
              >
                <motion.div
                  animate={{
                    height: `${b.height}%`,
                    backgroundColor:
                      b.index <= activeQuarter ? 'var(--accent)' : 'var(--border-strong)'
                  }}
                  transition={{
                    type: 'spring',
                    stiffness: 260,
                    damping: 20
                  }}
                  className="harmonic-bar"
                />
              </div>
            ))}
          </div>

          <p className="bento-desc" style={{ fontSize: '0.8rem', marginTop: '0.75rem' }}>
            Slide across the 16-month rollout curve above to inspect cumulative cost efficiency, automation adoption, and SLA stabilization.
          </p>
        </div>
      </div>
    </div>
  );
}
