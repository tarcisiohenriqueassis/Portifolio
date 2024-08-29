import Image from "next/image";

import style from "../CardExperience/cardExperience.module.css";

import IconCheck from "../../../../public/checkmark.png";

export default function CardExperience(props){
    return(
            <article className={style.card}>
                <Image className={style.imagem} src={props.iconLinguagem} width={50} height={50}/>
                <div>
                    <h3 className={style.titulo}>{props.linguagem}</h3>
                    <p className={style.p}>{props.nivelExperiencia}</p>
                </div>
            </article>
    )
}