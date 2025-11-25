"use client";

import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utlis";
import { gsap } from "gsap";

type Button19Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  className?: string;
  children?: React.ReactNode;
};

const Button19 = ({
  className,
  children = "Button",
  ...props
}: Button19Props) => {
  const btnRef = useRef<HTMLButtonElement>(null);
  const lineRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    // GSAP context (best practice)
    const ctx = gsap.context(() => {
      // Initial position: hide on the right
      gsap.set(lineRef.current, { x: "-110%" });

      // Hover enter animation
      btnRef.current?.addEventListener("mouseenter", () => {
        gsap.set(lineRef.current, { x: "-110%" });
        gsap.to(lineRef.current, {
          x: "0%",
          duration: 0.4,
          ease: "power2.inOut",
        });
      });

      // Hover leave animation
      btnRef.current?.addEventListener("mouseleave", () => {
        gsap.to(lineRef.current, {
          x: "110%",
          duration: 0.4,
          ease: "power2.inOut",
        });
      });
    }, btnRef); // <- scope binds everything to this element

    return () => ctx.revert(); // cleanup on unmount
  }, []);

  return (
    <button
      ref={btnRef}
      className={cn(
        "text-zinc-800 cursor-pointer relative overflow-hidden",
        className
      )}
      {...props}
    >
      {children}

      <span
        ref={lineRef}
        className="absolute w-full h-0.5 bg-zinc-900 bottom-[10%] rounded-2xl left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      ></span>
    </button>
  );
};

export default Button19;
