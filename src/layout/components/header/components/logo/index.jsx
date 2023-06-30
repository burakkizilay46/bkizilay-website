import Link from "next/link";
import React from "react";

export default function Logo() {
  return (
    <>
      <div className="pt-2 ">
        <Link
          href="/"
          className="text-2xl text-primary transition-colors dark:text-white px-4"
        >
          ./burakkizilay
        </Link>
      </div>
    </>
  );
}
