import React from 'react'
import VideoItem from './VideoItem'

export default function VideoList({videos, title}) {
    return (
    <div>
        <h1 style={{textAlign: 'center'}}>{title}</h1>
        {
            videos.map(video => 
                <VideoItem video={video} key={video.id}/>
                )}
    </div>
    )
}
