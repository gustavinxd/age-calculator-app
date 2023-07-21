import { InputHTMLAttributes, forwardRef, useId } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
    label?: string;
    helperText?: string;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
    ( { name='', type='text', label, helperText= '', ...props }, ref) => {
        const inputId = useId();
        const hasError = helperText.length > 0;

    return(
        <div className={`flex flex-col items-start`}>
            <label htmlFor={name} 
            className={`font-bold text-grey-smokey ${hasError && `text-light-red`}`}>{label}</label>
            
            <input id={inputId} type={type} name={name} ref={ref} {...props} 
            className={`
            font-bold text-off-black text-2xl rounded-md border border-grey
            ${hasError && `border-light-red`} p-4 border-solid
            focus:outline-none focus:border-purple`}/> 

            {hasError && <p className={`text-light-red font-normal italic`}>{helperText}</p>}    
        </div>
        // <div className={``}>
        // </div>
    );
});