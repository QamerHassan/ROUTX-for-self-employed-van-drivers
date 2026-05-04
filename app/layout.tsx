import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "ROUTX LOGISTICS LTD | Fast & Reliable Delivery Services London",
  description:
    "ROUTX LOGISTICS LTD provides professional courier, delivery, removal, and man-with-a-van services across London and the UK. Suite RA01, 195-197 Wood Street, London E17 3NU.",
  keywords:
    "logistics, courier service, delivery, man with van, removals, London, ROUTX LOGISTICS",
  openGraph: {
    title: "ROUTX LOGISTICS LTD | Fast & Reliable Delivery Services",
    description:
      "Professional courier and delivery services across London and the UK.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
