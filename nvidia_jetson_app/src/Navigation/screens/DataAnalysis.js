import React, { useEffect, useState } from "react";
import '../../Styles/DataAnalysis.css';
import { FaDesktop } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import { ImStatsBars } from "react-icons/im";
import { PieChart, Pie } from 'recharts';
import PieChartDisplay from "../../Components/PieChartDisplay";
import ActionRecognition from "../../Components/ActionRecogntion";



function DataAnalysis() {
   
    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate("/Display")
    }


    return (
        <div className="main">
            <div className="heading">
                <h1>DataAnalysis</h1>
            </div>
            <div className="SubContainer">
                <ActionRecognition/>

                <div className="PieChart">
                    
                     <PieChartDisplay/>
                </div>

            </div>

            <div className="iconContainers">
                <div className="iconOne">
                    <FaDesktop className="icon" size={50} color="white" onClick={handleNavigate} />

                </div>

                <div className="iconTwo">
                    <ImStatsBars className="icon" size={50} color="white" />
                    
                </div>
            </div>
        </div>
    );
}

export default DataAnalysis;