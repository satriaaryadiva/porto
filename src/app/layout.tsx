import type { Metadata } from "next";
import "./globals.css";
import clsx from "clsx";
import { Analytics } from "@vercel/analytics/next";
import dynamic from "next/dynamic";

// Lazy load biar ga berat di initial render
const FireFliesBackground = dynamic(() => import("@/components/FireFliesBackground"), { ssr: false });
const Sound = dynamic(() => import("@/components/Sound"), { ssr: false });

export const metadata: Metadata = {
  title: "Satria Arya Diva | Front-End Developer",
  description:
    "Portfolio of Satria Arya Diva, a creative Front-End Developer specializing in building immersive and responsive web applications.",
  keywords: [
    "Front-End Developer",
    "Web Developer",
    "React Developer",
    "Next.js",
    "Tailwind CSS",
    "Portfolio",
    "Satria Arya Diva",
    "Creative Developer",
  ],
  authors: [{ name: "Satria Arya Diva" }],
  creator: "Satria Arya Diva",
  publisher: "Satria Arya Diva",
  openGraph: {
    title: "Satria Arya Diva | Front-End Developer",
    description:
      "Explore the immersive portfolio of Satria Arya Diva, featuring creative front-end development projects.",
    url: "https://satriaaryadiva.vercel.app",
    siteName: "Satria Arya Diva Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Satria Arya Diva | Front-End Developer",
    description:
      "Creative Front-End Developer Portfolio showcasing interactive and responsive web applications.",
    creator: "@satriaaryadiva",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={clsx("bg-background text-foreground font-default")}>
        <Analytics />

        {/* Main content */}
        <main className="relative z-10">{children}</main>

        {/* Background & Sound dipisah biar non-blocking */}
        <FireFliesBackground />
        <Sound />
      </body>
    </html>
  );
}
