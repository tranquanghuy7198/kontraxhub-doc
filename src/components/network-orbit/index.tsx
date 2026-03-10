import { useEffect, useRef, useState, useCallback } from "react";
import {
  NetworkEthereum,
  NetworkSolana,
  NetworkSui,
  NetworkAptos,
  NetworkStellar,
  NetworkNearProtocol,
  NetworkCosmos,
} from "@web3icons/react";
import logo from "@site/static/img/logo.png";
import "./network-orbit.css";

type OrbitItem = {
  name: string;
  orbitRadius: number;
  speed: number;
  phaseShift: number;
  size: number;
  glowColor: string;
  ring: "inner" | "outer";
  icon: any;
};

const ORBIT_CONFIG: OrbitItem[] = [
  // Inner ring — 3 items, clockwise
  {
    name: "EVM",
    orbitRadius: 125,
    speed: 0.45,
    phaseShift: 0,
    size: 44,
    glowColor: "#627EEA",
    ring: "inner",
    icon: NetworkEthereum,
  },
  {
    name: "Solana",
    orbitRadius: 125,
    speed: 0.45,
    phaseShift: (Math.PI * 2) / 3,
    size: 42,
    glowColor: "#14F195",
    ring: "inner",
    icon: NetworkSolana,
  },
  {
    name: "Sui",
    orbitRadius: 125,
    speed: 0.45,
    phaseShift: (Math.PI * 4) / 3,
    size: 40,
    glowColor: "#6FBCF0",
    ring: "inner",
    icon: NetworkSui,
  },
  // Outer ring — 4 items, counter-clockwise
  {
    name: "Aptos",
    orbitRadius: 210,
    speed: -0.28,
    phaseShift: 0,
    size: 38,
    glowColor: "#00BFA5",
    ring: "outer",
    icon: NetworkAptos,
  },
  {
    name: "Cosmos",
    orbitRadius: 210,
    speed: -0.28,
    phaseShift: Math.PI / 2,
    size: 38,
    glowColor: "#5064FB",
    ring: "outer",
    icon: NetworkCosmos,
  },
  {
    name: "NEAR",
    orbitRadius: 210,
    speed: -0.28,
    phaseShift: Math.PI,
    size: 38,
    glowColor: "#00C08B",
    ring: "outer",
    icon: NetworkNearProtocol,
  },
  {
    name: "Stellar",
    orbitRadius: 210,
    speed: -0.28,
    phaseShift: Math.PI * 1.5,
    size: 36,
    glowColor: "#9B8FFF",
    ring: "outer",
    icon: NetworkStellar,
  },
];

export function NetworkOrbit() {
  const animRef = useRef<number>(0);
  const timeRef = useRef<number>(0);
  const lastRef = useRef<number>(0);
  const pausedRef = useRef<boolean>(false);
  const [positions, setPositions] = useState(() =>
    ORBIT_CONFIG.map((item) => ({
      x: Math.cos(item.phaseShift) * item.orbitRadius,
      y: Math.sin(item.phaseShift) * item.orbitRadius,
    })),
  );
  const [hovered, setHovered] = useState<string | null>(null);

  useEffect(() => {
    lastRef.current = performance.now();

    const tick = (now: number) => {
      const delta = (now - lastRef.current) / 1000;
      lastRef.current = now;
      if (!pausedRef.current) {
        timeRef.current += delta;
      }
      const t = timeRef.current;
      setPositions(
        ORBIT_CONFIG.map((item) => ({
          x: Math.cos(item.speed * t + item.phaseShift) * item.orbitRadius,
          y: Math.sin(item.speed * t + item.phaseShift) * item.orbitRadius,
        })),
      );
      animRef.current = requestAnimationFrame(tick);
    };

    animRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animRef.current);
  }, []);

  const handleContainerEnter = useCallback(() => {
    pausedRef.current = true;
  }, []);

  const handleContainerLeave = useCallback(() => {
    pausedRef.current = false;
    setHovered(null);
  }, []);

  return (
    <div
      className="no-wrapper"
      onMouseEnter={handleContainerEnter}
      onMouseLeave={handleContainerLeave}
      aria-label="Supported blockchain networks orbiting visualization"
    >
      {/* Trajectory */}
      <div className="no-ring no-ring-inner" />
      <div className="no-ring no-ring-outer" />

      {/* Center */}
      <div className="no-center-glow" />
      <div className="no-center">
        <img src={logo} className="no-center-logo" />
      </div>

      {/* Planets */}
      {ORBIT_CONFIG.map((item, i) => {
        const isHovered = hovered === item.name;
        const Icon = item.icon;
        return (
          <div
            key={item.name}
            className={`no-icon${isHovered ? " no-icon--hovered" : ""}`}
            style={{
              width: item.size,
              height: item.size,
              transform: `translate(calc(-50% + ${positions[i].x}px), calc(-50% + ${positions[i].y}px))`,
              boxShadow: isHovered
                ? `0 0 20px 5px ${item.glowColor}55, 0 0 40px 8px ${item.glowColor}22`
                : `0 0 8px 1px ${item.glowColor}18`,
              borderColor: isHovered
                ? `${item.glowColor}88`
                : "rgba(255,255,255,0.07)",
            }}
            onMouseEnter={() => setHovered(item.name)}
            onMouseLeave={() => setHovered(null)}
          >
            <div className="no-icon-inner">
              <Icon variant="branded" />
            </div>
            {isHovered && <div className="no-tooltip">{item.name}</div>}
          </div>
        );
      })}
    </div>
  );
}
