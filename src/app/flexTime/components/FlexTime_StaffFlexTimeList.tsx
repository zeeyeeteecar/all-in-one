"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";

export default function FlexTime_StaffFlexTimeList({
  staffLoginName,
  setStaffLoginName,

  staffFlexTime,
  setStaffFlexTime,

  globe_selectedStaffFlexTimeList
}: any) {
 

  

  // console.log("fetch_data", fetch_data);

  return (
    <>
      <div>{staffLoginName}</div>
      <div>{JSON.stringify(staffFlexTime)}</div>
      <div>FlexTime_StaffFlexTimeList</div>
    </>
  );
}
