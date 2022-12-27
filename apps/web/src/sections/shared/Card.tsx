import { BsArrowRight } from "react-icons/bs";
import Image from "next/image";
import { classNames } from "../../lib/helpers";
export const Card = ({ card, bgIndex }) => {

    const { title = '', image = {}, slug = {} } = card

    return (
        <article className="w-[439px] h-[120px] md:h-[509px] shadow-md md:relative relative">

            <div className={classNames("relative z-10 w-full h-[120px] md:absolute md:bottom-0 bg-white flex justify-evenly items-center", 
            bgIndex === 0 ? 'bg-canary text-pebble' :
            bgIndex === 1 ? 'bg-pebble text-white' : 'bg-ivory text-pebble')}>
            <p className="text-body">{title}</p>
            <BsArrowRight size={32}/>
            </div>
        <Image
        alt="lel"
        fill
        className="z-1 absolute top-0 h-full w-full object-cover brightness-80"
        src={image?.asset?.url}
      ></Image>
        </article>
    )
}

export default Card;