import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/shadcn/carousel";
import FadingSlide from "@/components/shared/fadingSlide";
import Heading from "@/components/shared/heading";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import { useRef, useState } from "react";
import gsap from "gsap";
import { cn } from "@/lib/utils";
import { galleryData } from "@/constants/data";

function OurGallery() {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const tlRef = useRef<gsap.core.Timeline | null>(null);
  const [hovered, setHovered] = useState<boolean>(false);
  useGSAP(() => {
    if (!cardRef) return;
    const tl = gsap.timeline({ paused: true });
    tl.fromTo(
      cardRef.current,
      {
        opacity: 1,
      },
      {
        bottom: 4,
        opacity: 1,
        ease: "back",
        duration: 0.8,
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
    <section className="bg-[url('/images/gallery-bg.png')] bg-cover md:bg-contain bg-no-repeat px-4 sm:px-6 md:px-8 pt-8 md:pt-32 xl:pt-40">
      <div className="container">
        <Heading accent="Our Features" heading1="Photos From Gallery" dark />
        <Carousel className="mx-auto mt-8 md:mt-12">
          <CarouselContent>
            {galleryData?.map((gallery, index) => (
              <CarouselItem
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                key={index}
                className="basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
              >
                {/* <FadingSlide vertical> */}
                <div className="p-2 overflow-hidden relative cursor-pointer">
                  <Image
                    src={gallery?.img}
                    alt="Genious Smart Solution"
                    width={400}
                    height={600}
                    className={cn(
                      "w-full h-auto object-cover rounded-lg",
                      hovered && "bg-blend-darken"
                    )}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div
                    ref={cardRef}
                    className="p-4 bg-white absolute -bottom-24"
                  >
                    <h4 className="font-body text-sm">Growth startup</h4>
                    <h3 className="font-heading font-semibold text-xl capitalize text-primary">
                      Growth startup
                    </h3>
                  </div>
                </div>
                {/* </FadingSlide> */}
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious
            className="left-2 md:left-4 scale-75 md:scale-100"
            size="sm"
          />
          <CarouselNext
            className="right-2 md:right-4 scale-75 md:scale-100"
            size="sm"
          />
        </Carousel>
      </div>
    </section>
  );
}

export default OurGallery;
