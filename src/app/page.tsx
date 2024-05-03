"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function SigninPage() {
  const router = useRouter();
  router.push("/login");

  return <></>;
}
