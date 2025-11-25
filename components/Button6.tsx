import { cn } from "@/lib/utlis";
import React from "react";

type Button6Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children?: React.ReactNode;
};

const Button6 = ({
  children = "Button",
  className,
  ...props
}: Button6Props) => {
  return (
    <div className="w-22 h-12 bg-black relative group active:scale-98 transition-all duration-100 ease-in-out">
      <button
        className={cn(
          "text-black w-full h-full border-2 bg-white tracking-tight absolute bottom-2 right-2 cursor-pointer transition-all duration-175 ease-in-out group-hover:bottom-0 group-hover:right-0 flex items-center justify-center font-bold",
          className
        )}
        {...props}
      >
        {children}
      </button>
    </div>
  );
};

export default Button6;
