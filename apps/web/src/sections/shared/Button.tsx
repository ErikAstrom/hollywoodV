import Link from "next/link"
import { classNames } from "../../lib/helpers";
export const Button = ({btn}) => {



let color:string = "bg-" + btn.btncolor;

    return (
        
    <button className={classNames(
        color,
        'h-[48px] w-[200px] flex items-center justify-center text-pebble text-body'
        )}>
        {btn?.btnlink?.internal?.internalText}
    </button>

    )
}


 
export default Button;