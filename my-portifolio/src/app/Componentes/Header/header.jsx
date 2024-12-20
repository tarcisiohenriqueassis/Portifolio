
import  {useState}  from "react";
import style from "../Header/header.module.css";

import {gsap} from 'gsap';
import React,{ useLayoutEffect, useRef } from "react";

export default function Header(props){ 
   
    const [ esconderMenuHg,setAparecerMenuHg]= useState("true");
    const [ iconMenuBg, setIconMenuBg]=useState("|||")
    
    const AbrirMenu=()=>{
        if(esconderMenuHg === "true"){ 
        setAparecerMenuHg("false")
        setIconMenuBg("x")
    } else{
         setAparecerMenuHg("true")
         setIconMenuBg("|||")
       }
    }

    

    useLayoutEffect(() => {
        gsap.fromTo(
          `.${style.header}`,
          { opacity: 0, x: 550,visibility:"hidden"}, // Estado inicial
          { opacity: 1, x: 0, duration: 3, ease: "power3.out",visibility:"visible" } // Estado final
        )
      }, []);
      
    return(
        <header className={style.header}>
            <div className={style.logoNome}>
                <h1 className={style.h1}>Tarcísio H</h1>
            </div>
            <div className={style.containerLinksNavBar}>
                <a className={style.linkNavBar} href={props.linkAbout}>About</a>
                <a className={style.linkNavBar} href={props.linkExperience}>Experience</a>
                <a className={style.linkNavBar} href={props.linkProjects}>Projects</a>
                <a className={style.linkNavBar} href={props.linkContact}>Contact</a>
            </div>
            <div className={style.containerGlobalMenuHb}>
            <div className={style.containerBtn}>
                <button className={style.btn} onClick={AbrirMenu}>{iconMenuBg}</button>
                </div>
                <div className={esconderMenuHg === "true" ?style.containerMenuHbFechado :style.containerMenuHbOpen}>
                <a className={style.linkMenuHb} href={props.linkAbout}>About</a>
                <a className={style.linkMenuHb} href={props.linkExperience}>Experience</a>
                <a className={style.linkMenuHb} href={props.linkProjects}>Projects</a>
                <a className={style.linkMenuHb} href={props.linkContact}>Contact</a>
                </div>
            </div>
        </header>
    )
}