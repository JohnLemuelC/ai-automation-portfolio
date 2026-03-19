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
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting)
          e.target.querySelectorAll(".reveal").forEach((el, i) =>
            setTimeout(() => el.classList.add("visible"), i * 60)
          );
      }),
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="results" ref={ref} style={{ padding: "6rem 0" }}>
      <div className="section-wrap">

        <div className="reveal" style={{ marginBottom: "2.5rem" }}>
          <span className="eyebrow">Impact</span>
          <h2 className="section-heading">Results That Matter</h2>
        </div>

        <div className="results-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1rem" }}>
          {results.map((r, i) => (
            <div key={r.label} className={`reveal reveal-delay-${(i % 4) + 1}`}>
              <div
                style={{
                  padding: "1.75rem 1.5rem",
                  background: "#141414",
                  border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: "10px",
                  transition: "border-color 0.2s ease",
                  cursor: "default",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = i % 2 === 0 ? "rgba(231,76,60,0.4)" : "rgba(255,255,255,0.2)")}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)")}
              >
                <div className="metric-number" style={{ color: i % 2 === 0 ? "#E74C3C" : "#F0F0F0", marginBottom: "0.4rem" }}>{r.number}</div>
                <div style={{ color: "#666", fontSize: "0.8rem", fontWeight: 500, lineHeight: 1.4 }}>{r.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) { .results-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 480px) { .results-grid { grid-template-columns: repeat(2, 1fr) !important; } }
      `}</style>
    </section>
  );
}
