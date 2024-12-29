'use client';
import {gsap} from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useLayoutEffect, useRef,} from "react";

import Image from "next/image";
//Css
import styles from "./page.module.css";
// skils
import skilsFront from './colecaoDados/dadosCardSkilsFront/skilsFront';
import skilsBack from './colecaoDados/dadosCardSkilsBack/dadosCardSkilsBack';
//Componentes
import Header from "./Componentes/Header/header";
import Banner from "./Componentes/Banner/banner";
import CardSobreMim from "./Componentes/CardSobreMim/cardSobreMim";
import CardSkils from "./Componentes/CardSkils/cardSkils";
import Project from "./Componentes/CardProject/project";
//imagem ScrollPage
import scrollPage from '@/app/(public)/imagensicons/arrow.png'; 
//imagens da seção Sobre Mim
import iconEducação from '@/app/(public)/imagensicons/education.png';
import iconExperiencia from '@/app/(public)/imagensicons/experience.png';
import iconFundo from '@/app/(public)/imagensicons/fundo.jpg'
export default function Home() {

// ScroolTrigger da parte Sobre mim
  const tl = useRef();
  // referencia do container de marcação de inicio e fim 
  const containerSobreMimRef = useRef();

  useLayoutEffect(()=>{

    gsap.registerPlugin(ScrollTrigger)
    
    const ctx = gsap.context(()=>{
      tl.current = gsap.timeline({
        scrollTrigger:{
          trigger:`.${styles.containerCardsSobreMim}`,
          scrub:false,
          markers:false,
          start:'top 330px',
          end:'bottom 670px'
        }
      })  // conforme a ordem das animações , vai se executando                                  
      .fromTo(`.${styles.spanSections}`,{y:300, opacity:0},{y:0,opacity:1})
      .fromTo(`.${styles.tituloSections}`,{x:300, opacity:0},{x:0,opacity:1})
      .fromTo(`.${styles.containerCardsSobreMim}`,{opacity:0,x:160},{opacity:1,x:0})
      .fromTo(`.${styles.imgLinkScrollPage}`,{visibility:"hidden",y:150},{visibility:"visible",opacity:1,y:0})
    },containerSobreMimRef)

  },[])


  //ScrollTrigger da seção experiencia 
  const containerExperienceRef = useRef();

  useLayoutEffect(()=>{

    gsap.registerPlugin(ScrollTrigger)
    
    const ctx = gsap.context(()=>{
      tl.current = gsap.timeline({
        scrollTrigger:{
          trigger:`.${styles.containerTitulo}`,
          scrub:false,
          markers:true,
          start:'top 110px',
          end:'bottom 160px'
        }
      })  // conforme a ordem das animações , vai se executando   
      .fromTo(`.${styles.containerCardsLinguagens}`,{ opacity:0},{opacity:1})   
      .fromTo(`.${styles.containerCards}`,{ x:-250 ,opacity:0},{x:0, opacity:1})    
      .fromTo(`.${styles.imgLinkScrollPage}`,{opacity:0},{opacity:1})                        
      .fromTo(`.${styles.containerTitulo}`,{x:300, opacity:0},{x:0,opacity:1,duration:1})
      .fromTo(`.${styles.tituloLinguagensFrontBack}`,{ opacity:0}, { opacity:1, duration:2})
      
    },containerExperienceRef)

  },[])

 

  return (

    <main  className={styles.main}>
       <Header linkAbout="#SobreMim" linkExperience="#Experience" linkProjects="#projects" linkContact="#contact"/>
       <Banner/>

       {/* Seção Sobre mim */}
        <section  className={styles.containerGlobalCardSobreMim} ref={containerSobreMimRef}>

          <article  className={styles.containerTitulo} >
              <span id="SobreMim" className={styles.spanSections}>Get To Know More</span>
              <h2 className={styles.tituloSections}>About Me</h2>
          </article>

          <article  className={styles.containerCardsSobreMim}>
              
              <CardSobreMim
               imagemCard={iconEducação}
               titulo="Education" 
               span="Ensino - Médio Completo" 
               paragrafo="E.E. Labor Club" 
               />

              <CardSobreMim 
              imagemCard={iconExperiencia} 
              titulo="Experiencia" 
              span="FullStack" 
              paragrafo="+2Years" 
              />            
          
          </article>

           {/*Scroll da pagina */}
          <article className={styles.containerLinkScrollPage}>
          <a className={styles.linkScrollPage} href="#Experience">
            <Image className={styles.imgLinkScrollPage} src={scrollPage} width={50} height={50}/>
          </a> 
          </article>
        </section>

       {/*Seção Experience*/}
      <section id='Experience'  className={styles.containerGlobalSectionExperience} ref={containerExperienceRef}>

        <article className={styles.containerTitulo}>
          <span className={styles.spanSections}>Explore My</span>
          <h2 className={styles.tituloSections}>Experiences</h2>
        </article>

        {/*Seção Linguagens Front */}
        <article className={styles.containerCardsLinguagens}>
          <div className={styles.containerGlobalCardsFrontEnd}>
            <h3 className={styles .tituloLinguagensFrontBack}>Frontend Development</h3>
              <article className={styles.containerCards}>
             
              {skilsFront.map((array)=>( 
                <CardSkils
                key={array.id}
                iconLinguagem={array.iconLinguagem} 
                linguagem={array.linguagem} 
                nivelExperiencia={array.nivelExperiencia} />
                ))}
              
               </article>      
          </div>

           {/*Seção Linguagens Back */}
          <div  className={styles.containerGlobalCardsBackend}>
            <h3 className={styles.tituloLinguagensFrontBack}>Backend Development</h3>
              <article className={styles.containerCards}>

              {skilsBack.map((array)=>( 
                  <CardSkils 
                  key={array.id} 
                  iconLinguagem={array.iconLinguagem} 
                  linguagem={array.linguagem} 
                  nivelExperiencia={array.nivelExperiencia} />
                ))}

              </article>   
          </div>
        </article>

         {/*Scroll da pagina */}
        <article className={styles.containerLinkScollPage}>
          <a href="#projects" className={styles.linkScrollPage}>
          <Image className={styles.imgLinkScrollPage} src={scrollPage} width={50} height={50}/>
          </a>
        </article>
      </section>

       {/*Seção Projects */}
      <section id="projects" className={styles.containerGlobalMyProjects}>
      <span className={styles.spanSections}>Explore My</span>
        <h2 className={styles.tituloSections}>My Projects</h2>
        <div className={styles.containerCardsMyProjects}>
    
        </div>
      </section>

      </main>
  );
}
