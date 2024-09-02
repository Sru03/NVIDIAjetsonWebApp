import React from "react";
import './Display.css';
import { Link } from 'react-router-dom';
import display from '../../images/display.png';
import videostream from '../../images/videostream.png';
import control from '../../images/control.png';

function Display() {
    return (
        <div className="main">
            <div className="header">
                <h1>Display</h1>
            </div>

            <div className="containers">
                <div className="displayContainer">
                    <h1>Display Container</h1>
                    <img src={display} width="700" height="500" alt="Display"/>
                </div>

                <div className="subContainer">
                    <div className="videoStreamingContainer">
                        <h1>Video Streaming Container</h1>
                        <img src={videostream} width="300" height="300" alt="Video Stream"/>
                    </div>

                    <div className="motionControlContainer">
                        <h1>Motion Control Container</h1>
                        <img src={control} width="300" height="300" alt="Motion Control"/>
                    </div>
                </div>

                <div className="iconContainer">
                    <div className="icon_one"><h1>Icon 1</h1></div>

                    <div className="icon_two">
                        <nav>
                            <Link to="/DataAnalysis">Icon 2</Link>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Display;
