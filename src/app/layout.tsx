import type { Metadata } from "next";
import "./globals.css";
import { Inter as FontSans } from "next/font/google";
import { cn } from "@/shared/ui/utils";


export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

const fontSans = FontSans({
    subsets: ["latin"],
    variable: "--font-sans",
});

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <html lang="en">
        <body
          className={cn (
            "min-h-screen bg-background font-sans antialiased",
            fontSans.variable,
          )}
        >
          {children}
        </body>
      </html>
    );
  }