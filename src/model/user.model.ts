import TUser from "@/types/user";
import { Model, Schema, model, models } from "mongoose";

const UserSchema: Schema<TUser> = new Schema({
  username: { type: String, required: true },
  hashedPassword: { type: String, required: true },
});

const UserModel =
  (models.User as Model<TUser>) || model<TUser>("User", UserSchema);

export default UserModel;
