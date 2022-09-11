import React, { useRef, useEffect } from "react";
import WaveSurfer from "wavesurfer.js";






export default function Surf() {
    var wavesurfer = WaveSurfer.create({
        container: '#waveform',
        waveColor: 'violet',
        progressColor: 'purple',
        mediaControls: true,
    });
    
   
    
    wavesurfer.load('../song.mp3');
    function play() {
        wavesurfer.play();
    }
    wavesurfer.on('ready', function () {
        wavesurfer.play();
    });
    const elem = useRef();
    return (
        <>
             <button
                    id="waveform"
                    ref={elem}
                    onClick={() => play()}
                  >
                    pause
                  </button>
        </>
            
    )
}