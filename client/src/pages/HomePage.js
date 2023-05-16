import React,{useState} from "react";
// import {Link} from "react-router-dom"
import { FaArrowDown } from "react-icons/fa";
import { FcAcceptDatabase } from "react-icons/fc";
import { FcBriefcase } from "react-icons/fc";
import { FcAlphabeticalSortingZa } from "react-icons/fc";
import { FcCamcorderPro } from "react-icons/fc";
import { FcComboChart } from "react-icons/fc";
import { FcDownload } from "react-icons/fc";
import { Link } from "react-router-dom";
import tile1 from "../img/tile_1.png"
import tile2 from "../img/tile_2.png"
import tile3 from "../img/tile_3.png"
import tile4 from "../img/4.1.png"



import style from "../css/HomePage.module.css"
export const HomePage = () =>{

  const [cards, setCards] = useState([    { class: "card", hovered: false },    { class: "card", hovered: false },    { class: "card", hovered: false },    { class: "card", hovered: false } , { class: "card", hovered: false }, ]);

  const handleCardHover = (index, hovered) => {
    setCards((prevState) => {
      const newState = [...prevState];
      newState[index].class = hovered ? "card shadow-lg widthCard" : "card";
      newState[index].hovered = hovered;
      return newState;
    });
  };
      return (<>
        <div className={style.contain}>
        <div className={style.rows}>
          <h1 className={style.title}>Добро пожаловать на сайт "DEUTSCH MIT UNS"!</h1>
          <p className={style.title_caunt}>
            Здесь вы можете бесплатно изучать немецкий язык.
          </p >
          {/* <p className={style.title_caunt}>Для продолжения обучения на более высоких уровнях необходимо зарегистрироваться.</p> */}
        </div>
      </div>
    <div className="container p-5 d-flex justify-content-center  bg-white flex-column align-content-center text-center" >
        <h2 className="text-secondary">Что вы найдете здесь?</h2>
        <p><FaArrowDown style={{"color":"#C67719", "fontSize":"45px"}} /></p>
    </div>

    <div className="container">
    <div className="row mt-5 mb-5 align-itemes-center justify-content-center" style={{minHeight:"60vh"}}>
        
            <Link to="/teil1"
            className={cards[0].class}
            style={{ width: "19rem",height:"370px" , margin: "25px","backgroundColor":"#A56068","textDecoration":"none" }}
            onMouseOver={() => handleCardHover(0, true)}
            onMouseOut={() => handleCardHover(0, false)}
          >
            <p className="card-img-top"  ><img src={tile1} style={{"color":"#C67719","width":"19rem"}}/></p>
            <div className="card-body">
            <h3 className="text-center">Lektion 1 </h3>
                {/* <p style={{color:"white"}}>Фразы для повседневного общения, которые используются в разговорной речи для общения в повседневной жизни.                      </p> */}

            </div>
          </Link>
          <Link
            to="/teil2"
            className={cards[2].class}
            style={{ width: "19rem",height:"370px" , margin: "25px","backgroundColor":"#E9B353" ,"textDecoration":"none" }}
            onMouseOver={() => handleCardHover(2, true)}
            onMouseOut={() => handleCardHover(2, false)}
          >
            <p className="card-img-top"  ><img  src={tile2} style={{"color":"#C67719", "width":"19rem"}}/></p>
            <div className="card-body">
            <h3 className="text-center">Lektion 2</h3>
                {/* <p style={{color:"white"}}>Важнейшие правила с примерами правильного использования немецкой грамматики.                      </p> */}
            </div>
          </Link>
          <Link
           to="/teil3"
            className={cards[3].class}
            style={{ width: "19rem" ,height:"370px", margin: "25px","backgroundColor":"#3A9389"  ,"textDecoration":"none" }}
            onMouseOver={() => handleCardHover(3, true)}
            onMouseOut={() => handleCardHover(3, false)}
          >
            <p className="card-img-top"  ><img src={tile3} style={{"color":"#C67719", "width":"19rem"}}/></p>
            <div className="card-body">
            <h3 className="text-center">Lektion 3</h3>
                {/* <p style={{color:"white"}}>Мультимедийное содержание: многочисленные подлинные тексты, а также аудио- и видеоматериалы на немецком языке.</p> */}
            </div>
          </Link>
          <Link
           to="/teil4"
            className={cards[4].class}
            style={{ width: "19rem" ,height:"370px", margin: "25px","backgroundColor":"#3A9389"  ,"textDecoration":"none" }}
            onMouseOver={() => handleCardHover(4, true)}
            onMouseOut={() => handleCardHover(4, false)}
          >
            <p className="card-img-top"  ><img src={tile4} style={{"color":"#C67719", "width":"19rem"}}/></p>
            <div className="card-body">
            <h3 className="text-center">Lektion 4</h3>
            </div>
          </Link>
          <div className="col-md-4 p-0 pb-3 text-white "    >
            {/* <div to="/Courses_A1" className="p-5 m-2 h-100" style={{"backgroundColor":"#A56068", "maxHeight":"560px"}}>
                <p className="text-center"><FcAcceptDatabase style={{"color":"#C67719", "fontSize":"150px"}}/></p>
                <h3 className="text-center">фразы</h3>
                <Link to="/Courses_A1" className="text-center">
                <p >Добро пожаловать</p>
                </Link>
                </div> */}
            </div>
            {/* <div className="col-md-4 p-0 pb-3 text-white " ><div className="p-5 m-2 h-100" style={{"backgroundColor":"#E9B353","maxHeight":"560px"}}>
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
            </div> */}
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
