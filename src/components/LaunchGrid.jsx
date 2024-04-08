import bong from '../assets/sets/set1/bong.wav';
import kick from '../assets/sets/set1/Kick28.wav';
import perc1 from '../assets/sets/set1/perc1.wav';
import perc2 from '../assets/sets/set1/perc2.wav';
import snare from '../assets/sets/set1/rim1.wav';
import hiHat4 from '../assets/sets/set1/hiHat_4.wav';
import { useState } from 'react';

export default function (){

    const sampleSet1=[bong,kick,snare,perc1,perc2,hiHat4];

    const [activePad,setActivePad]=useState(null);
    
    const handleClick =(ind)=>{
        setActivePad(ind);
        const audio = new Audio(sampleSet1[ind]);
        audio.play();
    }

    return (

        
        <>
            <div className="grid grid-cols-2 m-auto gap-4 justify-center">
            {sampleSet1.map((sample,index)=>{
                return(
                    <button 
                        key={`sample-${index}`}
                        onClick={()=>{handleClick(index)}}
                        className={`w-10 h-10 border border-black ${activePad===index ?'bg-slate-500' : ''}`} ></button>
                )
            })}
                
            </div>
        </>
    )
}