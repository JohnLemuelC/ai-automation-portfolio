"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

const certs = [
  { icon: "📊", title: "Google Analytics Certification", issued: "Issued October 2025 • Valid until 2026" },
  { icon: "🔍", title: "Google Ads Search Certification", issued: "Issued October 2025 • Valid until 2026" },
];

export default function Certifications() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".animate-on-scroll, .animate-fade-left, .animate-fade-right").forEach((el, i) => {
              setTimeout(() => el.classList.add("animated"), i * 150);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="certifications"
      ref={ref}
      style={{ padding: "6rem 0", position: "relative", zIndex: 1 }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 2rem" }}>
        <div className="animate-on-scroll" style={{ textAlign: "center", marginBottom: "4rem" }}>
          <span className="section-label">Credentials</span>
          <h2
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "2.5rem",
              fontWeight: 700,
            }}
          >
            Certifications
          </h2>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "3rem",
            flexWrap: "wrap" as const,
          }}
        >
          <div className="animate-fade-left">
            <Image
              src="/images/certifications.png"
              alt="Google Certifications"
              width={380}
              height={260}
              style={{
                maxWidth: "380px",
                width: "100%",
                borderRadius: "16px",
                border: "1px solid var(--border)",
                boxShadow: "0 10px 40px rgba(0, 0, 0, 0.3)",
              }}
            />
          </div>

          <div
            className="animate-fade-right"
            style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}
          >
            {certs.map((cert) => (
              <div
                key={cert.title}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                  padding: "1rem 1.5rem",
                  background: "var(--bg-card)",
                  border: "1px solid var(--border)",
                  borderRadius: "12px",
                  transition: "all 0.3s ease",
                  cursor: "default",
                  minWidth: "320px",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "var(--accent-light)";
                  e.currentTarget.style.transform = "translateX(5px)";
                  e.currentTarget.style.boxShadow = "0 10px 30px rgba(44, 116, 179, 0.2)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--border)";
                  e.currentTarget.style.transform = "translateX(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <span style={{ fontSize: "2rem" }}>{cert.icon}</span>
                <div>
                  <h4
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: "1rem",
                      fontWeight: 600,
                      marginBottom: "0.2rem",
                    }}
                  >
                    {cert.title}
                  </h4>
                  <p style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>
                    {cert.issued}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
