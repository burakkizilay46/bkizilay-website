import "./globals.css";
import { Inter } from "next/font/google";
import Layout from "@/layout";
import Home from "./page";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout() {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Home />
      </body>
    </html>
  );
}
