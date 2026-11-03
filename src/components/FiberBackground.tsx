"use client";

import React, { useEffect, useRef } from "react";

/**
 * FiberBackground — Smoky Fluid Aurora Particle Canvas.
 * 
 * 1. NO SHARP THREAD LINES:
 *    - Completely eliminates distinct lines or hard-coded thread strokes.
 *    - Renders a dense, organic field of 1,600 soft, glowing micro-particles
 *      that flow and swirl together like ethereal smoke, aurora clouds, and liquid light.
 * 
 * 2. EXACT COLOR PALETTE CONFIGURATION:
 *    - Base Background: Lite Black / Deep Obsidian (#050505).
 *    - Primary Smoke Particles: Metallic Silver (rgba(192, 192, 192, 0.4) to rgba(226, 232, 240, 0.6))
 *      blended with Deep Cobalt Blue (#2563EB / #1E3A8A) cores and soft inner glow highlights.
 *    - Subtle Chromatic Aberration & Prismatic Edge Blending: Soft Cyan (rgba(56, 189, 248, ...))
 *      and Pale Warmth (rgba(252, 211, 165, ...)) traces on outer billowing eddies for holographic depth.
 * 
 * 3. DYNAMIC SCROLL & IDLE FLUID DYNAMICS:
 *    - Continuous procedural fluid dynamics with time += 0.012 for perpetual idle rising,
 *      morphing, and undulation.
 *    - Smooth window.scrollY multiplier and lerp easing for seamless top-to-bottom
 *      flow at a locked 60 FPS without lag.
 */
export default function FiberBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let running = true;
    let animId: number;
    let width = 0;
    let height = 0;
    const DPR = Math.min(typeof window !== "undefined" ? window.devicePixelRatio || 1 : 1, 2);

    // ─── Resize Handler ──────────────────────────────────────────
    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.floor(width * DPR);
      canvas.height = Math.floor(height * DPR);
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    // ─── Smooth Scroll & Cursor Tracking ─────────────────────────
    let currentScrollY = window.scrollY;
    let targetScrollY = window.scrollY;
    let scrollVelocity = 0;
    let lastScrollY = window.scrollY;

    const onScroll = () => {
      targetScrollY = window.scrollY;
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    let mouseX = width * 0.5;
    let mouseY = height * 0.5;
    let targetMouseX = width * 0.5;
    let targetMouseY = height * 0.5;

    const onMouseMove = (e: MouseEvent) => {
      targetMouseX = e.clientX;
      targetMouseY = e.clientY;
    };
    window.addEventListener("mousemove", onMouseMove, { passive: true });

    // ─── 1,600 Smoky Fluid Aurora Particles ───────────────────────
    const NUM_PARTICLES = 1600;
    const NUM_STREAMS = 6; // 6 multi-octave fluid smoke ribbon corridors

    interface AuroraParticle {
      streamIdx: number;     // Which fluid stream corridor it belongs to
      u: number;             // Longitudinal position along the stream (0 to 1)
      lateralOffset: number; // Lateral offset from stream spine (-1.0 to 1.0)
      speed: number;         // Travel speed along the stream
      radius: number;        // Particle radius (0.75px to 3.2px)
      alpha: number;         // Base opacity
      phase: number;         // Phase offset for breathing and turbulent jitter
      curlRate: number;      // Local curl rotation frequency
      colorType: "silver" | "platinum" | "cobalt" | "cyan-edge" | "warmth-edge";
    }

    const particles: AuroraParticle[] = [];

    for (let i = 0; i < NUM_PARTICLES; i++) {
      const streamIdx = i % NUM_STREAMS;

      // Lateral distribution shaped by gaussian bell curve (denser in core, wispy at edges)
      const u1 = Math.random();
      const u2 = Math.random();
      const randNorm = Math.sqrt(-2.0 * Math.log(u1 || 0.001)) * Math.cos(2.0 * Math.PI * u2);
      const lateralOffset = Math.max(-1.1, Math.min(1.1, randNorm * 0.42));
      const absOffset = Math.abs(lateralOffset);

      // Color classification based on position and chromatic dispersion:
      // - Core (|offset| < 0.22): Metallic Silver, Platinum & Deep Cobalt Blue
      // - Mid-body (0.22 <= |offset| < 0.55): Deep Cobalt Blue & Metallic Silver mist
      // - Prismatic Edges (|offset| >= 0.55):
      //     lateralOffset > 0 -> Soft Cyan chromatic fringe
      //     lateralOffset < 0 -> Pale Warmth chromatic trace
      let colorType: AuroraParticle["colorType"] = "silver";
      const randVal = Math.random();

      if (absOffset < 0.22) {
        colorType = randVal < 0.42 ? "platinum" : randVal < 0.78 ? "silver" : "cobalt";
      } else if (absOffset < 0.55) {
        colorType = randVal < 0.52 ? "cobalt" : randVal < 0.88 ? "silver" : "platinum";
      } else {
        // Chromatic aberration fringes on the outer billowing eddies
        if (lateralOffset > 0) {
          colorType = randVal < 0.65 ? "cyan-edge" : "cobalt";
        } else {
          colorType = randVal < 0.65 ? "warmth-edge" : "silver";
        }
      }

      // Radius: combination of fine micro-particles and larger soft vapor puffs
      let radius = 0.8 + Math.random() * 1.4; // 0.8px to 2.2px
      if (i % 8 === 0) radius = 2.0 + Math.random() * 1.2; // 2.0px to 3.2px soft vapor wisps

      // Opacities: soft metallic silver (0.4 to 0.6) and deep cobalt
      let alpha = 0.25 + Math.random() * 0.35;
      if (colorType === "platinum") alpha = 0.45 + Math.random() * 0.25;
      if (colorType === "silver") alpha = 0.35 + Math.random() * 0.25;
      if (colorType === "cobalt") alpha = 0.30 + Math.random() * 0.35;
      if (colorType === "cyan-edge") alpha = 0.32 + Math.random() * 0.25;
      if (colorType === "warmth-edge") alpha = 0.20 + Math.random() * 0.20;

      particles.push({
        streamIdx,
        u: Math.random(),
        lateralOffset,
        speed: 0.0016 + Math.random() * 0.0038,
        radius,
        alpha,
        phase: Math.random() * Math.PI * 2,
        curlRate: 1.2 + Math.random() * 2.2,
        colorType,
      });
    }

    // ─── 8 Ambient Volumetric Vapor Billows (Underlying Smoke Body) ──
    const NUM_BILLOWS = 8;
    const billows = Array.from({ length: NUM_BILLOWS }, (_, b) => ({
      u: (b / (NUM_BILLOWS - 1)),
      streamIdx: b % NUM_STREAMS,
      radius: 180 + (b % 3) * 60,
      phase: b * 0.85,
    }));

    // ─── Animation Loop (Procedural Fluid Aurora Dynamics) ────────
    let time = 0;

    const render = () => {
      if (!running) return;
      animId = requestAnimationFrame(render);

      // Smooth scroll tracking with continuous momentum
      currentScrollY += (targetScrollY - currentScrollY) * 0.08;
      scrollVelocity = (targetScrollY - lastScrollY) * 0.003;
      lastScrollY = targetScrollY;

      // Mouse position lerp
      mouseX += (targetMouseX - mouseX) * 0.04;
      mouseY += (targetMouseY - mouseY) * 0.04;

      // Fluid time progression: time += 0.012 (idle rise + scroll propulsion)
      time += 0.012 + Math.abs(scrollVelocity) * 0.022;

      ctx.clearRect(0, 0, width, height);

      // ─── Deep Obsidian Base (#050505) ────────────────────────────
      ctx.fillStyle = "#050505";
      ctx.fillRect(0, 0, width, height);

      // Additive luminous blending for ethereal smoke accumulation
      ctx.globalCompositeOperation = "lighter";

      // Dynamic time-varying drift (smoke rises and morphs continuously)
      const driftX = Math.sin(time * 0.25) * 60 + Math.cos(time * 0.14) * 35;
      const driftY = Math.cos(time * 0.20) * 50 + Math.sin(time * 0.10) * 30;

      // Scroll vertical drift & velocity cascade
      const scrollDrive = currentScrollY * 0.0012;
      const scrollShiftY = (currentScrollY * 0.32) % (height * 1.5);

      // Subtle mouse fluid pull
      const mouseInfluenceX = (mouseX / width - 0.5) * 35;
      const mouseInfluenceY = (mouseY / height - 0.5) * 30;

      // ─── 1. Underlying Volumetric Vapor Billows (Soft Smoke Fog) ──
      for (let b = 0; b < NUM_BILLOWS; b++) {
        const bil = billows[b];
        const s = bil.streamIdx;
        const u = bil.u;

        // Calculate billow center in fluid field
        const bx = -width * 0.12 + u * (width * 1.25) + driftX;
        const streamBaseY = (s / (NUM_STREAMS - 1)) * (height * 0.75) + height * 0.12;

        const mainWave = Math.sin(u * Math.PI * 1.8 - time * 0.45 + bil.phase - scrollDrive) * (height * 0.20);
        const billowWave = Math.cos(u * 4.2 + time * 0.6) * 35;
        const by = streamBaseY + mainWave + billowWave + driftY + mouseInfluenceY - scrollShiftY * 0.25;

        const billowRadius = bil.radius * (0.85 + Math.sin(time * 0.7 + bil.phase) * 0.25);

        const fogGrad = ctx.createRadialGradient(bx, by, 0, bx, by, billowRadius);
        fogGrad.addColorStop(0, "rgba(37, 99, 235, 0.08)");   // Deep Cobalt Blue #2563EB
        fogGrad.addColorStop(0.35, "rgba(30, 58, 138, 0.05)"); // Deep Navy #1E3A8A
        fogGrad.addColorStop(0.65, "rgba(192, 192, 192, 0.03)"); // Silver vapor trace
        fogGrad.addColorStop(1, "rgba(5, 5, 5, 0)");

        ctx.fillStyle = fogGrad;
        ctx.beginPath();
        ctx.arc(bx, by, billowRadius, 0, Math.PI * 2);
        ctx.fill();
      }

      // ─── 2. Evaluate Particle Stream Flow Field & Render ──────────
      // Group particles by color for batched rendering efficiency (rock-solid 60 FPS)
      const batches: { [key: string]: { x: number; y: number; r: number; a: number }[] } = {
        platinum: [],
        silver: [],
        cobalt: [],
        "cyan-edge": [],
        "warmth-edge": [],
      };

      for (let i = 0; i < NUM_PARTICLES; i++) {
        const p = particles[i];

        // Advance particle along its fluid stream with scroll velocity injection
        p.u += p.speed + Math.abs(scrollVelocity) * 0.0009;
        if (p.u > 1.0) {
          p.u = 0.0;
          // Recycle with gentle random lateral variation
          p.lateralOffset = (Math.random() - 0.5) * 1.6;
        }

        const u = p.u;
        const s = p.streamIdx;

        // Baseline coordinate traversing diagonally across the canvas
        const baseX = -width * 0.15 + u * (width * 1.3) + driftX;
        const streamBaseY = (s / (NUM_STREAMS - 1)) * (height * 0.76) + height * 0.12;

        // Multi-frequency procedural curl wave equations (aurora fluid harmonics)
        const mainWave = Math.sin(u * Math.PI * 1.7 - time * 0.48 + s * 1.05 - scrollDrive) * (height * 0.22);
        const secondaryHarmonic = Math.cos(u * 5.2 + time * 0.75 + s * 1.3) * 40;
        const eddyCurl = Math.sin(u * 11.0 - time * 1.3 + p.phase) * 18;

        const baseY = streamBaseY + mainWave + secondaryHarmonic + eddyCurl + driftY + mouseInfluenceY - scrollShiftY * 0.28;

        // Dynamic ribbon thickness: expands and narrows like billowing ethereal smoke
        const ribbonWidth = (75 + Math.sin(u * Math.PI * 2.8 + time * 0.6 + s) * 35) *
          (0.75 + Math.sin(u * Math.PI) * 0.5);

        // Approximate normal vector for lateral particle expansion
        const du = 0.012;
        const nextX = -width * 0.15 + (u + du) * (width * 1.3) + driftX;
        const nextMainWave = Math.sin((u + du) * Math.PI * 1.7 - time * 0.48 + s * 1.05 - scrollDrive) * (height * 0.22);
        const nextSec = Math.cos((u + du) * 5.2 + time * 0.75 + s * 1.3) * 40;
        const nextY = streamBaseY + nextMainWave + nextSec + driftY + mouseInfluenceY - scrollShiftY * 0.28;

        const dx = nextX - baseX;
        const dy = nextY - baseY;
        const len = Math.hypot(dx, dy) || 1;
        const nx = -dy / len;
        const ny = dx / len;

        // Micro-turbulent smoke vortex swirl along each particle's path
        const vortexSwirl = Math.sin(time * p.curlRate + p.phase) * 9;
        const vortexCross = Math.cos(time * (p.curlRate * 0.8) + p.phase) * 6;

        let px = baseX + nx * (p.lateralOffset * ribbonWidth + vortexSwirl) + mouseInfluenceX * (1 - u);
        let py = baseY + ny * (p.lateralOffset * ribbonWidth + vortexCross);

        // Interactive mouse deflection: particles gently swirl away from cursor
        const mdx = px - mouseX;
        const mdy = py - mouseY;
        const distSq = mdx * mdx + mdy * mdy;
        if (distSq < 22500) { // ~150px radius
          const dist = Math.sqrt(distSq);
          const force = (1 - dist / 150) * 16;
          py += (mdy / (dist + 1)) * force;
          px += (mdx / (dist + 1)) * force * 0.6;
        }

        // Soft gaussian envelope along stream length (fade in at entry, peak in center, fade out at end)
        const envelope = Math.sin(u * Math.PI);
        const breathing = Math.sin(time * 0.85 + p.phase) * 0.08;
        const finalAlpha = Math.min(0.85, Math.max(0.08, (p.alpha + breathing) * envelope));

        batches[p.colorType].push({
          x: px,
          y: py,
          r: p.radius,
          a: finalAlpha,
        });
      }

      // ─── 3. Render Batched Particle Clouds by Color ───────────────
      // A. Polished Platinum Core Highlights
      const platPts = batches["platinum"];
      for (let k = 0; k < platPts.length; k++) {
        const pt = platPts[k];
        ctx.beginPath();
        ctx.arc(pt.x, pt.y, pt.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(226, 232, 240, ${pt.a * 0.85})`; // Platinum rgba(226, 232, 240, 0.6)
        ctx.fill();
      }

      // B. Metallic Silver Smoke Wisps
      const silvPts = batches["silver"];
      for (let k = 0; k < silvPts.length; k++) {
        const pt = silvPts[k];
        ctx.beginPath();
        ctx.arc(pt.x, pt.y, pt.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(192, 192, 192, ${pt.a * 0.70})`; // Metallic Silver rgba(192, 192, 192, 0.4-0.6)
        ctx.fill();
      }

      // C. Deep Cobalt Blue & Navy Fluid Core
      const cobPts = batches["cobalt"];
      for (let k = 0; k < cobPts.length; k++) {
        const pt = cobPts[k];
        ctx.beginPath();
        ctx.arc(pt.x, pt.y, pt.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(37, 99, 235, ${pt.a * 0.75})`; // Deep Cobalt Blue #2563EB
        ctx.fill();
      }

      // D. Prismatic Edge Highlight — Soft Cyan Chromatic Aberration
      const cyanPts = batches["cyan-edge"];
      for (let k = 0; k < cyanPts.length; k++) {
        const pt = cyanPts[k];
        ctx.beginPath();
        ctx.arc(pt.x, pt.y, pt.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(56, 189, 248, ${pt.a * 0.55})`; // Soft Cyan #38BDF8
        ctx.fill();
      }

      // E. Prismatic Edge Highlight — Pale Warmth / Amber Refraction Trace
      const warmPts = batches["warmth-edge"];
      for (let k = 0; k < warmPts.length; k++) {
        const pt = warmPts[k];
        ctx.beginPath();
        ctx.arc(pt.x, pt.y, pt.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(252, 211, 165, ${pt.a * 0.40})`; // Pale Warmth #FCD3A5
        ctx.fill();
      }

      ctx.globalCompositeOperation = "source-over";
    };

    render();

    return () => {
      running = false;
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <div
      className="fixed inset-0 pointer-events-none overflow-hidden z-0 bg-[#050505]"
      aria-hidden="true"
    >
      <canvas
        ref={canvasRef}
        className="w-full h-full block"
        style={{ pointerEvents: "none" }}
      />
    </div>
  );
}
