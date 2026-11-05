import React, { useEffect, useRef, useState } from 'react';
import { Sparkles, ArrowUpRight, Globe, TrendingUp, ShieldCheck } from 'lucide-react';

export default function KineticSculpture({ onInspectFeatured }) {
  const canvasRef = useRef(null);
  const [mode, setMode] = useState('torus'); // 'torus' (Network) | 'harmonic' (Growth) | 'lattice' (Governance)
  const [telemetry, setTelemetry] = useState({ hubs: 18, efficiency: 38.4, sla: '99.8%' });
  const interactionRef = useRef({
    isDragging: false,
    targetRotX: 0.45,
    targetRotY: 0.65,
    rotX: 0.45,
    rotY: 0.65,
    lastX: 0,
    lastY: 0,
    pulse: 0
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let time = 0;

    const resize = () => {
      const rect = canvas.parentElement.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();
    window.addEventListener('resize', resize);

    const buildPoints = (currentMode, t) => {
      const pts = [];
      if (currentMode === 'torus') {
        const rings = 24;
        const segments = 16;
        const R = 76;
        const r = 32 + Math.sin(t * 1.4) * 6;
        for (let i = 0; i < rings; i++) {
          const u = (i / rings) * Math.PI * 2;
          for (let j = 0; j < segments; j++) {
            const v = (j / segments) * Math.PI * 2;
            const x = (R + r * Math.cos(v)) * Math.cos(u);
            const y = (R + r * Math.cos(v)) * Math.sin(u);
            const z = r * Math.sin(v);
            pts.push({ x, y, z, ring: i });
          }
        }
      } else if (currentMode === 'harmonic') {
        const rows = 16;
        const cols = 16;
        const span = 170;
        for (let i = 0; i < rows; i++) {
          for (let j = 0; j < cols; j++) {
            const nx = (i / (rows - 1) - 0.5) * span;
            const nz = (j / (cols - 1) - 0.5) * span;
            const dist = Math.sqrt(nx * nx + nz * nz);
            const ny = Math.sin(dist * 0.065 - t * 2.6) * 34 * Math.exp(-dist * 0.004);
            pts.push({ x: nx, y: ny, z: nz, ring: i });
          }
        }
      } else {
        const latSteps = 12;
        const lonSteps = 18;
        const radius = 92;
        for (let i = 0; i <= latSteps; i++) {
          const theta = (i * Math.PI) / latSteps;
          const sinTheta = Math.sin(theta);
          const cosTheta = Math.cos(theta);
          for (let j = 0; j < lonSteps; j++) {
            const phi = (j * 2 * Math.PI) / lonSteps;
            const modR = radius + Math.sin(theta * 4 + t * 2) * 5;
            pts.push({
              x: modR * sinTheta * Math.cos(phi),
              y: modR * cosTheta,
              z: modR * sinTheta * Math.sin(phi),
              ring: i
            });
          }
        }
      }
      return pts;
    };

    const render = () => {
      time += 0.018;
      const state = interactionRef.current;

      if (!state.isDragging) {
        state.targetRotY += 0.0055;
        state.targetRotX = 0.42 + Math.sin(time * 0.7) * 0.14;
      }

      state.rotX += (state.targetRotX - state.rotX) * 0.09;
      state.rotY += (state.targetRotY - state.rotY) * 0.09;
      state.pulse *= 0.92;

      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      const cx = width * 0.52;
      const cy = height * 0.5;

      ctx.clearRect(0, 0, width, height);

      // Subtle global network rings
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.11)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.arc(cx, cy, Math.min(width, height) * 0.36, 0, Math.PI * 2);
      ctx.stroke();

      ctx.setLineDash([4, 4]);
      ctx.beginPath();
      ctx.arc(cx, cy, Math.min(width, height) * 0.24, 0, Math.PI * 2);
      ctx.stroke();
      ctx.setLineDash([]);

      const points = buildPoints(mode, time);
      const cosX = Math.cos(state.rotX);
      const sinX = Math.sin(state.rotX);
      const cosY = Math.cos(state.rotY);
      const sinY = Math.sin(state.rotY);

      const projected = [];
      const fov = 320;

      for (let i = 0; i < points.length; i++) {
        const p = points[i];
        const x1 = p.x * cosY - p.z * sinY;
        const z1 = p.z * cosY + p.x * sinY;
        const y2 = p.y * cosX - z1 * sinX;
        const z2 = z1 * cosX + p.y * sinX;

        const scale = fov / (fov + z2 + 130);
        const sx = cx + x1 * scale;
        const sy = cy + y2 * scale;
        projected.push({ sx, sy, z: z2, scale, ring: p.ring });
      }

      ctx.lineWidth = 0.75;
      for (let i = 0; i < projected.length - 1; i++) {
        const a = projected[i];
        const b = projected[i + 1];
        if (a.ring === b.ring) {
          const alpha = Math.max(0.06, Math.min(0.42, (a.scale - 0.55) * 0.9));
          ctx.strokeStyle = `rgba(255, 248, 240, ${alpha})`;
          ctx.beginPath();
          ctx.moveTo(a.sx, a.sy);
          ctx.lineTo(b.sx, b.sy);
          ctx.stroke();
        }
      }

      for (let i = 0; i < projected.length; i++) {
        const p = projected[i];
        const alpha = Math.max(0.15, Math.min(0.95, (p.scale - 0.5) * 1.35));
        const radius = Math.max(1.1, p.scale * 2.1 + state.pulse * 1.5);
        ctx.fillStyle = i % 7 === 0 ? `rgba(255, 200, 165, ${alpha})` : `rgba(255, 255, 255, ${alpha})`;
        ctx.beginPath();
        ctx.arc(p.sx, p.sy, radius, 0, Math.PI * 2);
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resize);
    };
  }, [mode]);

  const handlePointerDown = (e) => {
    const state = interactionRef.current;
    state.isDragging = true;
    state.lastX = e.clientX;
    state.lastY = e.clientY;
    state.pulse = 1;
  };

  const handlePointerMove = (e) => {
    const state = interactionRef.current;
    const rect = e.currentTarget.getBoundingClientRect();
    const relX = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    const relY = ((e.clientY - rect.top) / rect.height - 0.5) * 2;

    if (state.isDragging) {
      const dx = e.clientX - state.lastX;
      const dy = e.clientY - state.lastY;
      state.targetRotY += dx * 0.012;
      state.targetRotX += dy * 0.012;
      state.lastX = e.clientX;
      state.lastY = e.clientY;
    } else {
      state.targetRotY += relX * 0.02;
      state.targetRotX = 0.4 + relY * 0.35;
    }

    setTelemetry({
      hubs: Math.max(12, Math.min(28, Math.round(18 + relX * 6))),
      efficiency: (38.4 + relY * 4.2).toFixed(1),
      sla: '99.8%'
    });
  };

  const handlePointerUp = () => {
    interactionRef.current.isDragging = false;
  };

  return (
    <div className="reel-frame">
      <div
        className="reel-canvas"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerLeave={handlePointerUp}
        style={{ cursor: 'grab', touchAction: 'none', userSelect: 'none' }}
      >
        <canvas ref={canvasRef} className="sculpture-canvas" />

        {/* Top Telemetry & Mode Switcher */}
        <div className="reel-top font-mono">
          <div className="reel-badge-group">
            <span className="reel-badge">
              <Sparkles size={12} style={{ display: 'inline', marginRight: 4 }} />
              GLOBAL OPERATIONS TOPOLOGY
            </span>
            <span className="reel-coords">
              {telemetry.hubs} HUBS • +{telemetry.efficiency}% EFF • {telemetry.sla} SLA
            </span>
          </div>

          <div className="sculpture-mode-pills" onPointerDown={(e) => e.stopPropagation()}>
            <button
              type="button"
              onClick={() => setMode('torus')}
              className={`sculpture-pill ${mode === 'torus' ? 'active' : ''}`}
              title="Global Shared Services Topology"
            >
              <Globe size={12} />
              <span>Network</span>
            </button>
            <button
              type="button"
              onClick={() => setMode('harmonic')}
              className={`sculpture-pill ${mode === 'harmonic' ? 'active' : ''}`}
              title="Operational Efficiency Wavefield"
            >
              <TrendingUp size={12} />
              <span>Growth</span>
            </button>
            <button
              type="button"
              onClick={() => setMode('lattice')}
              className={`sculpture-pill ${mode === 'lattice' ? 'active' : ''}`}
              title="Enterprise Governance & Risk Matrix"
            >
              <ShieldCheck size={12} />
              <span>Matrix</span>
            </button>
          </div>
        </div>

        {/* Bottom Caption & Case Trigger */}
        <div className="reel-bottom">
          <div>
            <div className="font-mono" style={{ fontSize: '0.75rem', opacity: 0.78, marginBottom: '0.2rem' }}>
              DRAG TO ROTATE • MERIDIAN LOGISTICS CASE
            </div>
            <h2 className="reel-caption-title font-serif italic">
              -$14.2M Annual OpEx &amp; 3.4× Faster Fulfillment
            </h2>
          </div>
          <button
            type="button"
            onPointerDown={(e) => e.stopPropagation()}
            onClick={onInspectFeatured}
            className="reel-trigger font-mono"
          >
            <span>Inspect Case</span>
            <ArrowUpRight size={14} />
          </button>
        </div>
      </div>
    </div>
  );
}
