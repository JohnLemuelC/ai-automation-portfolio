"use client";

import { useEffect, useState } from "react";
import { imgSrc } from "../lib/imgSrc";

const WA = "https://wa.me/+639761172117?text=Hi+John%21+I+saw+your+portfolio+and+I%27d+like+to+discuss+a+project.";

const links = [
  { href: "#about", label: "About" },
  { href: "#automation", label: "Automation" },
  { href: "#ai-agents", label: "AI Agents" },
  { href: "#webapps", label: "Web Apps" },
  { href: "#marketing", label: "Marketing" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <nav style={{
        position: "fixed",
        top: 0, left: 0, right: 0,
        zIndex: 200,
        height: "62px",
        display: "flex",
        alignItems: "center",
        padding: "0 2rem",
        background: scrolled ? "rgba(13,13,13,0.92)" : "rgba(13,13,13,0.6)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.07)" : "1px solid transparent",
        transition: "background 0.3s ease, border-color 0.3s ease",
      }}>
        <div style={{
          maxWidth: "1100px",
          width: "100%",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}>
          {/* Logo */}
          <a href="#" onClick={(e) => go(e, "body")} style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
            <img
              src={imgSrc("logo.png")}
              alt="JLC Logo"
              style={{ width: "34px", height: "34px", objectFit: "contain" }}
            />
            <span style={{ fontWeight: 700, fontSize: "0.95rem", color: "#F0F0F0", letterSpacing: "-0.01em" }}>
              John Lemuel
            </span>
          </a>

          {/* Desktop links */}
          <ul className="nav-desk" style={{ display: "flex", gap: "1.75rem", listStyle: "none", alignItems: "center" }}>
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={(e) => go(e, l.href)}
                  style={{ color: "#888", fontSize: "0.85rem", fontWeight: 500, transition: "color 0.2s" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#F0F0F0")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#888")}
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={WA}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-red"
                style={{ padding: "0.45rem 1rem", fontSize: "0.82rem" }}
              >
                Hire Me
              </a>
            </li>
          </ul>

          {/* Mobile hamburger */}
          <button
            className="nav-mob"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              display: "none",
              background: "none",
              border: "none",
              cursor: "pointer",
              color: "#F0F0F0",
              fontSize: "1.3rem",
              padding: "0.25rem",
            }}
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{
          position: "fixed",
          top: "62px", left: 0, right: 0,
          zIndex: 199,
          background: "rgba(13,13,13,0.97)",
          backdropFilter: "blur(16px)",
          borderBottom: "1px solid rgba(255,255,255,0.07)",
          padding: "1.25rem 2rem 1.75rem",
          display: "flex",
          flexDirection: "column",
          gap: "0.25rem",
        }}>
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={(e) => go(e, l.href)}
              style={{
                color: "#888",
                fontSize: "1rem",
                fontWeight: 500,
                padding: "0.7rem 0",
                borderBottom: "1px solid rgba(255,255,255,0.05)",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#F0F0F0")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#888")}
            >
              {l.label}
            </a>
          ))}
          <a
            href={WA}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-red"
            style={{ marginTop: "1rem", textAlign: "center", justifyContent: "center" }}
          >
            Hire Me
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .nav-desk { display: none !important; }
          .nav-mob { display: block !important; }
        }
      `}</style>
    </>
  );
}
