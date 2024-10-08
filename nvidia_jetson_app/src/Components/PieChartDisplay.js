import React, {useState, useEffect} from 'react';
import { PieChart, Pie } from 'recharts';

import '../Styles/DataAnalysis.css';

function PieChartDisplay(){
    const[data, setData] = useState([]);

    useEffect(() => {
        //Fetch data from the Flask server 
        fetch('http://localhost:5000/pieChart')
        .then(response => {
            if(!response.ok){
                throw new Error('Network response was not ok');

            } 
            return response.json();

        })
        .then(data => setData(data))
        .catch(error => console.error('Fetch error ', error));
    }, [data]);


    return (
        <div className='PieChart'>
            <h2>PieChart</h2>
           <PieChart width={400} height={400}>
                        <Pie
                            dataKey="value"
                            data={data}
                            cx={200}
                            cy={200}
                            outerRadius={80}
                            fill="lightblue"
                            label
                        />
                    </PieChart>

        </div>
    )



}

export default PieChartDisplay;