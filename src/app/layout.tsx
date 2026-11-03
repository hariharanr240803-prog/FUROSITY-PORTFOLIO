import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FUROSITY | Curiosity Builds What's Next",
  description:
    "Furosity builds modern web products, AI solutions and automation tools that turn ideas into real-world impact.",
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  keywords: [
    "Furosity",
    "Curiosity Builds What's Next",
    "Tech Agency",
    "Web Development",
    "Product Design",
    "AI & Automation",
    "Cloud & DevOps",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen bg-[#f8faff] text-slate-900 font-sans antialiased selection:bg-blue-600 selection:text-white">
        {children}
      </body>
    </html>
  );
}
