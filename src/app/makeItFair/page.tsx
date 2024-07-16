import React from "react";
import MakeItFair_Main from "./components/MakeItFair_Main";
import SideNavBar from "@/app/common/components/SideNavBar";
import { prisma } from "@/lib/prisma";
import { fetch_answerList } from "./lib/lib";

export default async function page() {
  const answerList = await fetch_answerList();

  return (
    <div className="w-screen h-screen border-0 border-red-400 flex flex-row bg-slate-100">
      <SideNavBar />
      <MakeItFair_Main answerList={answerList} />
    </div>
  );
}
