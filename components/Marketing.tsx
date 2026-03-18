"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

const campaigns = [
  {
    image: "/images/marketing-sdi.png",
    title: "Synergy Data Investments",
    description:
      "Created 200+ investor-facing assets including research reports, social content, property portfolios, and newsletters.",
    metrics: [
      { value: "200+", label: "Assets" },
      { value: "30%", label: "Engagement ↑" },
      { value: "28", label: "Deals" },
    ],
  },
  {
    image: "/images/marketing-synergy-estates.png",
    title: "Synergy Estates",
    description:
      "Property marketing content including brand documents, valuation tools, and portfolio showcases for UK market.",
    metrics: [
      { value: "62%", label: "Faster" },
      { value: "91%", label: "On-Time" },
    ],
  },
  {
    image: "/images/marketing-metalkin.png",
    title: "Metalkin Australia (Liquoroo)",
    description:
      "Vibrant social media content for alcohol delivery app — promotional posts, memes, and app marketing campaigns.",
    metrics: [
      { value: "168", label: "Leads" },
      { value: "54", label: "Meetings" },
      { value: "5", label: "Deals" },
    ],
  },
  {
    image: "/images/marketing-yfarmers.png",
    title: "Aljay Agro-Industrial (YFarmers)",
    description:
      "Nationwide agricultural campaign including YFarmers Convention, social campaigns, and road tours.",
    metrics: [
      { value: "70K", label: "FB Likes" },
      { value: "40%", label: "IG Growth" },
      { value: "95", label: "Sign-ups/Event" },
    ],
  },
];

export default function Marketing() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".animate-on-scroll").forEach((el, i) => {
              setTimeout(() => el.classList.add("animated"), i * 100);
            });
          }
        });
      },
      { threshold: 0.05 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="marketing"
      ref={ref}
      style={{ padding: "6rem 0", position: "relative", zIndex: 1 }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 2rem" }}>
        <div className="animate-on-scroll" style={{ textAlign: "center", marginBottom: "4rem" }}>
          <span className="section-label section-label-red">Marketing</span>
          <h2
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "2.5rem",
              fontWeight: 700,
            }}
          >
            Content &amp; Campaign Work
          </h2>
          <p style={{ color: "var(--text-muted)", fontSize: "1.1rem", marginTop: "0.75rem" }}>
            Social media content, investor materials, and marketing campaigns
          </p>
        </div>

        <div
          style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "2rem" }}
          className="marketing-grid"
        >
          {campaigns.map((camp) => (
            <div
              key={camp.title}
              className="animate-on-scroll"
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--border)",
                borderRadius: "20px",
                overflow: "hidden",
                transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                position: "relative",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "var(--red-light)";
                e.currentTarget.style.transform = "translateY(-10px)";
                e.currentTarget.style.boxShadow = "0 25px 60px rgba(192, 57, 43, 0.15)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--border)";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              {/* Red top bar */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: "3px",
                  background: "linear-gradient(90deg, var(--red-light), var(--red))",
                }}
              />
              <div style={{ overflow: "hidden" }}>
                <Image
                  src={camp.image}
                  alt={camp.title}
                  width={700}
                  height={280}
                  style={{
                    width: "100%",
                    height: "280px",
                    objectFit: "cover",
                    objectPosition: "top left",
                    borderBottom: "1px solid var(--border)",
                  }}
                />
              </div>
              <div style={{ padding: "1.5rem" }}>
                <h3
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: "1.2rem",
                    fontWeight: 600,
                    marginBottom: "0.5rem",
                  }}
                >
                  {camp.title}
                </h3>
                <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", marginBottom: "1.25rem" }}>
                  {camp.description}
                </p>
                <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" as const }}>
                  {camp.metrics.map((m) => (
                    <div key={m.label} style={{ textAlign: "center" }}>
                      <div
                        style={{
                          fontFamily: "'Space Grotesk', sans-serif",
                          fontSize: "1.25rem",
                          fontWeight: 700,
                          color: "var(--red-light)",
                        }}
                      >
                        {m.value}
                      </div>
                      <div style={{ fontSize: "0.7rem", color: "var(--text-muted)" }}>{m.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .marketing-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
