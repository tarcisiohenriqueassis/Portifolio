import style from "../Banner/banner.module.css";

const BaixarCv = () =>{
    return( 
    <a className={style.linkCurriculo} href='/curriculo/'
     download="TarcisioH-Cv.pdf">Curriculo
     </a>
)}


export default BaixarCv;