import React from "react";
import Logo from "./components/logo";

export default function Header() {
  return (
    <>
      <header className="h-14 border-b border-zinc-200">
        <Logo />
      </header>
    </>
  );
}
