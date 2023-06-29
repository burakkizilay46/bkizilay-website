import React from "react";
import MenuItem from "./item";
import { SIDEBAR_MENU } from "@/utils/consts/sidebar";

export default function SidebarMenu() {
  return (
    <aside className="h-[calc(100vh-3.5rem)] fixed top-[3.5rem] p-2 flex flex-col overflow-auto transition-colors">
      {SIDEBAR_MENU.map((item, key) => (
        <MenuItem item={item} key={key} />
      ))}
    </aside>
  );
}
