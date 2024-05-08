import React from "react";
import Link from "next/link";

const navItems = [
  {
    groupTitle: "Navigation Bar",
    items: [
      {
        itemTitle: "E-transfer",
        itemLink: "/eTransfer",
        itemBgColor: "bg-orange-500",
        //itemIconPathD: "M4 6h16M4 12h16M4 18h16",
        itemIconPathD:
          "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
      },
      {
        itemTitle: "BMO RUN",
        itemLink: "/bmo-run",
        itemBgColor: "bg-teal-500",
        //itemIconPathD: "M6 18L18 6M6 6l12 12",
        itemIconPathD:
          "M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4",
      },
      // {
      //   itemTitle: "Sign-in List",
      //   itemLink: "/signInList",
      //   itemBgColor: "bg-purple-500",
      //   //itemIconPathD: "M13 10V3L4 14h7v7l9-11h-7z",
      //   itemIconPathD:
      //     "M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z",
      // },
    ],
  },
  {
    groupTitle: "Face Recognition",
    items: [
      {
        itemTitle: "Capture",
        itemLink: "/capturePhoto",
        itemBgColor: "bg-purple-500",
        //itemIconPathD: "M13 10V3L4 14h7v7l9-11h-7z",
        itemIconPathD:
          "M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z",
      },

      {
        itemTitle: "User Image",
        itemLink: "/faceRecognition/userImgList",
        itemBgColor: "bg-blue-500",
        itemIconPathD:
          "M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9",
      },
    ],
  },
  {
    groupTitle: "Setting",
    items: [
      {
        itemTitle: "Logout",
        itemLink: "/logout",
        itemBgColor: "bg-blue-500",
        itemIconPathD:
          "M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1",
      },
      {
        itemTitle: "Available Tasks",
        itemLink: "#",
        itemBgColor: "bg-blue-500",
        itemIconPathD:
          "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01",
      },
      {
        itemTitle: "Clients",
        itemLink: "#",
        itemBgColor: "bg-blue-500",
        itemIconPathD:
          "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z",
      },
      {
        itemTitle: "Profile",
        itemLink: "#",
        itemBgColor: "bg-blue-500",
        itemIconPathD:
          "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z",
      },
    ],
  },
];

export default function SideNavBar() {
  return (
    <div className="h-full w-64  flex flex-col bg-gray-300 text-gray-800 border-0 border-orange-100">
      <div className="flex flex-col top-0 left-0 w-64 bg-white h-full border-r  text-gray-800 ">
        {navItems.map((itemGroup: any, key: number) => {
          return (
            <>
              <div className="flex items-center justify-center h-14 border-0 bg-slate-100 text-purple-800 ">
                <div>{itemGroup.groupTitle}</div>
              </div>
              {itemGroup &&
                itemGroup.items.map((item: any, key: number) => {
                  return (
                    <Link
                      key={key}
                      href={item.itemLink}
                      className="relative flex flex-row items-center h-12 focus:outline-none hover:bg-indigo-50 text-gray-600 hover:text-gray-800 border-r-4 border-transparent hover:border-indigo-500 pr-6"
                    >
                      <span className="inline-flex justify-center items-center ml-4">
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            stroke-width="2"
                            d={item.itemIconPathD}
                          ></path>
                        </svg>
                      </span>
                      <span className="ml-2 text-sm tracking-wide truncate">
                        {item.itemTitle}
                      </span>
                      <span className="px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-red-500 bg-red-50 rounded-full">
                        1.2k
                      </span>
                    </Link>
                  );
                })}
            </>
          );
        })}

        <div className="overflow-y-auto overflow-x-hidden flex-grow">
          <div className="flex flex-col py-4 space-y-1">
            <li>
              <a
                href="#"
                className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6"
              ></a>
            </li>
          </div>
        </div>
      </div>
    </div>
  );
}
