import { ComputerIcon } from "lucide-react";
import React, { useRef, useState } from "react";
import { services } from "@/constants/data/index";
import { ServiceProps } from "@/types";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import SharedButton from "@/components/shared/sharedButton";
import FadingSlide from "@/components/shared/fadingSlide";

function ServicePageHeroSection() {
  return (
    <section>
      <div className="flex flex-col items-center justify-center gap-0 bg-cover bg-no-repeat h-[20vh] md:h-[50vh] bg-[url('/images/services-hero.jpeg')]">
        <h1 className="font-heading font-bold capitalize text-4xl sm:text-7xl text-white">
          Services
        </h1>
        <p className="font-body font-medium capitalize text-white/80">
          Horizon care &gt; services
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-8 container py-16">
        {services.map((service) => (
          <FadingSlide key={service.id} delay={0} duration={0.5}>
            <ServiceCard {...service} />
          </FadingSlide>
        ))}
      </div>
    </section>
  );
}

const ServiceCard = React.memo(
  ({ title, description, link, Icon }: ServiceProps) => {
    const circleRef = useRef<HTMLDivElement | null>(null);
    const tlRef = useRef<gsap.core.Timeline | null>(null);
    const [hovered, setHovered] = useState<boolean>(false);
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
          scale: 4,
          opacity: 1,
          ease: "power1",
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
        className="p-6 relative overflow-hidden sm:p-8 rounded-[32px] cursor-pointer border-black/10 border hover:border-black transition-all duration-700 bg-white"
      >
        <div
          ref={circleRef}
          className="absolute opacity-0 z-0 blur-md bg-gradient-to-tr from-primary/70 to-primary/10 rounded-full -top-5 -left-0 h-[32px] w-[32px]"
        ></div>
        <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 z-10">
          <div className="bg-[#F5F9F9] text-hover h-24 w-24 sm:w-14 sm:h-14 rounded-full flex items-center justify-center flex-shrink-0">
            {/* <ComputerIcon size={38} /> */}
            <Icon />
          </div>

          <div className="flex flex-col gap-1 sm:gap-2">
            <h2 className="text-[#1B4B43] text-2xl sm:text-3xl font-heading font-medium">
              {title}
            </h2>

            <p className="text-[#6F777F] text-base sm:text-lg font-body font-normal">
              {description}
            </p>

            <div className="max-w-48 mt-5">
              <SharedButton renderText="read more" />
            </div>
          </div>
        </div>
      </div>
    );
  }
);

ServiceCard.displayName = "ServiceCard";

export default ServicePageHeroSection;
