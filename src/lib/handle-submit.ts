"use server";

import setCookies from "./set-cookies";
import { redirect } from "next/navigation";
import encrypt from "./encrypt";
import dbConnect from "./db-connect";
import UserModel from "@/model/user.model";
import { TRes, TUsernameAvailable } from "@/types/types";

const createUser = async (username: string, hashedPassword: string) => {
  await dbConnect();
  await new UserModel({ username, hashedPassword }).save();
};

const usernameAvailable: TUsernameAvailable = async (username) => {
  await dbConnect();
  if (await UserModel.exists({ username })) {
    return { status: false, error: "Username already taken" };
  }

  return { status: true };
};

const handleSubmit = async (previousState: any, formData: FormData) => {
  const username = formData.get("username") as string;
  const password = formData.get("password") as string;
  const confirmPassword = formData.get("confirmPassword") as string;

  if (password !== confirmPassword) {
    return { status: false, error: "Password does not matched" };
  }

  const hashedPassword: string = encrypt(password, username);
  const res: TRes = await usernameAvailable(username);

  if (res.status) {
    await createUser(username, hashedPassword);
    setCookies(formData);
    redirect("/");
  }

  return res;
};

export default handleSubmit;
