import React, { useEffect, useRef, useState } from 'react';
import { ShieldCheck, Activity, Cpu, Layers } from 'lucide-react';

export default function GlobeOperationsCanvas() {
  const canvasRef = useRef(null);
  const [activePreset, setActivePreset] = useState('network'); // 'network' | 'flows' | 'core'
  const [metrics, setMetrics] = useState({ nodes: 48, throughput: '1.8M/sec', latency: '4ms' });
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0, isHovered: false });

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

    // Generate dynamic nodes representing enterprise hubs
    const nodeCount = 38;
    const nodes = [];
    for (let i = 0; i < nodeCount; i++) {
      const theta = Math.acos(2 * Math.random() - 1);
      const phi = Math.random() * Math.PI * 2;
      nodes.push({
        origTheta: theta,
        origPhi: phi,
        theta,
        phi,
        radius: 110,
        pulseOffset: Math.random() * Math.PI * 2,
        size: Math.random() * 2.5 + 1.5,
        color: i % 4 === 0 ? '#00DF89' : i % 3 === 0 ? '#A78BFA' : '#00F0FF'
      });
    }

    const render = () => {
      time += 0.012;
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      const cx = width / 2;
      const cy = height / 2;

      ctx.clearRect(0, 0, width, height);

      // Smooth mouse parallax
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.05;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.05;

      const rotY = time * 0.4 + mouseRef.current.x * 0.8;
      const rotX = 0.35 + Math.sin(time * 0.3) * 0.15 + mouseRef.current.y * 0.8;

      const cosX = Math.cos(rotX);
      const sinX = Math.sin(rotX);
      const cosY = Math.cos(rotY);
      const sinY = Math.sin(rotY);

      // Draw Atmospheric Energy Core
      const glowGrad = ctx.createRadialGradient(cx, cy, 10, cx, cy, 130);
      glowGrad.addColorStop(0, 'rgba(0, 240, 255, 0.18)');
      glowGrad.addColorStop(0.5, 'rgba(121, 40, 202, 0.08)');
      glowGrad.addColorStop(1, 'rgba(6, 9, 19, 0)');
      ctx.fillStyle = glowGrad;
      ctx.beginPath();
      ctx.arc(cx, cy, 140, 0, Math.PI * 2);
      ctx.fill();

      // Outer Holographic Rings
      ctx.save();
      ctx.strokeStyle = 'rgba(0, 240, 255, 0.14)';
      ctx.lineWidth = 1;
      ctx.setLineDash([6, 6]);
      ctx.beginPath();
      ctx.ellipse(cx, cy, 150, 60, rotX * 0.5, 0, Math.PI * 2);
      ctx.stroke();

      ctx.strokeStyle = 'rgba(167, 139, 250, 0.15)';
      ctx.beginPath();
      ctx.ellipse(cx, cy, 130, 110, -rotX * 0.8, 0, Math.PI * 2);
      ctx.stroke();
      ctx.restore();

      // Transform 3D Sphere Points
      const projected = [];
      const fov = 340;

      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        let rad = n.radius;
        if (activePreset === 'flows') {
          rad += Math.sin(time * 3 + n.pulseOffset) * 16;
        } else if (activePreset === 'core') {
          rad = 75 + Math.cos(time * 2 + n.pulseOffset) * 20;
        }

        // Spherical coords to Cartesian
        const x0 = rad * Math.sin(n.theta) * Math.cos(n.phi);
        const y0 = rad * Math.cos(n.theta);
        const z0 = rad * Math.sin(n.theta) * Math.sin(n.phi);

        // Rotate Y
        const x1 = x0 * cosY - z0 * sinY;
        const z1 = z0 * cosY + x0 * sinY;

        // Rotate X
        const y2 = y0 * cosX - z1 * sinX;
        const z2 = z1 * cosX + y0 * sinX;

        const scale = fov / (fov + z2 + 80);
        const sx = cx + x1 * scale;
        const sy = cy + y2 * scale;

        projected.push({
          sx,
          sy,
          z: z2,
          scale,
          color: n.color,
          size: n.size * scale,
          pulse: Math.sin(time * 4 + n.pulseOffset) * 0.5 + 0.5
        });
      }

      // Draw Synaptic Connection Meshes
      ctx.lineWidth = 0.8;
      for (let i = 0; i < projected.length; i++) {
        for (let j = i + 1; j < projected.length; j++) {
          const p1 = projected[i];
          const p2 = projected[j];
          const distSq = (p1.sx - p2.sx) ** 2 + (p1.sy - p2.sy) ** 2;

          if (distSq < 4800) {
            const alpha = Math.max(0.04, Math.min(0.38, (1 - distSq / 4800) * 0.5));
            ctx.strokeStyle = `rgba(0, 240, 255, ${alpha})`;
            ctx.beginPath();
            ctx.moveTo(p1.sx, p1.sy);
            ctx.lineTo(p2.sx, p2.sy);
            ctx.stroke();

            // Traveling Energy Packet
            if ((i + j) % 5 === 0 && activePreset !== 'core') {
              const travelT = (time * 1.5 + (i * 0.2)) % 1;
              const px = p1.sx + (p2.sx - p1.sx) * travelT;
              const py = p1.sy + (p2.sy - p1.sy) * travelT;
              ctx.fillStyle = '#00F0FF';
              ctx.beginPath();
              ctx.arc(px, py, 1.8, 0, Math.PI * 2);
              ctx.fill();
            }
          }
        }
      }

      // Draw Nodes Sorted by Depth
      projected.sort((a, b) => a.z - b.z);
      for (let i = 0; i < projected.length; i++) {
        const p = projected[i];
        if (p.z > -120) {
          const alpha = Math.max(0.25, Math.min(1, (p.z + 120) / 220));

          // Outer Glow
          ctx.fillStyle = p.color;
          ctx.globalAlpha = alpha * 0.3;
          ctx.beginPath();
          ctx.arc(p.sx, p.sy, p.size * 2.2 + p.pulse * 2, 0, Math.PI * 2);
          ctx.fill();

          // Inner Solid
          ctx.globalAlpha = alpha;
          ctx.beginPath();
          ctx.arc(p.sx, p.sy, p.size, 0, Math.PI * 2);
          ctx.fill();
        }
      }
      ctx.globalAlpha = 1;

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, [activePreset]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    mouseRef.current.targetX = x;
    mouseRef.current.targetY = y;
  };

  const handlePreset = (p) => {
    setActivePreset(p);
    if (p === 'network') setMetrics({ nodes: 48, throughput: '1.8M/sec', latency: '4ms' });
    if (p === 'flows') setMetrics({ nodes: 84, throughput: '4.2M/sec', latency: '2ms' });
    if (p === 'core') setMetrics({ nodes: 120, throughput: '9.6M/sec', latency: '0.8ms' });
  };

  return (
    <div 
      className="glass-panel" 
      style={{ padding: '1.25rem', height: '100%', minHeight: '380px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => { mouseRef.current.targetX = 0; mouseRef.current.targetY = 0; }}
    >
      {/* Top HUD Telemetry */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', zIndex: 10 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span className="live-pulse" />
          <span className="font-mono" style={{ fontSize: '0.75rem', color: 'var(--cyan-primary)', fontWeight: 600 }}>
            NEURAL ENTERPRISE FABRIC
          </span>
        </div>
        <div style={{ display: 'flex', gap: '0.35rem' }}>
          {[
            { id: 'network', icon: ShieldCheck, label: 'Mesh' },
            { id: 'flows', icon: Activity, label: 'Flow' },
            { id: 'core', icon: Cpu, label: 'Core' }
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => handlePreset(item.id)}
              className="font-mono"
              style={{
                fontSize: '0.7rem',
                padding: '0.25rem 0.6rem',
                borderRadius: '9999px',
                border: activePreset === item.id ? '1px solid var(--cyan-primary)' : '1px solid var(--border-subtle)',
                background: activePreset === item.id ? 'rgba(0, 240, 255, 0.2)' : 'rgba(255, 255, 255, 0.04)',
                color: activePreset === item.id ? '#FFFFFF' : 'var(--text-secondary)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.25rem'
              }}
            >
              <item.icon size={11} />
              <span>{item.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* 3D Canvas */}
      <div style={{ position: 'relative', width: '100%', height: '240px', margin: '0.5rem 0' }}>
        <canvas ref={canvasRef} style={{ width: '100%', height: '100%', display: 'block' }} />
      </div>

      {/* Bottom Live Metrics */}
      <div 
        className="font-mono"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '0.5rem',
          padding: '0.75rem 1rem',
          background: 'rgba(6, 9, 19, 0.6)',
          borderRadius: '0.75rem',
          border: '1px solid var(--border-subtle)',
          fontSize: '0.75rem'
        }}
      >
        <div>
          <span style={{ color: 'var(--text-muted)', display: 'block', fontSize: '0.65rem' }}>ACTIVE HUBS</span>
          <strong style={{ color: '#FFFFFF' }}>{metrics.nodes} Nodes</strong>
        </div>
        <div>
          <span style={{ color: 'var(--text-muted)', display: 'block', fontSize: '0.65rem' }}>TRANSACTION VELOCITY</span>
          <strong style={{ color: 'var(--cyan-primary)' }}>{metrics.throughput}</strong>
        </div>
        <div>
          <span style={{ color: 'var(--text-muted)', display: 'block', fontSize: '0.65rem' }}>PIPELINE LATENCY</span>
          <strong style={{ color: 'var(--emerald-accent)' }}>{metrics.latency}</strong>
        </div>
      </div>
    </div>
  );
}

