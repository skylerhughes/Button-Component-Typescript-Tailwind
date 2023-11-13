import { VariantProps, cva } from "class-variance-authority";
import { ButtonHTMLAttributes, ReactNode } from "react";
import cn from "../util/cn";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants>{
    children: ReactNode;
}

export default function Button({
    children, 
    className, 
    variant, 
    size,  
    ...props
 }: ButtonProps) {
    return (
    <button className={cn(buttonVariants({ variant, size, className }))} 
    {...props}
    >
        {children}
        </button>
    );
}


const buttonVariants = cva("rounded-xl m-4 px-4 font-medium transition ease-in-out duration-300", {
    variants: {
        variant: {
            primary:"bg-blue-700 hover:bg-blue-800 text-white",
            secondary: "bg-transparent hover:bg-blue-700 text-blue-700 hover:text-white border border-blue-500",
            danger: "border-none border-white text-white bg-red-500 hover:bg-red-600",
        },
        size: {
            sm:"text-sm px-5 py-2.5",
            md:"text-base px-5 py-2.5",
            lg:"text-xl px-6 py-2.5",
        },
    },
    defaultVariants: {
        variant: "primary",
        size: "sm",
    },
});