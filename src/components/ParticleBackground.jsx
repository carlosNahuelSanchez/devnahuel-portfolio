import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function ParticleBackground() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Three.js Scene Setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      1,
      2500
    );
    camera.position.z = 650;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Circular Glow Particle Texture via Canvas
    const createParticleTexture = () => {
      const canvas = document.createElement('canvas');
      canvas.width = 64;
      canvas.height = 64;
      const ctx = canvas.getContext('2d');
      if (!ctx) return null;

      const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
      gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
      gradient.addColorStop(0.25, 'rgba(220, 230, 255, 0.7)');
      gradient.addColorStop(0.6, 'rgba(140, 160, 200, 0.25)');
      gradient.addColorStop(1, 'rgba(5, 5, 7, 0)');

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, 64, 64);

      const texture = new THREE.CanvasTexture(canvas);
      texture.needsUpdate = true;
      return texture;
    };

    const particleTexture = createParticleTexture();

    // Particle Group Geometry & Velocities
    const particleCount = 450;
    const particlePositions = new Float32Array(particleCount * 3);
    const particleVelocities = [];

    const bounds = { x: 950, y: 750, z: 650 };

    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      particlePositions[i3] = (Math.random() - 0.5) * bounds.x * 2;
      particlePositions[i3 + 1] = (Math.random() - 0.5) * bounds.y * 2;
      particlePositions[i3 + 2] = (Math.random() - 0.5) * bounds.z * 2;

      particleVelocities.push({
        x: (Math.random() - 0.5) * 0.32,
        y: (Math.random() - 0.5) * 0.32,
        z: (Math.random() - 0.5) * 0.32,
      });
    }

    const pointsGeometry = new THREE.BufferGeometry();
    pointsGeometry.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));

    const pointsMaterial = new THREE.PointsMaterial({
      size: 4.2,
      map: particleTexture,
      transparent: true,
      opacity: 0.65,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const pointCloud = new THREE.Points(pointsGeometry, pointsMaterial);
    scene.add(pointCloud);

    // Mouse & Scroll Parallax
    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;
    let targetCameraZ = 650;

    const handleMouseMove = (e) => {
      mouseX = (e.clientX - window.innerWidth / 2) * 0.04;
      mouseY = (e.clientY - window.innerHeight / 2) * 0.04;
    };

    const handleScroll = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight || 1;
      const progress = window.scrollY / maxScroll;
      // Scroll moves camera subtly in depth along Z
      targetCameraZ = 650 - progress * 240;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('scroll', handleScroll, { passive: true });

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    };

    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animationFrameId;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      if (!prefersReducedMotion) {
        targetMouseX += (mouseX - targetMouseX) * 0.04;
        targetMouseY += (mouseY - targetMouseY) * 0.04;

        // Camera scroll depth interpolation
        camera.position.z += (targetCameraZ - camera.position.z) * 0.05;
        camera.position.x = targetMouseX;
        camera.position.y = -targetMouseY;

        // Update particle positions
        const posArray = pointsGeometry.attributes.position.array;

        for (let i = 0; i < particleCount; i++) {
          const i3 = i * 3;

          posArray[i3] += particleVelocities[i].x;
          posArray[i3 + 1] += particleVelocities[i].y;
          posArray[i3 + 2] += particleVelocities[i].z;

          // Bounce off bounds smoothly
          if (posArray[i3] < -bounds.x || posArray[i3] > bounds.x) particleVelocities[i].x *= -1;
          if (posArray[i3 + 1] < -bounds.y || posArray[i3 + 1] > bounds.y) particleVelocities[i].y *= -1;
          if (posArray[i3 + 2] < -bounds.z || posArray[i3 + 2] > bounds.z) particleVelocities[i].z *= -1;
        }

        pointsGeometry.attributes.position.needsUpdate = true;
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);

      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }

      pointsGeometry.dispose();
      pointsMaterial.dispose();
      if (particleTexture) particleTexture.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
    >
      {/* Deep Space Ambient Radial Gradients */}
      <div 
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 80% 50% at 50% -10%, rgba(255, 255, 255, 0.05), transparent 70%),
            radial-gradient(ellipse 60% 40% at 90% 60%, rgba(120, 119, 198, 0.025), transparent 60%),
            radial-gradient(ellipse 70% 50% at 10% 85%, rgba(255, 255, 255, 0.02), transparent 70%)
          `
        }}
      />
      {/* Three.js Canvas Container */}
      <div ref={containerRef} className="absolute inset-0" />
    </div>
  );
}
