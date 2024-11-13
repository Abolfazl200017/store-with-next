import { Typography } from "@mui/material";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Typography variant="h1">
          مین is here !
        </Typography>
      </main>
      <footer className={styles.footer}>
        footer is here
      </footer>
    </div>
  );
}
