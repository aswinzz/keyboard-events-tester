import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import { Analytics } from '@vercel/analytics/react';
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "Keyboard Event Tester - JavaScript KeyCode Finder & Event Inspector",
  description: "Free online tool to test JavaScript keyboard events in real-time. Find keycodes, event.key, event.code values instantly. Perfect for web developers debugging keyboard interactions and building keyboard shortcuts.",
  keywords: [
    "keyboard event tester",
    "javascript keycode finder",
    "event.key tester",
    "event.code finder",
    "keyboard event inspector",
    "keycode lookup",
    "javascript keyboard events",
    "web developer tools",
    "keyboard debugging",
    "key event properties",
    "modifier keys tester",
    "keyboard shortcuts developer",
    "event.which deprecated",
    "event.keyCode deprecated",
    "keyboard accessibility testing"
  ],
  authors: [{ name: "Aswin VB", url: "https://aswinvb.com" }],
  creator: "Aswin VB",
  publisher: "Aswin VB",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://key-events.aswinvb.com"),
  alternates: {
    canonical: "https://key-events.aswinvb.com",
  },
  openGraph: {
    title: "Keyboard Event Tester - JavaScript KeyCode Finder & Event Inspector",
    description: "Free online tool to test JavaScript keyboard events in real-time. Find keycodes, event.key, event.code values instantly. Perfect for web developers debugging keyboard interactions.",
    url: "https://key-events.aswinvb.com",
    siteName: "Keyboard Event Tester",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Keyboard Event Tester - JavaScript KeyCode Finder",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Keyboard Event Tester - JavaScript KeyCode Finder & Event Inspector",
    description: "Free online tool to test JavaScript keyboard events in real-time. Find keycodes, event.key, event.code values instantly.",
    images: ["/og-image.png"],
    creator: "@aswinvb",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code", // You'll need to add this from Google Search Console
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#2563eb" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              "name": "Keyboard Event Tester",
              "description": "Free online tool to test JavaScript keyboard events in real-time. Find keycodes, event.key, event.code values instantly.",
              "url": "https://key-events.aswinvb.com",
              "applicationCategory": "DeveloperApplication",
              "operatingSystem": "Any",
              "permissions": "browser",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
              },
              "author": {
                "@type": "Person",
                "name": "Aswin VB",
                "url": "https://aswinvb.com"
              },
              "publisher": {
                "@type": "Person",
                "name": "Aswin VB",
                "url": "https://aswinvb.com"
              },
              "keywords": "keyboard event tester, javascript keycode finder, event.key, event.code, web developer tools",
              "screenshot": "https://key-events.aswinvb.com/og-image.png",
              "softwareVersion": "1.0",
              "datePublished": "2024-01-01",
              "dateModified": "2024-01-01"
            })
          }}
        />
      </head>
      <body
        className={`${outfit.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
