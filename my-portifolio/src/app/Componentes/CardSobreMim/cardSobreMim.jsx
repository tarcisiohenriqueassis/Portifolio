'use client'
import Image from "next/image";

import style from "./cardSobreMim.module.css";

export default function Card(props){
    return(
        <section className={style.containerGlobalCard}> 
        <article className={style.card}>
            <div className={style.containerImg}>
                <Image src={props.imagemCard} width={60}/>
            </div>
            <div className={style.containerTextoCard}>
               <h3>{props.titulo}</h3>
               <span>{props.span}</span>
               <p>{props.paragrafo}</p>
            </div>
        </article>
        </section>
    )
}