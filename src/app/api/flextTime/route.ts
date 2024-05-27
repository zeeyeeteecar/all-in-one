//import { PrismaClient as PrismaClient_MYSQL } from "../../prisma/generate/MYSQL";
import { NextRequest, NextResponse } from "next/server";

import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

import React from "react";

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { email, password } = reqBody;

    const res = await fetch(
      "https://www.accessrichmond.org/o2b2/apiStaffInfo/memberInfo.aspx",
      { cache: "no-store", mode: "no-cors" }
    );
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.

    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error("Failed to fetch data");
    }

    return res.json();
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
