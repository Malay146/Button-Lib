import { cn } from "@/lib/utlis";
import React from "react";

const Button1 = ({
  className="Button",
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <button
      className={cn(
        "relative overflow-hidden text-shadow-xs cursor-pointer px-5 py-3 rounded-2xl bg-zinc-800 text-zinc-300 shadow-[inset_3px_3px_2px_rgba(255,255,255,0.1),inset_-3px_-3px_5px_rgba(0,0,0,0.8)] active:shadow-[inset_3px_3px_5px_rgba(0,0,0,0.5),inset_-3px_-3px_2px_rgba(255,255,255,0.1)] transition-all duration-300 tracking-tight",
        "drop-shadow-[0px_4px_5px_rgba(0,0,0,0.4),0px_2px_3px_rgba(0,0,0,0.6)]",
        className
      )}
    >
      {children}
       <span
    className="absolute inset-0 opacity-[0.1] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"
  ></span>
    </button>
  );
};

export default Button1;
