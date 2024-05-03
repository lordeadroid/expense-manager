import Link from "next/link";
import { redirect } from "next/navigation";

import setCookies from "@/lib/set-cookies";

export default function page() {
  const handleSubmit = async (formData: FormData) => {
    "use server";

    setCookies(formData);
    redirect("/");
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
        <input type="submit" value="LOGIN" />
      </form>
      <Link href={"signup"}>Signup</Link>
    </div>
  );
}
