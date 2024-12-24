'use client';
import {gsap} from 'gsap';
import { useLayoutEffect, useRef } from "react";

import Image from "next/image";
//Css
import styles from "./page.module.css";
//Componentes
import Header from "./Componentes/Header/header.jsx";
import Banner from "./Componentes/Banner/banner.jsx";
import CardSobreMim from "./Componentes/CardSobreMim/card.jsx";
import CardExperience from "./Componentes/CardExperience/cardExperience.jsx";
import Project from "./Componentes/CardProject/project.jsx";
//imagens da seção about 
import IconEducation from "@/app/(public)/imagensicons/education.png";
import IconExperience from "@/app/(public)/imagensicons/experience.png";
import IconScrollPage from "@/app/(public)/imagensicons/arrow.png";
//imagens da seção experience Frontend
import IconHtml from "@/app/(public)/imagensicons/iconHtml.png";
import IconCss from "@/app/(public)/imagensicons/iconCss.webp";
import IconReact from "@/app/(public)/imagensicons/iconReact.png";
import IconJs from "@/app/(public)/imagensicons/iconJs.png";
import IconGit from "@/app/(public)/imagensicons/iconGit.png";
import IconNodejs from "@/app/(public)/imagensicons/iconNodejs.png";
import IconNpm from "@/app/(public)/imagensicons/iconNpm.jpg";
import IconApiRest from "@/app/(public)/imagensicons/iconApiRest.png";
import IconExpress from "@/app/(public)/imagensicons/iconExpress.png";
import IconPostman from "@/app/(public)/imagensicons/iconPostman.jpg";
import IconMySql from "@/app/(public)/imagensicons/iconmysql.png";


export default function Home() {

  const tituloRef = useRef(null);

  useLayoutEffect(() => {
    // Animação usando GSAP para o elemento com ref
    gsap.fromTo(
      tituloRef.current,
      { opacity: 0, y: 50, visibility:"hidden"  }, // Estado inicial
      { opacity: 1, y: 0, duration: 2, ease: "power3.out", visibility:"visible" } // Estado final
    );
  }, []);
  
  return (
    <main className={styles.main}>
       <Header linkAbout="#SobreMim" linkExperience="#Experience" linkProjects="#projects" linkContact="#contact"/>
       <Banner/>
      <section className={styles.containerGlobalCardSobreMim}>
      <article className={styles.containerTitulo} >
          <span id="SobreMim" className={styles.spanSections}  >Get To Know More</span>
          <h2 className={styles.tituloSections} >About Me</h2>
        </article>
        <article className={styles.containerCardsSobreMim}>
          <CardSobreMim imagemCard={IconExperience} titulo="Experience" span="1+ year" paragrafo="Frontend Development"/>
          <CardSobreMim imagemCard={IconEducation} titulo="Education"span="Ensino Medio - Completo" paragrafo="E.E.Labor Club"/>  
        </article>
        <article className={styles.containerLinkScollPage}>
        <a href="#Experience" className={styles.linkScrollPage}>
            <Image className={styles.imgLinkScrollPage} src={IconScrollPage} alt="icon" width={50} height={50}/>
          </a>
        </article>
      </section> 
      <section id="Experience" className={styles.containerGlobalSectionExperience}>
        <article className={styles.containerTitulo}>
          <span className={styles.spanSections}>Explore My</span>
          <h2 className={styles.tituloSections}>Experiences</h2>
        </article>
        <article className={styles.containerCardsLinguagens}>
          <div className={styles.containerGlobalCardsFrontEnd}>
            <h3 className={styles .tituloLinguagensFrontBack}>Frontend Development</h3>
              <article className={styles.containerCards}>
                <CardExperience linguagem="Html" nivelExperiencia="avançado" iconLinguagem={IconHtml} />
                <CardExperience linguagem="Css" nivelExperiencia="intermediário" iconLinguagem={IconCss}/>
                <CardExperience linguagem="React.js" nivelExperiencia="intermediário" iconLinguagem={IconReact}/>  
                <CardExperience linguagem="JavaScript" nivelExperiencia="básico" iconLinguagem={IconJs}/>
                <CardExperience linguagem="Npm" nivelExperiencia="Básico" iconLinguagem={IconNpm} />    
                <CardExperience linguagem="Git" nivelExperiencia="básico" iconLinguagem={IconGit}/>        
              </article>   
              
          </div>
          <div  className={styles.containerGlobalCardsBackend}>
            <h3  className={styles.tituloLinguagensFrontBack} >Backend Development</h3>
              <article className={styles.containerCards}>
                <CardExperience linguagem="Node.js" nivelExperiencia="intermediário" iconLinguagem={IconNodejs}/>
                <CardExperience linguagem="JavaScript" nivelExperiencia="básico" iconLinguagem={IconJs}/>
                <CardExperience linguagem="Postman" nivelExperiencia="básico" iconLinguagem={IconPostman}/>
                <CardExperience linguagem="Express" nivelExperiencia="básico" iconLinguagem={IconExpress} />
                <CardExperience linguagem="MySql" nivelExperiencia="básico" iconLinguagem={IconMySql}/>
                <CardExperience linguagem="ApiRest" nivelExperiencia="básico" iconLinguagem={IconApiRest}/>
              </article>   
          </div>
        </article>
        <article className={styles.containerLinkScollPage}>
          <a href="#projects" className={styles.linkScrollPage}>
            <Image className={styles.imgLinkScrollPage} src={IconScrollPage} width={50} height={50} alt="icon"/>
          </a>
        </article>
      </section>
      <section id="projects" className={styles.containerGlobalMyProjects}>
      <span className={styles.spanSections}>Explore My</span>
        <h2 className={styles.tituloSections}>My Projects</h2>
        <div className={styles.containerCardsMyProjects}>
        <Project imagemLinkGithub={IconGit}/>
        <Project imagemLinkGithub={IconGit}/>
        <Project imagemLinkGithub={IconGit}/>
        <Project imagemLinkGithub={IconGit}/>
        
        </div>
      </section>

      </main>
  );
}
