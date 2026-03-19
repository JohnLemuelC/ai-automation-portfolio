"use client";

import { useEffect, useRef } from "react";
import { imgSrc } from "../lib/imgSrc";

const campaigns = [
  { image: imgSrc("marketing-sdi.png"), title: "Synergy Data Investments", desc: "200+ investor-facing assets including research reports, social content, property portfolios, and newsletters.", metrics: [{ v: "200+", l: "Assets" }, { v: "30%", l: "Engagement ↑" }, { v: "28", l: "Deals" }] },
  { image: imgSrc("marketing-synergy-estates.png"), title: "Synergy Estates", desc: "Property marketing content including brand documents, valuation tools, and portfolio showcases for the UK market.", metrics: [{ v: "62%", l: "Faster" }, { v: "91%", l: "On-Time" }] },
  { image: imgSrc("marketing-metalkin.png"), title: "Metalkin Australia (Liquoroo)", desc: "Vibrant social media content for an alcohol delivery app — promotional posts, memes, and app marketing campaigns.", metrics: [{ v: "168", l: "Leads" }, { v: "54", l: "Meetings" }, { v: "5", l: "Deals" }] },
  { image: imgSrc("marketing-yfarmers.png"), title: "Aljay Agro-Industrial (YFarmers)", desc: "Nationwide agricultural campaign including YFarmers Convention, social campaigns, and road tours.", metrics: [{ v: "70K", l: "FB Likes" }, { v: "40%", l: "IG Growth" }, { v: "95", l: "Sign-ups/Event" }] },
];

export default function Marketing() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting)
          e.target.querySelectorAll(".reveal").forEach((el, i) =>
            setTimeout(() => el.classList.add("visible"), i * 100)
          );
      }),
      { threshold: 0.05 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="marketing" ref={ref} style={{ padding: "6rem 0" }}>
      <div className="section-wrap">

        <div className="reveal" style={{ marginBottom: "2.5rem" }}>
          <span className="eyebrow">Marketing</span>
          <h2 className="section-heading">Content &amp; Campaign Work</h2>
          <p style={{ color: "#666", fontSize: "0.9rem", marginTop: "0.4rem" }}>Social media content, investor materials, and marketing campaigns</p>
        </div>

        <div className="marketing-grid" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "1.25rem" }}>
          {campaigns.map((c, i) => (
            <div key={c.title} className={`reveal reveal-delay-${(i % 2) + 1}`}>
              <div
                className="card"
                style={{ overflow: "hidden" }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(231,76,60,0.35)")}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)")}
              >
                <div style={{ overflow: "hidden" }}>
                  <img
                    src={c.image}
                    alt={c.title}
                    style={{ width: "100%", height: "240px", objectFit: "cover", objectPosition: "top left", borderBottom: "1px solid rgba(255,255,255,0.07)", display: "block" }}
                  />
                </div>
                <div style={{ padding: "1.4rem" }}>
                  <h3 style={{ fontWeight: 700, fontSize: "1rem", letterSpacing: "-0.01em", marginBottom: "0.4rem" }}>{c.title}</h3>
                  <p style={{ color: "#888", fontSize: "0.85rem", lineHeight: 1.65, marginBottom: "1.25rem" }}>{c.desc}</p>
                  <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
                    {c.metrics.map((m) => (
                      <div key={m.l}>
                        <div style={{ fontSize: "1.3rem", fontWeight: 800, letterSpacing: "-0.02em", color: "#E74C3C" }}>{m.v}</div>
                        <div style={{ fontSize: "0.72rem", color: "#666", marginTop: "0.1rem" }}>{m.l}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) { .marketing-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
