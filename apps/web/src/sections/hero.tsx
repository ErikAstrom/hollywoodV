import { useRef } from "react";
import { motion } from 'framer-motion'
import Button from "./shared/Button";

export const Hero = ({section}) => {


    const { label = "", title = "", description = "", background = "", image = {}, video = '', btn1 = {}, btn2 = {}  } = section;
    let media;
if(background === 'video') media = video;
else media = image;



    return (
        <section className="h-[100vh] relative">
        <div className="h-full flex items-center pt-[10%] flex-col z-10 relative text-white">
            <span className="text-body font-[700]">{label}</span>
           <h1 className="text-headingOne">{title}</h1>
          <p className="text-body">{description}</p>
          <div className="mt-10 w-[30%] mx-auto flex justify-evenly">
            {btn1 ? <Button btn={btn1}/> : "" }
            {btn2 ? <Button btn={btn2}/> : "" }
          </div>
        </div>
        <video
        loop
        muted
        autoPlay
        playsInline
        className="h-full w-full absolute z-1 object-cover top-0 brightness-50"
        src={media?.asset?.url}>
      </video>
    </section>
    )
}

export default Hero;