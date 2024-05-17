"use client";
import React from "react";
import moment from "moment-timezone";

import SignInReport_YearMonth_Headcount from "./SignInReport_YearMonth_Headcount";

const memberStatus = [
  { key: 1, title: "Participant", value: "P", accentColor: "accent-red-600" },
  { key: 2, title: "Volunteer", value: "Vol", accentColor: "accent-teal-600" },
  {
    key: 3,
    title: "Visitor",
    value: "Visitor",
    accentColor: "accent-yellow-600",
  },
  {
    key: 4,
    title: "Parking Permit",
    value: "PP",
    accentColor: "accent-blue-400",
  },
  { key: 5, title: "Staff", value: "Staff", accentColor: "accent-indigo-600" },
];

export default function SignInReport_Main({
  fetchApi_past12MonthHeadCount,
}: any) {
  const [yyyyMMdd, setYYYYMMdd] = React.useState("2022-01-01");
  const [array_memberStatus, setArray_memberStatus] = React.useState<any>([
    "P",
    "Vol",
    "Visitor",
    "PP",
    "Staff",
  ]);

  const [monthHeadCount, setMonthHeadCount] = React.useState([]);

  const fetchInfo = async () => {
    const past12MonthHeadCount = await fetchApi_past12MonthHeadCount(
      yyyyMMdd,
      string_MemberStatus
    );
    setMonthHeadCount(past12MonthHeadCount);
  };

  React.useEffect(() => {
    fetchInfo();
  }, []);

  const string_MemberStatus =
    "'" + array_memberStatus.map((e: string) => e).join("','") + "'";

  function handle_onChange(e: any) {
    const ifchecked = e.currentTarget.checked;
    const statusValue = e.currentTarget.value;

    setArray_memberStatus((prevState: any) => {
      // check if it is already added
      if (prevState.includes(statusValue) && ifchecked) {
        // clone the prevState arr to prevent side effects
        const clone = [...prevState];
        // Remove the existing id
        //        clone.splice(prevState.indexOf(statusValue), 1);
        return clone;
      }

      if (!prevState.includes(statusValue) && ifchecked) {
        return [...prevState, statusValue];
      }

      if (!ifchecked) {
        const clone = [...prevState];
        clone.splice(prevState.indexOf(statusValue), 1);
        return clone;
      }
    });
  }

  async function handle_onClick() {
    //console.log(string_MemberStatus);
    const past12MonthHeadCount = await fetchApi_past12MonthHeadCount(
      yyyyMMdd,
      string_MemberStatus
    );
    setMonthHeadCount(past12MonthHeadCount);
  }

  console.log(yyyyMMdd);


  return (
    <div className="flex flex-row  min-h-screen w-full bg-white p-5 gap-x-5">
      <div className="w-[300px] flex flex-col p-4 gap-y-4  border bg-blue-50">
        <div>
          <button
            className="flex w-full text-indigo-700 border border-indigo-600 py-2 px-6 gap-2 rounded  items-center hover:bg-slate-200"
            onClick={() => handle_onClick()}
          >
            <span>Search</span>
            <svg
              className="w-4"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
            >
              <path d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </button>
        </div>

        {memberStatus.map((status: any, key: number) => {
          return (
            <div>
              <label
                className="w-full inline-flex items-center bg-white p-3 rounded-lg hover:cursor-pointer hover:bg-slate-50 "
                htmlFor={status.key}
              >
                <input
                  id={status.key}
                  type="checkbox"
                  className={"w-6 h-6 " + status.accentColor}
                  value={status.value}
                  defaultChecked={status.value}
                  onChange={(e) => handle_onChange(e)}
                />
                <span className="ml-4 text-indigo-600 text-lg ">
                  {status.title}
                </span>
              </label>
            </div>
          );
        })}
        <div>
          <input
            type="date"
            className="flex w-full text-lg text-indigo-700 border border-indigo-600 py-2 px-6 gap-2 rounded  items-center hover:bg-slate-200"
            defaultValue={yyyyMMdd}
            onChange={(e) => setYYYYMMdd(e.currentTarget.value)}
          />
        </div>
        <div className="text-slate-300">{yyyyMMdd}</div>
        <div className="text-slate-300">
          {JSON.stringify(array_memberStatus)}
        </div>
      </div>

      <div className="h-full w-[300px] border-2">
        <SignInReport_YearMonth_Headcount
          array_memberStatus={array_memberStatus}
          fetchApi_past12MonthHeadCount={fetchApi_past12MonthHeadCount}
          yyyyMMdd={yyyyMMdd}
          monthHeadCount={monthHeadCount}
          setMonthHeadCount={setMonthHeadCount}
        />
      </div>

      <div className="w-[300px]"></div>
      {/* <div>{JSON.stringify(past12MonthHeadCount)}</div> */}
    </div>
  );
}
