import React from "react";
import Main_Etransfer from "./components/Main_Etransfer";
import SideNavBar from "@/app/common/components/SideNavBar";

export default function page() {
  return (
    <div className="w-screen h-screen border-0 border-red-400 flex flex-row">
      <SideNavBar />
      <Main_Etransfer />
    </div>
  );
}
