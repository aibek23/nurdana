import React, { useState } from "react";
import { Link } from "react-router-dom";
import course_a1 from "./../img/course_a1.png";
import course_a2 from "./../img/course_a2.png";
import course_b1 from "./../img/course_b1.png";
import course_b2 from "./../img/course_b2.png";

export const Courses = () => {
  const [cards, setCards] = useState([    { class: "card", hovered: false },    { class: "card", hovered: false },    { class: "card", hovered: false },    { class: "card", hovered: false },  ]);

  const handleCardHover = (index, hovered) => {
    setCards((prevState) => {
      const newState = [...prevState];
      newState[index].class = hovered ? "card shadow-lg widthCard" : "card";
      newState[index].hovered = hovered;
      return newState;
    });
  };

  return (
    <>
      <h1 className="mt-5 mb-5 text-center">Общие курсы</h1>
      <div className="container " style={{minHeight:"60vh"}}>
        <div className="row mt-5 mb-5 align-itemes-center justify-content-center" >
          <Link to="/Courses//Courses_A1"
            className={cards[0].class}
            style={{ width: "14rem",height:"230px" , margin: "20px" }}
            onMouseOver={() => handleCardHover(0, true)}
            onMouseOut={() => handleCardHover(0, false)}
          >
            <img className="card-img-top" src={course_a1} alt="" />
            <div className="card-body">
              <h2 className="card-title text-center"> Уровень A1</h2>
            </div>
          </Link>

          <div
            className={cards[1].class}
            style={{ width: "14rem",height:"230px" , margin: "20px" }}
            onMouseOver={() => handleCardHover(1, true)}
            onMouseOut={() => handleCardHover(1, false)}
          >
            <img className="card-img-top" src={course_a2} alt="" />
            <div className="card-body">
              <h2 className="card-title text-center"> Уровень A2</h2>
            </div>
          </div>

          <div
            className={cards[2].class}
            style={{ width: "14rem",height:"230px" , margin: "20px" }}
            onMouseOver={() => handleCardHover(2, true)}
            onMouseOut={() => handleCardHover(2, false)}
          >
            <img className="card-img-top" src={course_b1} alt="" />
            <div className="card-body">
              <h2 className="card-title text-center"> Уровень B1</h2>
            </div>
          </div>

          <div
            className={cards[3].class}
            style={{ width: "14rem",height:"230px" , margin: "20px" }}
            onMouseOver={() => handleCardHover(3, true)}
            onMouseOut={() => handleCardHover(3, false)}
          >
            <img className="card-img-top" src={course_b2} alt="" />
            <div className="card-body">
              <h2 className="card-title text-center"> Уровень B2</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};