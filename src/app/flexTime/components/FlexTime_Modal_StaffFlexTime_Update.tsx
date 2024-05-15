"use client";
import React from "react";
import moment from "moment";
import { stringify } from "querystring";

export default function StaffLeave_StaffLeave_Modal_SelectDate({
  handleOnClose,
  visible,
  flextime
}: any) {
  if (!visible) return null;

  const [selectedYearMonth, setSelectedYearMonth] = React.useState({
    selectedYear: new Date().getFullYear(),
    selectedMonth: new Date().getMonth() + 1,
  });

  const [
    staffLeave_CalendarMonth,
    setStaffLeave_CalendarMonth,
  ] = React.useState();

  const totalDaysInMonth = new Date(
    selectedYearMonth.selectedYear,
    selectedYearMonth.selectedMonth,
    0
  ).getDate();

  function handle_selectLeaveDate(selectedDate: string) {
    console.log("selectedDate:;;;", selectedDate);
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-20 backdrop-blur-none flex items-center justify-center">
      <div className="w-[1000px] h-[800px] border bg-white">
        <button onClick={handleOnClose} className="h-[30px] w-[50px]">
          X
        </button>
        <div>{JSON.stringify(flextime)}</div>
        <div className="w-full h-[50px] border">
          {selectedYearMonth.selectedYear.toString()} -
          {moment(selectedYearMonth.selectedMonth.toString()).format("MMM")} ==
          total days {totalDaysInMonth}
        </div>
        <div className="grid grid-cols-14">
          {[...Array(totalDaysInMonth)].map((e, i) => {
            const eachDate =
              selectedYearMonth.selectedYear.toString() +
              "-" +
              selectedYearMonth.selectedMonth.toString() +
              "-" +
              (i + 1).toString();

            return <div className="p-3"></div>;
          })}
        </div>
      </div>
    </div>
  );
}
