import styles from "./Footer.module.css";
import { useState } from "react";
import { ProgressBar } from "./ProgressBar/ProgressBar";
import { VolumeBar } from "./VolumeBar/VolumeBar";
import { blackice } from "../../assets/images";
import useMobileDetect from "../../hooks/useMobileDetect";
import MobilePlayer from "../Player/MobilePlayer";

import {
  CirclePlus,
  Pause,
  SkipForward,
  SkipBack,
  Shuffle,
  Repeat,
  Volume2,
  LaptopMinimal,
  AlignJustify,
  MicVocal,
  PictureInPicture2,
  SquarePlay,
  Maximize2,
} from "lucide-react";

const Footer = () => {
  const [currentTime, setCurrentTime] = useState(56);
  const duration = 246;
  const [volume, setVolume] = useState(1);
  const isMobile = useMobileDetect();

  if (isMobile) {
    return <MobilePlayer />;
  }

  return (
    <div className={styles.footerContainer}>
      <div className={styles.musicInfo}>
        <img src={blackice} alt="Black Ice" className={styles.albumCover} />
        <div>
          <p className={styles.songTitle}>War Machine</p>
          <p className={styles.artistName}>AC/DC</p>
        </div>
        <CirclePlus size={20} className={styles.icon} />
      </div>

      <div className={styles.controlsContainer}>
        <div className={styles.playerControls}>
          <Shuffle size={20} className={styles.icon} />
          <SkipBack size={20} className={styles.icon} />
          <button className={styles.playPauseButton}>
            <Pause size={20} />
          </button>
          <SkipForward size={20} className={styles.icon} />
          <Repeat size={20} className={styles.icon} />
        </div>

        <div className={styles.progressBar}>
          <ProgressBar
            currentTime={currentTime}
            duration={duration}
            onChange={(value: number) => setCurrentTime(value)}
          />
        </div>
      </div>

      <div className={styles.otherControls}>
        <SquarePlay size={20} className={styles.icon} />
        <MicVocal size={20} className={styles.icon} />
        <AlignJustify size={20} className={styles.icon} />
        <LaptopMinimal size={20} className={styles.icon} />
        <Volume2 size={20} className={styles.icon} />
        <VolumeBar volume={volume} onChange={setVolume} />
        <PictureInPicture2 size={20} className={styles.icon} />
        <Maximize2 size={20} className={styles.icon} />
      </div>
    </div>
  );
};

export default Footer;
