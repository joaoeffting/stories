import type { Metadata } from "next";
import SessionWrapper from "./components/SessionWrapper";
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
  title: "Stories",
  description: "A site to read and write stories",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SessionWrapper>
          <div className="min-h-screen flex flex-col items-center justify-start bg-gray-100 p-4">
            {children}
          </div>
          <footer className="w-full mt-auto bg-white p-4 text-center text-gray-500">
            &copy; 2025 Stories
          </footer>
        </SessionWrapper>
      </body>
    </html>
  );
}
