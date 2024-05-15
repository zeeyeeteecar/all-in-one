"use client";
import React, { useEffect, useState } from "react";
import moment from "moment-timezone";
import FlexTime_StaffFlexTimeList_Row from "./FlexTime_StaffFlexTimeList_Row";

export default function FlexTime_StaffFlexTimeList({
  staffLoginName,
  setStaffLoginName,

  staffFlexTime,
  setStaffFlexTime,

  globe_selectedStaffFlexTimeList,
}: any) {
  // console.log("fetch_data", fetch_data);

  return (
    <div className="w-full h-full flex flex-col overflow-y-auto">
      <div>{staffLoginName}</div>
      <div>
        {staffFlexTime &&
          staffFlexTime.map((flextime: any, key: number) => {
            return (
              <>
                <FlexTime_StaffFlexTimeList_Row flextime={flextime} />
              </>
            );
          })}
      </div>
      <div>FlexTime_StaffFlexTimeList</div>
    </div>
  );
}
