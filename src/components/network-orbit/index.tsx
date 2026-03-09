import {
  useEffect,
  useRef,
  useState,
  useCallback,
  type ReactElement,
} from "react";

// ─── SVG icons per network ───────────────────────────────────────────────────
const ICONS: Record<string, ReactElement> = {
  EVM: (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
    >
      <path d="M16 4L4 16l12 7 12-7L16 4z" fill="#627EEA" opacity="0.85" />
      <path d="M16 4v10.5L4 16 16 4z" fill="#8EA4F1" />
      <path d="M16 14.5L4 16l12 7V14.5z" fill="#3D5CE0" />
      <path d="M16 14.5l12 1.5-12 7V14.5z" fill="#627EEA" />
      <path d="M16 4v10.5l12 1.5L16 4z" fill="#B0BFFF" />
    </svg>
  ),
  Solana: (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
    >
      <defs>
        <linearGradient id="sol-g" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#9945FF" />
          <stop offset="100%" stopColor="#14F195" />
        </linearGradient>
      </defs>
      <path d="M5 22.5h18.5l2.5-3H7.5L5 22.5z" fill="url(#sol-g)" />
      <path d="M5 16h18.5l2.5-3H7.5L5 16z" fill="url(#sol-g)" />
      <path d="M7.5 9.5h18.5L23.5 6.5H5L7.5 9.5z" fill="url(#sol-g)" />
    </svg>
  ),
  Sui: (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
    >
      <path
        d="M16 3C9.4 3 4 8.4 4 15c0 4.5 2.4 8.4 6 10.6V22c0-3.3 2.7-6 6-6s6 2.7 6 6v3.6C25.6 23.4 28 19.5 28 15 28 8.4 22.6 3 16 3z"
        fill="#6FBCF0"
      />
      <circle cx="16" cy="11" r="3.5" fill="white" />
    </svg>
  ),
  Aptos: (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
    >
      <circle cx="16" cy="16" r="13" fill="#00BFA5" opacity="0.15" />
      <circle cx="16" cy="16" r="13" stroke="#00BFA5" strokeWidth="1.5" />
      <rect x="9" y="11" width="14" height="3" rx="1.5" fill="#00BFA5" />
      <rect x="9" y="17" width="10" height="3" rx="1.5" fill="#00BFA5" />
    </svg>
  ),
  Cosmos: (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
    >
      <circle cx="16" cy="16" r="3.5" fill="#5064FB" />
      <ellipse
        cx="16"
        cy="16"
        rx="13"
        ry="5.5"
        stroke="#5064FB"
        strokeWidth="1.5"
        fill="none"
      />
      <ellipse
        cx="16"
        cy="16"
        rx="13"
        ry="5.5"
        stroke="#5064FB"
        strokeWidth="1.5"
        fill="none"
        transform="rotate(60 16 16)"
      />
      <ellipse
        cx="16"
        cy="16"
        rx="13"
        ry="5.5"
        stroke="#5064FB"
        strokeWidth="1.5"
        fill="none"
        transform="rotate(120 16 16)"
      />
    </svg>
  ),
  NEAR: (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
    >
      <path d="M7 7h4.5l6 10V7H22v18h-4.5l-6-10v10H7V7z" fill="#00C08B" />
    </svg>
  ),
  Stellar: (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
    >
      <defs>
        <linearGradient id="xlm-g" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#7B68EE" />
          <stop offset="100%" stopColor="#C4B5FD" />
        </linearGradient>
      </defs>
      <path d="M25 9l-2.8 1.3L6 18.5l2.8-1.3L25 9z" fill="url(#xlm-g)" />
      <path d="M6 12.5l2.8 1.3L25 22.5 22.2 21.2 6 12.5z" fill="url(#xlm-g)" />
      <circle cx="16" cy="16" r="2.5" fill="url(#xlm-g)" />
      <path
        d="M11 7l1.2 2.4 2.4 1.2-2.4 1.2L11 14l-1.2-2.2L7.4 10.6l2.4-1.2z"
        fill="#C4B5FD"
        opacity="0.7"
      />
    </svg>
  ),
};

// ─── Orbit configuration ─────────────────────────────────────────────────────
type OrbitItem = {
  name: string;
  orbitRadius: number;
  speed: number;
  phaseShift: number;
  size: number;
  glowColor: string;
  ring: "inner" | "outer";
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
  },
  {
    name: "Solana",
    orbitRadius: 125,
    speed: 0.45,
    phaseShift: (Math.PI * 2) / 3,
    size: 42,
    glowColor: "#14F195",
    ring: "inner",
  },
  {
    name: "Sui",
    orbitRadius: 125,
    speed: 0.45,
    phaseShift: (Math.PI * 4) / 3,
    size: 40,
    glowColor: "#6FBCF0",
    ring: "inner",
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
  },
  {
    name: "Cosmos",
    orbitRadius: 210,
    speed: -0.28,
    phaseShift: Math.PI / 2,
    size: 38,
    glowColor: "#5064FB",
    ring: "outer",
  },
  {
    name: "NEAR",
    orbitRadius: 210,
    speed: -0.28,
    phaseShift: Math.PI,
    size: 38,
    glowColor: "#00C08B",
    ring: "outer",
  },
  {
    name: "Stellar",
    orbitRadius: 210,
    speed: -0.28,
    phaseShift: Math.PI * 1.5,
    size: 36,
    glowColor: "#9B8FFF",
    ring: "outer",
  },
];

// ─── Component ───────────────────────────────────────────────────────────────
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
      {/* Orbit path rings */}
      <div className="no-ring no-ring-inner" />
      <div className="no-ring no-ring-outer" />

      {/* Subtle radial glow behind center */}
      <div className="no-center-glow" />

      {/* Center hub */}
      <div className="no-center">
        <svg viewBox="0 0 24 24" fill="none" width="22" height="22">
          <polygon
            points="12,2 22,7 22,17 12,22 2,17 2,7"
            stroke="#ff6b1a"
            strokeWidth="1.5"
            fill="none"
          />
          <polygon
            points="12,6 18,9 18,15 12,18 6,15 6,9"
            fill="#ff6b1a"
            opacity="0.3"
          />
          <circle cx="12" cy="12" r="2.5" fill="#ff6b1a" />
        </svg>
      </div>

      {/* Orbiting icons */}
      {ORBIT_CONFIG.map((item, i) => {
        const isHovered = hovered === item.name;
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
            <div className="no-icon-inner">{ICONS[item.name]}</div>

            {/* Tooltip label */}
            {isHovered && <div className="no-tooltip">{item.name}</div>}
          </div>
        );
      })}
    </div>
  );
}
