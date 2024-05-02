import React from "react";
import Link from "next/link";
import BarrageAdd from "./BarrageAdd";
import BarrageListBlock from "./BarrageListBlock";

export default function Main_Barrage() {
  return (
    <div className="flex justify-center text-center items-center w-screen h-screen bg-slate-100">
      <div className="w-[1500px] h-[850px] flex flex-row  space-x-8">
        <BarrageListBlock />
        <BarrageAdd />
      </div>
    </div>
  );
}
