import React from "react";
import { Link } from "react-router-dom"
import imgt from "../../img/135221.png"

const Courses_A1 = () => {

    return (

        <div className="container text-center" style={{"height":"95vh"}}>
            <div className="row">
            <div className="col-lg-5" >
            <ul className="mt-5">
                <li>
                    <Link to={"/Courses/teil1"}><h2> Lektion 1 </h2></Link>
                </li>
                <li>
                    <Link to={"/Courses/teil2"}> <h2> Lektion 2</h2></Link>
                </li>
                <li>
                    <Link to={"/Courses/teil3"}> <h2> Lektion 3</h2></Link>
                </li>
           </ul>
            </div>
            <div className="col-lg-7 mt-4"  >
                    <img src={imgt} alt="" />
            </div>
            </div>
        </div>
    )
}

export default Courses_A1;