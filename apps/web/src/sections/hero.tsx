import Button from "./shared/Button";
import { BsChevronDown } from "react-icons/bs";

export const Hero = ({ section }) => {
  const {
    label = "",
    title = "",
    description = "",
    background = "",
    image = {},
    video = "",
    btn1 = {},
    btn2 = {},
  } = section;
  let media;
  if (background === "video") media = video;
  else media = image;

  return (
    <section className="relative h-[100vh] text-center flex flex-col justify-between">

      <div className="relative z-10 mx-auto flex max-w-[674px] flex-col items-center pt-[142px] text-white">
        <span className="text-body font-bold">{label}</span>
        <h1 className="text-headingThree">{title}</h1>
        <hr className="my-[16px] h-[2px] w-[64px] bg-white text-white" />
        <p className="text-body">{description}</p>
        <div className="mt-[64px] flex w-full justify-evenly">
          {btn1 ? <Button btn={btn1} /> : ""}
          {btn2 ? <Button btn={btn2} /> : ""}
        </div>
      </div>

      <div className="flex z-10 flex-col relative items-center mb-[20px] text-white animate-bounce">
        <span className="text-body">Read more</span>
        <BsChevronDown size={32} className="mt-[5px]"/>
      </div>
      <video
        loop
        muted
        autoPlay
        playsInline
        className="z-1 absolute top-0 h-full w-full object-cover brightness-50"
        src={media?.asset?.url}
      ></video>
    </section>
  );
};

export default Hero;
