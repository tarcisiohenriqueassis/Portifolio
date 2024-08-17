import Link from "next/link";
import Image from "next/image";

import style from "../Banner/banner.module.css";

import BaixarCv from "@/app/service/service";

//importando icons redes sociais
import IconWhatsapp from "@/../public/whatsapp.png";
import IconLinkedin from "@/../public/linkedin.jpg";
import IconGithub from "@/../public/github.png";

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
                   <div className={style.containerCurriculoBanner}>
                       {BaixarCv()}
                       <Link className={style.linkContact} href="#">Contact info</Link>
                   </div>
                   <div className={style.containerIconBanner}>
                    <Link className={style.iconGithub} target="_blank" href="https://github.com/tarcisiohenriqueassis"><Image className={style.icon} src={IconGithub} width={40} height={40}/></Link>
                    <Link className={style.iconLinkedin} href="www.linkedin.com/in/tarcisiohenriqueassis"><Image className={style.icon} src={IconLinkedin} width={40} height={40}/></Link>
                    <Link className={style.iconWathSapp} href="tel:+5533987054654"><Image className={style.icon} src={IconWhatsapp} width={40} height={40}/></Link>
                   </div>
                </div>
            </div>

        </section>
    )
}