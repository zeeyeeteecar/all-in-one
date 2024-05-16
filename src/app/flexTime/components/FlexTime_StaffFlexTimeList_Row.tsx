import moment from "moment-timezone";
import React from "react";
import FlexTime_Modal_StaffFlexTime_Update from "./FlexTime_Modal_StaffFlexTime_Update";

export default function FlexTime_StaffFlexTimeList_Row({ flextime }: any) {
  const [showModal_Show, setShowModal_Show] = React.useState(false);
  const handleOnClose = () => setShowModal_Show(false);
  return (
    <div className="space-x-2 flex flex-row h-14 items-center">
      <span className="flex w-[100px] border-0">{flextime.Event_ID}</span>
      {/* <span>{flextime.LoginName} </span> */}
      {/* <span>{flextime.Event_TypeCode} </span> */}
      <span className="flex w-[150px] border-0">
        {moment(flextime.Start_Date).utcOffset(0).format("YYYY-MM-DD")}
      </span>
      {/* <span>{moment(flextime.End_Date).utcOffset(0).format("YYYY-MM-DD")} </span> */}

      <span className="flex w-[100px] border-0">
        {moment(flextime.Start_Time).format("HH:mm")}
      </span>
      <span className="flex w-[100px] border-0">
        {moment(flextime.End_Time).format("HH:mm")}
      </span>
      <button
        id="staffID"
        name="staffID"
        type="button"
        className="w-[50px]  h-[50px] border hover:bg-gray-400 text-gray-800 font-bold py-2 px-2 rounded  items-center"
        value={flextime.Event_ID.toString()}
        // onClick={(e) => {
        //   handle_Select_LeaveDate(e.currentTarget.value);
        // }}
        onClick={() => setShowModal_Show(true)}
      >
      Edit
      </button>
      <div className=" absolute  ">
        <FlexTime_Modal_StaffFlexTime_Update
          handleOnClose={handleOnClose}
          visible={showModal_Show}
          flextime={flextime}
        />
      </div>
    </div>
  );
}
