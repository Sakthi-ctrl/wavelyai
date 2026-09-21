import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Wavelyn AI | Ride the Wave of Intelligence | Drivita LLC",
  description:
    "Wavelyn AI brings together Enterprise Intelligence, AI Agents, Workflow Automation and Human Interaction Intelligence to help organizations understand, automate and transform their operations.",
  keywords: [
    "Wavelyn AI",
    "Drivita LLC",
    "Enterprise AI",
    "AI Agents",
    "Workflow Automation",
    "Asynchronous Video Intelligence",
    "Wavelyn Vision",
    "Wavelyn Intelligence",
    "Wavelyn Autonomy",
  ],
  authors: [{ name: "Wavelyn AI / Drivita LLC" }],
  openGraph: {
    title: "Wavelyn AI | Ride the Wave of Intelligence",
    description:
      "Deploy intelligent AI products or connect them to create an autonomous enterprise. Products, Solutions, Services and Customer Stories.",
    url: "https://wavelyn.ai",
    siteName: "Wavelyn AI",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body className="min-h-screen bg-white text-slate-900 antialiased selection:bg-cyan-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}
