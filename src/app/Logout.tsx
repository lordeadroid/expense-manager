import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const Logout = () => {
  const handleClick = async () => {
    "use server";
    cookies().delete("session");
    redirect("login");
  };

  return (
    <form action={handleClick}>
      <input type="submit" value="Logout" />
    </form>
  );
};

export default Logout;
