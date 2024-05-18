import { cookies } from "next/headers";

const setCookies = async (username: string, hashedPassword: string) => {
  const expires = new Date(Date.now() + 60 * 60 * 1000);

  cookies().set("username", username, { expires, httpOnly: true });
  cookies().set("session", hashedPassword, { expires, httpOnly: true });
};

export default setCookies;
