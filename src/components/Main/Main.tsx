import styles from "./Main.module.css";
import { Play } from "lucide-react";
import {
  alive2007,
  blackice,
  limpbizkit,
  metallica,
  daftpunk,
  livelove,
  yeezus,
  slipknot,
  mix1,
  mix2,
  mix3,
  mix4,
  mix5,
  mix6,
  mix7,
} from "../../assets/images";

const Main = () => {
  const latestItems = [
    { src: limpbizkit, alt: "Limp Bizkit", title: "Limp Bizkit" },
    { src: alive2007, alt: "Alive 2007", title: "Alive 2007" },
    { src: blackice, alt: "Black Ice", title: "Black Ice" },
    { src: metallica, alt: "Metallica", title: "Metallica" },
    { src: yeezus, alt: "Yeezus", title: "Yeezus" },
    { src: livelove, alt: "Live. Love. ASAP", title: "Live. Love. ASAP" },
    { src: slipknot, alt: "Slipknot", title: "Slipknot" },
    { src: daftpunk, alt: "Daft Punk", title: "Daft Punk" },
  ];

  const mixItems = [
    {
      src: mix1,
      alt: "Daft Punk",
      description: "This is Daft Punk. Todos os maiores hits em uma só...",
    },
    {
      src: mix2,
      alt: "Limp Bizkit",
      description: "This is Limp Bizkit. Todos os maiores hits em uma...",
    },
    {
      src: mix3,
      alt: "Future",
      description: "This is Future. Todos os maiores hits em uma só...",
    },
    {
      src: mix4,
      alt: "Playboi Carti",
      description: "This is Playboi Carti. Todos os maiores hits em uma... ",
    },
    {
      src: mix5,
      alt: "Kanye West",
      description: "This is Kanye West. Todos os maiores hits em uma...",
    },
    {
      src: mix6,
      alt: "A$AP Rocky",
      description: "This is A$AP Rocky. Todos os maiores hits em uma...",
    },
    {
      src: mix7,
      alt: "Drake",
      description: "This is Drake. Todos os maiores hits em uma só...",
    },
  ];

  return (
    <div className={styles.main}>
      <div className={styles.options}>
        <div className={styles.tudo}>Tudo</div>
        <div className={styles.musica}>Música</div>
        <div className={styles.podcasts}>Podcasts</div>
      </div>

      <div className={styles.latestContainer}>
        {latestItems.map((item, index) => (
          <div key={index} className={styles.latest}>
            <img src={item.src} alt={item.alt} />
            <span>{item.title}</span>
            <div className={styles.playButton}>
              <Play />
            </div>
          </div>
        ))}
      </div>

      <div className={styles.madeForYou}>
        <div className={styles.texts}>
          <h2>O melhor de cada artista</h2>
          <p>Mostrar tudo</p>
        </div>

        <div className={styles.madeForYouContainer}>
          {mixItems.map((item, index) => (
            <div key={index} className={styles.mixCard}>
              <img src={item.src} className={styles.mixImage} alt={item.alt} />
              <div className={styles.playButton2}>
                <Play />
              </div>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Main;
