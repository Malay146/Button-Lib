"use client";

import { cn } from "@/lib/utlis";
import React from "react";
import gsap from "gsap";
import { useEffect, useRef } from "react";

type Button14Props = React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button14 = ({ children, className, ...props }: Button14Props) => {
  const buttonRef = useRef<HTMLDivElement>(null);
  const word1Ref = useRef<HTMLDivElement>(null);
  const word2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const button = buttonRef.current;
    const word1 = word1Ref.current;
    const word2 = word2Ref.current;

    if (!button || !word1 || !word2) return;

    gsap.set(word1, { y: 0, rotateX: 0 });
    gsap.set(word2, { y: 20, rotateX: -90 });

    button.addEventListener("mouseenter", () => {
      gsap.to(word1, {
        y: -10,
        rotateX: -90,
        duration: 0.3,
        ease: "power2.out",
      });
      gsap.to(word2, {
        y: 0,
        rotateX: 0,
        duration: 0.3,
        ease: "power2.out",
      });
    });

    button.addEventListener("mouseleave", () => {
      gsap.to(word1, {
        y: 0,
        rotateX: 0,
        duration: 0.3,
        ease: "power2.out",
      });
      gsap.to(word2, {
        y: 20,
        rotateX: -90,
        duration: 0.3,
        ease: "power2.out",
      });
    });
  }, []);

  return (
    <div
      ref={buttonRef}
      className="p-3 bg-zinc-800 rounded-xl cursor-pointer select-none active:scale-98 transition-transform duration-150 shadow-md shadow-black/20"
    >
      <div className="relative w-14 h-4 overflow-hidden flex items-center justify-center">
        <span ref={word1Ref} className="absolute leading-none">
          {children}
        </span>

        <span ref={word2Ref} className="leading-none">
          {children}
        </span>
      </div>
    </div>
  );
};

export default Button14;
