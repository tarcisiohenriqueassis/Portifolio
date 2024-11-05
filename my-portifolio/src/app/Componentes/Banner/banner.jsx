import Link from "next/link";
import Image from "next/image";

import style from "../Banner/banner.module.css";

import BaixarCv from "@/app/service/service";


export default function Banner(props){
    return(
        <section className={style.containerGlobalBanner}>
            <div className={style.containerImage}>
                <Image className={style.image} src={props.imagemBanner} alt={props.tituloImagemPerfil} title={props.tituloImagemPerfil}/>
            </div>
            <div className={style.containerInformacoesBanner}>
                <article>
                    <span className={style.span}>Hellow, I'm</span>
                    <h2 className={style.h2}>Tarcisio H</h2>
                    <p className={style.p}> Frontend Developer </p>
                </article>
                <div className={style.containerLinksBanner}>
                   <article className={style.containerCurriculoBanner}>
                       {BaixarCv()}
                       <Link className={style.linkContact} href="#">Contact info</Link>
                   </article>
                   <article className={style.containerIconBanner}>
                    <Link className={style.iconGithub}  href={props.linkNav1}><Image className={style.icon} src={props.iconLink1} width={40} height={40}/></Link>
                    <Link className={style.iconLinkedin} href={props.linkNav2}><Image className={style.icon} src={props.iconLink2} width={40} height={40}/></Link>
                    <Link className={style.iconWathSapp} href={props.linkNav3}><Image className={style.icon} src={props.iconLink3} width={40} height={40}/></Link>
                   </article>
                </div>

            </div>
            </section>
    
    )
}