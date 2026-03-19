"use client";

import { useEffect, useRef } from "react";
import { imgSrc } from "../lib/imgSrc";

const apps = [
  { image: imgSrc("blog-app.png"), title: "Blog Automation Web App", desc: "User-friendly interface for generating SEO-optimized blog content. Step-by-step workflow from client setup to topic generation and final blog writing.", tags: ["Web App", "AI Content", "SEO", "N8N"] },
  { image: imgSrc("canva-listing.png"), title: "Canva Listing Automation", desc: "Real estate marketing tool that generates branded graphics from property data. Supports single listings and batch CSV uploads via Canva API.", tags: ["Web App", "Canva API", "Real Estate", "Automation"] },
  { image: imgSrc("video-merger.png"), title: "Video AI Merger", desc: "6-step video production pipeline combining property tours with AI voiceovers. Automates script generation, voice synthesis, and final rendering.", tags: ["Web App", "AI Voice", "Video", "Pipeline"] },
  { image: imgSrc("webdesign-sdi.png"), title: "Synergy Data Investments Site", desc: "Investment company website with property portfolios, investor tools, market insights, and downloadable guides.", tags: ["WordPress", "Web Design", "Investment"] },
  { image: imgSrc("webdesign-synergy.png"), title: "Synergy Estates Website", desc: "Property investment platform with UK News section, property rankings, guides library, and project showcases.", tags: ["WordPress", "Web Design", "Real Estate"] },
];

export default function WebApps() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting)
          e.target.querySelectorAll(".reveal").forEach((el, i) =>
            setTimeout(() => el.classList.add("visible"), i * 80)
          );
      }),
      { threshold: 0.05 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="webapps" ref={ref} style={{ padding: "6rem 0" }}>
      <div className="section-wrap">

        <div className="reveal" style={{ marginBottom: "2.5rem" }}>
          <span className="eyebrow">Web Apps &amp; Websites</span>
          <h2 className="section-heading">Custom Applications</h2>
          <p style={{ color: "#666", fontSize: "0.9rem", marginTop: "0.4rem" }}>Web tools and websites I&apos;ve designed and built</p>
        </div>

        <div className="webapps-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.25rem" }}>
          {apps.map((app, i) => (
            <div key={app.title} className={`reveal reveal-delay-${(i % 3) + 1}`}>
              <div className="card" style={{ height: "100%", display: "flex", flexDirection: "column" }}>
                <div style={{ overflow: "hidden" }}>
                  <img
                    src={app.image}
                    alt={app.title}
                    style={{ width: "100%", height: "200px", objectFit: "cover", objectPosition: "top left", borderBottom: "1px solid rgba(255,255,255,0.07)", display: "block", transition: "transform 0.4s ease" }}
                    onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.04)")}
                    onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                  />
                </div>
                <div style={{ padding: "1.25rem", flex: 1, display: "flex", flexDirection: "column" }}>
                  <h3 style={{ fontWeight: 700, fontSize: "0.95rem", letterSpacing: "-0.01em", marginBottom: "0.4rem" }}>{app.title}</h3>
                  <p style={{ color: "#888", fontSize: "0.83rem", lineHeight: 1.65, flex: 1, marginBottom: "1rem" }}>{app.desc}</p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.35rem" }}>
                    {app.tags.map((t) => <span key={t} className="tag">{t}</span>)}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) { .webapps-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 580px) { .webapps-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
