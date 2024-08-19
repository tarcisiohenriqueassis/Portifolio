import Image from "next/image";
import styles from "./page.module.css";

import Header from "./Componentes/Header/header";
import Banner from "./Componentes/Banner/banner";

import FotoPerfil from "../../public/fotoPerfil.png";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header/>
      <Banner imagemBanner={FotoPerfil} titulo="Tarcisio H"/>
    </main>
  );
}
