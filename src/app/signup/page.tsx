import Link from "next/link";
import { redirect } from "next/navigation";

import setCookies from "@/lib/set-cookies";
import { PATH } from "@/constants";

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
    <div className="login-form">
      <form action={handleSubmit}>
        <input type="text" name="username" placeholder="Username" required />
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
        />
        <input
          type="password"
          name="confirm-password"
          placeholder="Confirm Password"
          required
        />
        <input type="submit" value="SIGNUP" />
      </form>
      <Link href={PATH.login}>Login</Link>
    </div>
  );
}
