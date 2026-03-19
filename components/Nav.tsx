"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { imgSrc } from "../lib/imgSrc";

const WA = "https://wa.me/+639761172117?text=Hi+John%21+I+saw+your+portfolio+and+I%27d+like+to+discuss+a+project+with+you.";

const links = [
  { href: "#about", label: "About" },
  { href: "#automation", label: "Automation" },
  { href: "#ai-agents", label: "AI Agents" },
  { href: "#webapps", label: "Web Apps" },
  { href: "#marketing", label: "Marketing" },
  { href: "#tools", label: "Tools" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        padding: "1rem 2rem",
        background: scrolled ? "rgba(5, 10, 20, 0.97)" : "rgba(5, 10, 20, 0.8)",
        backdropFilter: "blur(20px)",
        borderBottom: "1px solid rgba(44, 116, 179, 0.3)",
        transition: "background 0.3s ease",
      }}
    >
      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* Logo */}
        <a href="#" onClick={(e) => handleClick(e, "body")}>
          <Image
            src={imgSrc("logo.png")}
            alt="JLC"
            width={45}
            height={45}
            style={{ filter: "invert(1)", transition: "transform 0.3s ease" }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          />
        </a>

        {/* Desktop Links */}
        <ul
          style={{
            display: "flex",
            gap: "2rem",
            listStyle: "none",
            alignItems: "center",
          }}
          className="hidden md:flex"
        >
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                style={{
                  color: "var(--text-muted)",
                  textDecoration: "none",
                  fontWeight: 500,
                  fontSize: "0.85rem",
                  letterSpacing: "0.5px",
                  transition: "color 0.3s ease",
                  position: "relative",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--highlight)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={WA}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              style={{ padding: "0.5rem 1.25rem", fontSize: "0.85rem" }}
            >
              Hire Me
            </a>
          </li>
        </ul>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            color: "var(--text)",
            fontSize: "1.5rem",
          }}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          style={{
            background: "rgba(5, 10, 20, 0.98)",
            borderTop: "1px solid rgba(44, 116, 179, 0.2)",
            padding: "1rem 2rem 1.5rem",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleClick(e, link.href)}
              style={{
                color: "var(--text-muted)",
                textDecoration: "none",
                fontWeight: 500,
                fontSize: "1rem",
                padding: "0.5rem 0",
                borderBottom: "1px solid rgba(44, 116, 179, 0.15)",
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href={WA}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
            style={{ textAlign: "center", marginTop: "0.5rem" }}
          >
            Hire Me
          </a>
        </div>
      )}
    </nav>
  );
}
