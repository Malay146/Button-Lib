import { cn } from "@/lib/utlis";
import React from "react";

type Button11Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children?: React.ReactNode;
};

const Button11 = ({ children, className, ...props }: Button11Props) => {
  return (
    <div className="border border-zinc-400 rounded-lg size-16 flex justify-center items-center shadow-[inset_1px_1px_6px_rgba(0,0,0,0.2),inset_-1px_-1px_6px_rgba(0,0,0,0.2)] bg-white/30 backdrop-blur-2xl cursor-pointer">
      <button
        className={cn("text-white size-12 border-2 border-zinc-100/90 rounded-[5px] bg-blue-500/50 backdrop-blur-2xl shadow-[inset_4px_4px_5px_rgba(255,255,255,0.4),inset_-4px_-4px_5px_rgba(255,255,255,0.4),2px_2px_7px_rgba(81,162,255,0.5),-2px_-2px_7px_rgba(81,162,255,0.5)] font-medium cursor-pointer active:scale-95 active:duration-150", className)}
        {...props}
      >
        {children}
      </button>
    </div>
  );
};

export default Button11;
