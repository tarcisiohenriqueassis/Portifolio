import Image from "next/image";

import style from "../CardProject/project.module.css";

export default function Project(props){
    return(
        <article className={style.containerGlobalProjects}>
            <div className={style.containerVideo}>
                <video className={style.video}  src="videosProjetos/clinicadentaria.mp4" autoPlay muted></video>            
            </div>
            <nav className={style.containerNavLinks}>
                 <a className={style.Links} target="_blank"><Image className={style.imagemIcon} src={props.imagemLinkGithub}/></a>
                 <a className={style.Links} target="_blank"><Image className={style.imagemIcon} src={props.imagemLinkGithub}/></a>
            </nav>
        </article>
    )
}