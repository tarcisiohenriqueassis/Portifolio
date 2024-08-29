import Image from "next/image";
import Link from "next/link";
//Css
import styles from "./page.module.css";

//Comnponentes
import Header from "./Componentes/Header/header";
import Banner from "./Componentes/Banner/banner";
import CardSobreMim from "./Componentes/CardSobreMim/card";
import CardExperience from "./Componentes/CardExperience/cardExperience";
//imagem perfil Banner
import FotoPerfil from "../../public/fotoPerfil.jpg";
//imagens da seção about 
import IconEducation from "../../public/education.png";
import IconExperience from "../../public/experience.png";
import IconScrollPage from "../../public/arrow.png";
//imagens da seção experience Frontend
import IconHtml from "../../public/iconHtml.png";
import IconCss from "../../public/iconCss.webp";
import IconReact from "../../public/iconReact.png";
import IconJs from "../../public/iconJs.png";
//imagens da seção experience Backend
import IconNodejs from "../../public/iconNodejs.png";
import IconNpm from "../../public/iconNpm.jpg";
import IconGit from "../../public/iconGit.png";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header/>
      <Banner id="Banner" imagemBanner={FotoPerfil} titulo="Tarcisio H"/>
      <section className={styles.containerSectionGlobalCardSobreMim}>
      
        <article className={styles.containerTitulo}>
          <span className={styles.spanSections}>Get To Know More</span>
          <h2 className={styles.tituloSections}>About Me</h2>
        </article>
        <article className={styles.containerCardsSobreMim}>
          <CardSobreMim imagemCard={IconExperience} titulo="Experience" span="1+ year" paragrafo="Frontend Development"/>
          <CardSobreMim imagemCard={IconEducation} titulo="Education"span="Ensino Medio - Completo" paragrafo="E.E.Labor Club"/>  
        </article>
        <article className={styles.containerLinkScollPage}>
          <Link href="#Experience" className={styles.linkScrollPage}>
            <Image className={styles.imgLinkScrollPage} src={IconScrollPage} width={50}/>
          </Link>
        </article>
      </section> 
      <section id="Experience" className={styles.containerGlobalSectionExperience}>
        <article className={styles.containerTitulo}>
          <span className={styles.spanSections}>Explore My</span>
          <h2 className={styles.tituloSections}>Experience</h2>
        </article>
        <article className={styles.containerCardsLinguagens}>
          <div className={styles.containerGlobalCardsFrontEnd}>
            <h3 className={styles.tituloLinguagensFrontBack}>Frontend Development</h3>
              <article className={styles.containerCards}>
                <CardExperience linguagem="Html" nivelExperiencia="avançado" iconLinguagem={IconHtml} />
                <CardExperience linguagem="Css" nivelExperiencia="intermediario" iconLinguagem={IconCss}/>
                <CardExperience linguagem="React.js" nivelExperiencia="intermediario" iconLinguagem={IconReact}/>
                <CardExperience linguagem="JavaScript" nivelExperiencia="basico" iconLinguagem={IconJs}/>
              </article>   
          </div>
          <div className={styles.containerGlobalCardsBackend}>
            <h3 className={styles.tituloLinguagensFrontBack}>Backend Development</h3>
              <article className={styles.containerCards}>
                <CardExperience linguagem="Npm" nivelExperiencia="Basico" iconLinguagem={IconNpm} />
                <CardExperience linguagem="Node.js" nivelExperiencia="intermediario" iconLinguagem={IconNodejs}/>
                <CardExperience linguagem="JavaScript" nivelExperiencia="basico" iconLinguagem={IconJs}/>
                <CardExperience linguagem="Git" nivelExperiencia="basico" iconLinguagem={IconGit}/>
              </article>   
          </div>
        </article>
      </section>
     
      </main>
  );
}
