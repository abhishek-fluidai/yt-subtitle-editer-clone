import { useRef, useContext, useEffect } from "react";
import { Player } from "react-tuby";
import "react-tuby/css/main.css";
import { ThemeContext } from "../../../App";
import data from "../../1.mp4";
import vid from "../../../subs.vtt";

// "https://cdn.jsdelivr.net/gh/naptestdev/video-examples@master/en.vtt"

export default function Play() {
  const playerRef = useRef();
  const { isPlaying, setIsPlaying } = useContext(ThemeContext);
  const { setCT } = useContext(ThemeContext);

  // playerRef.current.addEventListener("timeupdate", (event) => {
  //   console.log(event.target.currentTime);
  // });
  useEffect(() => {
    const element = playerRef.current;

    element.addEventListener("timeupdate", (event) => {
      setCT(event.target.currentTime);
    });
  });
  const handleClick = (event) => {
    setIsPlaying(isPlaying ? false : true);
    console.log(isPlaying);
  };
  useEffect(() => {
    const element = playerRef.current;

    element.addEventListener("play", handleClick);

    return () => {
      element.removeEventListener("play", handleClick);
    };
  });

  useEffect(() => {
    const element = playerRef.current;

    element.addEventListener("pause", handleClick);

    return () => {
      element.removeEventListener("pause", handleClick);
    };
  });

  //   setIsPlaying(true);
  //   console.log(e);
  //   console.log(isPlaying);
  // });

  return (
    <Player
      playerRef={playerRef}
      rstyle={{ width: "100px" }}
      keyboardShortcut={false}
      src={[
        {
          quality: 720,
          url: data,
        },
        {
          quality: 480,
          url: "https://cdn.glitch.me/cbf2cfb4-aa52-4a1f-a73c-461eef3d38e8/480.mp4",
        },
      ]}
      dimensions={{ height: 350 }}
      subtitles={[
        {
          lang: "en",
          language: "English",
          url: vid,
        },
        // {
        //   lang: "fr",
        //   language: "French",
        //   url:
        //     "https://cdn.jsdelivr.net/gh/naptestdev/video-examples@master/fr.vtt",
        //https://cdn.glitch.me/cbf2cfb4-aa52-4a1f-a73c-461eef3d38e8/720.mp4"
        // },
      ]}
      poster="https://i.ytimg.com/an_webp/SAL2JZxpoGY/mqdefault_6s.webp?du=3000&sqp=CIjY_ZgG&rs=AOn4CLCX4hSZMl5hE9qsurNbuceyAlthWQ"
    />
  );
}
