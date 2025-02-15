import FadingSlide from "@/components/shared/fadingSlide";
import Heading from "@/components/shared/heading";
import { Progress } from "@/components/shared/progress";
import SharedButton from "@/components/shared/sharedButton";
import Image from "next/image";
import { progressData } from "@/constants/data";
import { benefitsData } from "@/constants/data";

function BenefitsSection() {
  return (
    <section className="py-8 md:py-12 space-y-16 md:space-y-32 px-4 xs:px-8 lg:px-0">
      <div className="container grid grid-cols-1 lg:grid-cols-2 items-start gap-6 md:gap-8 lg:gap-12 my-6 md:my-10">
        <div className="col-span-1 space-y-3 order-2 lg:order-1">
          <Heading
            accent="People Benefits"
            heading1="Get 50% Off On"
            heading2="YourFirst Insurance Plan"
            subhead="Take the first step towards comprehensive protection with Horizon Care. Enjoy exclusive discounts designed to make health and life insurance more accessible for you and your family."
          />
          <FadingSlide>
            <p className="font-heading font-medium text-lg md:text-xl mt-6 md:mt-8">
              Our Special Benefits:
            </p>
          </FadingSlide>
          <FadingSlide>
            <div className="grid grid-cols-1 xs:grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mt-2">
              {benefitsData?.map((benefit, index) => (
                <div
                  key={index}
                  className="col-span-1 flex items-center gap-2 md:gap-3"
                >
                  <svg
                    className="w-5 h-5 md:w-6 md:h-6 text-primary"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"
                    />
                  </svg>
                  <p className="font-body text-sm md:text-base text-hover/70">
                    {benefit?.benefit}
                  </p>
                </div>
              ))}
            </div>
          </FadingSlide>
          <FadingSlide>
            <div className="w-full md:max-w-52 mt-4">
              <SharedButton renderText="view services" />
            </div>
          </FadingSlide>
        </div>
        <div className="col-span-1 order-1 lg:order-2">
          <Image
            src="/images/benefits-1.webp"
            alt="benefits-1"
            width={600}
            height={600}
            className="w-full h-auto max-w-[600px] mx-auto object-cover"
          />
        </div>
      </div>

      <div className="container grid grid-cols-1 lg:grid-cols-2 items-start gap-6 md:gap-8 lg:gap-12 my-6 md:my-10">
        <div className="col-span-1">
          <Image
            src="/images/benefits-2.webp"
            alt="benefits-2"
            width={600}
            height={600}
            className="w-full h-auto max-w-[600px] mx-auto object-cover"
          />
        </div>
        <div className="col-span-1 space-y-3">
          <Heading
            accent="People Benefits"
            heading1="Get 50% Off On"
            heading2="YourFirst Insurance Plan"
            subhead="At Horizon Care, we’re committed to providing insurance solutions that prioritize your health, safety, and peace of mind. Enjoy a special 50% discount on your first plan, tailored to meet your unique needs."
          />
          <FadingSlide>
            <p className="font-heading font-medium text-lg md:text-xl mt-6 md:mt-8">
              Our Key Strengths:
            </p>
          </FadingSlide>
          <FadingSlide>
            <div className="grid grid-cols-1 xs:grid-cols-2 gap-4 md:gap-6 mt-2">
              {progressData?.map((progress) => (
                <div key={progress.label} className="space-y-2">
                  <div className="flex items-center justify-between w-full">
                    <p className="font-body text-xs md:text-lg">{progress.label}</p>
                    <p className="font-body">{progress.percentage}%</p>
                  </div>
                  <Progress value={65} />
                </div>
              ))}
            </div>
          </FadingSlide>
          <FadingSlide>
            <div className="w-full md:max-w-52 mt-4">
              <SharedButton renderText="view services" />
            </div>
          </FadingSlide>
        </div>
      </div>
    </section>
  );
}

export default BenefitsSection;
