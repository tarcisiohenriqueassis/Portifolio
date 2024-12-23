
import Image from "next/image";

import style from "../Banner/banner.module.css";

import BaixarCv from "../../service/service";

//imagem perfil Banner
import FotoPerfil from "@/app/(public)/fotoPerfil.jpg";
import IconGithub from "@/app/(public)/imagensicons/github.png";
import IconLinkedin from "@/app/(public)/imagensicons/linkedin.jpg";
import IconWhatsapp from "@/app/(public)/imagensicons/whatsapp.png";


import {gsap} from 'gsap';
import React,{ useLayoutEffect } from "react";

export default function Banner(){

    useLayoutEffect(()=>{
        const tl = gsap.timeline();
       
        gsap.registerPlugin(tl)
       
        tl.fromTo(`.${style.image}`,{opacity:0,y:350},{opacity:1,y:0})
        .fromTo(`.${style.span}`,{ opacity:0},{opacity:1})
        .fromTo(`.${style.h2}`,{x:-200, opacity:0},{x:0, opacity:1})  
        .fromTo(`.${style.p}`,{x:200, opacity:0},{x:0, opacity:1})   
        .fromTo(`.${style.containerCurriculoBanner}`,{y:-100,opacity:0},{y:0, opacity:1})
        .fromTo(`.${style.iconGithub}`,{y:-260,opacity:0},{y:0,opacity:1})
        .fromTo(`.${style.iconLinkedin}`,{y:-260,opacity:0},{y:0,opacity:1})
        .fromTo(`.${style.iconWhatsapp}`,{y:-260,opacity:0},{y:0,opacity:1})
        
        return ()=>{
            gsap.killTweensOf(tl)
        }
        
    },[]);

      

    return(
        <section className={style.containerGlobalBanner}>
            <div className={style.containerImage}  >
                <Image  className={style.image} src={FotoPerfil} alt="Tarcisio H" title="Tarcisio H"/>
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
                    <a className={style.linkIconGithub}  href="https://github.com/tarcisiohenriqueassis" target="_blank"><Image  className={style.iconGithub} src={IconGithub} width={40} height={40}/></a>
                    <a className={style.linkIconLinkedin} href="https://www.linkedin.com/in/tarcisiohenriqueassis/" target="_blank"><Image  className={style.iconLinkedin} src={IconLinkedin} width={40} height={40}/></a>
                    <a className={style.linkIconWathSapp} href="tel:+55033987054654" target="blank"><Image  className={style.iconWhatsapp}  src={IconWhatsapp} width={40} height={40}/></a>
                   </article>
                </div>

            </div>
            </section>
    
    )
}