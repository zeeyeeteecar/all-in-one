"use client";

import React from "react";
import Image from "next/image";

export default function UserImageListBlock({
  nameLists,
  deleteUserImage,
}: any) {
  function deleteUserImage_local(e: any) {
    const userID = e.target.value;
    const shouldRemove = confirm(
      "Are you sure you want to delete? (" + userID + ") ?"
    );
    if (shouldRemove) {
      deleteUserImage(userID);
    } else {
      e.preventDefault();
      return null;
    }
  }

  return (
    <div className="w-full h-full border-0 bg-white text-slate-700 p-10 overflow-y-auto space-y-2 ">
      {nameLists &&
        nameLists.map((user: any, key: number) => {
          return (
            <div key={key} className="flex flex-row  hover:bg-slate-100">
              <div className="w-[50px] border-0 flex flex-col place-content-center p-3 ">
                {user.ID}
              </div>
              <div className="w-[200px] border-0 flex flex-col place-content-center  p-3">
                {user.userName}
              </div>
              <div className="w-[200px] border-0 flex flex-col place-content-center  p-3">
                {user.userID}
              </div>
              <div className="w-[120px] border-0">
                <Image
                  className=" rounded-full"
                  src={user.imgBase64_1}
                  width={100}
                  height={100}
                  alt={user.userName}
                />
              </div>

              <div className="w-[120px] border-0">
                <Image
                  className=" rounded-full"
                  src={user.imgBase64_2}
                  width={100}
                  height={100}
                  alt={user.userName}
                />
              </div>

              <div className="w-[150px] border-0  flex flex-col place-content-center px-10">
                <button
                  type="button"
                  name={user.ID.toString()}
                  value={user.ID.toString()}
                  className="  hover:bg-blue-200 hover:text-blue-700 h-[35px] w-[100px] text-blue-200 border border-blue-200 px-4 rounded-full"
                  onClick={(e) => deleteUserImage_local(e)}
                >
                  {" "}
                  delete{" "}
                </button>

              </div>
              <div className="w-[150px] border-0  flex flex-col place-content-center px-10">
              <button
                  type="button"
                  name={user.ID.toString()}
                  value={user.ID.toString()}
                  className="  hover:bg-blue-200 hover:text-blue-700 h-[35px] w-[100px] text-blue-200 border border-blue-200 px-4 rounded-full"
                  onClick={(e) => deleteUserImage_local(e)}
                >
                  {" "}
                  Retake{" "}
                </button>
              </div>
            </div>
          );
        })}
    </div>
  );
}