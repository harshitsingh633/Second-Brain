import { ReactElement } from "react";

interface ButtonProps{
    variant : "primary" | "secondary";
    size : "sm" |"md" | "lg";
    text: string;
    startIcon?: ReactElement;
    endIcon?: ReactElement;
    onClick : () => void;
}

const variantStyle = {
    "primary": "bg-purple-600 text-white",
    "secondary": "bg-[#e0e7fe] text-purple-600"
}

const sizeStyle = {
    "sm" : "py-1 px-2",
    "md" : "py-2 px-4",
    "lg" : "py-4 px-6"
}
const defaultStyle = "rounded-md"

export const Button = (props: ButtonProps) =>{
    return <button className={`${variantStyle[props.variant]} ${defaultStyle} ${sizeStyle[props.size]} `}>{props.startIcon ? <div className="pr-2">{props.startIcon}</div>: null} {props.text}  {props.endIcon} </button>
}




{/* <Button variant="primary" size="md" text={"asd"} onClick={()=> {}}></Button> */}


//#e0e7fe
//#5046e4
//#3e38a7

//54.27