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
  title: "ECS EDGE III | Endoscopic Cardiac Surgery Workshop",
  description:
    "ECS EDGE III — 3rd Endoscopic Cardiac Surgery Workshop (Kolkata). Live cases, simulation, wet lab, and international faculty.",
  metadataBase: new URL("https://ecsedge.org"),
  openGraph: {
    title: "ECS EDGE III | Endoscopic Cardiac Surgery Workshop",
    description:
      "Live cases • Simulation • Wet lab • International faculty • Kolkata",
    url: "https://ecsedge.org",
    siteName: "ECS EDGE",
    images: [{ url: "/og-ecs-edge.jpg", width: 1200, height: 630, alt: "ECS EDGE III" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ECS EDGE III | Endoscopic Cardiac Surgery Workshop",
    description:
      "Live cases • Simulation • Wet lab • International faculty • Kolkata",
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
