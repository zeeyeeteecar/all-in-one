"use client";
import React, { useEffect, useState } from "react";
import moment from "moment-timezone";

import FlexTime_Modal_StaffFlexTime_Update from "./Modal/FlexTime_Modal_StaffFlexTime_Update";

export default function FlexTime_StaffFlexTimeList({
  staffLoginName,
  setStaffLoginName,

  staffFlexTime,
  setStaffFlexTime,

  globe_selectedStaffFlexTimeList,
}: any) {
  // console.log("fetch_data", fetch_data);

  const [showModal_Show, setShowModal_Show] = React.useState(false);
  const handleOnClose = () => setShowModal_Show(false);

  return (
    <div className="w-full h-full flex flex-col overflow-y-auto">
      <div>{staffLoginName}</div>
      <div>
        {staffFlexTime &&
          staffFlexTime.map((flextime: any, key: number) => {
            return (
              <>
                <div
                  key={key}
                  className="space-x-2 flex flex-row h-14 items-center"
                >
                  <span className="flex w-[100px] border-0">
                    {flextime.Event_ID}
                  </span>
                  {/* <span>{flextime.LoginName} </span> */}
                  {/* <span>{flextime.Event_TypeCode} </span> */}
                  <span className="flex w-[150px] border-0">
                    <input
                      type="text"
                      className="bg-gray-50 border border-gray-200 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:outline-none focus:border-blue-500 block w-full p-2.5 "
                      value={moment(flextime.Start_Date)
                        .utcOffset(0)
                        .format("YYYY-MM-DD")}
                    />
                  </span>
                  {/* <span>{moment(flextime.End_Date).utcOffset(0).format("YYYY-MM-DD")} </span> */}

                  <span className="flex w-[100px] border-0">
                    <input
                      type="text"
                      className="bg-gray-50 border border-gray-200 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:outline-none focus:border-blue-500 block w-full p-2.5 "
                      value={moment(flextime.Start_Time).format("HH:mm")}
                    />
                  </span>

                  <span className="flex w-[100px] border-0">
                    <input
                      type="text"
                      className="bg-gray-50 border border-gray-200 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:outline-none focus:border-blue-500 block w-full p-2.5 "
                      value={moment(flextime.End_Time).format("HH:mm")}
                    />
                  </span>

                  <button
                    id="staffID"
                    name="staffID"
                    type="button"
                    className="w-[50px]  h-[50px] border hover:bg-gray-400 text-gray-800 font-bold py-2 px-2 rounded  items-center"
                    value={flextime.Event_ID.toString()}
                    // onClick={(e) => {
                    //   handle_Select_LeaveDate(e.currentTarget.value);
                    // }}
                    onClick={() => setShowModal_Show(true)}
                  >
                    cal
                  </button>
                </div>
                <div className=" absolute">
                  <FlexTime_Modal_StaffFlexTime_Update
                    handleOnClose={handleOnClose}
                    visible={showModal_Show}
                    staffLoginName={staffLoginName}
                    staffFlexTime={staffFlexTime}
                  />
                </div>
              </>
            );
          })}
      </div>
      <div>FlexTime_StaffFlexTimeList</div>
    </div>
  );
}
