import React from "react";
import { fetchApi_past12MonthHeadCount } from "./lib/lib";
import SideNavBar from "@/app/common/components/SideNavBar";
import SignInReport_Main from "./components/SignInReport_Main"

export default async function signInReport() {
  const past12MonthHeadCount = await fetchApi_past12MonthHeadCount(
    "2023-01-01"
  );

  console.log(past12MonthHeadCount);
  return (
    <>
      <div className="w-screen h-screen border-0 border-red-400 flex flex-row">
        {/* <div>{JSON.stringify(selectedStaffFlexTime)}</div> */}
        <SideNavBar />
        <SignInReport_Main
          past12MonthHeadCount={past12MonthHeadCount}

        />
      </div>
    </>
  );
}
