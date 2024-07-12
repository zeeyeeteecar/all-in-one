import React from "react";
import SideNavBar from "@/app/common/components/SideNavBar";
import Dashboard_Main from "./components/Dashboard_Main"

// import {
//   fetchData_StaffList,
//   fetchData_SelectedStaffFlexTime,
// } from "@/lib/lib";

export default async function dashboard() {


  //console.log("staffList", staffList);

  async function handle_StaffLeave_Save(leaveInfo: any) {
    "use server";
    console.log(leaveInfo);
  }

  return (
    <div className="w-screen h-screen border-0 border-red-400 flex flex-row bg-white">
      {/* <div>{JSON.stringify(selectedStaffFlexTime)}</div> */}
      <SideNavBar />
      <Dashboard_Main/>
    </div>
  );
}
