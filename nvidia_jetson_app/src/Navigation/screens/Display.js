import React, { useState, useRef, Suspense } from "react";
import '../../Styles/Display.css';
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import { FaDesktop } from "react-icons/fa";
import { Canvas, useFrame } from "@react-three/fiber";
import { Box, OrbitControls, useTexture, Text } from '@react-three/drei';
import Grid from '../../Components/Grid';
import Controls from '../../Components/Controls';
import VideoStreaming from "../../Components/VideoStreaming";
import { ImStatsBars } from "react-icons/im";
import Test from "./Test";
import MapPgm from "../../Components/MapPgm";




function Display() {

    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate("/DataAnalysis")
    }

    return (
        <div className="main">
            <div className="header">
                <h1>Log Viewer</h1>
            </div>

            <div className="containers">
                <div className="displayContainer">
                    <h1>Map Log (3D)</h1>
                    <Test />

                </div>

                <div>

                </div>


                <div className="subContainer">
                    <div className="videoStreamingContainer">
                        <h1>Video Stream</h1>

                        {/* <img src={videostream} width="300" height="300" alt="Video Stream"/> */}
                        <VideoStreaming />
                    </div>

                    <div className="PGMImageContainer">
                        <h1> PGM Lidar Detection </h1>
                        <MapPgm />
                    </div>

                </div>


            </div>


            <div className="iconContainer">
                <div className="icon_one">
                    <FaDesktop className="icon" size={50} color="white" />
                </div>

                <div className="icon_two">
                    <ImStatsBars className="icon" size={50} color="white" onClick={handleNavigate} style={{ cursor: 'pointer' }} />

                    
                </div>
            </div>
        </div>
    );
}
export default Display;
