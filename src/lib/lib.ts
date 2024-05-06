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
