"use client";

import { useEffect, useRef } from "react";

const contactLinks = [
  {
    href: "mailto:j.culinares06@gmail.com",
    icon: "✉️",
    label: "j.culinares06@gmail.com",
    accent: "red",
  },
  {
    href: "tel:+639761172117",
    icon: "📱",
    label: "+63 976 117 2117",
    accent: "cyan",
  },
  {
    href: "https://linkedin.com/in/john-lemuel-culinares",
    icon: "💼",
    label: "LinkedIn Profile",
    target: "_blank",
    accent: "cyan",
  },
  {
    href: "https://johnlemuelc.github.io/Portfolio/",
    icon: "🌐",
    label: "Old Portfolio",
    target: "_blank",
    accent: "cyan",
  },
];

export default function Contact() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".animate-on-scroll").forEach((el, i) => {
              setTimeout(() => el.classList.add("animated"), i * 120);
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
      id="contact"
      ref={ref}
      style={{ padding: "6rem 0", position: "relative", zIndex: 1 }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 2rem" }}>
        <div className="animate-on-scroll" style={{ textAlign: "center", marginBottom: "3rem" }}>
          <span className="section-label section-label-red">Get In Touch</span>
          <h2
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "2.5rem",
              fontWeight: 700,
              marginBottom: "1rem",
            }}
          >
            Let&apos;s Build{" "}
            <span className="gradient-text">Something Together</span>
          </h2>
          <p style={{ color: "var(--text-muted)", fontSize: "1.1rem", maxWidth: "500px", margin: "0 auto" }}>
            Ready to help with automation, AI tools, marketing, or web solutions.
          </p>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "1.25rem",
            flexWrap: "wrap" as const,
            maxWidth: "700px",
            margin: "0 auto",
          }}
        >
          {contactLinks.map((link) => {
            const hoverBorder =
              link.accent === "red" ? "var(--red-light)" : "var(--highlight)";
            const hoverShadow =
              link.accent === "red"
                ? "rgba(192, 57, 43, 0.2)"
                : "rgba(0, 212, 255, 0.2)";

            return (
              <a
                key={link.label}
                href={link.href}
                target={link.target}
                rel={link.target ? "noopener noreferrer" : undefined}
                className="animate-on-scroll"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  padding: "1rem 1.5rem",
                  background: "var(--bg-card)",
                  border: "1px solid var(--border)",
                  borderRadius: "12px",
                  color: "var(--text)",
                  textDecoration: "none",
                  transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                  fontWeight: 500,
                  fontSize: "0.95rem",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = hoverBorder;
                  e.currentTarget.style.transform = "translateY(-5px) scale(1.02)";
                  e.currentTarget.style.boxShadow = `0 15px 40px ${hoverShadow}`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--border)";
                  e.currentTarget.style.transform = "translateY(0) scale(1)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <span style={{ fontSize: "1.25rem" }}>{link.icon}</span>
                <span>{link.label}</span>
              </a>
            );
          })}
        </div>

        {/* CTA */}
        <div className="animate-on-scroll" style={{ textAlign: "center", marginTop: "4rem" }}>
          <a
            href="mailto:j.culinares06@gmail.com"
            className="btn btn-primary"
            style={{ fontSize: "1rem", padding: "1rem 2.5rem" }}
          >
            Start a Project →
          </a>
        </div>
      </div>
    </section>
  );
}
