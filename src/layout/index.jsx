"use client";
import Header from "./components/header";
import SidebarMenu from "./components/sidebar";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <div className="flex flex-row">
        <SidebarMenu />
        <div className="mx-4 my-4 w-full ">{children}</div>
      </div>
    </>
  );
}
