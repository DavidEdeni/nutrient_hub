import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import TopBar from "@/components/TopBar";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Zest | AI Recipe App",
  description: "AI-powered recipe and nutritional tracking application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${dmSans.variable}`}
      suppressHydrationWarning
    >
      <body
        className="font-sans antialiased bg-gray-50 text-gray-900 overflow-hidden h-screen flex"
        suppressHydrationWarning
      >
        {/* Left Sidebar */}
        <Sidebar />

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col h-full bg-gray-50/50">
          <TopBar />
          <main className="flex-1 overflow-y-auto w-full max-w-[1600px] mx-auto">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
