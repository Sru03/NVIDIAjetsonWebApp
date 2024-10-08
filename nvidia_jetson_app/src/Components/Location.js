import React, {useState, useEffect} from 'react';


function Location(){
    const[data, setData] = useState([]);

    useEffect(() => {
        //Fetch data from the Flask server 
        fetch('http://localhost:5000/Location')
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
        <div>
            <h1>Location Data from Flask Server</h1>
            <pre>{JSON.stringify(data, null, 2)}</pre>

        </div>
    )
}


export default Location;