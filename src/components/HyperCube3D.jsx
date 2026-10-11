import React, { useEffect, useRef } from 'react';

/**
 * HyperCube3D - Modular Puzzle Cube (Inspired by Resend Homepage)
 * Features a 3x3x3 modular puzzle cube with autonomous slice rotations,
 * variable shifting puzzle mechanics, high-end obsidian and graphite materials,
 * grey neon edge illumination, surrounding dynamic particle swarm, and interactive drag inertia.
 */
export default function HyperCube3D({ className = "" }) {
  const mountRef = useRef(null);
  const isDraggingRef = useRef(false);
  const previousPointerPositionRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    let animationFrameId;
    let isVisible = true;

    let THREE;
    let scene, camera, renderer;
    let mainGroup, puzzleGroup, swarmPoints;
    let pointLight1, pointLight2, ambientLight;

    // Dimensions
    const width = container.clientWidth || 360;
    const height = container.clientHeight || 460;

    let mouseX = 0;
    let mouseY = 0;
    let autoRotSpeed = 0.005;

    const isDark = () => document.documentElement.classList.contains('dark');

    import('three').then((threeModule) => {
      THREE = threeModule;

      // 1. Scene & Camera Setup (Generous Frustum to Completely Prevent Clipping)
      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 1000);
      camera.position.z = 7.4;

      // 2. High-Performance WebGL Renderer
      renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
        powerPreference: "high-performance"
      });
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1.35;

      while (container.firstChild) {
        container.removeChild(container.firstChild);
      }
      container.appendChild(renderer.domElement);

      // 3. Main Rotating Group
      mainGroup = new THREE.Group();
      scene.add(mainGroup);

      // Puzzle Master Container
      puzzleGroup = new THREE.Group();
      mainGroup.add(puzzleGroup);

      // ── Build 3x3x3 Modular Puzzle Cube (27 Cubies) ──
      const cubieSize = 0.58;
      const pitch = 0.62; // Distance between cubie centers (leaves 0.04 hairline bevel gap)
      const cubieGeo = new THREE.BoxGeometry(cubieSize, cubieSize, cubieSize, 1, 1, 1);
      const cubieEdgesGeo = new THREE.EdgesGeometry(cubieGeo);

      // Materials Palette (Resend-Style Obsidian, Slate, and Brushed Graphite)
      const getMaterials = () => {
        const dark = isDark();
        return [
          // 0: Deep Glossy Piano Obsidian
          new THREE.MeshPhysicalMaterial({
            color: dark ? 0x09090d : 0xffffff,
            roughness: 0.12,
            metalness: 0.28,
            clearcoat: 0.85,
            clearcoatRoughness: 0.1,
            reflectivity: 0.95
          }),
          // 1: Matte Slate Carbon (Fine-grained micro-roughness)
          new THREE.MeshStandardMaterial({
            color: dark ? 0x161622 : 0xf1f5f9,
            roughness: 0.65,
            metalness: 0.18
          }),
          // 2: Semi-reflective Titanium Charcoal
          new THREE.MeshStandardMaterial({
            color: dark ? 0x22222e : 0xe2e8f0,
            roughness: 0.35,
            metalness: 0.42
          })
        ];
      };

      let materialsPalette = getMaterials();

      const getEdgeMaterial = () => {
        const dark = isDark();
        return new THREE.LineBasicMaterial({
          color: dark ? 0x94a3b8 : 0x475569, // Grey Neon Edge Highlights
          linewidth: 1.5,
          transparent: true,
          opacity: dark ? 0.75 : 0.65
        });
      };

      let edgeMaterial = getEdgeMaterial();

      const cubies = [];

      // Instantiate all 27 cubies in 3x3x3 grid
      let matIdx = 0;
      for (let x = -1; x <= 1; x++) {
        for (let y = -1; y <= 1; y++) {
          for (let z = -1; z <= 1; z++) {
            // Assign varied material from the palette for tactile contrast
            const mat = materialsPalette[matIdx % materialsPalette.length];
            matIdx++;

            const cubieMesh = new THREE.Mesh(cubieGeo, mat);
            cubieMesh.position.set(x * pitch, y * pitch, z * pitch);

            // Chamfered Grey Neon Edge Lines
            const edgesMesh = new THREE.LineSegments(cubieEdgesGeo, edgeMaterial);
            cubieMesh.add(edgesMesh);

            puzzleGroup.add(cubieMesh);
            cubies.push(cubieMesh);
          }
        }
      }

      // ── Dynamic Quantum Particle Swarm (280 Particles) ──
      const swarmCount = 280;
      const swarmPositions = new Float32Array(swarmCount * 3);
      const swarmData = [];

      for (let i = 0; i < swarmCount; i++) {
        const radius = 1.7 + Math.random() * 2.2;
        const angle = Math.random() * Math.PI * 2;
        const speed = (0.003 + Math.random() * 0.007) * (Math.random() > 0.5 ? 1 : -1);
        const phase = Math.random() * Math.PI * 2;
        const inclination = (Math.random() - 0.5) * Math.PI * 0.85;
        const yOffset = (Math.random() - 0.5) * 1.8;

        swarmData.push({ radius, angle, speed, phase, inclination, yOffset });

        swarmPositions[i * 3] = radius * Math.cos(angle) * Math.cos(inclination);
        swarmPositions[i * 3 + 1] = yOffset;
        swarmPositions[i * 3 + 2] = radius * Math.sin(angle);
      }

      const swarmGeo = new THREE.BufferGeometry();
      swarmGeo.setAttribute('position', new THREE.BufferAttribute(swarmPositions, 3));
      
      const swarmMat = new THREE.PointsMaterial({
        color: isDark() ? 0xf8fafc : 0x475569, // Grey Neon Points
        size: 0.05,
        transparent: true,
        opacity: isDark() ? 0.85 : 0.6,
        blending: THREE.AdditiveBlending
      });
      swarmPoints = new THREE.Points(swarmGeo, swarmMat);
      scene.add(swarmPoints);

      // ── Grey Neon Lighting Engine (Monochromatic Specular Setup) ──
      ambientLight = new THREE.AmbientLight(0xffffff, isDark() ? 1.6 : 2.0);
      scene.add(ambientLight);

      // Platinum Key Light (Top-Left Specular Gleam)
      pointLight1 = new THREE.PointLight(0xf8fafc, 5.2, 22);
      pointLight1.position.set(3.5, 4.2, 3.5);
      scene.add(pointLight1);

      // Cool Silver Fill Light (Bottom-Right Ambient Sheen)
      pointLight2 = new THREE.PointLight(0x94a3b8, 3.6, 22);
      pointLight2.position.set(-3.5, -3.2, 3.5);
      scene.add(pointLight2);

      // ── Moving Variables: Puzzle Slice Rotation Engine ──
      let isRotatingSlice = false;
      let currentSliceGroup = null;
      let rotationAxis = 'y';
      let targetAngle = Math.PI / 2;
      let rotationProgress = 0;
      const rotationDuration = 48; // ~0.8 seconds at 60fps
      let pauseCounter = 50; // Pause between slice rotations

      // 5. Animation Loop with Puzzle Mechanics & Inertia
      let clock = new THREE.Clock();

      const animate = () => {
        animationFrameId = requestAnimationFrame(animate);
        if (!isVisible) return;

        const elapsedTime = clock.getElapsedTime();

        // Indefinite Zero-G Suspension Bobbing (Sine Wave)
        mainGroup.position.y = Math.sin(elapsedTime * 1.3) * 0.10;

        // Auto Continuous Multiaxial Cube Tumble
        if (!isDraggingRef.current) {
          mainGroup.rotation.x += autoRotSpeed * 0.65;
          mainGroup.rotation.y += autoRotSpeed;
          mainGroup.rotation.z += autoRotSpeed * 0.35;
        }

        // ── Autonomous Rubik's Puzzle Slice Rotation Engine ──
        if (!isRotatingSlice) {
          pauseCounter--;
          if (pauseCounter <= 0) {
            // Select random axis (X, Y, or Z) and slice (-1, 0, or 1)
            const axes = ['x', 'y', 'z'];
            rotationAxis = axes[Math.floor(Math.random() * axes.length)];
            const sliceChoices = [-1, 1, Math.random() > 0.5 ? 0 : 1];
            const targetSlice = sliceChoices[Math.floor(Math.random() * sliceChoices.length)];
            const direction = Math.random() > 0.5 ? 1 : -1;
            targetAngle = (Math.PI / 2) * direction;

            currentSliceGroup = new THREE.Group();
            puzzleGroup.add(currentSliceGroup);

            // Group the 9 cubies in this slice
            cubies.forEach((cubie) => {
              const coord = cubie.position[rotationAxis];
              const sliceIdx = Math.round(coord / pitch);
              if (sliceIdx === targetSlice) {
                currentSliceGroup.attach(cubie);
              }
            });

            isRotatingSlice = true;
            rotationProgress = 0;
          }
        } else {
          // Smooth cubic ease-in-out slice rotation
          rotationProgress += 1 / rotationDuration;
          const t = Math.min(rotationProgress, 1);
          const ease = t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
          currentSliceGroup.rotation[rotationAxis] = ease * targetAngle;

          if (t >= 1) {
            // Re-attach cubies back to puzzleGroup and snap coordinates
            const childrenToMove = [...currentSliceGroup.children];
            childrenToMove.forEach((cubie) => {
              puzzleGroup.attach(cubie);
              // Snap positions to exact grid multiples to prevent floating point drift
              cubie.position.x = Math.round(cubie.position.x / pitch) * pitch;
              cubie.position.y = Math.round(cubie.position.y / pitch) * pitch;
              cubie.position.z = Math.round(cubie.position.z / pitch) * pitch;

              // Snap rotations
              cubie.rotation.x = Math.round(cubie.rotation.x / (Math.PI / 2)) * (Math.PI / 2);
              cubie.rotation.y = Math.round(cubie.rotation.y / (Math.PI / 2)) * (Math.PI / 2);
              cubie.rotation.z = Math.round(cubie.rotation.z / (Math.PI / 2)) * (Math.PI / 2);
            });

            puzzleGroup.remove(currentSliceGroup);
            currentSliceGroup = null;
            isRotatingSlice = false;
            pauseCounter = 55 + Math.floor(Math.random() * 45); // 0.9s to 1.6s pause before next turn
          }
        }

        // ── Dynamic Quantum Particle Swarm Motion ──
        if (swarmPoints && swarmGeo) {
          const posArray = swarmGeo.attributes.position.array;
          for (let i = 0; i < swarmCount; i++) {
            const p = swarmData[i];
            p.angle += p.speed;
            
            const currentR = p.radius + Math.sin(elapsedTime * 1.2 + p.phase) * 0.16;
            posArray[i * 3] = currentR * Math.cos(p.angle) * Math.cos(p.inclination);
            posArray[i * 3 + 1] = p.yOffset + Math.sin(elapsedTime * 0.8 + p.phase) * 0.22;
            posArray[i * 3 + 2] = currentR * Math.sin(p.angle);
          }
          swarmGeo.attributes.position.needsUpdate = true;
          swarmPoints.rotation.y = elapsedTime * 0.05;
        }

        // Interactive Mouse Parallax (Clamped within Frustum Bounds)
        mainGroup.position.x += (mouseX * 0.20 - mainGroup.position.x) * 0.05;
        mainGroup.position.z += (-mouseY * 0.15 - mainGroup.position.z) * 0.05;

        // Specular Light Orbital Tracking
        pointLight1.position.x = Math.sin(elapsedTime * 1.2) * 4.5;
        pointLight1.position.z = Math.cos(elapsedTime * 1.2) * 4.5;

        renderer.render(scene, camera);
      };

      animate();

      // 6. Handle Theme Changes in Real Time
      const observer = new MutationObserver(() => {
        const dark = isDark();
        materialsPalette = getMaterials();
        edgeMaterial = getEdgeMaterial();

        cubies.forEach((cubie, idx) => {
          cubie.material = materialsPalette[idx % materialsPalette.length];
          if (cubie.children[0]) {
            cubie.children[0].material = edgeMaterial;
          }
        });

        if (swarmPoints) swarmPoints.material.color.setHex(dark ? 0xf8fafc : 0x475569);
        if (ambientLight) ambientLight.intensity = dark ? 1.6 : 2.0;
        if (pointLight1) pointLight1.color.setHex(dark ? 0xf8fafc : 0x0f172a);
      });
      observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class', 'data-theme'] });

      // 7. Responsive Resize Handler (Maintains Unclipped Frustum)
      const handleResize = () => {
        if (!container || !renderer || !camera) return;
        const newW = container.clientWidth;
        const newH = container.clientHeight;
        camera.aspect = newW / newH;
        camera.updateProjectionMatrix();
        renderer.setSize(newW, newH);
      };
      window.addEventListener('resize', handleResize);

      const intersectionObserver = new IntersectionObserver(([entry]) => {
        isVisible = entry.isIntersecting;
      }, { threshold: 0.1 });
      intersectionObserver.observe(container);

      // Cleanup
      return () => {
        cancelAnimationFrame(animationFrameId);
        window.removeEventListener('resize', handleResize);
        observer.disconnect();
        intersectionObserver.disconnect();
        if (renderer && renderer.domElement && container.contains(renderer.domElement)) {
          container.removeChild(renderer.domElement);
          renderer.dispose();
        }
      };
    });

    // Mouse Move Parallax Handler
    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      mouseX = x;
      mouseY = y;
    };

    const handleMouseDown = (e) => {
      isDraggingRef.current = true;
      previousPointerPositionRef.current = { x: e.clientX, y: e.clientY };
    };

    const handleWindowMouseMove = (e) => {
      if (!isDraggingRef.current || !mainGroup) return;
      const deltaX = e.clientX - previousPointerPositionRef.current.x;
      const deltaY = e.clientY - previousPointerPositionRef.current.y;
      mainGroup.rotation.y += deltaX * 0.01;
      mainGroup.rotation.x += deltaY * 0.01;
      previousPointerPositionRef.current = { x: e.clientX, y: e.clientY };
    };

    const handleWindowMouseUp = () => {
      isDraggingRef.current = false;
    };

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mousemove', handleWindowMouseMove);
    window.addEventListener('mouseup', handleWindowMouseUp);

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mousemove', handleWindowMouseMove);
      window.removeEventListener('mouseup', handleWindowMouseUp);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className={`relative w-full h-[400px] sm:h-[460px] lg:h-[500px] flex items-center justify-center select-none group pointer-events-auto overflow-visible ${className}`}>
      {/* Subtle radial ambient specular glow behind the floating 3D model */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.09)_0%,_rgba(203,213,225,0.05)_40%,_transparent_70%)] opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* 3D WebGL Canvas Viewport: Completely Unclipped Floating Area */}
      <div 
        ref={mountRef} 
        className="w-full h-full flex items-center justify-center cursor-grab active:cursor-grabbing relative overflow-visible"
        title="Interactive Puzzle Cube: Autonomous Rubik's mechanics with drag and tilt"
      />
    </div>
  );
}
