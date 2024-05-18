"use client";
import Link from "next/link";
import styles from "../styles/login.module.css";
import { PATH, emptyString } from "@/constants";
import handleSubmit from "@/lib/handle-submit";
import { useFormState } from "react-dom";

export default function Page() {
  const initialState = { status: false, error: emptyString };
  const [state, formAction] = useFormState(handleSubmit, initialState);

  return (
    <div className={styles.page}>
      <div className={state.status ? emptyString : styles.error}>
        {state.error}
      </div>
      <form action={formAction} className={styles.form}>
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
