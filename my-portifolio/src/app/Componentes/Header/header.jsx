"use client";

import Link from "next/link";

import  {useState}  from "react";

import style from "../Header/header.module.css";

export default function Header(props){ 
   
    const [ esconderMenuHg,setAparecerMenuHg]= useState("true");
    const [ iconMenuBg, setIconMenuBg]=useState("|||")
    
    const AbrirMenu=()=>{
        if(esconderMenuHg === "true"){ 
        setAparecerMenuHg("false")
        setIconMenuBg("x")
    }
       else{
         setAparecerMenuHg("true")
         setIconMenuBg("|||")
       }
    }

    return(
        <header className={style.header}>
            <div className={style.logoNome}>
                <h1 className={style.h1}>Tarcísio H</h1>
            </div>
            <div className={style.containerLinks}>
            <a className={style.link} href={props.linkAbout}>About</a>
            <a className={style.link} href={props.linkExperience}>Experience</a>
            <a className={style.link} href={props.linkProjects}>Projects</a>
            <a className={style.link} href={props.linkContact}>Contact</a>
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