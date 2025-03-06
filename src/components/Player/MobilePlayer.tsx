import { Laptop, CirclePlus, Pause, Wifi } from "lucide-react";
import styles from "./MobilePlayer.module.css";
import useMobileDetect from "../../hooks/useMobileDetect";
import { blackice } from "../../assets/images";

const MobilePlayer = () => {
  const isMobile = useMobileDetect();

  if (!isMobile) return null;

  return (
    <div className={styles.mobilePlayer}>
      <div className={styles.topSection}>
        <div className={styles.songInfo}>
          <img src={blackice} alt="Album" className={styles.albumCover} />
          <div className={styles.texts}>
            <div className={styles.titleWrapper}>
              <h3>War Machine</h3>
              <span className={styles.dot}></span>
              <p>AC/DC</p>
            </div>
            <div className={styles.deviceInfo}>
              <Wifi size={12} />
              <span>DESKTOP-O5TNIMK</span>
            </div>
          </div>
        </div>
        <div className={styles.controls}>
          <Laptop size={20} className={styles.laptop} />
          <CirclePlus size={20} />
          <Pause size={20} />
        </div>
      </div>
      <div className={styles.progressBar}>
        <div className={styles.progressFill} style={{ width: "30%" }}></div>
      </div>
    </div>
  );
};

export default MobilePlayer;
