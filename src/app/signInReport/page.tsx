import React from "react";
import { fetchApi_past12MonthHeadCount } from "./lib/lib";
import SideNavBar from "@/app/common/components/SideNavBar";
import SignInReport_Main from "./components/SignInReport_Main";

export default async function signInReport() {
  const defaultyyyyMMdd = "2022-01-01";
  const defaultmemberStatus = "'P','Vol','Visitor','PP','Staff'";



  return (
    <>
      <div className="w-screen h-screen border-0 border-red-400 flex flex-row">
        {/* <div>{JSON.stringify(selectedStaffFlexTime)}</div> */}
        <SideNavBar />
        <SignInReport_Main

          fetchApi_past12MonthHeadCount={fetchApi_past12MonthHeadCount}
        />
      </div>
    </>
  );
}
