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
  metadataBase: new URL("https://ecs-edge.vercel.app"),
  title: "ECS EDGE III | Endoscopic Cardiac Surgery Workshop",
  description:
    "ECS EDGE III is a high-impact Endoscopic Cardiac Surgery workshop featuring international faculty, live endoscopic & robotic surgeries, wet lab training, and simulation-based learning in Kolkata, India.",
  openGraph: {
    title: "ECS EDGE III – Endoscopic Cardiac Surgery Workshop",
    description:
      "Live endoscopic & robotic cases • International faculty • Wet lab • Simulation • Kolkata • Jan 24–25",
    images: ["/og-ecs-edge.jpg"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ECS EDGE III – Endoscopic Cardiac Surgery Workshop",
    description:
      "Live endoscopic & robotic cases • International faculty • Wet lab • Simulation • Kolkata • Jan 24–25",
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
