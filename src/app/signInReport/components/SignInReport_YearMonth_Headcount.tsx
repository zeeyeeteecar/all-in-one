import React from "react";

import { IoMdPeople } from "react-icons/io";
import { IoAddCircleOutline } from "react-icons/io5";

export default function SignInReport_YearMonth_Headcount({
  array_memberStatus,
  fetchApi_past12MonthHeadCount,
  yyyyMMdd,
  monthHeadCount,
  setMonthHeadCount,
}: any) {
  async function handle_onClick() {}

  return (
    <div className="flex flex-col h-full w-full overflow-y-auto p-4 bg-blue-50">
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
      <div className="h-full max-w-md mx-auto overflow-y-auto p-4">
        {monthHeadCount &&
          monthHeadCount.map((eachMonth: any, key: number) => {
            return (
              <div key={key} className="relative flex items-start py-2 ml-4">
                <input
                  id={eachMonth.YearMonth}
                  type="checkbox"
                  className="hidden peer"
                  name="preferred_activities[]"
                  value={eachMonth.YearMonth}
                />
                <label
                  htmlFor={eachMonth.YearMonth}
                  className="inline-flex items-center justify-between w-[200px] p-2 font-medium tracking-tight border rounded-lg cursor-pointer bg-white text-violet-500 border-violet-200 peer-checked:border-violet-400 peer-checked:bg-violet-700 peer-checked:text-white peer-checked:font-semibold peer-checked:decoration-brand-dark hover:bg-violet-50"
                >
                  <div className="flex items-center justify-center w-full">
                    <div className=" text-lg font-light text-brand-black flex flex-col">
                      <span className="flex flex-row items-center gap-x-4 ">
                        {eachMonth.YearMonth}
                        <IoMdPeople /> {eachMonth.HeadCount}
                      </span>
                    </div>
                  </div>
                </label>
              </div>
            );
          })}
      </div>
    </div>
  );
}
