import React ,{useState}from "react";
import { Link } from "react-router-dom";
import tile1 from "../../img/tile_1.png"
import tile2 from "../../img/tile_2.png"
import tile3 from "../../img/tile_3.png"
import tile4 from "../../img/4.1.png"

const Tests = () => {
    const [cards, setCards] = useState([    { class: "card", hovered: false },    { class: "card", hovered: false },    { class: "card", hovered: false },    { class: "card", hovered: false } , { class: "card", hovered: false }, ]);

    const handleCardHover = (index, hovered) => {
      setCards((prevState) => {
        const newState = [...prevState];
        newState[index].class = hovered ? "card shadow-lg widthCard" : "card";
        newState[index].hovered = hovered;
        return newState;
      });
    };
    return(
        <>
        <div className="container">
    <div className="row mt-5 mb-5 align-itemes-center justify-content-center" style={{minHeight:"60vh"}}>
        
            <Link to="/test/lecktion1"
            className={cards[0].class}
            style={{ width: "19rem",height:"370px" , margin: "25px","backgroundColor":"#A56068","textDecoration":"none" }}
            onMouseOver={() => handleCardHover(0, true)}
            onMouseOut={() => handleCardHover(0, false)}
          >
            <p className="card-img-top"  ><img src={tile1} style={{"color":"#C67719","width":"19rem"}}/></p>
            <div className="card-body">
            <h3 className="text-center">Test Lektion 1 </h3>
                {/* <p style={{color:"white"}}>Фразы для повседневного общения, которые используются в разговорной речи для общения в повседневной жизни.                      </p> */}

            </div>
          </Link>
          <Link
            to="/test/lecktion2"
            className={cards[2].class}
            style={{ width: "19rem",height:"370px" , margin: "25px","backgroundColor":"#E9B353" ,"textDecoration":"none" }}
            onMouseOver={() => handleCardHover(2, true)}
            onMouseOut={() => handleCardHover(2, false)}
          >
            <p className="card-img-top"  ><img  src={tile2} style={{"color":"#C67719", "width":"19rem"}}/></p>
            <div className="card-body">
            <h3 className="text-center">Test Lektion 2</h3>
                {/* <p style={{color:"white"}}>Важнейшие правила с примерами правильного использования немецкой грамматики.                      </p> */}
            </div>
          </Link>
          <Link
           to="/test/lecktion3"
            className={cards[3].class}
            style={{ width: "19rem" ,height:"370px", margin: "25px","backgroundColor":"#3A9389"  ,"textDecoration":"none" }}
            onMouseOver={() => handleCardHover(3, true)}
            onMouseOut={() => handleCardHover(3, false)}
          >
            <p className="card-img-top"  ><img src={tile3} style={{"color":"#C67719", "width":"19rem"}}/></p>
            <div className="card-body">
            <h3 className="text-center">Test Lektion 3</h3>
                {/* <p style={{color:"white"}}>Мультимедийное содержание: многочисленные подлинные тексты, а также аудио- и видеоматериалы на немецком языке.</p> */}
            </div>
          </Link>
          <Link
           to="/test/lecktion4"
            className={cards[4].class}
            style={{ width: "19rem" ,height:"370px", margin: "25px","backgroundColor":"#3A9389"  ,"textDecoration":"none" }}
            onMouseOver={() => handleCardHover(4, true)}
            onMouseOut={() => handleCardHover(4, false)}
          >
            <p className="card-img-top"  ><img src={tile4} style={{"color":"#C67719", "width":"19rem"}}/></p>
            <div className="card-body">
            <h3 className="text-center">Test Lektion 4</h3>
            </div>
          </Link>
 
   
            </div> 
    </div>

            {/* <Link to="/test/lecktion1"> lecktion 1 </Link>
            <Link to="/test/lecktion2"> lecktion 2 </Link>
            <Link to="/test/lecktion3"> lecktion 3 </Link>
            <Link to="/test/lecktion4"> lecktion 4 </Link> */}
            
        </>
    )
};
export default Tests;