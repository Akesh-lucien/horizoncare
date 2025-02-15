import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

type HeadingProps = {
  accent?: string;
  heading1: string;
  heading2?: string;
  subhead?: string;
  center?: boolean;
  dark?: boolean;
};

function Heading({
  accent,
  heading1,
  heading2,
  subhead,
  center,
  dark,
}: HeadingProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const headRef = useRef<HTMLHeadingElement>(null);
  const headRef1 = useRef<HTMLHeadingElement>(null);
  const subHedRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);

  useGSAP(() => {
    if (
      !headRef.current ||
      !headRef1.current ||
      !subHedRef.current ||
      !containerRef.current ||
      !textRef.current
    )
      return;

    gsap.fromTo(
      containerRef.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        delay: 0,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );
    gsap.fromTo(
      [headRef.current, headRef1.current, subHedRef.current],
      {
        rotateX: 60,
        y: 30,
      },
      {
        rotateX: 0,
        y: 0,
        duration: 1.2,
        ease: "power1",
        delay: 0,
        stagger: 0.1,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    const text = textRef.current.innerText;
    const splitText = text
      .split("")
      .map((char) =>
        char === " "
          ? " "
          : `<span class="accent-hed inline-block opacity-0">${char}</span>`
      )
      .join("");

    textRef.current.innerHTML = splitText;

    const chars = textRef.current.querySelectorAll(".accent-hed");

    gsap.fromTo(
      chars,
      {
        opacity: 0,
        x: -50,
      },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        stagger: 0.03,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);
  return (
    <div
      ref={containerRef}
      className={cn(
        "col-span-1 py-0 space-y-0 opacity-0 text-white",
        center && "flex flex-col items-center justify-center",
        dark && "text-white"
      )}
    >
      <p
        ref={textRef}
        className={cn(
          "font-body font-medium uppercase text-sm accent-hed text-hover",
          dark && "text-white",
          center && "text-center"
        )}
      >
        {accent}
      </p>
      <h2
        ref={headRef}
        className={cn(
          "font-heading font-medium capitalize text-2xl md:text-5xl text-hover pt-4",
          dark && "text-white"
        )}
      >
        {heading1}
      </h2>
      <h1
        ref={headRef1}
        className={cn(
          "font-heading font-medium capitalize italic text-2xl md:text-5xl text-hover pb-4",
          dark && "text-white"
        )}
      >
        {heading2}
      </h1>
      <p
        ref={subHedRef}
        className={cn(
          "font-body font-normal text-sm md:text-lg text-hover/50",
          dark && "text-white"
        )}
      >
        {subhead}
      </p>
    </div>
  );
}

export default Heading;
