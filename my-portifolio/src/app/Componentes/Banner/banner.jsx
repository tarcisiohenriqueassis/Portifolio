'use client';
import Image from "next/image";

import style from "../Banner/banner.module.css";

import BaixarCv from "../../service/service";

//imagem perfil Banner
import fotoPerfil from '../../(public)/fotoPerfil.jpg';

//imagem Icons banner
import iconWhatsapp from '@/app/(public)/imagensicons/whatsapp.png';
import iconLinkedin from '@/app/(public)/imagensicons/linkedin.jpg';
import iconGithub from '@/app/(public)/imagensicons/github.png';

//importando gsap
import {gsap} from 'gsap';
import React,{ useLayoutEffect } from "react";

export default function Banner(){

    useLayoutEffect(()=>{
       
        const tl = gsap.timeline();
       
        gsap.registerPlugin(tl)

        //animação do container de apresentação da foto de perfil
        tl.fromTo(`.${style.span}`,{ opacity:0, x:300},{opacity:1,x:0})
        .fromTo(`.${style.h2}`,{x:-300, opacity:0},{x:0, opacity:1})  
        .fromTo(`.${style.p}`,{x:200, opacity:0},{x:0, opacity:1})   
        //animação do container e seus icons wats,linkedin,github
        .fromTo(`.${style.containerCurriculoBanner}`,{y:-100,opacity:0},{y:0, opacity:1})
        .fromTo(`.${style.iconWhatsapp}`,{y:-260,opacity:0},{y:0,opacity:1,overwrite: "auto"})
        .fromTo(`.${style.iconLinkedin}`,{y:-260,opacity:0},{y:0,opacity:1,overwrite: "auto"})
        .fromTo(`.${style.iconGithub}`,{y:-260,opacity:0},{y:0,opacity:1,overwrite: "auto"})
        //animação da foto de perfil
         .fromTo(`.${style.image}`,{opacity:1,y:0},{opacity:1,y:10, duration:3,ease: "power1.inOut", repeat: -1, yoyo: true})
     
       

        //reponsavel por desfragmentar , para q n fique carregando sem necessidade
        return ()=>{
            gsap.killTweensOf(tl)
        }
        
    },[]);
    
    return(
        <section className={style.containerGlobalBanner}>
            <div className={style.containerImage}  >
                <Image className={style.image} src={fotoPerfil} alt="Tarcisio H"/>
            </div>
            <div className={style.containerInformacoesBanner}>
                <article >
                    <span  className={style.span} >Hellow, I'm</span>
                    <h2  className={style.h2}>Tarcisio H</h2>
                    <p  className={style.p}> Frontend Developer </p>
                </article>
                <div  className={style.containerLinksBanner}>
                   <article  className={style.containerCurriculoBanner}>
                       {BaixarCv()}
                       <a className={style.linkContact} href="tel:+033987054654" target="blank">Contact info</a>
                   </article>
                   <article  className={style.containerIconBanner}>
                    <a className={style.linkIconWhatSapp} href="#"><Image id={style.iconWhatsapp} className={style.iconWhatsapp} src={iconWhatsapp}/></a>
                    <a className={style.linkIconLinkedin} href="#"><Image id={style.iconLinkedin} className={style.iconLinkedin} src={iconLinkedin}/></a>
                    <a className={style.linkIconGithub} href="#"><Image id={style.iconGithub}   className={style.iconGithub} src={iconGithub}/></a>
                   </article>
                </div>

            </div>
            </section>
    
    )
}