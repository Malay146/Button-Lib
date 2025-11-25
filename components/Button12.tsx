"use client";

import { cn } from "@/lib/utlis";
import React, { useEffect, useRef } from "react";

type Button12Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children?: React.ReactNode;
  blobColor?: string;
};

const Button12 = ({ children, className, blobColor, ...props }: Button12Props) => {
  const btnRef = useRef<HTMLButtonElement>(null);
  const blobRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const btn = btnRef.current;
    const blob = blobRef.current;
    if (!btn || !blob) return;

    const handleMove = (e: MouseEvent) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left; // mouse inside btn
      const y = e.clientY - rect.top;

      blob.style.left = `${x}px`;
      blob.style.top = `${y}px`;
      blob.style.opacity = "1";

      
    };

    const resetBlob = () => {
      blob.style.opacity = "0";
    };

    btn.addEventListener("mousemove", handleMove);
    btn.addEventListener("mouseleave", resetBlob);

    return () => {
      btn.removeEventListener("mousemove", handleMove);
      btn.removeEventListener("mouseleave", resetBlob);
    };
  }, []);

  return (  
    <button
      ref={btnRef}
      {...props}
      className={cn(
        "relative overflow-hidden px-6 py-3 bg-blue-950 text-white tracking-tighter border rounded-xl cursor-pointer active:scale-98 active:transition-all active:duration-150 drop-shadow-[0px_2px_2px_rgba(0,0,0,0.2),0px_5px_5px_rgba(0,0,0,0.1)]",
        className
      )}
    >
      <div
        ref={blobRef}
        className={cn("absolute size-5 rounded-full bg-purple-500 blur-md -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-0 transition-opacity duration-150", blobColor)}
      />

      {children}
    </button>
  );
};

export default Button12;
