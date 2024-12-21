import Image from "next/image";

import style from "../CardProject/project.module.css";

export default function Project(props){
    return(
        <article className={style.containerGlobalProjects}>
            <div className={style.containerVideo}>
                          
            </div>
            <nav className={style.containerNavLinks}>
                 <a className={style.Links} target="_blank"><Image className={style.imagemIcon} src={props.imagemLinkGithub} alt="icon" width={50} 
  height={50}/></a>
                 <a className={style.Links} target="_blank"><Image className={style.imagemIcon} src={props.imagemLinkGithub} alt="icon" width={50} 
  height={50}/></a>
            </nav>
        </article>
    )
}