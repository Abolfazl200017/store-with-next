import { Typography } from "@mui/material";
import styles from "./page.module.css";
import Layout from "@/components/layout";

export default function Home() {
  return (
    <Layout>
      <main className={styles.main}>
        <Typography variant="h1">مین is here !</Typography>
      </main>
    </Layout>
    );
}
