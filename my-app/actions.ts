// actions.ts
"use server";

import { signOut, signIn } from "@/auth";
import { redirect } from "next/navigation";

export const handleSignOut = async () => {
  await signOut({ redirect: "/" });
  redirect("/");
};

export const handleSignIn = async () => {
  await signIn("github");
  redirect("/");
};
