"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <>
      <div className="pt-4 flex flex-col place-items-center justify-center">
        <h1 className="text-2xl font-extralight border-b border-zinc-400">
          WELCOME TO MY PERSONAL WEBSITE!
        </h1>
        <div className="flex flex-col px-4 pt-8 place-items-center">
          <Image
            className="rounded-full hover:border-dotted"
            src={"/home/developer.jpeg"}
            alt="avatar"
            height={256}
            width={256}
          />
          <br />
          <h4 className="text-2xl font-light">BURAK KIZILAY</h4>
          <p className=" text-2xl font-extralight text-grey-100">
            Software Developer
          </p>
          <div className="pt-8 w-6/12 text-sm/[24px] ">
            <p>Hey, I’m Burak Kızılay! 👋</p>
            <p>
              I’m a software engineer working as an mobile and front end at
              Westerops.
            </p>
            <p>
              I have been developing mobile applications with flutter for 2
              years, and I have been interested in front end development for 1
              year. I like to take part in communities and contribute. I am a 22
              level software developer.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
