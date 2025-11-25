"use client";

import { cn } from "@/lib/utlis";
import React from "react";
import { gsap } from "gsap";
import SplitText from "gsap/SplitText";
import { useEffect, useRef } from "react";

type Button16Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  secondName?: string;
};

const Button16 = ({children="Hover", secondName="Button", className, ...props }: Button16Props) => {
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

    gsap.set(chars1, { y: 0, filter: "blur(0px)" });
    gsap.set(chars2 , { y: 40, filter: "blur(15px)" });

    button.addEventListener("mouseenter", () => {
      gsap.to(chars1, {
          y: -40,
          filter: "blur(15px)",
        duration: 0.7,
        stagger: 0.03,
        ease: "power2.out",
      });
      gsap.to(chars2, {
        y: 0,
        filter: "blur(0px)",
        duration: 0.7,
        stagger: 0.03,
        ease: "power2.out",
      });
    });

    button.addEventListener("mouseleave", () => {
      gsap.to(chars1, {
        y: 0,
        filter: "blur(0px)",
        duration: 0.7,
        stagger: 0.03,
        ease: "power2.out",
      });
      gsap.to(chars2, {
        y: 40,
        filter: "blur(15px)",
        duration: 0.7,
        stagger: 0.03,
        ease: "power2.out",
      });
    });
  }, []);

  return (
    <div
      ref={buttonRef}
      className="p-3 bg-zinc-800 rounded-xl cursor-pointer select-none active:scale-98 transition-transform duration-150 shadow-md shadow-black/20 overflow-hidden"
    >
      <div className="relative w-14 h-4 flex items-center justify-center">
        <span ref={word1Ref} className="absolute">
          {children}
        </span>

        <span ref={word2Ref} className="">
          {secondName}
        </span>
      </div>
    </div>
  );
};

export default Button16;
