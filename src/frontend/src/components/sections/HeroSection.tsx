import { Stars } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import type { ThreeElements } from "@react-three/fiber";
import { ChevronDown } from "lucide-react";
import { motion } from "motion/react";
import { useMemo, useRef } from "react";
import * as THREE from "three";

// ─── 3D Scene Components ─────────────────────────────────────────────────────

function ParticleField() {
  const meshRef = useRef<THREE.InstancedMesh>(null!);
  const count = 250;

  const { positions, speeds } = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const spd = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 12;
      spd[i] = 0.002 + Math.random() * 0.004;
    }
    return { positions: pos, speeds: spd };
  }, []);

  const dummy = useMemo(() => new THREE.Object3D(), []);

  useFrame(() => {
    if (!meshRef.current) return;
    for (let i = 0; i < count; i++) {
      positions[i * 3 + 1] += speeds[i];
      if (positions[i * 3 + 1] > 10) positions[i * 3 + 1] = -10;
      dummy.position.set(
        positions[i * 3],
        positions[i * 3 + 1],
        positions[i * 3 + 2],
      );
      dummy.scale.setScalar(0.04 + Math.random() * 0.02);
      dummy.updateMatrix();
      meshRef.current.setMatrixAt(i, dummy.matrix);
    }
    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, count]}>
      <sphereGeometry args={[1, 6, 6]} />
      <meshStandardMaterial
        color="#0EA5E9"
        emissive="#0EA5E9"
        emissiveIntensity={0.6}
        roughness={0.2}
        metalness={0.8}
      />
    </instancedMesh>
  );
}

function RotatingIcosahedron() {
  const ref = useRef<THREE.Mesh>(null!);
  useFrame((_, delta) => {
    ref.current.rotation.x += delta * 0.18;
    ref.current.rotation.y += delta * 0.24;
  });
  return (
    <mesh ref={ref} position={[3.5, 0.5, -1]}>
      <icosahedronGeometry args={[1.4, 0]} />
      <meshStandardMaterial
        color="#7C3AED"
        emissive="#7C3AED"
        emissiveIntensity={0.5}
        wireframe
        transparent
        opacity={0.85}
      />
    </mesh>
  );
}

function RotatingTorusKnot() {
  const ref = useRef<THREE.Mesh>(null!);
  useFrame((_, delta) => {
    ref.current.rotation.x += delta * 0.12;
    ref.current.rotation.z += delta * 0.2;
  });
  return (
    <mesh ref={ref} position={[-3.8, -0.6, -0.5]}>
      <torusKnotGeometry args={[0.9, 0.28, 100, 16]} />
      <meshStandardMaterial
        color="#0EA5E9"
        emissive="#7C3AED"
        emissiveIntensity={0.4}
        wireframe
        transparent
        opacity={0.7}
      />
    </mesh>
  );
}

function Scene() {
  return (
    <>
      <Stars
        radius={80}
        depth={60}
        count={3000}
        factor={3}
        saturation={0.3}
        fade
        speed={0.4}
      />
      <ambientLight intensity={0.3} />
      <pointLight position={[5, 5, 3]} intensity={2} color="#0EA5E9" />
      <pointLight position={[-5, -3, 2]} intensity={1.5} color="#7C3AED" />
      <pointLight position={[0, -5, -2]} intensity={1} color="#ffffff" />
      <ParticleField />
      <RotatingIcosahedron />
      <RotatingTorusKnot />
    </>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.18, delayChildren: 0.3 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" as const },
  },
};

export default function HeroSection() {
  return (
    <section
      id="hero"
      data-ocid="hero.section"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background gradient */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.92 0.04 230) 0%, oklch(0.94 0.06 270) 40%, oklch(0.96 0.03 195) 100%)",
        }}
      />

      {/* Three.js canvas — pointer-events none so it never blocks scrolling */}
      <div className="absolute inset-0 z-0" style={{ pointerEvents: "none" }}>
        <Canvas
          camera={{ position: [0, 0, 5], fov: 75 }}
          gl={{ antialias: true, alpha: true }}
          style={{ width: "100%", height: "100%" }}
        >
          <Scene />
        </Canvas>
      </div>

      {/* Overlay text */}
      <motion.div
        className="relative z-10 flex flex-col items-center text-center px-6 max-w-4xl mx-auto gap-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Badge */}
        <motion.span
          variants={fadeUp}
          className="glass px-4 py-1.5 text-xs font-semibold tracking-widest uppercase"
          style={{ color: "oklch(0.65 0.22 195)" }}
        >
          The Future of Student Careers
        </motion.span>

        {/* Headline */}
        <motion.h1
          variants={fadeUp}
          className="font-display font-black leading-[1.05] tracking-tight"
          style={{
            fontSize: "clamp(3rem, 8vw, 6.5rem)",
            background:
              "linear-gradient(120deg, oklch(0.65 0.22 195) 0%, oklch(0.6 0.22 270) 55%, oklch(0.55 0.2 300) 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Kernal & Key
        </motion.h1>

        {/* Tagline */}
        <motion.p
          variants={fadeUp}
          className="font-display font-semibold text-foreground/90 leading-snug"
          style={{ fontSize: "clamp(1.25rem, 3vw, 2rem)" }}
        >
          Launch Your Career.{" "}
          <span
            style={{
              background:
                "linear-gradient(90deg, oklch(0.65 0.22 195), oklch(0.6 0.22 270))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Get Paid to Learn.
          </span>
        </motion.p>

        {/* Sub-tagline */}
        <motion.p
          variants={fadeUp}
          className="text-muted-foreground font-body text-base md:text-lg max-w-xl"
        >
          Real internships. Real certificates. Real placements.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          variants={fadeUp}
          className="flex flex-col sm:flex-row gap-4 mt-2"
        >
          <button
            type="button"
            data-ocid="hero.apply_now_button"
            onClick={() =>
              document
                .getElementById("apply")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="relative px-8 py-3.5 rounded-xl font-display font-semibold text-white text-base shadow-lg transition-smooth hover:scale-[1.04] hover:shadow-xl active:scale-[0.98] overflow-hidden"
            style={{
              background:
                "linear-gradient(135deg, oklch(0.65 0.22 195) 0%, oklch(0.6 0.22 270) 100%)",
            }}
          >
            <span className="relative z-10">Apply Now</span>
          </button>

          <button
            type="button"
            data-ocid="hero.learn_more_button"
            onClick={() =>
              document
                .getElementById("offer")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="glass px-8 py-3.5 rounded-xl font-display font-semibold text-base transition-smooth hover:scale-[1.04] active:scale-[0.98]"
            style={{ color: "oklch(0.6 0.22 270)" }}
          >
            Learn More
          </button>
        </motion.div>
      </motion.div>

      {/* Scroll chevron */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1"
        initial={{ opacity: 0, y: -10 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { delay: 1.4, duration: 0.6 },
        }}
        data-ocid="hero.scroll_indicator"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{
            duration: 1.6,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        >
          <ChevronDown
            size={28}
            strokeWidth={1.5}
            style={{ color: "oklch(0.65 0.22 195)" }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
