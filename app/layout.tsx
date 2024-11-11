import type { Metadata } from "next";
import Head from "next/head";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";


export const metadata: Metadata = {
  title: "FPL League Insights",
  description: "Fantasy Premier League (FPL) league insights - Enhance your rivalries",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <title>FPL League Insights</title> {/* Keep the title */}
        <meta
          name="description"
          content="Fantasy Premier League (FPL) league insights - Enhance your rivalries"
        /> {/* Keep the meta description */}
        <link rel="icon" href="/Tab-logo.svg" type="image/svg+xml" />
      </Head>
      <body>{children}</body>
    </html>
  );
}
