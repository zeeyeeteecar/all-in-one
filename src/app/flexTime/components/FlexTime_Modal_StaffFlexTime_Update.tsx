"use client";
import React from "react";
import moment from "moment";


export default function StaffLeave_StaffLeave_Modal_SelectDate({
  handleOnClose,
  visible,
  flextime
}: any) {
  if (!visible) return null;


  return (
    <div className="fixed inset-0 bg-black bg-opacity-20 backdrop-blur-none flex items-center justify-center">
      <div className="w-[1000px] h-[600px] border bg-white rounded-2xl p-4">
        <button onClick={handleOnClose} className="h-[30px] w-[50px]">
          X
        </button>
        <div>{JSON.stringify(flextime)}</div>
        <div className="w-full h-[50px] border">
        
        </div>
        <div className="grid grid-cols-14">

        </div>
      </div>
    </div>
  );
}
