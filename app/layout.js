import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inder",
  subsets: ["latin"],
});

export const metadata = {
  title: "DeepSeek",
  description: "Full-Stack Project",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
