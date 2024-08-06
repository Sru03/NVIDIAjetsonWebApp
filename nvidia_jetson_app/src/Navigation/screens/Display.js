import React from "react";
import './Display.css';


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
                 <div className= "subContainer">
                 <div className="videoStreamingContainer">
                    <h1> VideoStreamingContainer</h1>
                </div>

                <div className="mapContainer">
                  <h1> MapConatainer</h1>
                </div>
                 </div>
                 <div className =" iconContainer ">
                    <div><h1> icon1</h1></div>

                    <div><h1> icon2</h1></div>


                 </div>
                

            </div>
        </div>
    );

}

export default Display; 