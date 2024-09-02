import React from "react";
import './DataAnalysis.css';
import person0 from '../../images/person0.jpg';
import person1 from '../../images/person1.jpg';
import person2 from '../../images/person2.jpg';
import person3 from '../../images/person3.jpg';
import {PieChart, Pie} from 'recharts';

const data = [
    { id: "PersonID0", photo: person0, position: "Standing", gender: "Male", date: "12-08-2024:7:10:45", coordinates: " (50,50)", value: 10 },
    { id: "PersonID1", photo: person1, position: "Sitting", gender: "Female", date: "12-08-2024:7:10:45", coordinates: "(10,29)", value: 20 },
    { id: "PersonID2", photo: person2, position: "Sleeping", gender: "Male", date: "12-08-2024:7:10:45", coordinates: "(30,40)", value: 30 },
    { id: "PersonID3", photo: person3, position: "Standing", gender: "Male", date: "12-08-2024:7:10:45", coordinates: "(12,19)", value: 10 },
];

function DataAnalysis() {
    return (
        <div className="main">
            <div className="heading">
                <h1>DataAnalysis</h1>
            </div>
            <div className="subheading">
                <h2>DataTable</h2>
            </div>

            <div className="SubContainer">
                <div className="DataTable">
                    <table>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Photos</th>
                                <th>Position</th>
                                <th>Gender</th>
                                <th>Date</th>
                                <th>Co-ordinates</th>
                                <th>Values</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((val, key) => (
                                <tr key={key}>
                                    <td>{val.id}</td>
                                    <td><img src={val.photo} width="100" height="100" alt={`Person ${key}`} /></td>
                                    <td>{val.position}</td>
                                    <td>{val.gender}</td>
                                    <td>{val.date}</td>
                                    <td>{val.coordinates}</td>
                                    <td>{val.value}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="PieChart">
                    <h1>PieChart</h1>
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
            </div>
        </div>
    );
}

export default DataAnalysis;
