"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";

export default function FlexTime_StaffFlexTimeList({
  staffLoginName,
  setStaffLoginName,
  FlexTime_StaffFlexTimeList,
}: any) {
  const [data, setData] = useState(null);

  const fetchData = async () => {
    await fetch(
      "https://www.accessrichmond.org/o2b2/apiStaffInfo/flexTime/searchStaffFlexTime.aspx?staffLoginName=tom",
      { mode: "no-cors" }
    )
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(
    "https://www.accessrichmond.org/o2b2/apiStaffInfo/flexTime/searchStaffFlexTime.aspx?staffLoginName=" +
      staffLoginName
  );

  return (
    //const selectedStaffFlexTime = fetchData_SelectedStaffFlexTime("tom");

    <>
      <div>{staffLoginName}</div>
      <div>{data}</div>
      <div>FlexTime_StaffFlexTimeList</div>
    </>
  );
}
