"use client";
import React from "react";
import moment from "moment";

export default function StaffLeave_StaffLeave_Modal_SelectDate({
  handleOnClose,
  visible,
  flextime,
}: any) {
  if (!visible) return null;

  return (
    <div

      className="  z-40 fixed inset-0 bg-black bg-opacity-20 backdrop-blur-none flex items-center justify-center"
    >
      <div className=" z-50 w-[1000px] h-[600px] border bg-white rounded-2xl p-4">
        <button onClick={handleOnClose} className="h-[30px] w-[50px]">
          X
        </button>
        <div className="flex flex-col font-light">
          <span className="flex w-[100px] border-0">{flextime.Event_ID}</span>
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
        </div>
      </div>
    </div>
  );
}