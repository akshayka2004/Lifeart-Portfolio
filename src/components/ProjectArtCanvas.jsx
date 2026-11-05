import React from 'react';
import { motion } from 'framer-motion';

export default function ProjectArtCanvas({ type }) {
  switch (type) {
    case 'audio-dial':
      return (
        <svg className="project-visual-art" viewBox="0 0 500 240" preserveAspectRatio="xMidYMid slice">
          <motion.circle
            cx="390"
            cy="120"
            r="115"
            stroke="white"
            strokeWidth="1"
            fill="none"
            animate={{ scale: [1, 1.08, 1], opacity: [0.4, 0.85, 0.4] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.circle
            cx="390"
            cy="120"
            r="78"
            stroke="white"
            strokeWidth="0.9"
            strokeDasharray="6 6"
            fill="none"
            animate={{ rotate: 360 }}
            style={{ originX: '390px', originY: '120px' }}
            transition={{ duration: 24, repeat: Infinity, ease: 'linear' }}
          />
          <circle cx="390" cy="120" r="38" stroke="white" strokeWidth="1.25" fill="none" />
          <motion.path
            d="M 20 190 Q 210 35 480 175"
            stroke="white"
            strokeWidth="1.2"
            fill="none"
            initial={{ pathLength: 0.3 }}
            animate={{ pathLength: [0.35, 1, 0.35] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          />
        </svg>
      );

    case 'botanical-blend':
      return (
        <svg className="project-visual-art" viewBox="0 0 500 240" preserveAspectRatio="xMidYMid slice">
          <motion.rect
            x="320"
            y="35"
            width="135"
            height="135"
            rx="67.5"
            stroke="white"
            strokeWidth="1"
            fill="none"
            animate={{ y: [35, 22, 35], rotate: [0, 12, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.circle
            cx="360"
            cy="125"
            r="46"
            stroke="white"
            strokeWidth="1"
            fill="none"
            animate={{ scale: [1, 1.14, 1] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          />
          <line x1="40" y1="200" x2="450" y2="35" stroke="white" strokeWidth="0.8" strokeDasharray="4 4" />
        </svg>
      );

    case 'telemetry-wave':
      return (
        <svg className="project-visual-art" viewBox="0 0 500 240" preserveAspectRatio="xMidYMid slice">
          <motion.path
            d="M 30 175 L 135 95 L 225 130 L 335 45 L 455 75"
            stroke="white"
            strokeWidth="1.75"
            fill="none"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          />
          <line x1="135" y1="95" x2="135" y2="230" stroke="white" strokeWidth="0.7" strokeDasharray="3 3" />
          <line x1="335" y1="45" x2="335" y2="230" stroke="white" strokeWidth="0.7" strokeDasharray="3 3" />
          <circle cx="335" cy="45" r="5" fill="white" />
          <circle cx="135" cy="95" r="4" fill="white" />
        </svg>
      );

    case 'kinetic-type':
      return (
        <svg className="project-visual-art" viewBox="0 0 500 240" preserveAspectRatio="xMidYMid slice">
          <motion.text
            x="305"
            y="165"
            fill="white"
            fontFamily="Instrument Serif, Georgia, serif"
            fontStyle="italic"
            fontSize="148"
            opacity="0.65"
            animate={{ x: [300, 315, 300] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          >
            Aa
          </motion.text>
          <line x1="0" y1="168" x2="500" y2="168" stroke="white" strokeWidth="0.8" strokeDasharray="4 4" />
          <line x1="0" y1="68" x2="500" y2="68" stroke="white" strokeWidth="0.5" strokeDasharray="2 4" />
        </svg>
      );

    case 'solar-arc':
      return (
        <svg className="project-visual-art" viewBox="0 0 500 240" preserveAspectRatio="xMidYMid slice">
          <polygon points="365,28 465,198 265,198" stroke="white" strokeWidth="1.15" fill="none" />
          <motion.circle
            cx="365"
            cy="138"
            r="48"
            stroke="white"
            strokeWidth="0.95"
            fill="none"
            animate={{ scale: [0.92, 1.08, 0.92] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
          />
        </svg>
      );

    default:
      return (
        <svg className="project-visual-art" viewBox="0 0 500 240" preserveAspectRatio="xMidYMid slice">
          <motion.rect
            x="320"
            y="34"
            width="110"
            height="155"
            stroke="white"
            strokeWidth="1"
            fill="none"
            animate={{ rotate: [-2, 2, -2] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          />
          <rect x="342" y="48" width="110" height="155" stroke="white" strokeWidth="0.8" fill="none" />
        </svg>
      );
  }
}

