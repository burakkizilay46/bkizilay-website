import Link from "next/link";
import React from "react";

export default function Logo() {
  return (
    <>
      <Link
        href="/"
        className="text-2xl text-primary transition-colors dark:text-white"
      >
        ./burakkizilay
      </Link>
    </>
  );
}
