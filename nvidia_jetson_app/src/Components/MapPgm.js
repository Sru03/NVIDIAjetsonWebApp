import React, { useState, useEffect } from 'react';
import ImageZoomInOut from '../Styles/ImageZoomInOut.css';

function MapPgm() {

    const [imageUrl, setImageUrl] = useState(null);
    const [error, setError] = useState(null);
    //State for image scale
    const [scale, setScale] = useState(1);
    //State for image position 
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleZoomIn = () => {
        setScale((scale) => scale + 0.1);
    }
    const handleZoomOut = () => {
        setScale((scale) => scale - 0.1);
    }


    useEffect(() => {
        //Fetch the .pgm file from the Flask Server 
        fetch('http://localhost:5000/map')
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Error: ${response.status}`);

                }
                return response.blob(); // Convert the response to a Blob
            })
            .then(blob => {
                //Create a URL for the Blob and set it as the image source 
                const url = URL.createObjectURL(blob);
                setImageUrl(url);
            })
            .catch(error => {
                setError(error.message);
            });
    }, []);

    return (
        <div>
            
            {error && <p> Error: {error}</p>}
            {imageUrl ? (

                <div
                    style={{
                        backgroundColor: "#ffffff",
                        borderRadius: "10px",
                        position: "relative",
                        overflow: "hidden",
                    }}>

                    <div className="btn-container">
                        {/*Button to zoom in  */}
                        <button onClick={handleZoomIn}>
                            <span class="material-symbols-outlined">add</span>
                        </button>
                        {/*Button to zoom out  */}
                        <button onClick={handleZoomOut}>
                            <span class="material-symbols-outlined">remove</span>
                        </button>
                    </div>

                    <img
                        src={imageUrl}
                        alt="PGM"
                        style={{ 
                            width: '300px', 
                            height: '300px',
                            cursor: "move",
                            transform: `scale(${scale}) translate(${position.x}px,${position.y}px)`, }}
                        draggable={false} />
                        

                </div>
            ) : (
                <p> Loading ...</p>
            )}
             <h3> Obstacles/Boundaries detected</h3>
        </div>
    )


}


export default MapPgm; 