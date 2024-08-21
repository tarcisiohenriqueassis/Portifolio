import Image from "next/image";
import Link from "next/link";
//Css
import styles from "./page.module.css";

//Comnponentes
import Header from "./Componentes/Header/header";
import Banner from "./Componentes/Banner/banner";
import CardSobreMim from "./Componentes/CardSobreMim/card";
import CardExperience from "./Componentes/CardExperience/cardExperience";
//imagens
import FotoPerfil from "../../public/fotoPerfil.jpg";
import IconEducation from "../../public/education.png";
import IconExperience from "../../public/experience.png";
import IconScrollPage from "../../public/arrow.png";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header/>
      <Banner id="Banner" imagemBanner={FotoPerfil} titulo="Tarcisio H"/>
      <section className={styles.containerSectionCardSobreMim}>
      
        <article className={styles.containerTitulo}>
          <span className={styles.spanSections}>Get To Know More</span>
          <h2 className={styles.tituloSections}>About Me</h2>
        </article>
        <article className={styles.containerCards}>
          <CardSobreMim imagemCard={IconExperience} titulo="Experience" span="1+ year" paragrafo="Frontend Development"/>
          <CardSobreMim imagemCard={IconEducation} titulo="Education"span="Ensino Medio - Completo" paragrafo="E.E.Labor Club"/>  
        </article>
        <article className={styles.containerLinkScollPage}>
          <Link href="#Experience" className={styles.linkScrollPage}>
            <Image className={styles.imgLinkScrollPage} src={IconScrollPage} width={50}/>
          </Link>
        </article>
      </section> 
      <section id="Experience" className={styles.containerSectionExperiencia}>
        <article className={styles.containerTitulo}>
          <span className={styles.spanSections}>Explore My</span>
          <h2 className={styles.tituloSections}>Experience</h2>
        </article>
        <article className={styles.containerCardsExperience}>

        </article>
      </section>
     
      </main>
  );
}
