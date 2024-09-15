import type { Metadata } from "next";
import localFont from "next/font/local";
import { AuthProvider } from "../context/AuthContext";
import { UserProvider } from "@/context/userContext"
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Next Memory Game",
  description: "Play to remember",
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
        <AuthProvider>
          <UserProvider>
          {children}

          </UserProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
