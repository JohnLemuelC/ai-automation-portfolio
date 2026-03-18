import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "John Lemuel Culinares | Automation & AI Systems",
  description:
    "Automation-driven professional building reliable systems with AI tools, N8N, Zapier, and custom web applications. 4+ years across digital marketing, CRM, and workflow optimization.",
  keywords: [
    "automation",
    "n8n",
    "zapier",
    "AI agents",
    "marketing automation",
    "web apps",
    "Google Ads",
  ],
  authors: [{ name: "John Lemuel Culinares" }],
  openGraph: {
    title: "John Lemuel Culinares | Automation & AI Systems",
    description: "Transforming manual work into automated systems.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Space+Grotesk:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
