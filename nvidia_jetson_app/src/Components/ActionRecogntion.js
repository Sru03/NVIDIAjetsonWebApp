import React, {useState, useEffect} from 'react';

import '../Styles/DataAnalysis.css';
function ActionRecognition (){
    const[data, setData] = useState([]);

    useEffect(() => {
        //Fetch data from the Flask server 
        fetch('http://localhost:5000/actionRecognition')
        .then(response => {
            if(!response.ok){
                throw new Error('Network response was not ok');

            } 
            return response.json();

        })
        .then(data => setData(data))
        .catch(error => console.error('Fetch error ', error));
    }, [data]);

return(


   <div className='main'>
    <h2>DataTable</h2>
     <div className="DataTable">


<table>
    <thead>
        <tr>
            {/* <th>Id</th>  */}
            {/* <th>Photos</th> */}
            <th>Action</th>
            {/* <th>Gender</th> */}
            <th>Date</th>
            {/* <th>Co-ordinates</th>
            <th>Values</th> */}
        </tr>
    </thead>
    <tbody>
        {data ? (

            data.map((val, key) => (
                <tr key={key}>
                    {/* <td>{val.id.toString()}</td> */}
                    {/* <td><img src={val.photo} width="100" height="100" alt={Person ${key}} /></td> */}
                    <td>{val.Action}</td>
                    {/* <td>{val.gender}</td> */}
                    <td>{val.Date}</td>
                    {/* <td>{val.coordinates}</td> */}
                    {/* <td>{val.value}</td> */}
                </tr>
            ))

        ) : (
            <p>Loading data ...</p>

        )}
    </tbody>


</table>
</div>
   </div>

);


}


export default ActionRecognition;