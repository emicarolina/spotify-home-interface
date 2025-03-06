import { House, Search, Library, Plus } from "lucide-react";
import styles from "./BottomNav.module.css";
import useMobileDetect from "../../hooks/useMobileDetect";

const BottomNav = () => {
  const isMobile = useMobileDetect();
  if (!isMobile) return null;
  return (
    <nav className={styles.bottomNav}>
      <button className={styles.navItem}>
        <House size={24} />
        <span>Início</span>
      </button>
      <button className={styles.navItem}>
        <Search size={24} />
        <span>Buscar</span>
      </button>
      <button className={styles.navItem}>
        <Library size={24} />
        <span>Sua Biblioteca</span>
      </button>
      <button className={styles.navItem}>
        <Plus size={24} />
        <span>Criar</span>
      </button>
    </nav>
  );
};

export default BottomNav;
