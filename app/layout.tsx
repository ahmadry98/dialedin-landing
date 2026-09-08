import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.dialedin.me"),
  title: {
    default: "DialedIn | Your Espresso Copilot",
    template: "%s | DialedIn",
  },
  description:
    "Machine-specific espresso guides, cleaning routines, shot history, and AI-assisted analysis for better, more repeatable coffee.",
  applicationName: "DialedIn",
  alternates: { canonical: "/" },
  openGraph: {
    title: "DialedIn | Your Espresso Copilot",
    description:
      "Make better espresso with guidance tailored to your machine, grinder, and latest shot.",
    url: "/",
    siteName: "DialedIn",
    images: [{ url: "/app/espresso-hero.jpg", width: 2200, height: 1466 }],
    type: "website",
  },
  icons: { icon: "/app/icon.png", apple: "/app/icon.png" },
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
