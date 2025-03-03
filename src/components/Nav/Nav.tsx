import styles from "./Nav.module.css";
import {
  Ellipsis,
  ChevronLeft,
  ChevronRight,
  House,
  Plus,
  Bell,
  Users,
  Search,
  FolderOpenDot,
} from "lucide-react";
import { pfp } from "../../assets/images";

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.initial}>
        <div className={styles.icon}>
          <Ellipsis />
        </div>
        <div className={`${styles.icon} ${styles.iconHover}`}>
          <ChevronLeft />
        </div>
        <div className={`${styles.icon} ${styles.iconInative}`}>
          <ChevronRight />
        </div>
      </div>

      <div className={styles.main}>
        <div
          className={`${styles.icon} ${styles.iconBackground} ${styles.iconHover}`}
        >
          <House />
        </div>
        <div className={styles.inputContainer}>
          <Search className={`${styles.searchIcon} ${styles.icon}`} />
          <input
            className={styles.input}
            placeholder="O que você quer ouvir?"
            type="text"
          />
          <div className={styles.divider}></div>
          <FolderOpenDot className={`${styles.folder} ${styles.iconHover}`} />
        </div>

        <div
          className={`${styles.icon} ${styles.iconBackground} ${styles.iconHover}`}
        >
          <Plus />
        </div>
      </div>

      <div className={styles.profileSide}>
        <div className={`${styles.icon} ${styles.iconHover}`}>
          <Bell />
        </div>
        <div className={`${styles.icon} ${styles.iconHover}`}>
          <Users />
        </div>
        <div className={`${styles.iconBackground} ${styles.iconHover}`}>
          <img className={styles.profileImage} src={pfp} alt="Profile" />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
