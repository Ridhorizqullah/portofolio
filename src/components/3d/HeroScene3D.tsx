import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

export function HeroScene3D() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      const isSmall = window.innerWidth < 768;
      const isTouch = window.matchMedia('(pointer: coarse)').matches;
      setIsMobile(isSmall && isTouch);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) return;

    const container = containerRef.current;
    if (!container) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Get stable dimensions
    const width = container.clientWidth || container.offsetWidth || 400;
    const height = container.clientHeight || container.offsetHeight || 400;

    // 1. Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 5.8;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.domElement.style.width = '100%';
    renderer.domElement.style.height = '100%';
    renderer.domElement.style.display = 'block';
    container.appendChild(renderer.domElement);

    // Group for mouse parallax & rotation
    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // 2. Inner Glowing Core: Solid Dodecahedron with low opacity
    const innerSolidGeo = new THREE.DodecahedronGeometry(0.85, 0);
    const innerSolidMat = new THREE.MeshBasicMaterial({
      color: 0x0369a1, // Deep Ocean
      transparent: true,
      opacity: 0.4,
      wireframe: false,
    });
    const innerSolidMesh = new THREE.Mesh(innerSolidGeo, innerSolidMat);
    mainGroup.add(innerSolidMesh);

    // 3. Primary Dodecahedron Wireframe Core (Bright Cyan/Ocean)
    const coreGeo = new THREE.DodecahedronGeometry(1.2, 0);
    const coreMat = new THREE.MeshBasicMaterial({
      color: 0x38bdf8, // Soft Bright Ocean
      wireframe: true,
      transparent: true,
      opacity: 0.85,
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    mainGroup.add(coreMesh);

    // 4. Outer Icosahedron Wireframe Structure
    const outerGeo = new THREE.IcosahedronGeometry(1.7, 1);
    const outerMat = new THREE.MeshBasicMaterial({
      color: 0x0ea5e9, // Bright Ocean Blue
      wireframe: true,
      transparent: true,
      opacity: 0.45,
    });
    const outerMesh = new THREE.Mesh(outerGeo, outerMat);
    mainGroup.add(outerMesh);

    // 5. Primary Orbital Ring (Torus)
    const ringGeo1 = new THREE.TorusGeometry(2.15, 0.015, 16, 100);
    const ringMat1 = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.65,
    });
    const ringMesh1 = new THREE.Mesh(ringGeo1, ringMat1);
    ringMesh1.rotation.x = Math.PI / 3;
    ringMesh1.rotation.y = Math.PI / 5;
    mainGroup.add(ringMesh1);

    // 6. Secondary Orbital Ring
    const ringGeo2 = new THREE.TorusGeometry(2.35, 0.012, 16, 100);
    const ringMat2 = new THREE.MeshBasicMaterial({
      color: 0x0284c7,
      transparent: true,
      opacity: 0.5,
    });
    const ringMesh2 = new THREE.Mesh(ringGeo2, ringMat2);
    ringMesh2.rotation.x = -Math.PI / 3.5;
    ringMesh2.rotation.y = Math.PI / 3;
    mainGroup.add(ringMesh2);

    // 7. Particle Constellation
    const particlesCount = 180;
    const posArray = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount * 3; i += 3) {
      posArray[i] = (Math.random() - 0.5) * 7.5;
      posArray[i + 1] = (Math.random() - 0.5) * 7.5;
      posArray[i + 2] = (Math.random() - 0.5) * 5.5;
    }
    const particlesGeo = new THREE.BufferGeometry();
    particlesGeo.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    const particlesMat = new THREE.PointsMaterial({
      size: 0.035,
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending,
    });
    const particlesMesh = new THREE.Points(particlesGeo, particlesMat);
    scene.add(particlesMesh);

    // Interaction variables
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;
    let isDragging = false;
    let previousPointerX = 0;
    let previousPointerY = 0;

    const handlePointerMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      if (!rect.width || !rect.height) return;
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      targetX = x * 0.6;
      targetY = y * 0.6;

      if (isDragging) {
        const deltaX = e.clientX - previousPointerX;
        const deltaY = e.clientY - previousPointerY;
        mainGroup.rotation.y += deltaX * 0.005;
        mainGroup.rotation.x += deltaY * 0.005;
        previousPointerX = e.clientX;
        previousPointerY = e.clientY;
      }
    };

    const handlePointerDown = (e: MouseEvent) => {
      isDragging = true;
      previousPointerX = e.clientX;
      previousPointerY = e.clientY;
    };

    const handlePointerUp = () => {
      isDragging = false;
    };

    window.addEventListener('mousemove', handlePointerMove, { passive: true });
    container.addEventListener('mousedown', handlePointerDown);
    window.addEventListener('mouseup', handlePointerUp);

    // Dynamic resize handler
    const updateSize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      if (w > 0 && h > 0) {
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
        renderer.setSize(w, h, false);
      }
    };

    const resizeObserver = new ResizeObserver(updateSize);
    resizeObserver.observe(container);

    // Animation Loop
    let animationFrameId: number;
    const startTime = performance.now();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = (performance.now() - startTime) * 0.001;

      // Dynamic size check if container mounted with delay
      if (container.clientWidth > 0 && container.clientHeight > 0) {
        const cw = container.clientWidth;
        const ch = container.clientHeight;
        const domW = renderer.domElement.clientWidth;
        const domH = renderer.domElement.clientHeight;
        if (Math.abs(cw - domW) > 2 || Math.abs(ch - domH) > 2) {
          camera.aspect = cw / ch;
          camera.updateProjectionMatrix();
          renderer.setSize(cw, ch, false);
        }
      }

      if (!prefersReducedMotion) {
        coreMesh.rotation.y = elapsedTime * 0.22;
        coreMesh.rotation.x = elapsedTime * 0.12;

        innerSolidMesh.rotation.y = -elapsedTime * 0.18;
        innerSolidMesh.rotation.z = elapsedTime * 0.08;

        outerMesh.rotation.y = -elapsedTime * 0.15;
        outerMesh.rotation.z = elapsedTime * 0.08;

        ringMesh1.rotation.z = elapsedTime * 0.25;
        ringMesh2.rotation.z = -elapsedTime * 0.2;

        particlesMesh.rotation.y = elapsedTime * 0.035;

        if (!isDragging) {
          mouseX += (targetX - mouseX) * 0.05;
          mouseY += (targetY - mouseY) * 0.05;
          mainGroup.rotation.y += mouseX * 0.015;
          mainGroup.rotation.x += mouseY * 0.015;
        }
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handlePointerMove);
      container.removeEventListener('mousedown', handlePointerDown);
      window.removeEventListener('mouseup', handlePointerUp);
      resizeObserver.disconnect();
      renderer.dispose();
      coreGeo.dispose();
      coreMat.dispose();
      innerSolidGeo.dispose();
      innerSolidMat.dispose();
      outerGeo.dispose();
      outerMat.dispose();
      ringGeo1.dispose();
      ringMat1.dispose();
      ringGeo2.dispose();
      ringMat2.dispose();
      particlesGeo.dispose();
      particlesMat.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [isMobile]);

  if (isMobile) {
    return (
      <div className="absolute inset-0 w-full h-full flex items-center justify-center relative select-none">
        <div className="relative w-56 h-56 flex items-center justify-center">
          <div className="absolute inset-0 rounded-full border border-[#0EA5E9]/30 animate-pulse"></div>
          <div className="absolute inset-4 rounded-full border border-[#0369A1]/40 border-dashed"></div>
          <div className="w-32 h-32 border border-[#38BDF8]/40 rotate-45 flex items-center justify-center shadow-[0_0_30px_rgba(14,165,233,0.15)]">
            <div className="w-20 h-20 border border-[#0EA5E9]/50 -rotate-45 flex items-center justify-center">
              <div className="w-3.5 h-3.5 rounded-full bg-[#0EA5E9] shadow-[0_0_15px_#0EA5E9]"></div>
            </div>
          </div>
          <span className="absolute bottom-2 text-[10px] font-mono text-[#38BDF8]/70">
            SYSTEM CORE &bull; MOBILE
          </span>
        </div>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-full cursor-grab active:cursor-grabbing select-none"
      title="Interactive Deep-Ocean Core: Drag to rotate, move cursor for parallax"
    />
  );
}
