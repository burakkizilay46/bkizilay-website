import Link from "next/link";
import React from "react";
import Logo from "./components/logo";

export default function Header() {
  return (
    <>
      <header className="h-8 bg-gray-500">
        <Logo />
      </header>
    </>
  );
}
