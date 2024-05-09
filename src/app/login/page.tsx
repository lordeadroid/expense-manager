import Link from "next/link";
import { redirect } from "next/navigation";

import styles from "../styles/login.module.css";
import setCookies from "@/lib/set-cookies";
import { PATH } from "@/constants";

export default function page() {
  const handleSubmit = async (formData: FormData) => {
    "use server";

    setCookies(formData);
    redirect("/");
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
        <input type="submit" value="LOGIN" className={styles.button} />
      </form>

      <div className={styles.redirect}>
        <div>{"Don't have an account?"}</div>
        <Link href={PATH.signup}>Signup</Link>
      </div>
    </div>
  );
}
