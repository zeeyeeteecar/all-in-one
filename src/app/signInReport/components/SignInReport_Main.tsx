import React from "react";
import { IoMdPeople } from "react-icons/io";

export default function SignInReport_Main({ past12MonthHeadCount }: any) {
  return (
    <div className="flex flex-row  min-h-screen w-full from-slate-100 via-teal-50 to-slate-100 bg-gradient-to-br ">
      <div className="flex flex-col">
      <p className="text-gray-600">Checkbox Buttons. Click to select</p>
      <div className="h-full max-w-md mx-auto overflow-y-auto p-3">
        {past12MonthHeadCount &&
          past12MonthHeadCount.map((eachMonth: any, key: number) => {
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
                  className="inline-flex items-center justify-between w-[200px] p-2 font-medium tracking-tight border rounded-lg cursor-pointer bg-white text-violet-500 border-violet-200 peer-checked:border-violet-400 peer-checked:bg-violet-700 peer-checked:text-white peer-checked:font-semibold peer-checked:decoration-brand-dark"
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
      {/* <div>{JSON.stringify(past12MonthHeadCount)}</div> */}
    </div>
  );
}
