import Button from "./shared/Button";
import { BsArrowRight } from "react-icons/bs";
export const Contact = ({ section }) => {

    const {
        label = "",
        title = "",
        description = "",
      } = section;


    return (
        <section className="py-[80px] bg-canary">
            <div className="text-center flex flex-col justify-between md:w-[674px] mx-auto spacing">
             <span className="text-body font-bold">{label}</span>
            <h1 className="text-headingThree">{title}</h1>
            <hr className="my-[16px] h-[2px] w-[64px] bg-pebble text-pebble mx-auto" />
            <p className="text-body">{description}</p>
        <div className="mx-auto md:w-[493px]">
            <textarea placeholder="Message" className="p-[10px] w-full h-[170px] border-2 border-black mt-[78px] bg-transparent w-full focus:outline-none focus:border-ivory focus:ring-1 focus:ring-ivory"></textarea>
            <input type="email" placeholder="mail@example.com" className="p-[10px] w-full h-[50px] border-2 border-black mt-[24px] bg-transparent w-full focus:outline-none focus:border-ivory focus:ring-1 focus:ring-ivory"></input>
            <button className="text-button mt-[24px] w-full h-[50px] flex bg-pebble text-ivory hover:bg-ivory hover:text-pebble items-center justify-between p-[10px] border-2 border-transparent transition ease-in-out delay-50 duration-100">Lets Go! <BsArrowRight className="ml-[18px]" /></button>
        </div>
            </div>
        </section>
    )
}

export default Contact;