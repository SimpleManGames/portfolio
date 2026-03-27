import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Riley Smith — Software Engineer & Game Developer",
  description:
    "Portfolio of Riley Smith, a Software Engineer and Game Developer based in Seattle, WA.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-zinc-950 text-zinc-100`}>
        <div className="flex flex-col min-h-screen mx-auto text-sm">
          {/* <Header /> */}
          <div className="fixed inset-0 z-[-1] size-full mask-[radial-gradient(ellipse_at_center,transparent,hsl(var(--background)))]" style={{
            backgroundImage: "radial-gradient(rgb(37, 37, 37) 1px, transparent 1px)",
            backgroundSize: "24px 24px"
          }}></div>
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
