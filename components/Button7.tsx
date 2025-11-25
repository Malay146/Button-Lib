import { cn } from "@/lib/utlis";
import React from "react";

type Button7Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children?: React.ReactNode;
  bottomColor?: string;
  middleColor?: string;
};

const Button7 = ({
  children = "Button",
  className,
  bottomColor = "hover:bg-blue-700",
  middleColor = "hover:bg-blue-500",
  ...props
}: Button7Props) => {
  return (
    <>
      <div
        className={cn(
          "w-22 h-12 bg-blue-800 relative cursor-pointer group ml-3",
          bottomColor
        )}
      >
        <div
          className={cn(
            "w-full h-full bg-blue-600 absolute bottom-2 right-2 active:scale-98 transition-all duration-175 ease-in-out group-hover:bottom-0 group-hover:right-0 flex items-center justify-center",
            middleColor
          )}
        >
          <button
            className={cn(
              "text-white w-full h-full border-2  bg-blue-400 tracking-tight absolute bottom-2 right-2 cursor-pointer transition-all duration-150 ease-in-out group-hover:bottom-0 group-hover:right-0 flex items-center justify-center font-medium",
              className
            )}
            {...props}
          >
            {children}
          </button>
        </div>
      </div>
    </>
  );
};

export default Button7;
