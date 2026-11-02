import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.dialedin.me"),
  title: {
    default: "DialedIn | Your Espresso Copilot",
    template: "%s | DialedIn",
  },
  description:
    "AI-assisted espresso shot analysis, equipment-aware guidance, and practical brewing routines for home baristas on iOS and Android.",
  applicationName: "DialedIn",
  alternates: { canonical: "/" },
  openGraph: {
    title: "DialedIn | Your Espresso Copilot",
    description:
      "Analyze espresso shots and get a practical next adjustment based on your machine, grinder, and latest result.",
    url: "/",
    siteName: "DialedIn",
    images: [{ url: "/app/espresso-hero.jpg", width: 2200, height: 1466 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DialedIn | AI Espresso Coach",
    description: "Analyze your espresso shot and get one clear adjustment for what to try next.",
    images: ["/app/espresso-hero.jpg"],
  },
  icons: { icon: "/app/icon.png", apple: "/app/icon.png" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
