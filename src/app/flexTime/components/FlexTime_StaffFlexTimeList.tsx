"use client";
import React, { useEffect, useState } from "react";
import moment from "moment-timezone";
import axios from "axios";

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
              <div key={key} className="space-x-0 flex flex-row h-10 items-center">
                <span className="flex w-[100px] border-0">{flextime.Event_ID} </span>
                {/* <span>{flextime.LoginName} </span> */}
                {/* <span>{flextime.Event_TypeCode} </span> */}
                <span className="flex w-[150px] border-0" >{moment(flextime.Start_Date).utcOffset(0).format("YYYY-MM-DD")} </span>
                {/* <span>{moment(flextime.End_Date).utcOffset(0).format("YYYY-MM-DD")} </span> */}
                
                <span className="flex w-[100px] border-0">{moment(flextime.Start_Time).format("HH:mm")} </span>
                <span className="flex w-[100px] border-0">{moment(flextime.End_Time).format("HH:mm")} </span>

              </div>
            );
          })}
      </div>
      <div>FlexTime_StaffFlexTimeList</div>
    </div>
  );
}
