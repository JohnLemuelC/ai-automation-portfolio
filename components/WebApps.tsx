"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

const webapps = [
  {
    image: "/images/blog-app.png",
    title: "Blog Automation Web App",
    description:
      "User-friendly interface for generating SEO-optimized blog content. Step-by-step workflow from client setup to topic generation and final blog writing.",
    tags: ["Web App", "AI Content", "SEO", "N8N"],
  },
  {
    image: "/images/canva-listing.png",
    title: "Canva Listing Automation",
    description:
      "Real estate marketing tool that generates branded graphics from property data. Supports single listings and batch CSV uploads via Canva API.",
    tags: ["Web App", "Canva API", "Real Estate", "Automation"],
  },
  {
    image: "/images/video-merger.png",
    title: "Video AI Merger Automation",
    description:
      "6-step video production pipeline combining property tours with AI voiceovers. Automates script generation, voice synthesis, and final rendering.",
    tags: ["Web App", "AI Voice", "Video", "Pipeline"],
  },
  {
    image: "/images/webdesign-sdi.png",
    title: "Synergy Data Investments Site",
    description:
      "Investment company website with property portfolios, investor tools, market insights, and downloadable guides.",
    tags: ["WordPress", "Web Design", "Investment"],
  },
  {
    image: "/images/webdesign-synergy.png",
    title: "Synergy Estates Website",
    description:
      "Property investment platform with UK News section, property rankings, guides library, and project showcases.",
    tags: ["WordPress", "Web Design", "Real Estate"],
  },
];

export default function WebApps() {
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
      id="webapps"
      ref={ref}
      style={{ padding: "6rem 0", position: "relative", zIndex: 1 }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 2rem" }}>
        <div className="animate-on-scroll" style={{ textAlign: "center", marginBottom: "4rem" }}>
          <span className="section-label">Web Apps & Websites</span>
          <h2
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "2.5rem",
              fontWeight: 700,
            }}
          >
            Custom Applications
          </h2>
          <p style={{ color: "var(--text-muted)", fontSize: "1.1rem", marginTop: "0.75rem" }}>
            Web tools and websites I&apos;ve designed and built
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "2rem",
          }}
          className="webapps-grid"
        >
          {webapps.map((app) => (
            <div
              key={app.title}
              className="animate-on-scroll"
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--border)",
                borderRadius: "20px",
                overflow: "hidden",
                transition: "all 0.4s ease",
                display: "flex",
                flexDirection: "column",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "var(--accent-light)";
                e.currentTarget.style.transform = "translateY(-8px)";
                e.currentTarget.style.boxShadow = "0 20px 60px rgba(44, 116, 179, 0.2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--border)";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <div style={{ overflow: "hidden" }}>
                <Image
                  src={app.image}
                  alt={app.title}
                  width={600}
                  height={220}
                  style={{
                    width: "100%",
                    height: "220px",
                    objectFit: "cover",
                    objectPosition: "top left",
                    borderBottom: "1px solid var(--border)",
                    transition: "transform 0.5s ease",
                  }}
                />
              </div>
              <div style={{ padding: "1.5rem", flex: 1, display: "flex", flexDirection: "column" }}>
                <h3
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: "1.15rem",
                    fontWeight: 600,
                    marginBottom: "0.5rem",
                  }}
                >
                  {app.title}
                </h3>
                <p
                  style={{
                    color: "var(--text-muted)",
                    fontSize: "0.9rem",
                    marginBottom: "1rem",
                    flex: 1,
                  }}
                >
                  {app.description}
                </p>
                <div style={{ display: "flex", flexWrap: "wrap" as const, gap: "0.5rem" }}>
                  {app.tags.map((t) => (
                    <span key={t} className="tag-cyan">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .webapps-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 640px) {
          .webapps-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
