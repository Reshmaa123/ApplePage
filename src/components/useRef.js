import  React,{ useRef } from "react";
import path from "C:/Reshma Online classes/Class2.mp4";
const UseRefe=()=>{
    const VideoRef=useRef()
    const playVideo=()=>{
        VideoRef.current.play()}
        const pauseVideo=()=>{
            VideoRef.current.pause()}
            return(
                <div>
                    <video> <sourse src={path} type='video/mp4'></sourse></video>
                    <button onClick={playVideo}>play</button>
                    <button onClick={pauseVideo}>pause</button>
                </div>

            )        }
    export default UseRefe
