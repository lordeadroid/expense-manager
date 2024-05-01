import { createHmac } from "crypto";
import { cookies } from "next/headers";

const setCookies = async (formData: FormData) => {
  const username = formData.get("username");
  const password = formData.get("password");

  const sessionKey = createHmac("sha512", username)
    .update(password)
    .digest("hex");

  const expires = new Date(Date.now() + 60 * 60 * 1000);
  cookies().set("session", sessionKey, { expires });
};

export default setCookies;
