import Logout from "./Logout";
import styles from "../styles/navbar.module.css";

const Navbar = (): React.JSX.Element => {
  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>expense manager</div>
      <Logout />
    </div>
  );
};

export default Navbar;
