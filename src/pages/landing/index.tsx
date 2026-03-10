import { useState, useEffect } from "react";
import {
  ArrowRight,
  Code,
  Users,
  Zap,
  ExternalLink,
  Github,
  MessageCircle,
  Rocket,
  Layers,
  Shield,
  ChevronDown,
  Star,
  Terminal,
  Sparkles,
} from "lucide-react";
import "./landing.css";
import { NetworkCluster, pageLink, PRODUCT_NAME } from "@site/src/constants";
import Logo from "@site/src/components/logo";
import { NetworkOrbit } from "@site/src/components/network-orbit";
import { useHistory } from "@docusaurus/router";

const resources = [
  {
    id: "quickstart",
    Icon: Rocket,
    title: "Quick Start Guide",
    subtitle: "Deploy your first contract in minutes",
    description:
      "Connect your wallet, upload your bytecode, and interact with your smart contract — no CLI required.",
    cta: "Get Started",
    link: pageLink("contracts"),
    glowClass: "kh-card-glow-orange",
    iconClass: "kh-card-icon-orange",
    ctaClass: "kh-card-cta-orange",
    dotClass: "kh-card-dot-orange",
    features: ["Wallet Connection", "Contract Deployment", "Live Interaction"],
  },
  {
    id: "explorer",
    Icon: Code,
    title: "Contract Explorer",
    subtitle: "Inspect any deployed contract",
    description:
      "Browse contract ABIs, call functions interactively, and inspect state in real time across multiple networks.",
    cta: "Open Explorer",
    link: pageLink("contracts"),
    glowClass: "kh-card-glow-red",
    iconClass: "kh-card-icon-red",
    ctaClass: "kh-card-cta-red",
    dotClass: "kh-card-dot-red",
    features: ["ABI Browser", "Function Calls", "State Inspection"],
  },
  {
    id: "workspaces",
    Icon: Users,
    title: "Workspaces",
    subtitle: "Organize across projects",
    description:
      "Group contracts into workspaces for cleaner project management. Switch between networks without losing context.",
    cta: "View Workspaces",
    link: pageLink("workspaces"),
    glowClass: "kh-card-glow-orange",
    iconClass: "kh-card-icon-orange",
    ctaClass: "kh-card-cta-orange",
    dotClass: "kh-card-dot-orange",
    features: ["Multi-Contract Groups", "Network Switching", "Shared Access"],
  },
];

const networks = [
  { name: "EVM", cluster: NetworkCluster.Evm, status: "Supported" },
  {
    name: "Solana (Anchor)",
    cluster: NetworkCluster.Solana,
    status: "Supported",
  },
  { name: "Sui", cluster: NetworkCluster.Sui, status: "Supported" },
  {
    name: "Aptos",
    cluster: NetworkCluster.Aptos,
    status: "Supported",
  },
  {
    name: "Cosmos",
    cluster: NetworkCluster.Cosmos,
    status: "Supported",
  },
  {
    name: "NEAR",
    cluster: NetworkCluster.Near,
    status: "Supported",
  },
  {
    name: "Stellar",
    cluster: NetworkCluster.Stellar,
    status: "Supported",
  },
  {
    name: "Polkadot",
    cluster: NetworkCluster.Polkadot,
    status: "Coming Soon",
  },
  {
    name: "Ton",
    cluster: NetworkCluster.Ton,
    status: "Coming Soon",
  },
];

const highlights = [
  { Icon: Shield, label: "No login required" },
  { Icon: Zap, label: "Real-time interaction" },
  { Icon: Layers, label: "Multi-network" },
];

export default function Landing() {
  const [scrollY, setScrollY] = useState(0);
  const history = useHistory();

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const goToDocs = (networkCluster: NetworkCluster) => {
    history.push(`docs/category/${networkCluster}`);
  };

  return (
    <div className="kh-landing">
      {/* Animated background */}
      <div className="kh-bg-blobs">
        <div
          className="kh-blob kh-blob-1"
          style={{
            transform: `translate(${scrollY * 0.05}px, ${scrollY * 0.02}px)`,
          }}
        />
        <div
          className="kh-blob kh-blob-2"
          style={{
            transform: `translate(${-scrollY * 0.03}px, ${scrollY * 0.04}px)`,
          }}
        />
        <div
          className="kh-blob kh-blob-3"
          style={{
            transform: `translate(${scrollY * 0.02}px, ${-scrollY * 0.03}px)`,
          }}
        />
        <div className="kh-bg-grid" />
      </div>

      {/* Nav */}
      <nav className="kh-nav">
        <div className="kh-nav-inner">
          <Logo />
          <div className="kh-nav-links">
            <a href="#start">Get Started</a>
            <a href="#networks">Networks</a>
            <a href="#cta">Resources</a>
            <a
              href={pageLink("home")}
              target="_blank"
              rel="noopener noreferrer"
              className="kh-nav-cta"
            >
              Open App
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="kh-hero">
        <div className="kh-hero-inner">
          <div className="kh-badge">
            <Sparkles size={16} />
            <span>Smart contract tooling for blockchain engineers</span>
          </div>

          <h1 className="kh-hero-title">
            Interact with{" "}
            <span className="kh-gradient-text">Smart Contracts</span>
            <br />
            without the friction
          </h1>

          <p className="kh-hero-subtitle">
            {PRODUCT_NAME} gives you a unified explorer to deploy, browse, and
            call smart contracts across multiple blockchain networks — all from
            your browser.
          </p>

          <div className="kh-hero-actions">
            <a
              href={pageLink("home")}
              target="_blank"
              rel="noopener noreferrer"
              className="kh-btn-primary"
            >
              Open {PRODUCT_NAME}
              <ArrowRight size={20} />
            </a>
            <a href="/kontraxhub-doc/docs/intro" className="kh-btn-secondary">
              Read the Docs
            </a>
          </div>

          <div className="kh-hero-stats">
            {highlights.map(({ Icon, label }) => (
              <div className="kh-hero-stat" key={label}>
                <Icon size={16} />
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="kh-hero-scroll">
          <ChevronDown size={24} />
        </div>
      </section>

      {/* Cards */}
      <section id="start" className="kh-cards-section">
        <div className="kh-cards-inner">
          <div className="kh-section-header">
            <h2 className="kh-section-title">Everything in one place</h2>
            <p className="kh-section-subtitle">
              Three core tools to cover your full contract workflow
            </p>
          </div>
          <div className="kh-cards-grid">
            {resources.map((r) => (
              <div className="kh-card" key={r.id}>
                <div className={`kh-card-glow ${r.glowClass}`} />
                <div className="kh-card-inner">
                  <div className={`kh-card-icon ${r.iconClass}`}>
                    <r.Icon size={28} />
                  </div>
                  <h3 className="kh-card-title">{r.title}</h3>
                  <p className="kh-card-subtitle">{r.subtitle}</p>
                  <p className="kh-card-desc">{r.description}</p>
                  <ul className="kh-card-features">
                    {r.features.map((f) => (
                      <li className="kh-card-feature" key={f}>
                        <span className={`kh-card-dot ${r.dotClass}`} />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={r.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`kh-card-cta ${r.ctaClass}`}
                  >
                    {r.cta}
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Networks */}
      <section id="networks" className="kh-networks-section">
        <div className="kh-networks-bg" />
        <div className="kh-networks-inner">
          <div className="kh-section-header">
            <div className="kh-badge kh-badge-red">
              <Terminal size={16} />
              <span>Multi-chain support</span>
            </div>
            <h2 className="kh-section-title">Supported Networks</h2>
            <p className="kh-section-subtitle">
              Pick your network and follow the setup guide to get started
            </p>
          </div>

          <div className="kh-networks-layout">
            {/* Left: table + note */}
            <div className="kh-networks-table-col">
              <div className="kh-table-wrapper">
                <div className="kh-table-head">
                  <span className="kh-th-1">Network</span>
                  <span className="kh-th-2">Status</span>
                  <span className="kh-th-3">Documentation</span>
                </div>
                <div className="kh-table-body">
                  {networks.map((n) => (
                    <div className="kh-table-row" key={n.name}>
                      <span className="kh-td-1">{n.name}</span>
                      <span className="kh-td-2">{n.status}</span>
                      <span className="kh-td-3">
                        {n.status === "Supported" ? (
                          <a onClick={() => goToDocs(n.cluster)}>
                            Setup Guide →
                          </a>
                        ) : (
                          <span className="kh-td-soon">Coming soon</span>
                        )}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="kh-note">
                <div className="kh-note-icon">
                  <Star size={20} />
                </div>
                <div>
                  <p className="kh-note-title">More networks on the way</p>
                  <p className="kh-note-text">
                    {PRODUCT_NAME} is actively expanding network support.
                    Additional networks are in progress. Watch the documentation
                    for updates.
                  </p>
                </div>
              </div>
            </div>

            {/* Right: orbiting network icons */}
            <div className="kh-networks-orbit-col">
              <NetworkOrbit onNetworkClick={goToDocs} />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="cta" className="kh-cta-section">
        <div className="kh-cta-inner">
          <div className="kh-cta-box">
            <div className="kh-cta-overlay" />
            <div className="kh-cta-content">
              <h2 className="kh-cta-title">Ready to start building?</h2>
              <p className="kh-cta-subtitle">
                Open {PRODUCT_NAME} in your browser and connect your first
                contract in minutes — no installation required.
              </p>
              <div className="kh-cta-buttons">
                <a
                  href={pageLink("home")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="kh-btn-dark"
                >
                  <Rocket size={20} />
                  Open {PRODUCT_NAME}
                </a>
                <a href="/kontraxhub-doc/docs/intro" className="kh-btn-ghost">
                  Read the Docs
                  <ArrowRight size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="kh-footer">
        <div className="kh-footer-inner">
          <div className="footer-logo">
            <Logo />
          </div>
          <div className="kh-footer-links">
            <a href="/kontraxhub-doc/docs/intro">Docs</a>
            <a
              href={pageLink("home")}
              target="_blank"
              rel="noopener noreferrer"
            >
              App
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={16} />
            </a>
            <a href="mailto:hello@kontraxhub.dev">
              <MessageCircle size={16} />
            </a>
          </div>
          <p className="kh-footer-copy">
            © 2026 {PRODUCT_NAME}. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
