import styles from "./Sidebar.module.css";
import { Library } from "lucide-react";
import {
  rock,
  hiphop,
  eletro,
  kanye,
  carti,
  trap,
  girls,
  jazz,
} from "../../assets/images";

const Sidebar = () => {
  const images = [
    { src: rock, alt: "Rock" },
    { src: hiphop, alt: "Hip Hop" },
    { src: eletro, alt: "Eletrônica" },
    { src: kanye, alt: "Kanye West" },
    { src: carti, alt: "Playboi Carti" },
    { src: trap, alt: "Trap" },
    { src: girls, alt: "Girls" },
    { src: jazz, alt: "Jazz" },
  ];

  return (
    <nav className={styles.nav}>
      <div className={styles.content}>
        <div className={styles.iconContainer}>
          <Library className={styles.icon} />
        </div>
        {images.map((image, index) => (
          <div key={index} className={styles.image}>
            <img src={image.src} alt={image.alt} />
          </div>
        ))}
      </div>
    </nav>
  );
};

export default Sidebar;
