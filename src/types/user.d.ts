import { Document } from "mongoose";

type TUser = {
  username: string;
  hashedPassword: string;
};

type TUserDocument = TUser & Document;

export default TUserDocument;
