import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AppIconImg from "../../public/images/app_icon.png";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Back3nd",
  description: "AWS for FinTech using blockchain",
  icons: [{ rel: "icon", url: AppIconImg.src }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
