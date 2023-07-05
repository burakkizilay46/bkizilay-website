import "./globals.css";
import { Inter } from "next/font/google";
import Home from "./page";
import Layout from "@/layout";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
} 
