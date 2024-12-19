
import Image from "next/image";

import style from "../Banner/banner.module.css";

import BaixarCv from "@/app/service/service";

//imagem perfil Banner
import FotoPerfil from "./../../../../public/fotoPerfil.jpg";

import IconGithub from "./../../../../public/imagensIcons/github.png";
import IconLinkedin from "./../../../../public/imagensIcons/linkedin.jpg";
import IconWhatsapp from "./../../../../public/imagensIcons/whatsapp.png";


import {gsap} from 'gsap';
import React,{ useLayoutEffect } from "react";

export default function Banner(){


    useLayoutEffect(()=>{
        //componentes titulo, subtitulo,paragrafo e imagem
        gsap.fromTo(`.${style.image}`,{opacity:0,y:350},{opacity:1,y:0, duration:2,}),
        gsap.fromTo(`.${style.span}`,{ opacity:0},{duration:5, opacity:1}),
        gsap.fromTo(`.${style.h2}`,{x:-200, opacity:0},{x:0, opacity:1, duration:2})  ,
        gsap.fromTo(`.${style.p}`,{x:200, opacity:0},{x:0, opacity:1, duration:2}),
       
        //componentes BTN telefone e curriculo, icones de links
        gsap.fromTo(`.${style.containerCurriculoBanner}`,{y:-100,opacity:0},{y:0, opacity:1,duration:2}),
        gsap.fromTo(`.${style.iconGithub}`,{y:-260,opacity:0},{y:0,opacity:1, duration:1}),
        gsap.fromTo(`.${style.iconLinkedin}`,{y:-260,opacity:0},{y:0,opacity:1, duration:2}),
        gsap.fromTo(`.${style.iconWhatsapp}`,{y:-260,opacity:0},{y:0,opacity:1, duration:3})
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