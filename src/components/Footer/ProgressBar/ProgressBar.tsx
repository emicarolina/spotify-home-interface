import { useState, useRef, useEffect } from "react";
import styles from "./ProgressBar.module.css";

interface ProgressBarProps {
  currentTime: number;
  duration: number;
  onChange: (value: number) => void;
}

export function ProgressBar({
  currentTime,
  duration,
  onChange,
}: ProgressBarProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const progressPercentage = (currentTime / duration) * 100;

  const handleMouseMove = (e: MouseEvent) => {
    if (!progressBarRef.current || !isDragging) return;

    const rect = progressBarRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width)); // Mantém dentro dos limites
    const newTime = (x / rect.width) * duration;

    onChange(newTime);
  };

  useEffect(() => {
    const handleMouseUp = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging]);

  return (
    <div className={styles.progressContainer}>
      <span className={styles.time}>{formatTime(currentTime)}</span>
      <div
        className={styles.progressBarWrapper}
        ref={progressBarRef}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className={styles.progressBackground} />
        <div
          className={`${styles.progressFill} ${
            isDragging ? styles.dragging : ""
          }`}
          style={{ width: `${progressPercentage}%` }}
        />
        <input
          type="range"
          min="0"
          max={duration}
          value={currentTime}
          onChange={(e) => onChange(Number(e.target.value))}
          className={styles.progressBar}
        />
        {(isHovered || isDragging) && (
          <div
            className={styles.progressThumb}
            style={{ left: `${progressPercentage}%` }}
            onMouseDown={(e) => {
              setIsDragging(true);
              e.preventDefault();
            }}
          />
        )}
      </div>
      <span className={styles.time}>{formatTime(duration)}</span>
    </div>
  );
}

function formatTime(time: number) {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
}
