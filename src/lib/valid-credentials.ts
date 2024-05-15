import { TValidCredential } from "@/types/types";

const isValidCredentials: TValidCredential = async (
  username,
  password,
  confirmPassword
) => {
  return { status: true };
};

export default isValidCredentials;
