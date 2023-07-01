import Link from "next/link";
import React from "react";

export default function Logo() {
  return (
    <>
      <div className="pt-2 px-4 ">
        <Link
          href="/"
          className="text-2xl text-primary transition-colors dark:text-white"
        >
          ./burakkizilay
        </Link>
      </div>
    </>
  );
}
