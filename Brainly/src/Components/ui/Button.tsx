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
    "secondary": "bg-purple-400 text-purple-600"
}

const sizeStyle = {
    "sm " : "p-6",
    "md" : "p-4",
    "lg" : "p-6"
}
const defaultStyle = "rounded-md"

export const Button = (props: ButtonProps) =>{
    return <button className={`${variantStyle[props.variant]} ${defaultStyle} ${sizeStyle[props.size]} `}>{props.text} </button>
}
{/* <Button variant="primary" size="md" text={"asd"} onClick={()=> {}}></Button> */}


//#e0e7fe
//#5046e4
//#3e38a7

//54.27