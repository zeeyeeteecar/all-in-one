import React from "react";

import { PrismaClient as PrismaClient_StaffLeave } from "../../../prisma/generate/StaffLeave";
import { PrismaClient as PrismaClient_MYSQL } from "../../../prisma/generate/MYSQL";

export default async function page() {
  const prisma_StaffLeave = new PrismaClient_StaffLeave();
  const prisma_MYSQL = new PrismaClient_MYSQL();
  const staffLeave = await prisma_StaffLeave.tb_state_holiday.findMany();
  const mysql = await prisma_MYSQL.tbl_BMORun2024_Barrage.findMany();

  return (
    <div>
      <div>{JSON.stringify(staffLeave)}</div>
      <div>-=-------------------------</div>
      <div>{JSON.stringify(mysql)}</div>
    </div>
  );
}
