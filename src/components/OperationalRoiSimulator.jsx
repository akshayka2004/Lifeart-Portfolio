import React, { useState } from 'react';
import { Calculator, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function OperationalRoiSimulator({ onInquire }) {
  const [headcount, setHeadcount] = useState(250);
  const [manualTime, setManualTime] = useState(40);
  const [tier, setTier] = useState('full'); // 'bpo' | 'fna' | 'full'

  const savingsRate = tier === 'full' ? 0.38 : tier === 'fna' ? 0.32 : 0.28;
  const blendedCostPerHead = 45000; // in USD
  const totalCost = headcount * blendedCostPerHead;
  const annualSavings = Math.round(totalCost * (manualTime / 100) * savingsRate);
  const hoursReclaimed = Math.round(headcount * 1800 * (manualTime / 100) * savingsRate);

  const formattedSavings =
    annualSavings >= 1000000
      ? `$${(annualSavings / 1000000).toFixed(2)}M`
      : `$${Math.round(annualSavings / 1000)}K`;

  return (
    <div 
      style={{
        backgroundColor: '#FFFFFF',
        border: '1px solid var(--color-border)',
        padding: 'clamp(1.5rem, 4vw, 2.75rem)',
        marginTop: '2.5rem'
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '2rem' }}>
        <div>
          <span className="editorial-eyebrow-dark">
            <Calculator size={13} style={{ display: 'inline', marginRight: 4 }} />
            EXECUTIVE ROI &amp; EFFICIENCY SIMULATOR
          </span>
          <h3 className="font-serif" style={{ fontSize: 'clamp(1.75rem, 3.2vw, 2.5rem)', color: 'var(--color-forest)', fontWeight: 600 }}>
            Model Your Operational Cost Rationalization
          </h3>
          <p style={{ color: 'var(--color-muted)', fontSize: '0.92rem', maxWidth: '620px', marginTop: '0.35rem' }}>
            Adjust your enterprise parameters below to model projected annual operational expenditure reductions and labor hours redirected to core strategic growth.
          </p>
        </div>

        <div style={{ padding: '0.4rem 0.85rem', backgroundColor: 'var(--color-ivory)', border: '1px solid var(--color-champagne)', fontSize: '0.75rem', fontWeight: 600, color: 'var(--color-forest)', letterSpacing: '0.04em' }}>
          VERIFIED EXECUTIVE MODEL
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2.5rem', alignItems: 'center' }}>
        {/* Controls */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontSize: '0.85rem', fontWeight: 600 }}>
              <span style={{ color: 'var(--color-forest)' }}>Operational Headcount</span>
              <span className="font-serif" style={{ color: 'var(--color-forest)', fontSize: '1.15rem' }}>{headcount} Personnel</span>
            </div>
            <input
              type="range"
              min="25"
              max="1500"
              step="25"
              value={headcount}
              onChange={(e) => setHeadcount(Number(e.target.value))}
              style={{ width: '100%', accentColor: 'var(--color-forest)', cursor: 'pointer' }}
            />
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.7rem', color: 'var(--color-muted)', marginTop: '0.25rem' }}>
              <span>25 FTE</span>
              <span>1,500 FTE</span>
            </div>
          </div>

          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontSize: '0.85rem', fontWeight: 600 }}>
              <span style={{ color: 'var(--color-forest)' }}>Repetitive / Manual Process Load</span>
              <span className="font-serif" style={{ color: 'var(--color-forest)', fontSize: '1.15rem' }}>{manualTime}% of Workload</span>
            </div>
            <input
              type="range"
              min="15"
              max="70"
              step="5"
              value={manualTime}
              onChange={(e) => setManualTime(Number(e.target.value))}
              style={{ width: '100%', accentColor: 'var(--color-forest)', cursor: 'pointer' }}
            />
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.7rem', color: 'var(--color-muted)', marginTop: '0.25rem' }}>
              <span>15% (Low)</span>
              <span>70% (High Friction)</span>
            </div>
          </div>

          <div>
            <label className="executive-label">Transformation Scope Tier</label>
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              {[
                { id: 'bpo', label: 'Managed BPO' },
                { id: 'fna', label: 'Finance & Tax Desk' },
                { id: 'full', label: 'Full Shared Services' }
              ].map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setTier(item.id)}
                  style={{
                    fontSize: '0.78rem',
                    padding: '0.55rem 0.95rem',
                    border: tier === item.id ? '1px solid var(--color-forest)' : '1px solid var(--color-border)',
                    backgroundColor: tier === item.id ? 'var(--color-forest)' : '#FFFFFF',
                    color: tier === item.id ? 'var(--color-ivory)' : 'var(--color-charcoal)',
                    fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Output Dossier */}
        <div 
          style={{
            backgroundColor: 'var(--color-forest)',
            color: 'var(--color-ivory)',
            padding: '2rem',
            border: '1px solid var(--color-champagne-subtle)'
          }}
        >
          <span style={{ fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-champagne)', display: 'block', marginBottom: '0.5rem' }}>
            PROJECTED ANNUAL OPEX REDUCTION
          </span>

          <div className="font-serif" style={{ fontSize: 'clamp(2.75rem, 5vw, 4rem)', lineHeight: 1.05, color: 'var(--color-champagne)', fontWeight: 500, marginBottom: '1.25rem' }}>
            {formattedSavings}
            <span style={{ fontSize: '1rem', color: 'rgba(243, 240, 232, 0.7)', marginLeft: '0.5rem', fontWeight: 400 }}>/ year</span>
          </div>

          <div style={{ borderTop: '1px solid rgba(243, 240, 232, 0.15)', paddingTop: '1.25rem', display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem', marginBottom: '1.5rem' }}>
            <div>
              <span style={{ fontSize: '0.7rem', color: 'rgba(243, 240, 232, 0.7)', display: 'block' }}>RECLAIMED CAPACITY</span>
              <strong className="font-serif" style={{ fontSize: '1.35rem', color: 'var(--color-ivory)' }}>
                {hoursReclaimed.toLocaleString()} hrs
              </strong>
            </div>

            <div>
              <span style={{ fontSize: '0.7rem', color: 'rgba(243, 240, 232, 0.7)', display: 'block' }}>EST. PAYBACK PERIOD</span>
              <strong className="font-serif" style={{ fontSize: '1.35rem', color: 'var(--color-champagne)' }}>
                3.8 Months
              </strong>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.75rem' }}>
            <span style={{ fontSize: '0.72rem', color: 'rgba(243, 240, 232, 0.65)' }}>
              * Based on audited client engagements across multi-location hubs.
            </span>
            <button
              onClick={() => onInquire(`Model: ${headcount} FTE, ${manualTime}% load, ${formattedSavings}/yr savings`)}
              className="btn-executive-primary"
              style={{ padding: '0.65rem 1.25rem', fontSize: '0.78rem' }}
            >
              <span>Request Formal Audit</span>
              <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

