import React from "react";
import { cn } from "@/lib/utlis";

type Button4Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {};

const Button4 = ({ children="Button", className, ...props }: Button4Props) => {
  return (
    <div className="p-0.5 overflow-hidden rounded-2xl inline-block relative before:absolute before:content-[''] before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:w-40 before:h-40 before:bg-conic before:from-transparent before:via-zinc-950/40 before:to-zinc-950 before:animate-spin before:[animation-duration:2.5s] hover:before:[animation-duration:1s] active:scale-98 active:duration-100">
        <button className={cn("px-5 py-3 rounded-[14px] bg-white text-black cursor-pointer relative", className)} {...props}>{children}</button>
    </div>
  );
};

export default Button4;
