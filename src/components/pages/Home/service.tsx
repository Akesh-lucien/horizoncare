import FadingSlide from "@/components/shared/fadingSlide";
import Heading from "@/components/shared/heading";
import SharedButton from "@/components/shared/sharedButton";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import React, { useRef, useState } from "react";
import gsap from "gsap";
import { insuranceServices } from "@/constants/data";
import { InsuranceService } from "@/types";
import { cn } from "@/lib/utils";

function ServiceSection() {
  return (
    <section className="py-6 container md:py-12 lg:py-16">
      <Heading
        accent="More About Our Company"
        heading1="Service We Provide"
        center
      />
      <div className=" grid grid-cols-1 md:grid-cols-2 items-start gap-6 md:gap-8 lg:gap-12 my-6 md:my-8 lg:my-10">
        {/*section1*/}
        <div className="col-span-1 bg-white px-4 xs:px-6 sm:px-8 md:px-11 py-8 md:py-12 lg:py-16 rounded-xl shadow-xl space-y-3">
          <FadingSlide>
            <Image
              src="/images/service-img.webp"
              alt="benefits-1"
              width={700}
              height={700}
              className="w-full h-auto max-w-[700px] mx-auto object-cover rounded-xl"
            />
          </FadingSlide>
          <FadingSlide>
            <h3 className="font-heading font-medium text-primary text-xl sm:text-2xl capitalize mt-3">
              Peace Shield Insurance
            </h3>
          </FadingSlide>
          <FadingSlide>
            <p className="font-body font-normal text-sm sm:text-base md:text-md text-hover/50">
              Providing peace of mind with comprehensive coverage for
              individuals and families. Safeguard your future against unexpected
              events with plans designed for your security.
            </p>
          </FadingSlide>
          <FadingSlide>
            <div className="max-w-40 sm:max-w-52">
              <SharedButton renderText="learn more" noArrow />
            </div>
          </FadingSlide>
        </div>
        {/*section2*/}
        <div className="col-span-1 grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-0">
          {insuranceServices?.map((service, index) => (
            <FadingSlide key={index}>
              <div className="p-2 md:p-4">
                <HoverCard {...service} />
              </div>
            </FadingSlide>
          ))}
        </div>
      </div>
    </section>
  );
}

const HoverCard = React.memo(
  ({ title, description, Icon }: InsuranceService) => {
    const iconRef = useRef<HTMLDivElement | null>(null);
    const tlRef = useRef<gsap.core.Timeline | null>(null);
    const [hovered, setHovered] = useState<boolean>(false);
    useGSAP(() => {
      if (!iconRef) return;
      const tl = gsap.timeline({ paused: true });
      tl.fromTo(
        iconRef.current,
        {
          opacity: 1,
        },
        {
          rotateY: 180,
          background: "#0c6460",
          opacity: 1,
          ease: "none",
          duration: 0.4,
        }
      );
      tlRef.current = tl;

      return () => {
        tl.kill();
      };
    }, []);
    const handleMouseEnter = () => {
      tlRef?.current?.play();
      setHovered(true);
    };

    const handleMouseLeave = () => {
      tlRef?.current?.reverse();
      setHovered(false);
    };
    return (
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="flex flex-col overflow-hidden drop-shadow-xl rounded-xl transition-all duration-500 cursor-pointer space-y-8 items-center justify-center border-t-4 border-white hover:border-t-4 hover:border-primary bg-white/90 px-5 py-12"
      >
        <div
          ref={iconRef}
          className={cn(
            hovered && "!text-white !fill-white stroke-white",
            "rounded-full h-24 w-24 bg-primary/10 flex items-center justify-center"
          )}
        >
          {/* <LightIcon /> */}
          {<Icon />}
        </div>
        <h3 className="font-heading font-medium text-primary text-2xl capitalize mt-3">
          {title}
        </h3>
        <p className="font-body font-normal text-md text-center text-hover/50 overflow-ellipsis">
          {description}
        </p>
      </div>
    );
  }
);
HoverCard.displayName = "HoverCard";

export default ServiceSection;
