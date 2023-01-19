import { BsArrowRight } from "react-icons/bs";
import Image from "next/image";
import { classNames } from "../../lib/helpers";
export const Card = ({ card, bgIndex }) => {
  const { title = "", image = {}, slug = {} } = card;

  return (
    <article className="relative h-[120px] shadow-md md:h-[509px]">
      <div
        className={classNames(
          "relative z-10 flex h-[120px] w-full items-center justify-evenly bg-white md:absolute md:bottom-0 ",
          bgIndex === 0 && "bg-[#E9D62D] text-pebble",
          bgIndex === 1 && "bg-[#35383E] text-white",
          bgIndex === 2 && "bg-ivory text-pebble"
        )}
      >
        <p className="text-body">{title}</p>
        <BsArrowRight size={32} />
      </div>
      <Image
        alt="lel"
        fill
        className="z-1 brightness-80 absolute top-0 h-full w-full object-cover"
        src={image?.asset?.url}
      ></Image>
    </article>
  );
};

export default Card;
