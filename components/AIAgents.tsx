"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { imgSrc } from "../lib/imgSrc";

const agents = [
  {
    image: imgSrc("Google Ads MCP Server.png"),
    title: "Google Ads MCP Server",
    description:
      "A Model Context Protocol server enabling AI assistants (Claude, ChatGPT) to natively query and manage Google Ads accounts — campaigns, keywords, search terms, and performance data — through natural language.",
    tags: ["MCP", "Google Ads API", "Python", "AI"],
    badge: "Open Source",
    badgeColor: "var(--highlight)",
    accent: "cyan",
  },
  {
    image: imgSrc("Claude Code.png"),
    title: "AdLlama — AI Google Ads Platform",
    description:
      "Contributing to AdLlama, a Next.js + Python platform that lets marketers manage Google Ads campaigns through a Claude-powered chat interface. Built the Keyword Planner API integration and Ad Copy Validation layer.",
    tags: ["Next.js", "Python", "Claude API", "Google Ads"],
    badge: "Contributor",
    badgeColor: "var(--red-light)",
    accent: "red",
  },
  {
    image: imgSrc("Retell-AI-Logo.png"),
    title: "Slack Ad Script Reviewer",
    description:
      "A Slack bot that automatically reviews ad scripts submitted by team members — checking for compliance, tone, call-to-action strength, and brand voice consistency using AI analysis.",
    tags: ["Slack API", "Node.js", "AI Review", "Automation"],
    badge: "In Progress",
    badgeColor: "#FF7A00",
    accent: "orange",
  },
  {
    image: imgSrc("Google Ads MCP Server.png"),
    title: "Google Ads Agent (Chat)",
    description:
      "Conversational AI agent that connects to live Google Ads data — fetches campaign performance, suggests optimizations, generates keyword ideas, and surfaces anomalies through natural dialogue.",
    tags: ["AI Agent", "Google Ads", "Chat", "Analytics"],
    badge: "Live",
    badgeColor: "#22c55e",
    accent: "cyan",
  },
  {
    image: imgSrc("Gemini_Generated_Image_330ieb330ieb330i.png"),
    title: "Ad Writing GPT",
    description:
      "Custom GPT trained on high-performing ad copy patterns. Generates platform-specific ads (Google, Meta, LinkedIn) with character count enforcement, CTA optimization, and brand voice matching.",
    tags: ["GPT", "Copywriting", "Google Ads", "Meta Ads"],
    badge: "Active",
    badgeColor: "#22c55e",
    accent: "cyan",
  },
  {
    image: imgSrc("Gemini_Generated_Image_dcpnjzdcpnjzdcpn.png"),
    title: "Basecamp AI Agent",
    description:
      "Zapier-powered AI agent that monitors Basecamp project activity, summarizes discussion threads via ChatGPT, and posts daily briefings to Slack — keeping remote teams aligned without manual reviews.",
    tags: ["Basecamp", "Zapier", "ChatGPT", "Slack"],
    badge: "Active",
    badgeColor: "#22c55e",
    accent: "cyan",
  },
];

function AgentCard({ agent }: { agent: (typeof agents)[0] }) {
  const borderColor =
    agent.accent === "red"
      ? "var(--red-light)"
      : agent.accent === "orange"
      ? "#FF7A00"
      : "var(--highlight)";
  const shadowColor =
    agent.accent === "red"
      ? "rgba(192, 57, 43, 0.15)"
      : agent.accent === "orange"
      ? "rgba(255, 122, 0, 0.15)"
      : "rgba(0, 212, 255, 0.15)";

  const tagClass =
    agent.accent === "red"
      ? "tag-red"
      : agent.accent === "orange"
      ? "tag-orange"
      : "tag-cyan";

  return (
    <div
      style={{
        background: "var(--bg-card)",
        border: "1px solid var(--border)",
        borderRadius: "20px",
        overflow: "hidden",
        transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
        position: "relative",
        display: "flex",
        flexDirection: "column",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = borderColor;
        e.currentTarget.style.transform = "translateY(-10px)";
        e.currentTarget.style.boxShadow = `0 25px 60px ${shadowColor}`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "var(--border)";
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      {/* Top accent bar */}
      <div
        style={{
          height: "3px",
          background:
            agent.accent === "red"
              ? "linear-gradient(90deg, var(--red-light), var(--red))"
              : agent.accent === "orange"
              ? "linear-gradient(90deg, #FF7A00, #FF9A40)"
              : "linear-gradient(90deg, var(--highlight), var(--accent-light))",
        }}
      />

      <div style={{ padding: "1.5rem", flex: 1, display: "flex", flexDirection: "column" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            marginBottom: "1rem",
          }}
        >
          <div
            style={{
              width: "56px",
              height: "56px",
              borderRadius: "14px",
              background: "rgba(20, 66, 114, 0.3)",
              border: "1px solid var(--border)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
              flexShrink: 0,
            }}
          >
            <Image
              src={agent.image}
              alt={agent.title}
              width={40}
              height={40}
              style={{ objectFit: "contain", filter: "brightness(0) invert(1)", opacity: 0.8 }}
            />
          </div>
          <span
            style={{
              padding: "0.3rem 0.8rem",
              background: `${agent.badgeColor}18`,
              border: `1px solid ${agent.badgeColor}40`,
              borderRadius: "50px",
              fontSize: "0.7rem",
              color: agent.badgeColor,
              fontWeight: 600,
            }}
          >
            {agent.badge}
          </span>
        </div>

        <h3
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "1.1rem",
            fontWeight: 600,
            marginBottom: "0.6rem",
          }}
        >
          {agent.title}
        </h3>
        <p
          style={{
            color: "var(--text-muted)",
            fontSize: "0.88rem",
            lineHeight: 1.6,
            marginBottom: "1rem",
            flex: 1,
          }}
        >
          {agent.description}
        </p>

        <div style={{ display: "flex", flexWrap: "wrap" as const, gap: "0.4rem" }}>
          {agent.tags.map((t) => (
            <span key={t} className={tagClass} style={{ fontSize: "0.7rem" }}>
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function AIAgents() {
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
      id="ai-agents"
      ref={ref}
      style={{ padding: "6rem 0", position: "relative", zIndex: 1 }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 2rem" }}>
        <div className="animate-on-scroll" style={{ textAlign: "center", marginBottom: "4rem" }}>
          <span className="section-label section-label-red">AI Agents & Tools</span>
          <h2
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "2.5rem",
              fontWeight: 700,
              marginBottom: "1rem",
            }}
          >
            Custom{" "}
            <span className="gradient-text-red">AI-Powered</span> Tools
          </h2>
          <p style={{ color: "var(--text-muted)", fontSize: "1.1rem", maxWidth: "600px", margin: "0 auto" }}>
            AI agents, MCP servers, and intelligent tools I&apos;ve built or contributed to
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1.5rem",
          }}
          className="agents-grid"
        >
          {agents.map((agent) => (
            <div key={agent.title} className="animate-on-scroll">
              <AgentCard agent={agent} />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .agents-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 640px) {
          .agents-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
