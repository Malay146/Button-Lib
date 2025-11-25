"use client";

import { cn } from "@/lib/utlis";
import React from "react";
import gsap from "gsap";
import { useEffect, useRef } from "react";

type Button13Props = React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button13 = ({ children, className, ...props }: Button13Props) => {
  const buttonRef = useRef<HTMLDivElement>(null);
  const word1Ref = useRef<HTMLDivElement>(null);
  const word2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const button = buttonRef.current;
    const word1 = word1Ref.current;
    const word2 = word2Ref.current;

    if (!button || !word1 || !word2) return;

    gsap.set(word1, { y: 0 });
    gsap.set(word2, { y: 20 });

    button.addEventListener("mouseenter", () => {
      gsap.to(word1, {
        y: -20,
        duration: 0.2,
        ease: "power2.out",
      });
      gsap.to(word2, {
        y: 0,
        duration: 0.2,
        ease: "power2.out",
      });
    });

    button.addEventListener("mouseleave", () => {
      gsap.to(word1, {
        y: 0,
        duration: 0.2,
        ease: "power2.out",
      });
      gsap.to(word2, {
        y: 20,
        duration: 0.2,
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

export default Button13;
