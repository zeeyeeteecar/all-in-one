"use client";
import React from "react";

import FlexTime_StaffList from "./FlexTime_StaffList";
import FlexTime_StaffFlexTimeList from "./FlexTime_StaffFlexTimeList";

let globe_selectedStaffFlexTimeList: any[] = [];

export default function StaffMain({
  _staffList,
  fetchData_SelectedStaffFlexTime,
}: any) {
  const [staffLoginName, setStaffLoginName] = React.useState("");
  const [staffFlexTime, setStaffFlexTime] = React.useState();

  return (
    <div className="w-full h-full flex flex-row border-blue-300 bg-white border-0 space-x-3 p-5 ">
      <div className="w-[350px] h-full">
        <FlexTime_StaffList
          staffLoginName={staffLoginName}
          setStaffLoginName={setStaffLoginName}
          staffFlexTime={staffFlexTime}
          setStaffFlexTime={setStaffFlexTime}
          _staffList={_staffList}
          globe_selectedStaffFlexTimeList={globe_selectedStaffFlexTimeList}
          fetchData_SelectedStaffFlexTime={fetchData_SelectedStaffFlexTime}
        />
      </div>

      <div
        id="staff-leave-block"
        className="w-[800px] border-0 border-yellow-100 text-slate-600"
      >
        <FlexTime_StaffFlexTimeList
          staffLoginName={staffLoginName}
          setStaffLoginName={setStaffLoginName}

          staffFlexTime={staffFlexTime}
          setStaffFlexTime={setStaffFlexTime}
          
          globe_selectedStaffFlexTimeList={globe_selectedStaffFlexTimeList}
        />
      </div>
      <div>{JSON.stringify(staffFlexTime)}</div>

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
