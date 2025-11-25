import { cn } from "@/lib/utlis";
import React from "react";

type Button2Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  secondText: string;
  color1?: string;
  color2?: string;
  color3?: string;
};

const Button2 = ({
  className,
  children="Hover",
  secondText,
  color1,
  color2,
  color3,
  ...props
}: Button2Props) => {
  return (
    <button
      className={cn(
        "border border-white bg-zinc-800 px-5 py-3 rounded-2xl relative overflow-hidden group cursor-pointer font-inter font-medium text-white text-shadow-sm",
        className
      )}
      {...props}
    >
      {children}

      <span
        className={cn(
          "bg-blue-200 w-[120%] h-full absolute top-0 -left-[130%] -skew-x-25 group-hover:-left-[10%] transition-all duration-300 ease-in-out",
          color1
        )}
      />

      <span
        className={cn(
          "bg-blue-400 w-[120%] h-full absolute top-0 -left-[130%] -skew-x-25 group-hover:-left-[10%] transition-all duration-500 ease-in-out",
          color2
        )}
      />

      <span
        className={cn(
          "bg-blue-600 w-[120%] h-full absolute top-0 -left-[130%] -skew-x-25 group-hover:-left-[10%] transition-all duration-700 ease-in-out",
          color3
        )}
      />

      <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-400 ease-in-out">
        {secondText}
      </span>
    </button>
  );
};

export default Button2;
