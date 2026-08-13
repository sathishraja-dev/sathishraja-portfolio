import type { Metadata } from "next";
import "./globals.css";

// Production metadata architecture for optimizing search engine visibility on sathishraja.com
export const metadata: Metadata = {
  title: "Sathish Raja | Senior Full-Stack & AI Software Engineer",
  description:
    "Official professional portfolio of Sathish Raja, featuring 14+ years of expertise in full-stack engineering and multi-agent GenAI architectures across Singapore.",
  keywords: [
    "Sathish Raja",
    "AI Software Engineer",
    "Senior Full-Stack Engineer Singapore",
    "Next.js 16 Portfolio",
    "React 19 Developer",
    "LangGraph Agent Systems",
  ],
  authors: [{ name: "Sathish Raja" }],
  metadataBase: new URL("https://sathishraja.com"),
  openGraph: {
    title: "Sathish Raja | Senior Full-Stack & AI Software Engineer",
    description:
      "Explore enterprise-grade architectures, autonomous agent networks, and high-performance frontend interfaces built by Sathish Raja.",
    url: "https://sathishraja.com",
    siteName: "Sathish Raja Portfolio",
    locale: "en_SG",
    type: "website",
  },
};

/**
 * Root Layout Component
 * Serves as the foundational HTML structural layout wrapping all App Router routes.
 * Fully compatible with React 19 compilation rules.
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-[#030712] text-[#F3F4F6] font-sans antialiased selection:bg-[#6366F1] selection:text-white">
        {children}
      </body>
    </html>
  );
}
