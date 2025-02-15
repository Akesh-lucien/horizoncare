import FadingSlide from "@/components/shared/fadingSlide";
import Heading from "@/components/shared/heading";
import { UserCircle } from "lucide-react";
import React from "react";
import { whyChooseCardsData } from "@/constants/data";
import { WhyChooseProps } from "@/types";

function WhyChooseUs() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 items-center gap-y-8 md:gap-0 py-8 md:py-16">
      <div className="md:col-span-1 bg-[url('/images/choosusbg.jpeg')] bg-cover bg-center h-64 sm:h-96 md:h-[120vh] w-full"></div>
      <div className="md:col-span-1 grid grid-cols-1 items-center space-y-6 md:space-y-8 px-4 sm:px-6 md:px-9">
        <Heading
          accent="Why People Choose Us"
          heading1="Take control &"
          heading2="learn about your money."
        />
        {whyChooseCardsData.map((data) => (
          <FadingSlide key={data.title}>
            <WhyChooseCard {...data} />
          </FadingSlide>
        ))}
      </div>
    </section>
  );
}

const WhyChooseCard = React.memo(
  ({ title, description, Icon }: WhyChooseProps) => {
    return (
      <div className=" py-4 md:py-6 lg:py-8 w-full rounded-xl lg:rounded-2xl">
        <div className="flex items-start gap-4 md:gap-6">
          <div className="bg-[#c9d9d9] w-20 h-20 md:w-24 md:h-24 lg:w-24 lg:h-24 rounded-full flex items-center justify-center flex-shrink-0">
            <Icon />
          </div>

          <div className="flex flex-col">
            <h2 className="text-[#1B4B43] text-xl md:text-2xl lg:text-3xl font-heading font-medium mb-2 md:mb-3">
              {title}
            </h2>
            <p className="text-gray-500 text-sm md:text-base lg:text-lg font-body leading-relaxed">
              {description}
            </p>
          </div>
        </div>
      </div>
    );
  }
);
WhyChooseCard.displayName = "WhyChooseCard";

export default WhyChooseUs;
