import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import UserSync from "@/components/UserSync";
import { Toaster } from "sonner";
import TanStackProvider from "@/components/providers/TanStackProvider";
import {
  ClerkProvider
} from '@clerk/nextjs'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ToothCare - AI Powered Dental Assistant",
  description: "Access instant dental support through AI voice assistance, available 24/7.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <TanStackProvider>
    <ClerkProvider
    appearance={{
          variables: {
            colorPrimary: "#ff00c8",
            colorBackground: "#ffffff",
            colorText: "#111827",
            colorTextSecondary: "#1e1e3f",
            colorInputBackground: "#eceff4",
          },
        }}
        
    >

    
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased dark`}
      >
        <Toaster />
        {children}
      </body>
    </html>
    </ClerkProvider>
    </TanStackProvider>
  );
}
