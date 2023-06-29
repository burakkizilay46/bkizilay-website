import React from "react";

export default function MenuItem({ item }) {
  return (
    <div>
      <section className="pt-5 mt-5 border-t dark:border-zinc-700 ">
        <p>{item.title}</p>
      </section>
    </div>
  );
}
