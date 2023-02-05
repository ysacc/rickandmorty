import React from "react";
import ReactPlayer from "react-player";
import styles from "./Player.module.css"


const Player = (videoSrc) => {

    
    return (
        <div className={styles.player}>
            <ReactPlayer
            url= "https://www.youtube.com/watch?v=E8cXKMR9a1Q"
            controls
            />
        </div>
    )
}

export default Player;