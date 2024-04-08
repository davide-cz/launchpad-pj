import bong from '../assets/sets/set1/bong.wav';
import kick from '../assets/sets/set1/Kick28.wav';
import perc1 from '../assets/sets/set1/perc1.wav';
import perc2 from '../assets/sets/set1/perc2.wav';
import snare from '../assets/sets/set1/rim1.wav';
import crash from '../assets/sets/set1/crash.wav';
import clap from '../assets/sets/set1/clap.wav';
import hiHatO from '../assets/sets/set1/hiHatO.wav';
import hiHatC from '../assets/sets/set1/hiHatC.wav';
import { useState } from 'react';
import AudioLooper from './AudioLooper';

export default function (){

    const sampleSet1=[kick,snare,clap,bong,perc1,perc2,hiHatO,hiHatC,crash];
    const sampleName=['kick','snare','clap','bong','perc1','perc2','hiHatO','hiHatC','crash'];

    const [activePad,setActivePad]=useState(null);
    
    const handleClick =(ind)=>{
        setActivePad(ind);
        const audio = new Audio(sampleSet1[ind]);
        audio.play();
    }

    return (

        
        <>
        <div className='align-middle m-auto flex flex-col  '>
            <AudioLooper/>
                <div className="my-4 grid grid-cols-3 m-auto gap-4 justify-center">
                    {sampleSet1.map((sample,index)=>{
                        return(
                            <button 
                                key={`sample-${index}`}
                                onClick={()=>{handleClick(index)}}
                                className={`pad `} >{sampleName[index]}</button>
                        )
                    })}
                </div>
        </div>
        </>
    )
}