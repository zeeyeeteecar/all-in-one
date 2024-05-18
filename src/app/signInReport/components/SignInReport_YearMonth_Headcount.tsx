import React from "react";

import { IoMdPeople } from "react-icons/io";
import { IoAddCircleOutline } from "react-icons/io5";
import { IoScanCircleSharp } from "react-icons/io5";
import { LuScanFace } from "react-icons/lu";

export default function SignInReport_YearMonth_Headcount({
  array_memberStatus,
  fetchApi_past12MonthHeadCount,
  yyyyMMdd,
  monthHeadCount,
  setMonthHeadCount,
}: any) {
  const [searchMonthList, setSearchMonthList] = React.useState([]);

  async function handle_SearchMonthDetails() {}

  function handle_SelectYearMonth(e: any) {
    const ifchecked = e.currentTarget.checked;
    const selectedYearMonth = e.currentTarget.value;

    alert(ifchecked + selectedYearMonth);
  }

  return (
    <div className="flex flex-col h-full w-full overflow-y-auto p-4 bg-blue-50">
      <div>
        <button
          className="flex w-full h-[50px] text-indigo-700 border border-indigo-600 py-2 px-6 gap-2 rounded  items-center hover:bg-slate-200"
          onClick={() => handle_SearchMonthDetails()}
        >
          <span>Search Month</span>
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
      <div className="h-full w-full mx-auto overflow-y-auto p-3 ">
        {monthHeadCount &&
          monthHeadCount.map((eachDate: any, key: number) => {
            return (
              <div
                key={key}
                className="relative flex items-start py-2 min-w-full "
              >
                <input
                  id={eachDate.DateList}
                  type="checkbox"
                  className="hidden peer"
                  name="preferred_activities[]"
                  value={eachDate.DateList}
                  onChange={(e) => handle_SelectYearMonth(e)}
                />
                <label
                  htmlFor={eachDate.DateList}
                  className="inline-flex border h-[50px] items-center justify-between w-full p-2 font-medium tracking-tight rounded-lg cursor-pointer bg-white text-violet-500 border-violet-200 peer-checked:border-violet-400 peer-checked:bg-violet-700 peer-checked:text-white peer-checked:font-semibold peer-checked:decoration-brand-dark hover:bg-violet-50"
                >
                  <div className="flex items-center justify-center w-full">
                    <div className=" text-lg font-light text-brand-black flex flex-col">
                      <span className="flex flex-row items-center gap-x-4 ">
                        {eachDate.DateList}
                        <IoMdPeople /> {
                          eachDate.Head
                        } <IoScanCircleSharp /> {eachDate.Scan}
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
