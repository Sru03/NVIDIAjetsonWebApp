import React, {useEffect, useState } from 'react';

function VideoStreaming(){




    // return (
    //     <div>
           
    //         <img
    //         src ="http://localhost:5000/Segmentation"
    //         alt = "Live Stream"
    //         style = {{
    //             width : '100%', height : 'auto'
    //         }}
    //         />
    //     </div>
    // )

    const [videoUrl, setVideoUrl] = useState('');

    useEffect(() => {
        //Fetch video from Flask server 
        fetch('http://localhost:5000/Segmentation') 
            .then(response => {
                if(response.ok){
                    //Create a blob URL to display the video 
                    return response.blob();
                } else {
                    throw new Error('Video not found');

                }
            })
            .then(blob => {
                const url = URL.createObjectURL(blob);
                setVideoUrl(url); // Set the video URL to state
            })
            .catch(error => console.error('Error fetching video:',error));
    },[]);


    return (
        <div>
            {videoUrl ? (
                <video width ="600" controls>
                    <source src={videoUrl} type="video/mp4"/>
                    Your browser does not support the video tag.
                </video>

            ):(
            <p> Loading Video ...</p>
            )}
        </div>
    );



}

export default VideoStreaming;