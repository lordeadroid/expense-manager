"use server";

import dbConnect from "@/lib/db-connect";
import encrypt from "@/lib/encrypt";
import setCookies from "@/lib/set-cookies";
import UserModel from "@/model/user.model";
import { redirect } from "next/navigation";

const handleLogin = async (previousState: any, formData: FormData) => {
  const username = formData.get("username") as string;
  const password = formData.get("password") as string;

  const hashedPassword = encrypt(password, username);

  await dbConnect();
  const user = await UserModel.findOne({ username });
  if (!user) {
    return { status: false, error: "User does not exists" };
  }

  if (user.hashedPassword !== hashedPassword) {
    return { status: false, error: "Wrong Password" };
  }

  setCookies(username, hashedPassword);
  redirect("/");
};

export default handleLogin;
