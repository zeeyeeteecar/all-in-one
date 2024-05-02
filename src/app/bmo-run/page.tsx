import React from "react";
import BarrageListBlock from "./components/BarrageListBlock";
import BarrageAdd from "./components/BarrageAdd";
import Main_Barrage from "./components/Main_Barrage"
import SideNavBar from "@/app/components/SideNavBar";


export default function BarrageList() {
  return (
    <div className="w-screen h-screen border-0 border-red-400 flex flex-row">
      <SideNavBar />
      <Main_Barrage />
      
    </div>
  );
}
