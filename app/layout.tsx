import type { Metadata } from "next";
import "./globals.css";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Aditya Jaya Ban | Ban Truk Kanisir Berkualitas",
  description:
    "Aditya Jaya Ban menyediakan solusi ban truk kanisir berkualitas untuk kebutuhan armada Anda.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body>
        <ScrollReveal />
        {children}
      </body>
    </html>
  );
}