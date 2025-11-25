import React from "react";
import { cn } from "@/lib/utlis";

type Button5Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {};

const Button5 = ({ children="Button", className, ...props }: Button5Props) => {
  return (
    <div className="p-0.5 overflow-hidden rounded-2xl relative before:absolute before:content-[''] before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:w-40 before:h-40 before:bg-conic/decreasing before:from-violet-700 before:via-lime-400 before:to-violet-700 before:animate-spin before:[animation-duration:2.5s] hover:before:[animation-duration:1s] active:scale-98 active:duration-100">
        <button className={cn("px-5 py-3 rounded-[14px] bg-white text-black cursor-pointer relative", className)} {...props}>{children}</button>
    </div>
  );
};

export default Button5;
