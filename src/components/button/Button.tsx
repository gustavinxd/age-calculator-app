import { ButtonHTMLAttributes, HtmlHTMLAttributes } from "react"

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {

}

export default function Button({type= 'submit', ...props} : ButtonProps){
    return(
        <button>
            a
        </button>
    )
}