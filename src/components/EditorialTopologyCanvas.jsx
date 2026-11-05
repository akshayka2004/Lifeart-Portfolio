import React, { useEffect, useRef, useState } from 'react';
import { Shield, Activity, Globe } from 'lucide-react';

export default function EditorialTopologyCanvas() {
  const canvasRef = useRef(null);
  const [activePreset, setActivePreset] = useState('mesh');
  const [telemetry, setTelemetry] = useState({ hubs: '14 Active Hubs', sla: '99.8% SLA', latency: 'Sub-48h Invoicing' });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animId;
    let time = 0;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();
    window.addEventListener('resize', resize);

    // Node locations on an orbital projection
    const nodes = [
      { x: 0.22, y: 0.35, label: 'Singapore' },
      { x: 0.48, y: 0.25, label: 'Frankfurt' },
      { x: 0.72, y: 0.40, label: 'London' },
      { x: 0.85, y: 0.65, label: 'Mumbai' },
      { x: 0.35, y: 0.75, label: 'Dubai' },
      { x: 0.60, y: 0.82, label: 'Tokyo' },
      { x: 0.15, y: 0.60, label: 'New York' }
    ];

    const render = () => {
      time += 0.015;
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      ctx.clearRect(0, 0, width, height);

      // Draw delicate architectural grid lines
      ctx.strokeStyle = 'rgba(195, 170, 123, 0.15)';
      ctx.lineWidth = 1;

      // Fine concentric circles representing global reach
      const cx = width / 2;
      const cy = height / 2;
      [80, 140, 200].forEach((r) => {
        ctx.beginPath();
        ctx.arc(cx, cy, r, 0, Math.PI * 2);
        ctx.stroke();
      });

      // Axis crosshairs
      ctx.beginPath();
      ctx.moveTo(cx, 15);
      ctx.lineTo(cx, height - 15);
      ctx.moveTo(15, cy);
      ctx.lineTo(width - 15, cy);
      ctx.stroke();

      // Connecting lines between operational hubs
      ctx.strokeStyle = 'rgba(195, 170, 123, 0.4)';
      ctx.lineWidth = 0.8;
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const n1 = nodes[i];
          const n2 = nodes[j];
          const x1 = n1.x * width;
          const y1 = n1.y * height;
          const x2 = n2.x * width;
          const y2 = n2.y * height;

          ctx.beginPath();
          ctx.moveTo(x1, y1);
          ctx.lineTo(x2, y2);
          ctx.stroke();

          // Data flow packet traveling along line
          if ((i + j) % 2 === 0) {
            const t = (time * 0.8 + (i * 0.3)) % 1;
            const px = x1 + (x2 - x1) * t;
            const py = y1 + (y2 - y1) * t;
            ctx.fillStyle = '#C3AA7B';
            ctx.beginPath();
            ctx.arc(px, py, 2, 0, Math.PI * 2);
            ctx.fill();
          }
        }
      }

      // Draw nodes
      nodes.forEach((n, idx) => {
        const x = n.x * width;
        const y = n.y * height;
        const pulse = Math.sin(time * 3 + idx) * 2;

        // Outer ring
        ctx.strokeStyle = 'rgba(195, 170, 123, 0.6)';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(x, y, 6 + pulse, 0, Math.PI * 2);
        ctx.stroke();

        // Inner solid
        ctx.fillStyle = '#F3F0E8';
        ctx.beginPath();
        ctx.arc(x, y, 3, 0, Math.PI * 2);
        ctx.fill();

        // City labels
        ctx.fillStyle = 'rgba(243, 240, 232, 0.85)';
        ctx.font = '10px "DM Sans", sans-serif';
        ctx.fillText(n.label, x + 10, y + 3);
      });

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, [activePreset]);

  return (
    <div 
      style={{
        border: '1px solid rgba(195, 170, 123, 0.35)',
        backgroundColor: 'rgba(20, 44, 38, 0.65)',
        padding: '1.25rem',
        marginTop: '1.5rem',
        position: 'relative'
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.75rem', color: 'var(--color-champagne)', fontWeight: 600, letterSpacing: '0.06em' }}>
          <span style={{ width: 7, height: 7, borderRadius: '50%', backgroundColor: 'var(--color-champagne)', display: 'inline-block' }} />
          <span>MANAGED SHARED SERVICES TOPOLOGY</span>
        </div>

        <div style={{ display: 'flex', gap: '0.35rem' }}>
          {['mesh', 'flow'].map((p) => (
            <button
              key={p}
              onClick={() => setActivePreset(p)}
              style={{
                fontSize: '0.68rem',
                textTransform: 'uppercase',
                padding: '0.2rem 0.55rem',
                border: activePreset === p ? '1px solid var(--color-champagne)' : '1px solid rgba(243, 240, 232, 0.2)',
                backgroundColor: activePreset === p ? 'var(--color-champagne)' : 'transparent',
                color: activePreset === p ? 'var(--color-forest)' : 'rgba(243, 240, 232, 0.8)',
                fontWeight: 600
              }}
            >
              {p}
            </button>
          ))}
        </div>
      </div>

      <div style={{ height: '220px', width: '100%', position: 'relative' }}>
        <canvas ref={canvasRef} style={{ width: '100%', height: '100%', display: 'block' }} />
      </div>

      <div 
        style={{
          borderTop: '1px solid rgba(195, 170, 123, 0.2)',
          paddingTop: '0.75rem',
          marginTop: '0.5rem',
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '0.5rem',
          fontSize: '0.75rem',
          color: 'rgba(243, 240, 232, 0.75)'
        }}
      >
        <div>
          <span style={{ fontSize: '0.65rem', display: 'block', color: 'var(--color-champagne)' }}>DELIVERY NODES</span>
          <strong>{telemetry.hubs}</strong>
        </div>
        <div>
          <span style={{ fontSize: '0.65rem', display: 'block', color: 'var(--color-champagne)' }}>SLA ACCURACY</span>
          <strong>{telemetry.sla}</strong>
        </div>
        <div>
          <span style={{ fontSize: '0.65rem', display: 'block', color: 'var(--color-champagne)' }}>VELOCITY</span>
          <strong>{telemetry.latency}</strong>
        </div>
      </div>
    </div>
  );
}

