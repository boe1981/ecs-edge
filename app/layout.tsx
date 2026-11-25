import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ECS EDGE IV | Endoscopic Cardiac Surgery Workshop",
  description:
    "ECS EDGE IV — 4th Endoscopic Cardiac Surgery hands-on workshop, 12 December 2026, Meril Kolkata Academy. Core concepts, live-in-a-box video session, and mitral valve replacement wet lab.",
  metadataBase: new URL("https://ecsedge.org"),
  openGraph: {
    title: "ECS EDGE IV | Endoscopic Cardiac Surgery Workshop",
    description:
      "12 December 2026 • Core concepts • Live-in-a-box • MVR wet lab • Kolkata",
    url: "https://ecsedge.org",
    siteName: "ECS EDGE",
    images: [{ url: "/og-ecs-edge.jpg", width: 1200, height: 630, alt: "ECS EDGE IV" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ECS EDGE IV | Endoscopic Cardiac Surgery Workshop",
    description:
      "12 December 2026 • Core concepts • Live-in-a-box • MVR wet lab • Kolkata",
    images: ["/og-ecs-edge.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
