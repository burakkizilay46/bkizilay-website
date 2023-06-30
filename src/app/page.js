"use client";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <>
      <h2>Welcome to my personal website!</h2>
    </>
  );
}
