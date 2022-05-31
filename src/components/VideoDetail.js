import React from "react";

const VideoDetail = ({ video }) => {

    if (!video){
        return <div>Loding...</div>
    }

    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

    return (
        <div>
            <div className="ui embed">
                <iframe src={videoSrc} title="video Player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen />
            </div>

            <div className="ui segment">
                <h4 className="ui header">{video.snippet.title}</h4>
                <p>{video.snippet.description}</p>
            </div>    
        </div>
    );
};

export default VideoDetail;