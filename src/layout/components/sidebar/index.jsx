import React from "react";
import MenuItem from "./item";
import { SIDEBAR_MENU } from "@/utils/consts/sidebar";

export default function SidebarMenu() {
  return (
    <div className="h-screen border-r ">
      <aside className=" w-48 flex flex-col ">
        {SIDEBAR_MENU.map((item, key) => (
          <MenuItem item={item} key={key} />
        ))}
      </aside>
    </div>
  );
}
