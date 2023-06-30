import React from "react";

function ContactCard({ title, text, url }) {
  return (
    <div className="pb-4 cursor-pointer">
      <a
        href={url}
        target="_blank"
        class="block max-w-xs p-6 bg-white border border-gray-200 rounded-lg shadow-xl hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
      >
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>
        <p class="font-normal text-gray-700 dark:text-gray-400">{text}</p>
      </a>
    </div>
  );
}

export default ContactCard;
