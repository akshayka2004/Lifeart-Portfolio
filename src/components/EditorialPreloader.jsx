import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function EditorialPreloader({ onComplete }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 400);
          return 100;
        }
        const diff = Math.floor(Math.random() * 18) + 8;
        return Math.min(prev + diff, 100);
      });
    }, 120);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        backgroundColor: '#142C26',
        color: '#F3F0E8',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: 'clamp(2rem, 5vw, 4rem)'
      }}
    >
      {/* Top Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
          <span style={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: '#C3AA7B' }} />
          <span className="font-sans" style={{ fontSize: '0.78rem', letterSpacing: '0.12em', color: '#C3AA7B', textTransform: 'uppercase' }}>
            LIFEART GROUP // ENTERPRISE INITIALIZATION
          </span>
        </div>
        <span className="font-sans" style={{ fontSize: '0.78rem', color: 'rgba(243, 240, 232, 0.6)' }}>
          TRIVANDRUM, INDIA
        </span>
      </div>

      {/* Centerpiece Wordmark */}
      <div style={{ maxWidth: '800px' }}>
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-serif"
          style={{
            fontSize: 'clamp(2.75rem, 7vw, 5.5rem)',
            lineHeight: 1.05,
            fontWeight: 500,
            color: '#F3F0E8',
            marginBottom: '1rem'
          }}
        >
          Lifeart <em style={{ fontStyle: 'italic', color: '#C3AA7B', fontWeight: 400 }}>Group</em>
        </motion.div>
        <p className="font-sans" style={{ fontSize: 'clamp(0.95rem, 1.4vw, 1.15rem)', color: 'rgba(243, 240, 232, 0.75)', lineHeight: 1.6 }}>
          Powering enterprise digital transformation, industry-specific ERP systems, and business consulting.
        </p>
      </div>

      {/* Bottom Progress Bar & Telemetry */}
      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.65rem', fontSize: '0.85rem' }}>
          <span className="font-sans" style={{ color: 'rgba(243, 240, 232, 0.6)', textTransform: 'uppercase', letterSpacing: '0.08em', fontSize: '0.75rem' }}>
            SYNCHRONIZING ENTERPRISE PLATFORMS
          </span>
          <span className="font-serif" style={{ fontSize: '1.65rem', color: '#C3AA7B', fontWeight: 600 }}>
            {progress}%
          </span>
        </div>
        <div style={{ width: '100%', height: '2px', backgroundColor: 'rgba(243, 240, 232, 0.15)', overflow: 'hidden' }}>
          <motion.div
            style={{
              height: '100%',
              backgroundColor: '#C3AA7B',
              width: `${progress}%`
            }}
            transition={{ ease: 'easeOut', duration: 0.2 }}
          />
        </div>
      </div>
    </motion.div>
  );
}

