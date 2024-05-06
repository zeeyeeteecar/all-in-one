import React from "react";

import { revalidatePath } from "next/cache";
import { prisma_Mysql } from "@/lib/lib";

import UserImageListBlock from "./components/UserImageListBlock";
import SideNavBar from "../../common/components/SideNavBar";

async function deleteUserImage(userID: string) {
  "use server";
  const prismaMysql = await prisma_Mysql();
  await prismaMysql.tbl_CaptureImage.delete({
    where: {
      ID: Number(userID),
    },
  });
  revalidatePath("/userImgList");
  //redirect("/barrageList");
}

export default async function userImgList() {
  const prismaMysql = await prisma_Mysql();
  const nameLists = await prismaMysql.tbl_CaptureImage.findMany({});

  return (
    <div className="w-screen h-screen border-0 border-red-400 flex flex-row">
      <SideNavBar />

      <UserImageListBlock
        nameLists={nameLists}
        deleteUserImage={deleteUserImage}
      />

      {/* <div>{JSON.stringify(nameLists)}</div>  */}
    </div>
  );
}
