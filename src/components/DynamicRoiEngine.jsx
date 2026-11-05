import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calculator, ArrowRight, CheckCircle2, TrendingUp, DollarSign, Clock, Layers } from 'lucide-react';

export default function DynamicRoiEngine() {
  const [headcount, setHeadcount] = useState(320);
  const [manualTime, setManualTime] = useState(45); // percentage of time on repetitive tasks
  const [avgSalary, setAvgSalary] = useState(65); // $k per employee
  const [automationRate, setAutomationRate] = useState(70); // % target automation

  // Calculations
  const totalPayroll = headcount * avgSalary * 1000;
  const wasteSpend = totalPayroll * (manualTime / 100);
  const potentialSavings = Math.round(wasteSpend * (automationRate / 100));
  const hoursReclaimed = Math.round((headcount * 2000 * (manualTime / 100) * (automationRate / 100)) / 1000) * 1000;
  const paybackMonths = Math.max(2.4, Number((3.6 - (headcount / 1000)).toFixed(1)));

  return (
    <div className="glass-panel" style={{ padding: '2rem 1.5rem', border: '1px solid rgba(0, 240, 255, 0.25)' }}>
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '2rem' }}>
        <div>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: 'var(--cyan-primary)', fontSize: '0.78rem', fontFamily: 'var(--font-mono)', marginBottom: '0.35rem' }}>
            <Calculator size={14} />
            <span>ENTERPRISE VALUE ACCELERATOR</span>
          </div>
          <h3 className="font-display" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.1rem)', fontWeight: 700, color: '#FFFFFF' }}>
            Interactive Value &amp; ROI Calculator
          </h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', maxWidth: '620px' }}>
            Calibrate your organization's workforce metrics below to model realistic OpEx reductions, manual hours reclaimed, and accelerated payback timelines.
          </p>
        </div>

        <div className="status-pill">
          <span className="live-pulse" />
          <span>Real-Time Modeling</span>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', alignItems: 'center' }}>
        {/* Sliders Input Panel */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.4rem' }}>
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.4rem', fontSize: '0.85rem' }}>
              <span style={{ color: 'var(--text-secondary)' }}>Operational Headcount</span>
              <strong className="font-mono text-cyan" style={{ fontSize: '0.95rem' }}>{headcount.toLocaleString()} team members</strong>
            </div>
            <input
              type="range"
              min="20"
              max="2500"
              step="10"
              value={headcount}
              onChange={(e) => setHeadcount(Number(e.target.value))}
            />
          </div>

          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.4rem', fontSize: '0.85rem' }}>
              <span style={{ color: 'var(--text-secondary)' }}>Manual/Repetitive Task Load</span>
              <strong className="font-mono" style={{ color: '#A78BFA', fontSize: '0.95rem' }}>{manualTime}% of workweek</strong>
            </div>
            <input
              type="range"
              min="15"
              max="80"
              step="5"
              value={manualTime}
              onChange={(e) => setManualTime(Number(e.target.value))}
            />
          </div>

          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.4rem', fontSize: '0.85rem' }}>
              <span style={{ color: 'var(--text-secondary)' }}>Target Managed Automation Rate</span>
              <strong className="font-mono text-emerald" style={{ fontSize: '0.95rem' }}>{automationRate}% optimization</strong>
            </div>
            <input
              type="range"
              min="30"
              max="90"
              step="5"
              value={automationRate}
              onChange={(e) => setAutomationRate(Number(e.target.value))}
            />
          </div>

          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.4rem', fontSize: '0.85rem' }}>
              <span style={{ color: 'var(--text-secondary)' }}>Blended Fully-Loaded Salary</span>
              <strong className="font-mono" style={{ color: '#FFFFFF', fontSize: '0.95rem' }}>${avgSalary}K / year</strong>
            </div>
            <input
              type="range"
              min="35"
              max="150"
              step="5"
              value={avgSalary}
              onChange={(e) => setAvgSalary(Number(e.target.value))}
            />
          </div>
        </div>

        {/* Dynamic Visualized Impact Output Box */}
        <div 
          style={{
            background: 'linear-gradient(145deg, rgba(11, 17, 36, 0.95) 0%, rgba(20, 31, 58, 0.85) 100%)',
            border: '1px solid rgba(0, 240, 255, 0.35)',
            borderRadius: '1.25rem',
            padding: '2rem 1.75rem',
            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.5), inset 0 0 30px rgba(0, 240, 255, 0.05)',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          <div style={{ position: 'absolute', top: '-20px', right: '-20px', width: '120px', height: '120px', background: 'radial-gradient(circle, rgba(0, 240, 255, 0.25) 0%, transparent 70%)', filter: 'blur(25px)' }} />

          <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', marginBottom: '0.5rem' }}>
            ESTIMATED ANNUAL NET VALUE UNLOCKED
          </div>

          <motion.div 
            key={potentialSavings}
            initial={{ scale: 0.95, opacity: 0.8 }}
            animate={{ scale: 1, opacity: 1 }}
            className="font-display gradient-text"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 3.8rem)', fontWeight: 800, lineHeight: 1.1, marginBottom: '1.25rem' }}
          >
            ${(potentialSavings / 1000000).toFixed(2)}M
            <span style={{ fontSize: '1rem', color: 'var(--text-secondary)', fontWeight: 500, marginLeft: '0.5rem' }}>/ year</span>
          </motion.div>

          {/* Sub-Metrics Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem', borderTop: '1px solid var(--border-subtle)', paddingTop: '1.25rem' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: 'var(--cyan-primary)', fontSize: '0.78rem', marginBottom: '0.2rem' }}>
                <Clock size={13} />
                <span>ANNUAL RECLAIMED HOURS</span>
              </div>
              <strong className="font-mono" style={{ fontSize: '1.25rem', color: '#FFFFFF' }}>
                {hoursReclaimed.toLocaleString()} hrs
              </strong>
            </div>

            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: 'var(--emerald-accent)', fontSize: '0.78rem', marginBottom: '0.2rem' }}>
                <TrendingUp size={13} />
                <span>PROJECTED PAYBACK</span>
              </div>
              <strong className="font-mono text-emerald" style={{ fontSize: '1.25rem' }}>
                ~{paybackMonths} Months
              </strong>
            </div>
          </div>

          <div style={{ marginTop: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.75rem', flexWrap: 'wrap' }}>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
              <CheckCircle2 size={13} className="text-cyan" /> Based on 150+ audited client deployments
            </span>
            <a 
              href="#contact" 
              className="btn-glow" 
              style={{ padding: '0.65rem 1.25rem', fontSize: '0.8rem' }}
            >
              <span>Request Custom Audit</span>
              <ArrowRight size={13} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

