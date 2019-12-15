import './VideoDetail.css'
import React from 'react';

const VideoDetail = ({video}) => {
    if (!video){
        return(
            <div>Loading..</div>
        );
    }

    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

    return(
        <div className='video-detail ml-3'>
            <div className='ui embed'>
                <iframe src={videoSrc}/>
            </div>
            <div className='ui segment'>
            <h4 className='ui header'>{video.snippet.title}</h4>
            <p>{video.snippet.description}</p>
            </div>
        </div>
    );
};

export default VideoDetail;