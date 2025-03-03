import { useState } from "react";
import styles from "./VolumeBar.module.css";

interface VolumeBarProps {
  volume: number;
  onChange: (value: number) => void;
}

export function VolumeBar({ volume, onChange }: VolumeBarProps) {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div className={styles.volumeControls}>
      <div
        className={styles.volumeBarContainer}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <div
          className={styles.volumeFill}
          style={{
            width: `${volume * 100}%`,
            background: isHovering ? "#1db954" : "#ffffff",
          }}
        />
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={(e) => onChange(parseFloat(e.target.value))}
          className={styles.volumeBar}
        />
      </div>
    </div>
  );
}
