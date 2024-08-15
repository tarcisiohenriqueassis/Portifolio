import Link from "next/link";
import Image from "next/image";

import style from "../Banner/banner.module.css";

export default function Banner(props){
    return(
        <section className={style.containerGlobalBanner}>
            <div className={style.containerImage}>
                <Imagem src={props.ImagemBanner} alt={props.titulo} title={props.titulo}/>
            </div>
            <div className={style.containerInformacoesBanner}>
                
            </div>

        </section>
    )
}