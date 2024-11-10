import Image from "next/image";

import style from "../Banner/banner.module.css";

import BaixarCv from "@/app/service/service";

//imagem perfil Banner
import FotoPerfil from "./../../../../public/fotoPerfil.jpg";

import IconGithub from "./../../../../public/imagensIcons/github.png";
import IconLinkedin from "./../../../../public/imagensIcons/linkedin.jpg";
import IconWhatsapp from "./../../../../public/imagensIcons/whatsapp.png";


export default function Banner(props){
    return(
        <section className={style.containerGlobalBanner}>
            <div className={style.containerImage}>
                <Image className={style.image} src={FotoPerfil} alt="Tarcisio H" title="Tarcisio H"/>
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
                       <a className={style.linkContact} href="tel:+033987054654" target="blank">Contact info</a>
                   </article>
                   <article className={style.containerIconBanner}>
                    <a className={style.iconGithub}  href="https://github.com/tarcisiohenriqueassis" target="blank"><Image className={style.icon} src={IconGithub} width={40} height={40}/></a>
                    <a className={style.iconLinkedin} href="www.linkedin.com/in/tarcisiohenriqueassis" target="blank"><Image className={style.icon} src={IconLinkedin} width={40} height={40}/></a>
                    <a className={style.iconWathSapp} href="tel:+033987054654" target="blank"><Image className={style.icon} src={IconWhatsapp} width={40} height={40}/></a>
                   </article>
                </div>

            </div>
            </section>
    
    )
}