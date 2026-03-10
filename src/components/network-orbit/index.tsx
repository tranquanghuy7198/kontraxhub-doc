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
  size: number;
  glowColor: string;
  icon: any;
  trajectory: number;
};

type Trajectory = {
  radius: number;
  speed: number;
};

const TRAJECTORIES: Trajectory[] = [
  { radius: 125, speed: 0.45 }, // clockwise
  { radius: 210, speed: -0.28 }, // counter-clockwise
];

const ORBIT_CONFIG: OrbitItem[] = [
  // Inner ring — 4 items, clockwise
  {
    name: "EVM",
    size: 42,
    glowColor: "#627EEA",
    icon: NetworkEthereum,
    trajectory: 0,
  },
  {
    name: "Solana",
    size: 42,
    glowColor: "#14F195",
    icon: NetworkSolana,
    trajectory: 0,
  },
  {
    name: "Cosmos",
    size: 42,
    glowColor: "#5064FB",
    icon: NetworkCosmos,
    trajectory: 0,
  },
  {
    name: "NEAR",
    size: 42,
    glowColor: "#00C08B",
    icon: NetworkNearProtocol,
    trajectory: 0,
  },
  // Outer ring — 5 items, counter-clockwise
  {
    name: "Sui",
    size: 42,
    glowColor: "#6FBCF0",
    icon: NetworkSui,
    trajectory: 1,
  },
  {
    name: "Aptos",
    size: 42,
    glowColor: "#00BFA5",
    icon: NetworkAptos,
    trajectory: 1,
  },
  {
    name: "Stellar",
    size: 42,
    glowColor: "#9B8FFF",
    icon: NetworkStellar,
    trajectory: 1,
  },
];

interface Position {
  x: number;
  y: number;
}

const realtimePositions = (t: number): Position[] =>
  ORBIT_CONFIG.sort((a, b) => a.trajectory - b.trajectory).map(
    (item, index) => {
      const numSameOrbit = ORBIT_CONFIG.filter(
        (i) => i.trajectory === item.trajectory,
      ).length;
      const phaseShift = (2 * Math.PI * index) / numSameOrbit;
      const trajectory = TRAJECTORIES[item.trajectory];
      const angle = trajectory.speed * t + phaseShift;
      return {
        x: Math.cos(angle) * trajectory.radius,
        y: Math.sin(angle) * trajectory.radius,
      };
    },
  );

export function NetworkOrbit() {
  const animRef = useRef<number>(0);
  const timeRef = useRef<number>(0);
  const lastRef = useRef<number>(0);
  const pausedRef = useRef<boolean>(false);
  const [positions, setPositions] = useState<Position[]>(() =>
    realtimePositions(0),
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
      setPositions(realtimePositions(t));
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
