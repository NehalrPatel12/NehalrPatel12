import React from "react";
import VidoeItem from "./VideoItem";

const VideoList = ({ videos, onVideoSelect }) => {
    
    const renderList = videos.map((video) => {
        return <VidoeItem key={video.id.videoId} video={video} onVideoSelect={onVideoSelect} />;
    });


    return <div className="ui relaxedd divided list">{renderList}</div>;
};

export default VideoList;