import React from "react";
import { Link } from "react-router-dom";
import Style from "../css/Welcome.module.css"
export const Welcome = () => {
    const data = JSON.parse(localStorage.getItem('user'));
  return (
    <div style={{height:"80vh"}}>
    <div className={Style.center}>
    <h1 className={Style.title}>WILLKOMMEN</h1>
    <p style={{"textTransform": "uppercase"}}>( ДОБРО ПОЖАЛОВАТЬ {data.username})</p>
    <div className="text-center mt-5">
    <Link to={"/"} className={Style.btn}>Главная</Link>
    </div>
  </div>
  </div>
  );
};