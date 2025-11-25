"use client";

import { cn } from "@/lib/utlis";
import React from "react";
import { gsap } from "gsap";
import SplitText from "gsap/SplitText";
import { useEffect, useRef } from "react";

type Button15Props = React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button15 = ({ children, className, ...props }: Button15Props) => {
  const buttonRef = useRef<HTMLDivElement>(null);
  const word1Ref = useRef<HTMLDivElement>(null);
  const word2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const button = buttonRef.current;
    const word1 = word1Ref.current;
    const word2 = word2Ref.current;

    gsap.registerPlugin(SplitText);

    let word1Split = new SplitText(word1, { type: "chars" });
    let word2Split = new SplitText(word2, { type: "chars" });
    let chars1 = word1Split.chars;
    let chars2 = word2Split.chars;

    if (!button || !word1 || !word2) return;

    gsap.set(chars1, { y: 0 });
    gsap.set(chars2 , { y: 20 });

    button.addEventListener("mouseenter", () => {
      gsap.to(chars1, {
        y: -20,
        duration: 0.5,
        stagger: 0.02,
        ease: "back.out",
      });
      gsap.to(chars2, {
        y: 0,
        duration: 0.5,
        stagger: 0.02,
        ease: "back.out",
      });
    });

    button.addEventListener("mouseleave", () => {
      gsap.to(chars1, {
        y: 0,
        duration: 0.5,
        stagger: 0.02,
        ease: "back.out",
      });
      gsap.to(chars2, {
        y: 20,
        duration: 0.5,
        stagger: 0.02,
        ease: "back.out",
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

export default Button15;
