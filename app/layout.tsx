import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { CartProvider } from "./meta/context";

const saturn = localFont({
  src: "./fonts/SenorSaturno-Aw9g.woff",
  variable: "--font-saturn",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Brooke's Awful Website",
  description: "Made for CSIS 672 at COFC",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${saturn.variable} antialiased`}
      >
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
