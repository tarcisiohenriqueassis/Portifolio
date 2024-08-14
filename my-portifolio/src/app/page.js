import Image from "next/image";
import styles from "./page.module.css";

import Header from "./Componentes/Header/header";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header/>
    </main>
  );
}
