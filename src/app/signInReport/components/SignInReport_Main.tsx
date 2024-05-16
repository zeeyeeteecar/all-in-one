"use client";
import React from "react";
import { IoMdPeople } from "react-icons/io";
import { IoAddCircleOutline } from "react-icons/io5";

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
  const [array_memberStatus, setArray_memberStatus] = React.useState<string[]>([
    "P",
    "Vol",
    "Visitor",
    "PP",
    "Staff",
  ]);
  const [monthHeadCount, setMonthHeadCount] = React.useState([]);

  const string_MemberStatus =
    "'" + array_memberStatus.map((e) => e).join("','") + "'";

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

  console.log(monthHeadCount)

  function handle_onChange(e: any) {
    const ifchecked = e.currentTarget.checked;
    const statusValue = e.currentTarget.value;
    setArray_memberStatus((prevState) => {
      // check if it is already added
      if (prevState.includes(statusValue)) {
        // clone the prevState arr to prevent side effects
        const clone = [...prevState];
        // Remove the existing id
        clone.splice(prevState.indexOf(statusValue), 1);
        return clone;
      } else {
        return [...prevState, statusValue];
      }
    });
  }

  async function handle_onClick() {
    console.log(string_MemberStatus);
    const past12MonthHeadCount = await fetchApi_past12MonthHeadCount(
      yyyyMMdd,
      string_MemberStatus
    );
    setMonthHeadCount(past12MonthHeadCount);
  }
  return (
    <div className="flex flex-row  min-h-screen w-full from-slate-100 via-teal-50 to-slate-100 bg-gradient-to-br p-5 gap-x-5">
      <div className="w-[300px] flex flex-col p-4 gap-y-4  border-2">
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
                  onChange={(e) => handle_onChange(e)}
                />
                <span className="ml-4 text-indigo-600 text-lg ">
                  {status.title}
                </span>
              </label>
            </div>
          );
        })}
        <div className="text-slate-300">
          {JSON.stringify(array_memberStatus)}
        </div>
      </div>

      <div className="flex flex-col">
        <p className="text-gray-600">Checkbox Buttons. Click to select</p>
        <div className="h-full max-w-md mx-auto overflow-y-auto p-3">
          {monthHeadCount &&
            monthHeadCount.map((eachMonth: any, key: number) => {
              return (
                <div key={key} className="relative flex items-start py-2 ml-4">
                  <input
                    id={key.toString()}
                    type="checkbox"
                    className="hidden peer"
                    name="preferred_activities[]"
                    value={key.toString()}
                  />
                  <label
                    htmlFor={key.toString()}
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
      <div className="w-[200px]"></div>
      {/* <div>{JSON.stringify(past12MonthHeadCount)}</div> */}
    </div>
  );
}
