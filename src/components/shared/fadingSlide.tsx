"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

interface FadingSlideProps {
  children: React.ReactNode;
  delay?: number;
  vertical?: boolean;
  duration?: number;
}

function FadingSlide({
  children,
  delay,
  vertical,
  duration,
}: FadingSlideProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRef.current) return;

    gsap.fromTo(
      containerRef.current,
      {
        opacity: 0,
        x: -10,
      },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        ease: "circ",
        delay: delay,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom-=100",
          end: "bottom top",
          toggleActions: "play none none reverse",
        },
      }
    );
    gsap.fromTo(
      overlayRef.current,
      {
        x: vertical ? 0 : 0,
        y: vertical ? 0 : 0,
      },
      {
        x: vertical ? 0 : 900,
        y: vertical ? 900 : 0,
        duration: duration ? duration : 2,
        ease: "power1",
        delay: delay,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom-=100",
          end: "bottom top",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative overflow-hidden w-full opacity-0 z-0"
    >
      <div
        ref={overlayRef}
        className="min-w-[100%] min-h-[100%] bg-white absolute right-0 z-10"
      ></div>
      {children}
    </div>
  );
}

export default FadingSlide;
