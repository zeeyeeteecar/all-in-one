import { PrismaClient as PrismaClient_StaffLeave } from "../../prisma/generate/StaffLeave";
import { PrismaClient as PrismaClient_MYSQL } from "../../prisma/generate/MYSQL";

export async function prisma_StaffLeave() {
  "use server";
  const response = new PrismaClient_StaffLeave();
  return response;
}

export async function prisma_Mysql() {
  "use server";
  const response = new PrismaClient_MYSQL();
  return response;
}

//================================================

export async function fetchData_StaffList() {
  "use server";
  const res = await fetch(
    "https://www.accessrichmond.org/o2b2/apiStaffInfo/memberInfo.aspx",
    { cache: "no-store" }
  );
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

//==================================================

export async function fetchData_SelectedStaffFlexTime(staffLoginName: string) {
  "use server";
  const res = await fetch(
    "https://www.accessrichmond.org/o2b2/apiStaffInfo/flexTime/searchStaffFlexTime.aspx?staffLoginName=" +
      staffLoginName,
    { cache: "no-store" }
  );
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
