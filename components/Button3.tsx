import React from "react";
import { cn } from "@/lib/utlis";

type Button3Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {};

const Button3 = ({ children="Button", className, ...props }: Button3Props) => {
  return (
    <div className="p-0.5 overflow-hidden rounded-2xl inline-block relative before:absolute before:content-[''] before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:w-8 before:h-50 before:bg-black before:animate-spin before:[animation-duration:2.5s] active:scale-98 duration-100 hover:before:[animation-duration:1s]">
        <button className={cn("px-5 py-3 rounded-[14px] bg-white text-black relative cursor-pointer", className)} {...props}>{children}</button>
    </div>
  );
};

export default Button3;
