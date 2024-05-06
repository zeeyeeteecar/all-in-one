import React from "react";
//import { prisma } from "../../lib/db";

import { revalidatePath } from "next/cache";
//import { getLists } from "../../lib/lib";
import { PrismaClient as PrismaClient_MYSQL } from "../../../../prisma/generate/MYSQL";

import UserImageListBlock from "./components/UserImageListBlock";
//import SideNavBar from "../components/common/SideNavBar";

async function deleteUserImage(userID: string) {
  "use server";
  const prismaMysql = new PrismaClient_MYSQL();
  await prismaMysql.tbl_CaptureImage.delete({
    where: {
      ID: Number(userID),
    },
  });
  revalidatePath("/userImgList");
  //redirect("/barrageList");
}

export default async function userImgList() {
  const prismaMysql = new PrismaClient_MYSQL();
  const nameLists = await prismaMysql.tbl_CaptureImage.findMany({});

  return (
    <div className="w-full h-screen border-4 border-red-400 flex flex-row">
      {/* <SideNavBar /> */}

      <UserImageListBlock
        nameLists={nameLists}
        deleteUserImage={deleteUserImage}
      />

      {/* <div>{JSON.stringify(nameLists)}</div>  */}
    </div>
  );
}
