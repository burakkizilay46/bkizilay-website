"use-client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

export default function MenuItem({ item }) {
  const router = useRouter();
  return (
    <div className="px-4 py-1 ">
      <section>
        <div className="flex flex-row justify-normal cursor-pointer">
          <Link className="font-light text-lg pl-4" href={item.path}>
            {item.title}
          </Link>
        </div>
      </section>
    </div>
  );
}
