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

export const metadata = {
  title: "Your Name | Software Engineer",
  description: "Portfolio of a Full-Stack Developer specializing in MERN, Next.js, and C++/Java programming.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased relative`}>
        {/* Ambient Background Glows */}
        <div className="fixed top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-indigo-900/15 blur-[120px] rounded-full -z-10 animate-float" />
        <div className="fixed bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-purple-900/15 blur-[120px] rounded-full -z-10 animate-float" style={{ animationDelay: "2s" }} />
        
        {/* Noise Overlay */}
        <div className="noise-bg" />

        {children}
      </body>
    </html>
  );
}