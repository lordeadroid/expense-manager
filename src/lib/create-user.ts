"use server";

import UserModel from "@/model/user.model";
import dbConnect from "./db-connect";

const createUser = async (username: string, password: string) => {
  await dbConnect();
  await new UserModel({ username, hashedPassword: password }).save();
};

export default createUser;
