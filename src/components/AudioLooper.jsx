import { useEffect, useRef, useState } from "react";
import dubLoop from '../assets/sets/loops/dubLoop.wav'

export default function (){
    
  const audioRef = useRef();
  const [isLooping,setIsLooping]=useState(false);

    return (
        <>
            <audio
                controls = "controls"
                preload = "auto"
                autobuffer = "true"
                style = {{display: "none"}}
                ref = {audioRef}
                loop={isLooping}
            >
                
                <source src={dubLoop} />
            </audio>
            <div className="" >
                <button className="ctrlBtn" onClick = {() => {audioRef.current.play()
                    }}>play</button>
                <button className="ctrlBtn" onClick = {() => {audioRef.current.pause()
                    }}>stop</button>
                <button 
                    className={`ctrlBtn ${isLooping ? 'bg-red-300' : ''}`} 
                    onClick = {() => {setIsLooping(!isLooping) }}>loop</button>
            </div>
        </>
    )
} 