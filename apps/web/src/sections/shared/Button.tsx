import Link from "next/link";
import { classNames } from "../../lib/helpers";
import { getLinkPath } from "../../lib/helpers";
import { BsArrowRight } from "react-icons/bs";

export const Button = ({ btn }) => {
  return (
      <Link
        href={getLinkPath(btn.btnlink)}
        target={btn.blank ? "_blank" : "_self"}
      >
    <button
      className={classNames(
        "text-pebble text-body flex h-[48px] min-w-[200px] md:w-[312px] items-center justify-center border-2 border-transparent transition ease-in-out delay-50 duration-100",
        btn?.btncolor === "canary"
          ? "bg-canary  hover:text-white hover:border-white hover:bg-transparent"
          : btn?.btncolor === "ivory"
          ? "bg-ivory hover:text-ivory hover:border-pebble hover:bg-pebble"
          : "bg-pebble",
        
      )}
    >
        {btn?.btnlink?.linkText}{" "}
        <BsArrowRight className="ml-[18px]" />
    </button>
      </Link>
  );
};

export default Button;
