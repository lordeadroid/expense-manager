import { TValidCredential } from "@/types/types";
import dbConnect from "./db-connect";
import UserModel from "@/model/user.model";

const isValidCredentials: TValidCredential = async (
  username,
  password,
  confirmPassword,
) => {
  if (password !== confirmPassword) {
    return { status: false, error: "Password does not matched" };
  }

  await dbConnect();
  if (await UserModel.exists({ username })) {
    return { status: false, error: "Username already taken" };
  }

  return { status: true };
};

export default isValidCredentials;
