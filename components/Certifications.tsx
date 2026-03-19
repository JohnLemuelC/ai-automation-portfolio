"use client";

import { useEffect, useRef } from "react";
import { imgSrc } from "../lib/imgSrc";

const certs = [
  { icon: "📊", title: "Google Analytics Certification", issued: "October 2025 · Valid until 2026" },
  { icon: "🔍", title: "Google Ads Search Certification", issued: "October 2025 · Valid until 2026" },
];

export default function Certifications() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting)
          e.target.querySelectorAll(".reveal").forEach((el, i) =>
            setTimeout(() => el.classList.add("visible"), i * 120)
          );
      }),
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="certifications" ref={ref} style={{ padding: "6rem 0" }}>
      <div className="section-wrap">

        <div className="reveal" style={{ marginBottom: "2.5rem" }}>
          <span className="eyebrow">Credentials</span>
          <h2 className="section-heading">Certifications</h2>
        </div>

        <div className="certs-layout" style={{ display: "flex", gap: "3.5rem", alignItems: "center", flexWrap: "wrap" }}>
          <div className="reveal reveal-delay-1" style={{ flex: "0 0 auto" }}>
            <img
              src={imgSrc("certifications.png")}
              alt="Google Certifications"
              style={{
                width: "360px",
                maxWidth: "100%",
                borderRadius: "12px",
                border: "1px solid rgba(255,255,255,0.08)",
                display: "block",
              }}
            />
          </div>

          <div className="reveal reveal-delay-2" style={{ flex: 1, display: "flex", flexDirection: "column", gap: "1rem", minWidth: "280px" }}>
            {certs.map((c) => (
              <div
                key={c.title}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                  padding: "1.1rem 1.25rem",
                  background: "#141414",
                  border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: "10px",
                  transition: "border-color 0.2s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(231,76,60,0.35)")}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)")}
              >
                <span style={{ fontSize: "1.75rem", flexShrink: 0 }}>{c.icon}</span>
                <div>
                  <h4 style={{ fontWeight: 600, fontSize: "0.95rem", marginBottom: "0.2rem" }}>{c.title}</h4>
                  <p style={{ fontSize: "0.8rem", color: "#666" }}>{c.issued}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 700px) {
          .certs-layout { flex-direction: column !important; }
          .certs-layout img { width: 100% !important; }
        }
      `}</style>
    </section>
  );
}
