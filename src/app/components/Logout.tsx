import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import styles from "@/app/styles/logout.module.css";
import { PATH } from "@/constants";

const Logout = async (): Promise<React.JSX.Element> => {
  const loggedIn = async () => {
    "use server";
    return cookies().get("session")?.value;
  };

  const handleClick = async () => {
    "use server";
    cookies().delete("session");
    redirect(PATH.login);
  };

  return (await loggedIn()) ? (
    <form action={handleClick}>
      <input type="submit" value="Logout" className={styles.logout} />
    </form>
  ) : (
    <div></div>
  );
};

export default Logout;
