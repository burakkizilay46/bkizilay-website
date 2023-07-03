import "./globals.css";
import { Inter } from "next/font/google";
import Home from "./page";
import Layout from "@/layout";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-HYBWE4G5Q4"
      ></script>
      <script>
        window.dataLayer = window.dataLayer || []; function gtag()
        {dataLayer.push(arguments)}
        gtag('js', new Date()); gtag('config', 'G-HYBWE4G5Q4');
      </script>
      <body className={inter.className}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
