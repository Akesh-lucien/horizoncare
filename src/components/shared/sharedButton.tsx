"use client";

import React, { useRef } from "react";
import { Button } from "../shadcn/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

type ButtonProps = {
  renderText: string;
  noArrow?: boolean;
};

function SharedButton({ renderText, noArrow }: ButtonProps) {
  const circleRef = useRef<HTMLDivElement | null>(null);
  const tlRef = useRef<gsap.core.Timeline | null>(null);

  useGSAP(() => {
    if (!circleRef) return;
    const tl = gsap.timeline({ paused: true });
    tl.fromTo(
      circleRef.current,
      {
        opacity: 1,
        scale: 0,
      },
      {
        scale: 10,
        opacity: 1,
        ease: "none",
        duration: 0.3,
      }
    );
    tlRef.current = tl;

    return () => {
      tl.kill();
    };
  }, []);
  const handleMouseEnter = () => {
    tlRef?.current?.play();
    // setHovered(true);
  };

  const handleMouseLeave = () => {
    tlRef?.current?.reverse();
    // setHovered(false);
  };
  return (
    <Button
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative overflow-hidden bg-primary text-white rounded-full px-14 py-1 md:py-6 w-full font-body text-xl"
    >
      <div
        ref={circleRef}
        className="absolute opacity-0 z-0 bg-hover rounded-full inset-0 m-auto h-[32px] w-[32px]"
      ></div>
      <Link
        href={"#"}
        className="flex items-center text-sm md:text-lg justify-center gap-2 z-10 capitalize"
      >
        {renderText}
        {!noArrow && <ArrowRight />}
      </Link>
    </Button>
  );
}

export default SharedButton;
