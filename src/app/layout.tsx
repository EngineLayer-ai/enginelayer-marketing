import "./globals.css";
import type { Metadata } from "next";
import { Layout } from "@/components/Layout";

export const metadata: Metadata = {
  title: "EngineLayer - Construction project execution software",
  description:
    "EngineLayer organizes construction issues, change orders, labor snapshots, and project files into an auditable record without adding work for managers.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-cream-50 bg-glow text-navy-800">
        <div className="bg-glow-inner" />
        <div className="bg-glow-center" />
        <div className="bg-glow-extra" />
        <div className="relative z-10">
          <Layout>{children}</Layout>
        </div>
      </body>
    </html>
  );
}
