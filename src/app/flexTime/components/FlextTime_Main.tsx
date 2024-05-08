"use client";
import React from "react";

import FlexTime_StaffList from "./FlexTime_StaffList";

let globe_selectLeaveDate = "";

export default function StaffMain({
  _staffList,
  _staffLeaveList,
  fetchData_IndividualStaffLeave,
  handle_StaffLeave_Save,
}: any) {
  const [staffID, setStaffID] = React.useState("");

  const [selectLeaveDate, setSelectLeaveDate] = React.useState("");

  return (
    <div className="w-full h-full flex flex-row border-blue-300 bg-white border-0 space-x-3 ">
      <div className="w-[400px] h-full">
        <FlexTime_StaffList
          staffID={staffID}
          setStaffID={setStaffID}
          _staffList={_staffList}
          fetchData_IndividualStaffLeave={fetchData_IndividualStaffLeave}
        />
      </div>

      <div
        id="staff-leave-block"
        className="w-[800px] border-0 border-yellow-100 text-slate-600"
      ></div>

      {/* <div className="w-1/3">
        <div className="w-[500px] h-full border-4 border-purple-300">
          <StaffLeave_StaffLeave_Month
            staffID={staffID}
            individualStaffLeaveList={individualStaffLeaveList}

            selectLeaveDate = {selectLeaveDate}
                     setSelectLeaveDate = {setSelectLeaveDate}

                     globe_selectLeaveDate={globe_selectLeaveDate}

          />
        </div>
      </div> */}
    </div>
  );
}
