"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export default function ThreeDHeroScene() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mousePos = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // 1. Scene, Camera, Renderer
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      100
    );
    camera.position.set(0, 1.2, 5.2);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    container.appendChild(renderer.domElement);

    // 2. Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.9);
    scene.add(ambientLight);

    const mainLight = new THREE.DirectionalLight(0xffffff, 2.0);
    mainLight.position.set(4, 5, 4);
    scene.add(mainLight);

    const bluePointLight = new THREE.PointLight(0x3B82F6, 3.5, 8);
    bluePointLight.position.set(-2, 1.5, 2);
    scene.add(bluePointLight);

    const deepCobaltPointLight = new THREE.PointLight(0x2563EB, 3.5, 8);
    deepCobaltPointLight.position.set(2.5, -0.5, 1);
    scene.add(deepCobaltPointLight);

    // 3. Materials
    const glossyWhiteMat = new THREE.MeshStandardMaterial({
      color: 0xf8fafc,
      roughness: 0.15,
      metalness: 0.2,
    });

    const glossyCobaltMat = new THREE.MeshStandardMaterial({
      color: 0x2563EB,
      roughness: 0.2,
      metalness: 0.3,
    });

    const visorMat = new THREE.MeshStandardMaterial({
      color: 0x050505,
      roughness: 0.1,
      metalness: 0.9,
    });

    const eyeGlowMat = new THREE.MeshBasicMaterial({
      color: 0x3B82F6,
    });

    const darkMetalMat = new THREE.MeshStandardMaterial({
      color: 0x0A0A0C,
      roughness: 0.4,
      metalness: 0.8,
    });

    const screenGlowMat = new THREE.MeshBasicMaterial({
      color: 0x60A5FA,
    });

    const catOrangeMat = new THREE.MeshStandardMaterial({
      color: 0xfb923c,
      roughness: 0.8,
      metalness: 0.05,
    });

    const plantGreenMat = new THREE.MeshStandardMaterial({
      color: 0x10b981,
      roughness: 0.6,
    });

    const potMat = new THREE.MeshStandardMaterial({
      color: 0xf1f5f9,
      roughness: 0.3,
    });

    // 4. Construct 3D Scene Objects
    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // --- Floating Desk ---
    const deskGeo = new THREE.BoxGeometry(4.2, 0.12, 2.2);
    const desk = new THREE.Mesh(deskGeo, darkMetalMat);
    desk.position.set(0, -0.75, 0);
    mainGroup.add(desk);

    const deskEdgeGeo = new THREE.BoxGeometry(4.24, 0.03, 2.24);
    const deskEdgeMat = new THREE.MeshBasicMaterial({ color: 0x2563EB });
    const deskEdge = new THREE.Mesh(deskEdgeGeo, deskEdgeMat);
    deskEdge.position.set(0, -0.75, 0);
    mainGroup.add(deskEdge);

    // --- 3D Robot Mascot ---
    const robotGroup = new THREE.Group();
    robotGroup.position.set(-0.35, -0.1, 0);

    // Body (Glossy White Capsule)
    const bodyGeo = new THREE.CapsuleGeometry(0.55, 0.45, 16, 24);
    const body = new THREE.Mesh(bodyGeo, glossyWhiteMat);
    body.position.y = 0;
    robotGroup.add(body);

    // Chest Brand Plate (Deep Cobalt Accent)
    const chestGeo = new THREE.BoxGeometry(0.45, 0.3, 0.15);
    const chest = new THREE.Mesh(chestGeo, glossyCobaltMat);
    chest.position.set(0, 0.05, 0.5);
    robotGroup.add(chest);

    // Head (Curved Glossy Cube)
    const headGroup = new THREE.Group();
    headGroup.position.set(0, 0.85, 0);

    const headGeo = new THREE.SphereGeometry(0.55, 32, 24);
    headGeo.scale(1, 0.88, 0.95);
    const head = new THREE.Mesh(headGeo, glossyWhiteMat);
    headGroup.add(head);

    // Black Curved Visor Mask
    const visorGeo = new THREE.SphereGeometry(0.48, 24, 16);
    visorGeo.scale(0.85, 0.55, 0.5);
    const visor = new THREE.Mesh(visorGeo, visorMat);
    visor.position.set(0, 0.02, 0.38);
    headGroup.add(visor);

    // Glowing Cyan Eyes
    const eyeGeo = new THREE.CapsuleGeometry(0.065, 0.12, 12, 12);
    eyeGeo.rotateZ(Math.PI / 2);

    const leftEye = new THREE.Mesh(eyeGeo, eyeGlowMat);
    leftEye.position.set(-0.16, 0.04, 0.6);
    headGroup.add(leftEye);

    const rightEye = new THREE.Mesh(eyeGeo, eyeGlowMat);
    rightEye.position.set(0.16, 0.04, 0.6);
    headGroup.add(rightEye);

    // Head Antenna with Glowing Tip
    const antennaStemGeo = new THREE.CylinderGeometry(0.02, 0.02, 0.22);
    const antennaStem = new THREE.Mesh(antennaStemGeo, darkMetalMat);
    antennaStem.position.set(0, 0.6, 0);
    headGroup.add(antennaStem);

    const antennaTipGeo = new THREE.SphereGeometry(0.065, 16, 16);
    const antennaTip = new THREE.Mesh(antennaTipGeo, eyeGlowMat);
    antennaTip.position.set(0, 0.73, 0);
    headGroup.add(antennaTip);

    robotGroup.add(headGroup);

    // Arms Typing at Laptop
    const leftArmGeo = new THREE.CapsuleGeometry(0.1, 0.4, 8, 12);
    const leftArm = new THREE.Mesh(leftArmGeo, glossyWhiteMat);
    leftArm.position.set(-0.62, 0.05, 0.28);
    leftArm.rotation.set(0.65, 0.2, -0.35);
    robotGroup.add(leftArm);

    const rightArmGeo = new THREE.CapsuleGeometry(0.1, 0.4, 8, 12);
    const rightArm = new THREE.Mesh(rightArmGeo, glossyWhiteMat);
    rightArm.position.set(0.62, 0.05, 0.28);
    rightArm.rotation.set(0.65, -0.2, 0.35);
    robotGroup.add(rightArm);

    mainGroup.add(robotGroup);

    // --- 3D Glowing Laptop ---
    const laptopGroup = new THREE.Group();
    laptopGroup.position.set(-0.35, -0.66, 0.7);

    // Laptop Base
    const laptopBaseGeo = new THREE.BoxGeometry(0.85, 0.03, 0.65);
    const laptopBase = new THREE.Mesh(laptopBaseGeo, darkMetalMat);
    laptopGroup.add(laptopBase);

    // Laptop Screen Lid (Open Angled)
    const laptopLidGeo = new THREE.BoxGeometry(0.85, 0.58, 0.025);
    const laptopLid = new THREE.Mesh(laptopLidGeo, darkMetalMat);
    laptopLid.position.set(0, 0.28, -0.3);
    laptopLid.rotation.x = -0.3;

    // Glowing Screen Display
    const screenGeo = new THREE.PlaneGeometry(0.78, 0.48);
    const screen = new THREE.Mesh(screenGeo, screenGlowMat);
    screen.position.set(0, 0.28, -0.285);
    screen.rotation.x = -0.3;
    laptopGroup.add(screen);

    laptopGroup.add(laptopLid);
    mainGroup.add(laptopGroup);

    // --- Cozy Sleeping Cat on Desk ---
    const catGroup = new THREE.Group();
    catGroup.position.set(1.1, -0.58, 0.5);
    catGroup.rotation.y = -0.3;

    // Cat Body (Curled Torus / Ellipsoid)
    const catBodyGeo = new THREE.SphereGeometry(0.24, 18, 14);
    catBodyGeo.scale(1.3, 0.75, 1);
    const catBody = new THREE.Mesh(catBodyGeo, catOrangeMat);
    catGroup.add(catBody);

    // Cat Head
    const catHeadGeo = new THREE.SphereGeometry(0.14, 16, 12);
    const catHead = new THREE.Mesh(catHeadGeo, catOrangeMat);
    catHead.position.set(-0.25, 0.05, 0.12);
    catGroup.add(catHead);

    // Cat Ears
    const earGeo = new THREE.ConeGeometry(0.045, 0.08, 4);
    const ear1 = new THREE.Mesh(earGeo, catOrangeMat);
    ear1.position.set(-0.28, 0.18, 0.08);
    ear1.rotation.z = 0.25;
    catGroup.add(ear1);

    const ear2 = new THREE.Mesh(earGeo, catOrangeMat);
    ear2.position.set(-0.2, 0.18, 0.16);
    ear2.rotation.x = -0.25;
    catGroup.add(ear2);

    // Cat Tail
    const tailCurve = new THREE.CubicBezierCurve3(
      new THREE.Vector3(0.28, 0, 0),
      new THREE.Vector3(0.38, 0.05, 0.2),
      new THREE.Vector3(0.2, 0.08, 0.32),
      new THREE.Vector3(0, 0.02, 0.3)
    );
    const tailGeo = new THREE.TubeGeometry(tailCurve, 12, 0.035, 8, false);
    const catTail = new THREE.Mesh(tailGeo, catOrangeMat);
    catGroup.add(catTail);

    mainGroup.add(catGroup);

    // --- Potted Desk Plant ---
    const plantGroup = new THREE.Group();
    plantGroup.position.set(-1.45, -0.55, 0.2);

    const potGeo = new THREE.CylinderGeometry(0.15, 0.11, 0.25, 16);
    const pot = new THREE.Mesh(potGeo, potMat);
    plantGroup.add(pot);

    for (let i = 0; i < 4; i++) {
      const leafGeo = new THREE.SphereGeometry(0.09, 12, 10);
      leafGeo.scale(0.7, 1.4, 0.3);
      const leaf = new THREE.Mesh(leafGeo, plantGreenMat);
      leaf.position.set(
        Math.cos((i * Math.PI) / 2) * 0.08,
        0.18 + i * 0.02,
        Math.sin((i * Math.PI) / 2) * 0.08
      );
      leaf.rotation.set(0.4, (i * Math.PI) / 2, 0.3);
      plantGroup.add(leaf);
    }
    mainGroup.add(plantGroup);

    // --- 3D Holographic Orbit Wireframe Ring ---
    const ringGeo = new THREE.TorusGeometry(1.4, 0.015, 12, 64);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0x3B82F6,
      transparent: true,
      opacity: 0.5,
    });
    const holoRing = new THREE.Mesh(ringGeo, ringMat);
    holoRing.position.set(-0.35, 0.2, 0);
    holoRing.rotation.set(1.2, 0.4, 0);
    mainGroup.add(holoRing);

    // --- 3D Particle Cloud ---
    const particleCount = 80;
    const particleGeo = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      particlePositions[i] = (Math.random() - 0.5) * 5;
      particlePositions[i + 1] = (Math.random() - 0.5) * 3 + 0.5;
      particlePositions[i + 2] = (Math.random() - 0.5) * 3;
    }
    particleGeo.setAttribute(
      "position",
      new THREE.BufferAttribute(particlePositions, 3)
    );

    const particleMat = new THREE.PointsMaterial({
      color: 0x60A5FA,
      size: 0.045,
      transparent: true,
      opacity: 0.7,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    mainGroup.add(particles);

    // 5. Mouse Parallax Handler
    const handlePointerMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      mousePos.current.targetX = x * 0.4;
      mousePos.current.targetY = y * 0.3;
    };

    window.addEventListener("mousemove", handlePointerMove);

    // 6. Animation Loop — use performance.now() instead of THREE.Clock to avoid deprecation
    let animationFrameId: number;
    let running = true;
    const startTime = performance.now();

    const animate = () => {
      if (!running) return;
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = (performance.now() - startTime) / 1000;

      // Smooth mouse lerp
      mousePos.current.x += (mousePos.current.targetX - mousePos.current.x) * 0.05;
      mousePos.current.y += (mousePos.current.targetY - mousePos.current.y) * 0.05;

      // Group subtle sway & mouse reaction
      mainGroup.rotation.y = mousePos.current.x * 0.6 + Math.sin(elapsedTime * 0.5) * 0.04;
      mainGroup.rotation.x = -mousePos.current.y * 0.4 + Math.cos(elapsedTime * 0.6) * 0.02;

      // Robot Head follows mouse
      headGroup.rotation.y = mousePos.current.x * 0.8;
      headGroup.rotation.x = -mousePos.current.y * 0.6;

      // Subtle breathing float on robot body
      robotGroup.position.y = -0.1 + Math.sin(elapsedTime * 1.8) * 0.025;

      // Sleeping cat breathing rhythm
      catBody.scale.y = 0.75 + Math.sin(elapsedTime * 1.2) * 0.04;

      // Orbit Ring slow spin
      holoRing.rotation.z += 0.008;

      // Particle gentle spin
      particles.rotation.y += 0.001;

      renderer.render(scene, camera);
    };

    animate();

    // Resize Handler
    const handleResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      running = false;
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handlePointerMove);
      window.removeEventListener("resize", handleResize);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div className="relative w-full h-[450px] sm:h-[500px] rounded-2xl overflow-hidden bg-gradient-to-b from-[#050505] via-[#0A0A0C] to-[#0A0A0C] border border-blue-600/25 shadow-2xl shadow-black/80">
      {/* 3D WebGL Canvas Layer */}
      <div ref={containerRef} className="absolute inset-0 z-0 cursor-grab active:cursor-grabbing" />

      {/* Floating 2.5D UI Widgets Overlaid on 3D Scene */}
      <div className="absolute inset-0 z-10 pointer-events-none p-5 flex flex-col justify-between">
        {/* Top Floating Glass Badges */}
        <div className="flex items-start justify-between gap-3">
          {/* Pipeline Badge */}
          <div className="pointer-events-auto bg-[#0A0A0C]/85 backdrop-blur-xl border border-blue-600/30 rounded-2xl p-3 text-white shadow-xl text-[10px] font-mono space-y-1 animate-float">
            <div className="text-[9px] text-blue-400 font-bold tracking-wider">PIPELINE</div>
            <div className="text-[#94A3B8]">Ideas</div>
            <div className="text-[#94A3B8]">Design</div>
            <div className="text-blue-400 font-bold flex items-center gap-1">
              <span>Build</span>
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse"></span>
            </div>
            <div className="text-[#94A3B8]">Automate</div>
            <div className="text-[#94A3B8]">Grow</div>
          </div>

          {/* Checklist Card: Roadmap */}
          <div className="pointer-events-auto bg-[#0A0A0C]/90 backdrop-blur-xl rounded-2xl p-4 shadow-2xl border border-blue-600/30 text-white w-44 animate-float-delayed">
            <div className="text-[10px] font-bold text-blue-400 tracking-wider uppercase mb-2 flex items-center justify-between">
              <span>ROADMAP</span>
              <span className="text-[9px] text-emerald-400 font-bold">100% READY</span>
            </div>
            <div className="space-y-1.5 text-xs font-semibold">
              {["Build", "Design", "Automate", "Grow"].map((item) => (
                <div key={item} className="flex items-center gap-2 text-slate-200">
                  <span className="w-4 h-4 rounded-full bg-blue-950/70 border border-blue-500/40 text-blue-400 flex items-center justify-center text-[9px]">
                    ✓
                  </span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Status Header */}
        <div className="flex items-center justify-between pointer-events-auto bg-[#050505]/85 backdrop-blur-md px-3.5 py-2 rounded-xl border border-blue-900/40 text-[10px] font-mono text-[#94A3B8]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
            <span>INTERACTIVE 3D WORKSTATION</span>
          </div>
          <span className="text-blue-400 font-bold">FUROSITY BOT v2.4</span>
        </div>
      </div>
    </div>
  );
}

