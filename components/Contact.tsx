"use client";

import { useEffect, useRef } from "react";

const WA = "https://wa.me/+639761172117?text=Hi+John%21+I+saw+your+portfolio+and+I%27d+like+to+discuss+a+project.";

const links = [
  { href: WA, icon: "💬", label: "WhatsApp", sub: "+63 976 117 2117", target: "_blank", accent: true },
  { href: "mailto:j.culinares06@gmail.com", icon: "✉️", label: "Email", sub: "j.culinares06@gmail.com", target: undefined, accent: false },
  { href: "https://linkedin.com/in/john-lemuel-culinares", icon: "💼", label: "LinkedIn", sub: "john-lemuel-culinares", target: "_blank", accent: false },
];

export default function Contact() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting)
          e.target.querySelectorAll(".reveal").forEach((el, i) =>
            setTimeout(() => el.classList.add("visible"), i * 100)
          );
      }),
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="contact" ref={ref} style={{ padding: "6rem 0 8rem" }}>
      <div className="section-wrap">

        <div className="reveal" style={{ marginBottom: "0.75rem" }}>
          <span className="eyebrow">Get In Touch</span>
        </div>

        <h2
          className="reveal reveal-delay-1"
          style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.1, marginBottom: "1rem" }}
        >
          Let&apos;s build something<br />
          <span style={{ color: "#E74C3C" }}>together.</span>
        </h2>

        <p
          className="reveal reveal-delay-2"
          style={{ color: "#888", fontSize: "1rem", lineHeight: 1.75, maxWidth: "480px", marginBottom: "3rem" }}
        >
          Open to freelance projects, contract work, and full-time opportunities in automation,
          AI systems, and digital marketing.
        </p>

        <div
          className="reveal reveal-delay-2"
          style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginBottom: "3.5rem" }}
        >
          <a href={WA} target="_blank" rel="noopener noreferrer" className="btn-red" style={{ fontSize: "0.95rem", padding: "0.85rem 2rem" }}>
            💬 Start a Project
          </a>
          <a href="mailto:j.culinares06@gmail.com" className="btn-ghost" style={{ fontSize: "0.95rem", padding: "0.85rem 2rem" }}>
            Send an Email
          </a>
        </div>

        <div
          className="reveal reveal-delay-3"
          style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}
        >
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target={l.target}
              rel={l.target ? "noopener noreferrer" : undefined}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
                padding: "0.9rem 1.25rem",
                background: "#141414",
                border: `1px solid ${l.accent ? "rgba(231,76,60,0.3)" : "rgba(255,255,255,0.07)"}`,
                borderRadius: "10px",
                color: "#F0F0F0",
                fontWeight: 500,
                fontSize: "0.88rem",
                transition: "all 0.2s ease",
                textDecoration: "none",
                minWidth: "200px",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(231,76,60,0.5)";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = l.accent ? "rgba(231,76,60,0.3)" : "rgba(255,255,255,0.07)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <span style={{ fontSize: "1.1rem" }}>{l.icon}</span>
              <div>
                <div style={{ fontWeight: 600, fontSize: "0.85rem" }}>{l.label}</div>
                <div style={{ fontSize: "0.75rem", color: "#666" }}>{l.sub}</div>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
