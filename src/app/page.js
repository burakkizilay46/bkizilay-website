"use client";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <>
      <div className="flex flex-col">
        <button
          onClick={() => {
            router.push("/home");
          }}
        >
          Home sayfasına git!
        </button>
        <button
          onClick={() => {
            router.push("/about");
          }}
        >
          About sayfasına git!
        </button>
        <button
          onClick={() => {
            router.push("/profile");
          }}
        >
          Profile sayfasına git!
        </button>
      </div>
    </>
  );
}
