import React from "react";
import SideNavBar from "@/app/common/components/SideNavBar";
import FlextTime_Main from "./components/FlextTime_Main";

import {
  fetchData_StaffList,
  fetchData_SelectedStaffFlexTime,
} from "@/lib/lib";

export default async function page() {
  const staffList = await fetchData_StaffList();

  console.log("staffList", staffList);

  async function handle_StaffLeave_Save(leaveInfo: any) {
    "use server";
    console.log(leaveInfo);
  }

  return (
    <div className="w-screen h-screen border-0 border-red-400 flex flex-row">
      {/* <div>{JSON.stringify(selectedStaffFlexTime)}</div> */}
      <SideNavBar />
      <FlextTime_Main
        _staffList={staffList}
        handle_StaffLeave_Save={handle_StaffLeave_Save}
        fetchData_SelectedStaffFlexTime={fetchData_SelectedStaffFlexTime}
      />
    </div>
  );
}
