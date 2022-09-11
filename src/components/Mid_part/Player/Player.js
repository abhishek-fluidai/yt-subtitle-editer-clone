import {useRef, createContext}from 'react';
import { Player } from "react-tuby";
import "react-tuby/css/main.css";
import vid from '../../../subs.vtt'

// "https://cdn.jsdelivr.net/gh/naptestdev/video-examples@master/en.vtt"

export default function Play (){
  const tabListElementContext = createContext()
const tabListElement = useRef()
return ( 
 <>
    <Player ref={tabListElement} style={{width:"100px"}}
  src={[
    {
      quality: 720,
      url: "https://cdn.glitch.me/cbf2cfb4-aa52-4a1f-a73c-461eef3d38e8/720.mp4",
    },
    {
      quality: 480,
      url: "https://cdn.glitch.me/cbf2cfb4-aa52-4a1f-a73c-461eef3d38e8/480.mp4",
    },
  ]}

  dimensions={{ height:350}}
  subtitles={[
    {
      lang: "en",
      language: "English",
      url:    vid,
    },
    // {
    //   lang: "fr",
    //   language: "French",
    //   url:
    //     "https://cdn.jsdelivr.net/gh/naptestdev/video-examples@master/fr.vtt",
    // },
  ]}
  poster="https://cdn.jsdelivr.net/gh/naptestdev/video-examples@master/poster.png"
/>
<tabListElementContext.Provider
  value={tabListElement.current}
>
</tabListElementContext.Provider>
 </>
)
  }