import Image from "next/image";
import Ft from "../../../../public/thDesing.png";

import style from "../CardProject/project.module.css";
import Link from "next/link";

export default function Project(props){
    return(
        <article className={style.containerGlobalProjects}>
            <div>
                 <Image className={style.imagem} src={Ft} alt={props.nomeProjeto} title={props.nomeProjeto} />
            </div>
                <nav className={style.containerNavLinks}>
                    <a href="#" className={style.Links}><Image className={style.imagemIcon} src={props.iconLink1} alt={props.nomeIcon} title={props.nomeIcon} width={50} height={50}/></a>
                    <a href="#" className={style.Links}><Image className={style.imagemIcon} src={props.iconLink2} alt={props.nomeIcon} title={props.nomeIcon} width={50} height={50}/></a>
                    <a href="#" className={style.Links}><Image className={style.imagemIcon} src={props.iconLink2} alt={props.nomeIcon} title={props.nomeIcon} width={50} height={50}/></a>
                 </nav>
        </article>
    )
}