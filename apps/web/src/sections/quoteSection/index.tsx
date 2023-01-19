import { classNames } from "../../lib/helpers";
import Image from "next/image";
import { QuoteArray } from "./quoteArray";
export const QuoteSection = ({ section }) => {
  const { title = "", backgroundColor = "white", quoteArray = [] } = section;

  return (
    <section
      className={classNames(
        "w-full",
        backgroundColor === "ivory" && "bg-ivory",
        backgroundColor === "pebble" && "bg-pebble",
        backgroundColor === "canary" && "bg-canary",
        backgroundColor === "white" && "bg-white"
      )}
    >
      <div className="spacing flex flex-col">
        <h2 className="text-headingThree mb-[100px] text-center md:text-left">{title}</h2>
        <QuoteArray array={quoteArray} />
      </div>
    </section>
  );
};

export default QuoteSection;
