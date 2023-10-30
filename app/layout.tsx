import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/header";
import Lines from "@/components/line/lines";
import Footer from "@/components/layout/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "A website for gamers",
  description: "A website for gamers is a website for gamers.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="min-h-screen grid grid-rows-[auto,1fr,auto]">
          <Header />
          <div className="relative overflow-hidden">
            <Lines />
            {children}
          </div>
          <Footer />
        </main>
      </body>
    </html>
  );
}
