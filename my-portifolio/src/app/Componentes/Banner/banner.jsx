import Link from "next/link";
import Image from "next/image";

import style from "../Banner/banner.module.css";

export default function Banner(props){
    return(
        <section className={style.containerGlobalBanner}>
            <div className={style.containerImage}>
                <Image className={style.image} src={props.imagemBanner} alt={props.titulo} title={props.titulo}/>
            </div>
            <div className={style.containerInformacoesBanner}>
                <div>
                    <span className={style.span}>Hellow, I'm</span>
                    <h2 className={style.h2}>Tarcisio H</h2>
                    <p className={style.p}> Frontend Developer </p>
                </div>
                <div className={style.containerLinksBanner}>
                   <div className={style.containerBtnBanner}>
                       <a href="../../curriculo/TarcisioHenriqueCurriculo.pdf">Curriculo</a>
                       <a href="#">Contact info</a>
                   </div>
                   <div className={style.containerIconBanner}>

                   </div>
                </div>
            </div>

        </section>
    )
}