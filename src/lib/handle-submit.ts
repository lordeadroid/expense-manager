"use server";

import { TRes } from "@/types/types";
import isValidCredentials from "./valid-credentials";
import createUser from "./create-user";
import setCookies from "./set-cookies";
import { redirect } from "next/navigation";

const handleSubmit = async (previousState: any, formData: FormData) => {
  const username = formData.get("username") as string;
  const password = formData.get("password") as string;
  const confirmPassword = formData.get("confirmPassword") as string;

  const res: TRes = await isValidCredentials(
    username,
    password,
    confirmPassword,
  );

  if (res.status) {
    createUser(username, password);
    setCookies(formData);
    redirect("/");
  }

  return res;
};

export default handleSubmit;
