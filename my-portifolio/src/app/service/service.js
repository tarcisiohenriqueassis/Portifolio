import style from "@/app/Componentes/Banner/banner.module.css"

const BaixarCv=()=>{
    return( 
    <a className={style.linkCurriculo} href="Curriculo/TarcisioH-Cv.pdf"
     download="TarcisioH-Cv.pdf">Curriculo
     </a>
)}

export default BaixarCv;