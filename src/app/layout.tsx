import type { Metadata } from "next";
 
import "./globals.css";
import clsx from "clsx";
import FireFliesBackground from "@/components/FireFliesBackground";
import Sound from "@/components/Sound";


const monseratFont = monserat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Satria Arya Diva",
  description:
    "Saya Satria Arya Diva, seorang Front-End Developer yang berdedikasi untuk menciptakan pengalaman pengguna yang luar biasa.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={clsx("bg-background  text-foreground   font-default")}>
        {children}
        <FireFliesBackground />
        <Sound />
        <div id="my-modal" />
      </body>
    </html>
  );
}
