
import style from "../Header/header.module.css";

import  {useState}  from "react";
import {gsap} from 'gsap';
import React,{ useLayoutEffect, useRef } from "react";

export default function Header(props){ 
  
   useLayoutEffect(() => {

       gsap.fromTo(
        //aplica o efeito no header, usado right , pois x,y causa problemas no menu hamburguer
        `.${style.header}`,
         { opacity:0, right:'350px'}, // Estado inicial
         { opacity:1, right:'0px',duration:6,ease:'power4.inOut'} // Estado final
       )
     }, []);
   
    const [ esconderMenuHg,setAparecerMenuHg] = useState(true);
    const [ iconMenuBg, setIconMenuBg] =useState("|||");
    
    const AbrirMenu =()=>{
        if(esconderMenuHg === true){ 
        setAparecerMenuHg(false)
        setIconMenuBg("x")
    } else{
         setAparecerMenuHg(true)
         setIconMenuBg("|||")
       }
    }

    return(
        <header className={style.header} >
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
                <div className={esconderMenuHg === true ?style.containerMenuHbFechado :style.containerMenuHbOpen}>
                <a className={style.linkMenuHb} href={props.linkAbout}>About</a>
                <a className={style.linkMenuHb} href={props.linkExperience}>Experience</a>
                <a className={style.linkMenuHb} href={props.linkProjects}>Projects</a>
                <a className={style.linkMenuHb} href={props.linkContact}>Contact</a>
                </div>
            </div>
        </header>
    )
}