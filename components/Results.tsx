"use client";

import { useEffect, useRef } from "react";

const results = [
  { number: "62%", label: "Faster Production" },
  { number: "58%", label: "Admin Time Reduced" },
  { number: "42%", label: "Fewer Missed Follow-ups" },
  { number: "5.6%", label: "Email CTR Achieved" },
  { number: "70K", label: "FB Likes in 3 Months" },
  { number: "200+", label: "Marketing Assets Built" },
  { number: "91%", label: "On-Time Delivery" },
  { number: "90%+", label: "CSAT Score" },
];

export default function Results() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".animate-on-scroll").forEach((el, i) => {
              setTimeout(() => el.classList.add("animated"), i * 80);
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
      id="results"
      ref={ref}
      style={{ padding: "6rem 0", position: "relative", zIndex: 1 }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 2rem" }}>
        <div className="animate-on-scroll" style={{ textAlign: "center", marginBottom: "4rem" }}>
          <span className="section-label section-label-red">Impact</span>
          <h2
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "2.5rem",
              fontWeight: 700,
            }}
          >
            Results That Matter
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "1.5rem",
          }}
          className="results-grid"
        >
          {results.map((r, i) => (
            <div
              key={r.label}
              className="animate-on-scroll"
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <div
                style={{
                  padding: "2rem",
                  background: "var(--bg-card)",
                  border: "1px solid var(--border)",
                  borderRadius: "20px",
                  textAlign: "center",
                  transition: "all 0.3s ease",
                  cursor: "default",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor =
                    i % 2 === 0 ? "var(--highlight)" : "var(--red-light)";
                  e.currentTarget.style.transform = "scale(1.05)";
                  e.currentTarget.style.boxShadow =
                    i % 2 === 0
                      ? "0 15px 40px rgba(0, 212, 255, 0.15)"
                      : "0 15px 40px rgba(192, 57, 43, 0.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--border)";
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <div
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: "2.5rem",
                    fontWeight: 700,
                    background:
                      i % 2 === 0
                        ? "linear-gradient(135deg, var(--highlight) 0%, var(--accent-light) 100%)"
                        : "linear-gradient(135deg, var(--red-light) 0%, var(--red) 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {r.number}
                </div>
                <div style={{ color: "var(--text-muted)", fontSize: "0.9rem", marginTop: "0.5rem" }}>
                  {r.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .results-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 480px) {
          .results-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
