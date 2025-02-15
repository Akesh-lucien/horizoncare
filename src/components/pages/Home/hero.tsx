import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/shadcn/carousel";
import FadingSlide from "@/components/shared/fadingSlide";
import SharedButton from "@/components/shared/sharedButton";
import { useGSAP } from "@gsap/react";
import { PhoneCallIcon } from "lucide-react";
import Image from "next/image";
import React, { useRef } from "react";
import gsap from "gsap";
import { cn } from "@/lib/utils";

function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const headRef = useRef<HTMLHeadingElement>(null);
  const headRef1 = useRef<HTMLHeadingElement>(null);
  const subHedRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (
      !headRef.current ||
      !headRef1.current ||
      !subHedRef.current ||
      !containerRef.current
    )
      return;

    const textElements = document.querySelectorAll(".accent-heading");

    textElements.forEach((element) => {
      // Split text into individual characters
      const text = element.textContent || "";
      element.textContent = "";

      // Create spans for each character, preserving spaces
      const chars = text.split("").map((char) => {
        const span = document.createElement("span");
        if (char === " ") {
          span.innerHTML = "&nbsp;";
        } else {
          span.textContent = char;
        }
        span.style.display = "inline-block";
        element.appendChild(span);
        return span;
      });

      // Animate each character
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
        }
      );
    });

    gsap.fromTo(
      containerRef.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        delay: 0,
      }
    );
    gsap.fromTo(
      [headRef.current, headRef1.current, subHedRef.current],
      {
        rotateX: 70,
        y: 30,
        scale: 0.9,
      },
      {
        scale: 1,
        rotateX: 0,
        y: 0,
        duration: 1,
        ease: "power1",
        delay: 0,
        stagger: 0.1,
      }
    );
  }, []);
  return (
    <section className="bg-offwhitebg overflow-hidden ">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center">
        {/*section 1*/}
        <div className="col-span-1 py-12 space-y-6">
          <div
            ref={containerRef}
            className={cn("col-span-1 py-0 space-y-0 opacity-0")}
          >
            <p className="font-body font-semibold uppercase md:text-sm text-xs accent-heading">
              Secure Your Future with Horizon Care
            </p>
            <h2
              ref={headRef}
              className="font-heading font-medium capitalize text-3xl md:text-7xl text-hover pt-4"
            >
              Get a Smart Way For
            </h2>
            <h1
              ref={headRef1}
              className="font-heading italic font-medium capitalize text-3xl md:text-7xl text-hover underline pb-4"
            >
              Safety Insurance
            </h1>
            <p
              ref={subHedRef}
              className="font-body font-normal text-sm md:text-lg text-hover/50"
            >
              Empowering you with reliable, affordable, and flexible health
              insurance plans tailored to your needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 items-center space-y-8 space-x-0">
            <div className="col-span-1 md:max-w-[64%]">
              <FadingSlide delay={0.8}>
                <SharedButton renderText="Explore Our Plans" />
              </FadingSlide>
            </div>
            <div className="col-span-1">
              <FadingSlide delay={0.8}>
                <div className=" flex items-center justify-start gap-5">
                  <PhoneCallIcon size={32} />
                  <p className="text-primary font-body font-medium text-lg">
                    +024 32 369514
                  </p>
                </div>
              </FadingSlide>
            </div>
          </div>
        </div>

        {/*section 2*/}
        <div className="col-span-1">
          {/* <FadingSlide> */}
          <Image
            src="/images/hero-banner-lg.webp"
            alt="hero-banner-lg"
            width={600}
            height={600}
            className="w-full lg:h-[70vh] object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            priority
          />
          {/* </FadingSlide> */}
        </div>
      </div>
      <FadingSlide delay={1.5} vertical>
        <Carousel className="mt-10 px-8 md:px-0">
          <CarouselContent>
            {Array.from({ length: 6 }).map((_, i) => (
              <CarouselItem key={i} className="md:basis-1/3">
                <div className="flex flex-col items-center justify-center p-6 space-y-4 bg-white rounded-xl shadow-sm">
                  <Image
                    src="/images/placeholder-logo.webp"
                    alt="Genious Smart Solution"
                    width={40}
                    height={40}
                    className="object-contain"
                  />
                  <div className="text-center">
                    <p className="font-body text-lg text-hover">
                      4.88 out of 5 star from 1,645 reviews
                    </p>
                  </div>
                  <div className="flex items-center justify-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-6 h-6 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </FadingSlide>
    </section>
  );
}

export default HeroSection;
