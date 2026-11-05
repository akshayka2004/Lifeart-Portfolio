import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Building2, 
  Stethoscope, 
  Scissors, 
  GraduationCap, 
  Hotel, 
  Factory, 
  ArrowRight, 
  CheckCircle2, 
  Layers 
} from 'lucide-react';

export default function InteractiveProductMatrix({ onSelectService }) {
  const [activeTab, setActiveTab] = useState('production');

  const products = {
    production: {
      title: 'Production & Manufacturing ERP',
      badge: 'INDUSTRIAL AUTOMATION',
      icon: Factory,
      tagline: 'Precision shopfloor planning, live bill of materials (BOM), and scrap minimization.',
      highlights: [
        'Multi-level bill of materials (BOM) creation and real-time cost tracking',
        'Automatic work order generation and shift-wise dispatch schedules',
        'QR/Barcode raw material verification to eliminate inventory discrepancies',
        'Machine uptime, preventive maintenance schedules, and OEE telemetry'
      ],
      metrics: '34% Lower Lead Time • 22% Reduced Scrap',
      slug: 'production-management-system'
    },
    hospital: {
      title: 'Hospital & Healthcare Administration Suite',
      badge: 'HEALTHCARE COMPLIANCE',
      icon: Stethoscope,
      tagline: 'Unified patient lifecycle, pharmacy billing, laboratory automation, and bed management.',
      highlights: [
        'Paperless electronic medical records (EMR) with strict role authorization',
        'In-house pharmacy billing with batch expiration warnings & auto-reorder',
        'Diagnostic laboratory test results dispatch via SMS and patient portal',
        'IPD ward bed allocation, nurse station rounds, and emergency tracking'
      ],
      metrics: '8-Min Discharge • 100% Billing Accuracy',
      slug: 'hospital-management-system'
    },
    retail: {
      title: 'Boutique, Salon & Spa Management POS',
      badge: 'RETAIL & LIFESTYLE',
      icon: Scissors,
      tagline: 'Omnichannel cloud POS, appointment booking calendar, and multi-store inventory sync.',
      highlights: [
        'Real-time stylist & therapist appointment scheduling with automated reminders',
        'Multi-branch inventory synchronization with automated replenishment alerts',
        'Customer membership loyalty points, gift cards, and visit history analytics',
        'Integrated thermal barcode tag printing and instant card/UPI checkout'
      ],
      metrics: '41% Higher Re-visits • Zero Overbooking',
      slug: 'boutique-management-system'
    },
    education: {
      title: 'School & Educational Institute ERP',
      badge: 'ACADEMIC ADMINISTRATION',
      icon: GraduationCap,
      tagline: 'Complete student lifecycles, automated fee collection, and parent-teacher communication.',
      highlights: [
        'Online admission portal with document uploads and merit list processing',
        'Automated fee receipts, bank integration, and SMS payment reminders',
        'Exam timetable generator, automated report card creation, and grading',
        'GPS-enabled school bus fleet tracking and student attendance RFID'
      ],
      metrics: '99% Fee Recovery • 60% Admin Time Saved',
      slug: 'school-management-solution'
    },
    hospitality: {
      title: 'Hotel, Resort & Contracting Management',
      badge: 'HOSPITALITY & CONTRACTING',
      icon: Hotel,
      tagline: 'Seamless room reservations, front-desk billing, and contractor milestone project accounting.',
      highlights: [
        'Direct booking engine synchronization with OTA channel managers',
        'Housekeeping room status updates and restaurant POS integration',
        'Engineering contractor milestone tracking, labor muster, and material audits',
        'Comprehensive profit & loss auditing per property or project phase'
      ],
      metrics: 'Zero Double-Booking • Live Job Costing',
      slug: 'hotel-resort-management-system'
    }
  };

  const current = products[activeTab];
  const IconComponent = current.icon;

  return (
    <div 
      style={{
        backgroundColor: '#FFFFFF',
        border: '1px solid var(--color-border)',
        padding: 'clamp(1.5rem, 4vw, 3rem)',
        marginTop: '2.5rem'
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '2rem' }}>
        <div>
          <span className="editorial-eyebrow-dark">
            <Layers size={13} style={{ display: 'inline', marginRight: 4 }} />
            FEATURED ENTERPRISE PRODUCTS
          </span>
          <h3 className="font-serif" style={{ fontSize: 'clamp(1.85rem, 3.5vw, 2.75rem)', color: 'var(--color-forest)', fontWeight: 600 }}>
            Specialized Software for Every Industry
          </h3>
          <p style={{ color: 'var(--color-muted)', fontSize: '0.95rem', maxWidth: '640px', marginTop: '0.35rem' }}>
            Lifeart Group engineers industry-specific management systems tailored to the exact workflows of hospitals, factories, schools, retail boutiques, and hotels.
          </p>
        </div>

        <div style={{ padding: '0.4rem 0.85rem', backgroundColor: 'var(--color-ivory)', border: '1px solid var(--color-champagne)', fontSize: '0.75rem', fontWeight: 600, color: 'var(--color-forest)' }}>
          LIVE DEMO AVAILABLE
        </div>
      </div>

      {/* Tabs Row */}
      <div 
        style={{
          display: 'flex',
          gap: '0.5rem',
          overflowX: 'auto',
          paddingBottom: '0.5rem',
          borderBottom: '1px solid var(--color-border)',
          marginBottom: '2rem'
        }}
      >
        {[
          { id: 'production', label: 'Manufacturing & ERP' },
          { id: 'hospital', label: 'Hospital Administration' },
          { id: 'retail', label: 'Boutique & Salon POS' },
          { id: 'education', label: 'School Management' },
          { id: 'hospitality', label: 'Hotel & Contracting' }
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            style={{
              padding: '0.65rem 1.25rem',
              fontSize: '0.85rem',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.04em',
              whiteSpace: 'nowrap',
              borderBottom: activeTab === tab.id ? '2px solid var(--color-forest)' : '2px solid transparent',
              color: activeTab === tab.id ? 'var(--color-forest)' : 'var(--color-muted)',
              backgroundColor: activeTab === tab.id ? 'var(--color-ivory-surface)' : 'transparent',
              transition: 'all 0.2s ease',
              cursor: 'pointer'
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Animated Product Card Dossier */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.35 }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2.5rem',
            alignItems: 'center'
          }}
        >
          {/* Left Details */}
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-forest)', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.1em', marginBottom: '0.65rem' }}>
              <IconComponent size={16} />
              <span>{current.badge}</span>
            </div>

            <h4 className="font-serif" style={{ fontSize: 'clamp(1.75rem, 3vw, 2.35rem)', color: 'var(--color-forest)', fontWeight: 600, lineHeight: 1.15, marginBottom: '0.75rem' }}>
              {current.title}
            </h4>

            <p style={{ color: 'var(--color-muted)', fontSize: '1rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
              {current.tagline}
            </p>

            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2rem' }}>
              {current.highlights.map((item, idx) => (
                <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem', fontSize: '0.92rem', color: 'var(--color-charcoal)' }}>
                  <CheckCircle2 size={16} style={{ color: 'var(--color-champagne)', flexShrink: 0, marginTop: '0.2rem' }} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <button
              onClick={() => onSelectService(current.slug)}
              className="btn-executive-dark-outline"
            >
              <span>Explore {current.title}</span>
              <ArrowRight size={15} />
            </button>
          </div>

          {/* Right Live Metrics Frame */}
          <div 
            style={{
              backgroundColor: 'var(--color-forest)',
              color: 'var(--color-ivory)',
              padding: '2.5rem 2rem',
              border: '1px solid var(--color-champagne-subtle)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              minHeight: '320px'
            }}
          >
            <div>
              <span style={{ fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--color-champagne)', display: 'block', marginBottom: '0.75rem' }}>
                DOCUMENTED PERFORMANCE IMPACT
              </span>
              <div className="font-serif" style={{ fontSize: 'clamp(1.85rem, 3.2vw, 2.65rem)', color: 'var(--color-champagne)', fontWeight: 500, lineHeight: 1.15, marginBottom: '1rem' }}>
                {current.metrics}
              </div>
              <p style={{ color: 'rgba(243, 240, 232, 0.75)', fontSize: '0.92rem', lineHeight: 1.6 }}>
                Configured with modular architecture. Our engineering team conducts on-site requirement audits in Trivandrum, Kerala, and remotely across India and the Middle East.
              </p>
            </div>

            <div style={{ borderTop: '1px solid rgba(243, 240, 232, 0.15)', paddingTop: '1.25rem', marginTop: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
              <span style={{ fontSize: '0.78rem', color: 'var(--color-champagne)' }}>
                Official Lifeart Group Software
              </span>
              <span style={{ fontSize: '0.78rem', color: 'rgba(243, 240, 232, 0.6)' }}>
                24/7 SLA Support
              </span>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

