import Link from "next/link";
import { redirect } from "next/navigation";

import createUser from "@/lib/create-user";
import setCookies from "@/lib/set-cookies";
import styles from "../styles/login.module.css";
import { PATH } from "@/constants";
import isValidCredentials from "@/lib/valid-credentials";
import { TRes } from "@/types/types";

export default function page() {
  const handleSubmit = async (formData: FormData) => {
    "use server";
    const username = formData.get("username") as string;
    const password = formData.get("password") as string;
    const confirmPassword = formData.get("confirmPassword") as string;

    const res: TRes = await isValidCredentials(
      username,
      password,
      confirmPassword
    );

    if (res.status) {
      createUser(username, password);
      setCookies(formData);
      redirect("/");
    }

    redirect("signup");
  };

  return (
    <div className={styles.page}>
      <form action={handleSubmit} className={styles.form}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          className={styles.inputBox}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className={styles.inputBox}
          required
        />
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          className={styles.inputBox}
          required
        />
        <input type="submit" value="SIGNUP" className={styles.button} />
      </form>
      <div className={styles.redirect}>
        <div>Already have an account?</div>
        <Link href={PATH.login}>Login</Link>
      </div>
    </div>
  );
}
