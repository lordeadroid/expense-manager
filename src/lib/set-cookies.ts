import { createHmac } from "crypto";
import { cookies } from "next/headers";

import isVerifiedUser from "./is-verified-user";

const setCookies = async (formData: FormData) => {
  const username = formData.get("username");
  const password = formData.get("password");

  const hash = createHmac("sha512", password as string).digest("hex");
  const hashedPassword = createHmac("sha512", hash)
    .update(username as string)
    .digest("hex");

  const isVerified: boolean = await isVerifiedUser(
    username as string,
    hashedPassword
  );

  if (isVerified) {
    const expires = new Date(Date.now() + 60 * 60 * 1000);
    cookies().set("session", hashedPassword, { expires, httpOnly: true });
  }
};

export default setCookies;
