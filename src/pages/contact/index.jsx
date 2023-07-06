import React from "react";
import Layout from "@/layout";
import ContactCard from "./components";

export default function Contact() {
  return (
    <div>
      <h1 className="grid place-items-center text-2xl">
        📞 How can you contact me?
      </h1>
      <div className="grid  justify-center place-items-center">
        <div className="px-6 pt-6  grid grid-cols-3 grid-rows-2 grid-flow-col gap-4">
          <div className="pb-4 cursor-pointer">
            <a
              href="mailto:kizilay4696@gmail.com"
              target="_blank"
              class="block max-w-xs p-6 bg-white border
              border-gray-200 rounded-lg shadow-xl hover:bg-gray-100
              dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
            >
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Email
              </h5>
              <p class="font-normal text-gray-700 dark:text-gray-400">
                kizilay4696@gmail.com
              </p>
            </a>
          </div>
          <ContactCard
            title={"LinkedIn"}
            text={"Burak Kizilay"}
            url={"https://www.linkedin.com/in/burak-kizilay/"}
          />
          <ContactCard
            title={"Twitter"}
            text={"@devburakkizilay"}
            url={"https://twitter.com/devburakkizilay"}
          />
          <ContactCard
            title={"Instagram"}
            text={"@burakkkizilay"}
            url={"https://www.instagram.com/burakkkizilay/"}
          />
          <ContactCard
            title={"Threads"}
            text={"@burakkkizilay"}
            url={"https://www.threads.net/@burakkkizilay"}
          />
        </div>
      </div>
    </div>
  );
}
Contact.Layout = Layout;
