import { Document } from "mongoose";

type User = {
  username: string;
  hashedPassword: string;
};

type TUser = User & Document;

export default TUser;
