"use client";

import Link from "next/link";
import styles from "../app/styles/add-transaction.module.css";
import { PATH, emptyString } from "@/constants";
import { useFormState } from "react-dom";
import handleLogin from "./login/handle-login";

const AddTransaction = () => {
  const initialState = { status: false, error: emptyString };
  const [state, formAction] = useFormState(handleLogin, initialState);

  return (
    <div className={styles.page}>
      <div className={state.status ? emptyString : styles.error}>
        {state.error}
      </div>
      <form action={formAction} className={styles.form}>
        <input
          type="text"
          name="Product"
          className={styles.inputBox}
          required
        />
        <input
          type="number"
          name="amount"
          className={styles.inputBox}
          required
        />
        <input
          type="text"
          name="transaction"
          className={styles.inputBox}
          required
        />
        <input
          type="date"
          name="transactedAt"
          className={styles.inputBox}
          required
        />
        <input
          type="string"
          name="transactedAt"
          className={styles.inputBox}
          required
        />
        <input type="submit" value="Add" className={styles.button} />
      </form>
    </div>
  );
};

export default AddTransaction;
