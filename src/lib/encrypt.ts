import { createHmac } from "crypto";

const encrypt = (text: string, salt: string) => {
  const hash = createHmac("sha512", text).digest("hex");
  return createHmac("sha512", hash).update(salt).digest("hex");
};

export default encrypt;
