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

import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://ecsedge.org"),
  title: "ECS EDGE III | Endoscopic Cardiac Surgery Workshop India",
  description:
    "ECS EDGE III is a premier endoscopic cardiac surgery workshop in India featuring live cases, simulation, wet lab training, and international faculty at Manipal Hospitals, Kolkata.",
  openGraph: {
    title: "ECS EDGE III | Endoscopic Cardiac Surgery Workshop India",
    description:
      "Live cases, simulation, wet lab training, and international faculty at Manipal Hospitals, Kolkata.",
    url: "https://ecsedge.org",
    images: ["/og-ecs-edge.jpg"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og-ecs-edge.jpg"],
  },
};



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
export const metadata = {
  title: "ECS EDGE III | Endoscopic Cardiac Surgery Workshop India",
  description:
    "ECS EDGE III is a premier endoscopic cardiac surgery workshop in India featuring live cases, simulation, wet lab training, and international faculty at Manipal Hospitals, Kolkata.",
};
