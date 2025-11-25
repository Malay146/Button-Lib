import React from "react";
import { cn } from "@/lib/utlis";

type Button20Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  className?: string;
  children?: React.ReactNode;
};

const Button20 = ({
  children = "Button",
  className,
  ...props
}: Button20Props) => {
  return (
    <button
      className={cn(
        "text-zinc-800 cursor-pointer relative overflow-hidden after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-zinc-900 after:bottom-[10%] after:rounded-2xl after:left-[-50%] hover:after:left-1/2 after:transform after:-translate-x-1/2 after:transition-all after:duration-300",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button20;
