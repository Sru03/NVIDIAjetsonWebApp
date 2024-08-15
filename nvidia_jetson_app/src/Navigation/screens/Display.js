import React from "react";
import './Display.css';
import { Link } from 'react-router-dom';





function Display() {
    return (
        <div className="main">
            <div className="header">
                <h1 > Display </h1>
            </div>


            <div className=" containers">
                <div className="displayContainer">

                    <h1> displayContainer </h1>

                </div>
                <div className="subContainer">

                    <div className="videoStreamingContainer">

                        <h1> VideoStreamingContainer</h1>
                        
                    </div>

                    <div className="mapContainer">
                        <h1> MapConatainer</h1>
                    </div>
                </div>
                <div className="iconContainer">


                    <div className="icon_one"><h1> icon1</h1></div>

                    <div className="icon_two"><h1> icon2</h1>
                        <nav>
                            <Link to="/DataAnalysis"> icon2 </Link>
                        </nav>

                    </div>


                </div>


            </div>
        </div>
    );

}

export default Display; 