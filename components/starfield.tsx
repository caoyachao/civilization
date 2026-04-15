"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  alpha: number;
}

interface Meteor {
  x: number;
  y: number;
  length: number;
  angle: number;
  speed: number;
  alpha: number;
  decay: number;
  width: number;
}

export function Starfield() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const reducedMotionRef = useRef(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    reducedMotionRef.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const particleCount = Math.min(Math.floor((width * height) / 12000), 120);
    const particles: Particle[] = [];
    const meteors: Meteor[] = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 1.2 + 0.3,
        speedX: (Math.random() - 0.5) * 0.15,
        speedY: (Math.random() - 0.5) * 0.15,
        alpha: Math.random() * 0.5 + 0.2,
      });
    }

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    let animationId: number;

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;

      for (const p of particles) {
        let px = p.x;
        let py = p.y;

        if (!reducedMotionRef.current) {
          const dx = mx - px;
          const dy = my - py;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 200) {
            const force = (200 - dist) / 200;
            px -= (dx / dist) * force * 0.5;
            py -= (dy / dist) * force * 0.5;
          }

          p.x += p.speedX;
          p.y += p.speedY;
        }

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.beginPath();
        ctx.arc(px, py, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${p.alpha})`;
        ctx.fill();
      }

      // Spawn meteors occasionally
      if (!reducedMotionRef.current && Math.random() < 0.008) {
        const startX = Math.random() * width * 1.2 - width * 0.1;
        const startY = -60;
        meteors.push({
          x: startX,
          y: startY,
          length: Math.random() * 100 + 60,
          angle: Math.PI / 3 + (Math.random() - 0.5) * 0.4,
          speed: Math.random() * 12 + 14,
          alpha: Math.random() * 0.3 + 0.7,
          decay: Math.random() * 0.008 + 0.008,
          width: Math.random() * 1.5 + 1,
        });
      }

      for (let i = meteors.length - 1; i >= 0; i--) {
        const m = meteors[i];
        m.x += Math.cos(m.angle) * m.speed;
        m.y += Math.sin(m.angle) * m.speed;
        m.alpha -= m.decay;

        if (m.alpha <= 0 || m.x > width + 100 || m.y > height + 100) {
          meteors.splice(i, 1);
          continue;
        }

        const tailX = m.x - Math.cos(m.angle) * m.length;
        const tailY = m.y - Math.sin(m.angle) * m.length;
        const grad = ctx.createLinearGradient(m.x, m.y, tailX, tailY);
        grad.addColorStop(0, `rgba(255, 255, 255, ${m.alpha})`);
        grad.addColorStop(0.4, `rgba(255, 255, 255, ${m.alpha * 0.3})`);
        grad.addColorStop(1, "rgba(255, 255, 255, 0)");

        ctx.beginPath();
        ctx.moveTo(m.x, m.y);
        ctx.lineTo(tailX, tailY);
        ctx.strokeStyle = grad;
        ctx.lineWidth = m.width;
        ctx.lineCap = "round";
        ctx.stroke();
      }

      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0"
      style={{ background: "radial-gradient(ellipse at bottom, #0a0a14 0%, #050508 100%)" }}
    />
  );
}
