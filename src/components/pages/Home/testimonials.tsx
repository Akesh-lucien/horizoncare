import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/shadcn/carousel";
import Heading from "@/components/shared/heading";
import { testimonials } from "@/constants/data";
import Image from "next/image";

function TestimonialsSection() {
  return (
    <section>
      <div className="bg-[url('/images/testimonial-bg.png')] bg-cover bg-no-repeat py-8 md:py-12 lg:py-16 bg-primary">
        <div className="container space-y-6 md:space-y-8 lg:space-y-10">
          <Heading accent="Testimonials" heading1="What Our Clients Say" dark />
          <Carousel className="w-full">
            <CarouselContent>
              {testimonials?.map((testimonial, index) => (
                <CarouselItem key={index} className="basis-full">
                  <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8 lg:gap-10 p-2 md:p-4">
                    <div className="w-full md:w-1/3 max-w-xs md:max-w-none">
                      <Image
                        src="/images/testimonials-user-img.webp"
                        alt="Testimonial"
                        width={600}
                        height={600}
                        className="rounded-lg object-cover w-full h-auto md:w-64 lg:w-80 mx-auto"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>
                    <div className="flex-1 text-center md:text-left px-4 md:px-0">
                      <div className="space-y-3 md:space-y-4 lg:space-y-5">
                        <p className="text-base md:text-lg lg:text-xl font-body italic text-white leading-relaxed">
                          "{testimonial?.quote}"
                        </p>
                        <div className="mt-4">
                          <h4 className="text-lg md:text-xl lg:text-2xl font-heading font-semibold text-white">
                            {testimonial?.name}
                          </h4>
                          <p className="text-white text-sm md:text-base">
                            {testimonial?.designation}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2 md:left-4 scale-75 md:scale-100 hover:bg-white/20" />
            <CarouselNext className="right-2 md:right-4 scale-75 md:scale-100 hover:bg-white/20" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;
