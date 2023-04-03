import React from "react";
// import {Link} from "react-router-dom"
import { FaArrowDown } from "react-icons/fa";
import { FcAcceptDatabase } from "react-icons/fc";
import { FcBriefcase } from "react-icons/fc";
import { FcAlphabeticalSortingZa } from "react-icons/fc";
import { FcCamcorderPro } from "react-icons/fc";
import { FcComboChart } from "react-icons/fc";
import { FcDownload } from "react-icons/fc";
import { Link } from "react-router-dom";



import style from "../css/HomePage.module.css"
export const HomePage = () =>{
      return (<>
        <div className={style.contain}>
        <div className={style.rows}>
          <h1 className={style.title}>Добро пожаловать на сайт "DEUTSCH MIT UNS"!</h1>
          <p className={style.title_caunt}>
            Здесь вы можете бесплатно изучать немецкий язык до уровня A1.
          </p >
          <p className={style.title_caunt}>Для продолжения обучения на более высоких уровнях необходимо зарегистрироваться.</p>
        </div>
      </div>
    <div className="container p-5 d-flex justify-content-center  bg-white flex-column align-content-center text-center" >
        <h2 className="text-secondary">Что вы найдете здесь?</h2>
        <p><FaArrowDown style={{"color":"#C67719", "fontSize":"45px"}} /></p>
    </div>

    <div className="container">
    <div className="row">
            <div className="col-md-4 p-0 pb-3 text-white "   >
            <div className="p-5 m-2 h-100" style={{"backgroundColor":"#A56068", "maxHeight":"560px"}}>
                <p className="text-center"><FcAcceptDatabase style={{"color":"#C67719", "fontSize":"150px"}}/></p>
                <h3 className="text-center">Курсы</h3>
                <p >Четыре комплексных языковых курса на уровнях A1, A2, с интерактивными упражнениями и аудиовизуальными учебными материалами.</p>
                </div>
            </div>
            <div className="col-md-4 p-0 pb-3 text-white " ><div className="p-5 m-2 h-100" style={{"backgroundColor":"#E9B353","maxHeight":"560px"}}>
                <p className="text-center"><FcAlphabeticalSortingZa style={{"color":"#C67719", "fontSize":"150px"}}/></p>
                <h3 className="text-center">Грамматика</h3>
                <p >Важнейшие правила с примерами правильного использования немецкой грамматики.                      </p>
            </div>
            </div>
            <div className="col-md-4 p-0 pb-3 text-white"   >
            <div className="p-5 m-2 h-100" style={{"backgroundColor":"#3A9389"}}>
                <p className="text-center"><FcCamcorderPro style={{"color":"#C67719", "fontSize":"150px"}}/></p>
                <h3 className="text-center">Медиатека</h3>
                <p >Мультимедийное содержание: многочисленные подлинные тексты, а также аудио- и видеоматериалы на немецком языке.</p>
                </div>
            </div>
            <div className="col-md-4 p-0 pb-3 text-white"   >
            <div className="p-5 m-2 h-100" style={{"backgroundColor":"#DD7486"}}>
                <p className="text-center"><FcBriefcase style={{"color":"#C67719", "fontSize":"150px"}}/></p>
                <h3 className="text-center">Учебный материал</h3>
                <p >Бесплатные и креативные пакеты уроков и материалы для школьных уроков DaF/DaZ</p>
                </div>
            </div>
            <div className="col-md-4 p-0 pb-3 text-white"   >
            <div className="p-5 m-2 h-100" style={{"backgroundColor":"#C79E71"}}>
                <p className="text-center"><FcComboChart style={{"color":"#C67719", "fontSize":"150px"}}/></p>
                <h3 className="text-center">Полезно</h3>
                <p >Информация о жизни в Германии и Австрии – практическая и особенно важная для мигрантов</p>
                </div>
            </div>
            <div className="col-md-4 text-white p-0 pb-3"  >
                <div className="p-5 m-2 h-100" style={{"backgroundColor":"#8FA485"}}>
                <p className="text-center"><FcDownload style={{"color":"#C67719", "fontSize":"150px"}}/></p>
                <h3 className="text-center">Учебный материал</h3>
                <p >ЧБесплатные и креативные пакеты уроков и материалы для школьных уроков DaF/DaZ</p>                    
                </div>

            </div>
    </div>

    </div>

    <div className="container p-5 d-flex justify-content-center  bg-white flex-column align-content-center text-center" >
        <h2 className="mb-5" style={{"color":"#F3921FFF","fontSize":"45px"}}>Знаете ли вы?</h2>
        <p>По крайней мере, около четверти всех американцев имеют немецкое происхождение.</p>
    </div>
      <div className={style.auth_cont}>
        <div className="d-flex align-items-center flex-column">  
        <h2 className="mt-5 text-white">Вы готовы начать?</h2>
         <Link to={"/AuthPage"} className="btn btn-success h-25">Зарегистрироваться</Link>
         </div>
      </div>
      </>
   )
}
