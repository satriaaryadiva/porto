import type { Metadata } from "next";
import "./globals.css";
import clsx from "clsx";
import { Analytics } from "@vercel/analytics/next";
import dynamic from "next/dynamic";

// Lazy load biar ga berat di initial render
const FireFliesBackground = dynamic(() => import("@/components/FireFliesBackground"), { ssr: false });
const Sound = dynamic(() => import("@/components/Sound"), { ssr: false });

export const metadata: Metadata = {
  title: "Satria Arya Diva",
  description:
    "Saya Satria Arya Diva, seorang Front-End Developer yang berdedikasi untuk menciptakan pengalaman pengguna yang luar biasa.",
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
