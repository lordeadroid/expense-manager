import dbConnect from "./db-connect";

const isVerifiedUser = async (
  username: string,
  password: string
): Promise<boolean> => {
  return true;
};

export default isVerifiedUser;
