"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export default function ThreeDPlanet() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      50
    );
    camera.position.set(0, 0, 4.5);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Planet Sphere (Wireframe & Solid Core)
    const planetGroup = new THREE.Group();
    scene.add(planetGroup);

    const sphereGeo = new THREE.SphereGeometry(1.1, 24, 24);
    const sphereMat = new THREE.MeshBasicMaterial({
      color: 0x1E3A8A,
      wireframe: true,
      transparent: true,
      opacity: 0.4,
    });
    const planet = new THREE.Mesh(sphereGeo, sphereMat);
    planetGroup.add(planet);

    const coreGeo = new THREE.SphereGeometry(0.85, 20, 20);
    const coreMat = new THREE.MeshBasicMaterial({
      color: 0x2563EB,
      transparent: true,
      opacity: 0.25,
    });
    const core = new THREE.Mesh(coreGeo, coreMat);
    planetGroup.add(core);

    // Planetary Rings
    const ringGeo = new THREE.RingGeometry(1.4, 2.1, 48);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0x3B82F6,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.65,
      wireframe: true,
    });
    const ring = new THREE.Mesh(ringGeo, ringMat);
    ring.rotation.x = Math.PI / 2.5;
    ring.rotation.y = Math.PI / 8;
    planetGroup.add(ring);

    // Orbital Particle Dust
    const particleCount = 40;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i += 3) {
      const angle = Math.random() * Math.PI * 2;
      const radius = 1.6 + Math.random() * 0.7;
      positions[i] = Math.cos(angle) * radius;
      positions[i + 1] = (Math.random() - 0.5) * 0.4;
      positions[i + 2] = Math.sin(angle) * radius;
    }
    particleGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0x93C5FD,
      size: 0.045,
      transparent: true,
      opacity: 0.85,
    });
    const ringParticles = new THREE.Points(particleGeo, particleMat);
    ringParticles.rotation.x = Math.PI / 2.5;
    ringParticles.rotation.y = Math.PI / 8;
    planetGroup.add(ringParticles);

    // Mouse interactive tilt
    const handlePointerMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      planetGroup.rotation.y = x * 0.8;
      planetGroup.rotation.x = -y * 0.5;
    };

    window.addEventListener("mousemove", handlePointerMove);

    // Animation Loop
    let animationFrameId: number;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      planet.rotation.y += 0.005;
      ring.rotation.z += 0.003;
      ringParticles.rotation.z += 0.004;
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handlePointerMove);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-36 h-36 relative flex items-center justify-center opacity-85 hover:opacity-100 transition-opacity"
    />
  );
}

