import { classNames } from "../../lib/helpers";
import Image from "next/image";
import { LogoArray } from "./logoArray";
export const LogoSection = ({ section }) => {


    const {
        title = "",
        backgroundColor = "ivory",
        logoArray = []
    } = section;

    return (
        <section className={classNames(
            "w-full",
            backgroundColor === "ivory" && "bg-ivory",
            backgroundColor === "pebble" && "bg-pebble",
            backgroundColor === "canary" && "bg-canary",
        )}>
            <div className="spacing flex flex-col">
                <h2 className="text-headingThree mb-[100px]">
                {title}
                </h2>
            <LogoArray array={logoArray}/>
            </div>
        </section>
    )
}

export default LogoSection;