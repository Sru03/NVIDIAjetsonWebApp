import React from "react" ;
import './DataAnalysis.css';

const data = [ 
    {name: "Anom", position: "Standing", gender: "Male", date: "12-08-2024:7:10:45", coordinates: " (50,50)"},
    {name: "Sana", position: "Sitting", gender: "Female", date: "12-08-2024:7:10:45",coordinates: "(10,29)"},
    {name: "Rohit", position: "Sleeping", gender: "Male", date: "12-08-2024:7:10:45",coordinates: "(30,40)"},
    {name: "Aman", position: "Standing", gender: "Male", date: "12-08-2024:7:10:45",coordinates: "(12,19)"},

]



function DataAnalysis() {

    return (

        <div className="main">
            <div> <h1> DataAnalysis</h1></div>

            <div className ="DataTable"><table>
                <tr>
                    <th>Name </th>
                    <th>Position </th>
                    <th>Gender </th>
                    <th>Date </th>
                    <th>Co-ordinates</th>
                   </tr>

                   {data.map((val, key) => {
                    return(
                        <tr key = {key}>
                            <td>{val.name}</td>
                            <td>{val.position}</td>
                            <td>{val.gender}</td>
                            <td>{val.date}</td>
                            <td>{val.coordinates}</td>

                        </tr>
                    )
                   })}
               
                
            </table></div>


            <div className ="PieChart"> 
             <h1> PieChart</h1>
            </div>




        </div>
    
    );

}



export default DataAnalysis; 