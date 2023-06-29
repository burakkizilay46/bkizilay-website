import Header from "@/layout/components/header";
import React from "react";

export default function MyApp({ Component, pageProps }) {
  const Layout = Component.Layout ? Component.Layout : React.Fragment;
  return (
    <div>
      <Layout>
        <Header />
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}
