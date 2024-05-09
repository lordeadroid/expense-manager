import Link from "next/link";
import { redirect } from "next/navigation";

import setCookies from "@/lib/set-cookies";
import { PATH } from "@/constants";
import styles from "../styles/login.module.css";

export default function page() {
  const handleSubmit = async (formData: FormData) => {
    "use server";
    const username = formData.get("username");
    const password = formData.get("password");
    const confirmPassword = formData.get("confirm-password");

    if (password === confirmPassword) {
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
          name="confirm-password"
          placeholder="Confirm Password"
          className={styles.inputBox}
          required
        />
        <input type="submit" value="SIGNUP" className={styles.button} />
      </form>
      <div className={styles.redirect}>
        Already have an account?
        <Link href={PATH.login}>Login</Link>
      </div>
    </div>
  );
}
