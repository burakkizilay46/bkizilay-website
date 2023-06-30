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
        <div className="px-6 pt-6  grid grid-cols-2 grid-rows-2 grid-flow-col gap-4">
          <ContactCard title={"Email"} text={"kizilay4696@gmail.com"} />
          <ContactCard
            title={"LinkedIn"}
            text={"Burak Kizilay"}
            url={"https://www.linkedin.com/in/burak-kizilay/"}
          />
          <ContactCard
            title={"Twitter"}
            text={"devburakkizilay"}
            url={"https://twitter.com/devburakkizilay"}
          />
          <ContactCard
            title={"Instagram"}
            text={"burakkkizilay"}
            url={"https://www.instagram.com/burakkkizilay/"}
          />
        </div>
      </div>
    </div>
  );
}
Contact.Layout = Layout;
