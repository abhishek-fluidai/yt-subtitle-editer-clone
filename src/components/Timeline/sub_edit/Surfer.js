import React, {
  useRef,
  useEffect,
  useCallback,
  useState,
  useContext,
} from "react";
import { WaveSurfer, WaveForm } from "wavesurfer-react";
import TimelinePlugin from "wavesurfer.js/dist/plugin/wavesurfer.timeline.min";
import { ThemeContext } from "../../../App";

import song from "../../1.mp4";

export default function Surf() {
  const { isPlaying } = useContext(ThemeContext);
  const { zoom } = useContext(ThemeContext);

  const wavesurferRef = useRef();
  useEffect(() => {
    const element = wavesurferRef.current;
    element.setMute("mute");
  }, []);

  const plugins = [
    {
      plugin: TimelinePlugin,
      options: {
        container: "#timeline",
        primaryColor: "#ffffff",
        secondaryColor: "#ffffff",
        primaryFontColor: "ffffff",
        secondaryFontColor: "#ffffff",
      },
    },
  ];

  const handleWSMount = useCallback((waveSurfer) => {
    wavesurferRef.current = waveSurfer;

    if (wavesurferRef.current) {
      wavesurferRef.current.load(song);
      wavesurferRef.current.zoom(20);

      wavesurferRef.current.on("ready", () => {
        console.log("WaveSurfer is ready");
      });

      wavesurferRef.current.on("loading", (data) => {
        console.log("loading --> ", data);
      });

      if (window) {
        window.surferidze = wavesurferRef.current;
      }
    }
  }, []);

  const play = useCallback(() => {
    wavesurferRef.current.playPause();
  }, []);
  useEffect(() => {
    wavesurferRef.current.zoom(zoom);
  }, [zoom]);

  useEffect(() => {
    wavesurferRef.current.playPause();
  }, [isPlaying]);
  return (
    <>
      <WaveSurfer
        plugins={plugins}
        onMount={handleWSMount}
        fillParent="False"
        scrollParent="True"
        waveColor="#ffffff"
        maxCanvasWidth="80"
        barHeight="0.4"
        barWidth="2"
        barGap="10"
        timeInterval="8"
        style={{
          width: "100%",
          height: "50px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          id="timeline"
          style={{
            marginTop: "-24px",
            marginBottom: "12px",
            width: "100%",
            height: "100%",
          }}
        />
        <WaveForm
          style={{ width: "100%", minWidth: "100px", height: "100%" }}
          id="waveform"
          cursorColor="#292829"
        ></WaveForm>
      </WaveSurfer>
      {/* <button onClick={play}>Play / Pause</button> */}
    </>
  );
}
