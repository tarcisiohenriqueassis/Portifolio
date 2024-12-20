'use client';
import Image from "next/image";
//Css
import styles from "./page.module.css";
//Componentes
import Header from "./Componentes/Header/header";
import Banner from "./Componentes/Banner/banner";
import CardSobreMim from "./Componentes/CardSobreMim/card";
import CardExperience from "./Componentes/CardExperience/cardExperience";
import Project from "./Componentes/CardProject/project.jsx";
//imagens da seção about 
import IconEducation from "/public/imagensIcons/education.png";
import IconExperience from "/public/imagensIcons/experience.png";
import IconScrollPage from "/public/imagensIcons/arrow.png";
//imagens da seção experience Frontend
import IconHtml from "/public/imagensIcons/iconHtml.png";
import IconCss from "/public/imagensIcons/iconCss.webp";
import IconReact from "/public/imagensIcons/iconReact.png";
import IconJs from "/public/imagensIcons/iconJs.png";
import IconGit from "/public/imagensIcons/iconGit.png";
import IconNodejs from "/public/imagensIcons/iconNodejs.png";
import IconNpm from "/public/imagensIcons/iconNpm.jpg";
import IconApiRest from "/public/imagensIcons/IconApiRest.png";
import IconExpress from "/public/imagensIcons/iconExpress.png";
import IconPostman from "/public/imagensIcons/iconPostman.jpg";
import IconMySql from "/public/imagensIcons/IconMySql.png";

import {gsap} from 'gsap';
import React,{ useLayoutEffect, useRef } from "react";


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
            <Image className={styles.imgLinkScrollPage} src={IconScrollPage} width={50}/>
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
            <Image className={styles.imgLinkScrollPage} src={IconScrollPage} width={50}/>
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
      <div data-aos="flip-left">dsfhdfghfgjhgf</div>

      </main>
  );
}
