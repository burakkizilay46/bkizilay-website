import Header from "@/layout/components/header";
import React from "react";
import "../app/globals.css";
import { Analytics } from "@vercel/analytics/react";

export default function MyApp({ Component, pageProps }) {
  const Layout = Component.Layout ? Component.Layout : React.Fragment;
  return (
    <div>
      <Layout>
        <Component {...pageProps} />
        <Analytics />
      </Layout>
    </div>
  );
}
