import FadingSlide from "@/components/shared/fadingSlide";
import Heading from "@/components/shared/heading";
import SharedButton from "@/components/shared/sharedButton";
import { Contact2Icon, Headphones } from "lucide-react";
import React from "react";
import { contactDetails } from "@/constants/data/index";
import { ContactInfoProps } from "@/types/index";

function ContactPageHeroSection() {
  return (
    <section className="py-6 md:py-12">
      <div className="flex flex-col items-center justify-center gap-0 bg-cover bg-no-repeat h-[20vh] md:h-[60vh] bg-[url('/images/services-hero.jpeg')]">
        <h1 className="font-heading font-bold capitalize text-4xl sm:text-5xl md:text-7xl text-white text-center px-4">
          Contact Us
        </h1>
        <p className="font-body font-medium capitalize text-white/80 text-sm md:text-base mt-2">
          Horizon care &gt; Contact Us
        </p>
      </div>
      <div className="container grid grid-cols-1 md:grid-cols-12 items-center gap-6 md:gap-8">
        <div className="col-span-12 md:col-span-5 space-y-6 md:space-y-8 py-6 md:py-12">
          <Heading
            accent="Contact Us"
            heading1="Let's work together"
            subhead="Thank you for your interest in Attach Web Agency. We're excited to hear from you."
          />
          {contactDetails.map((contact) => (
            <FadingSlide key={contact.method}>
              <ContactInfoCard {...contact} />
            </FadingSlide>
          ))}
        </div>
        <div className="col-span-12 md:col-span-7">
          <form className="space-y-4 md:space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 pl-10 py-2 md:py-3 bg-white/90 rounded-full border border-gray-200 focus:outline-none focus:border-primary font-body text-sm md:text-base"
                />
              </div>

              <div className="relative">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 pl-10 py-2 md:py-3 bg-white/90 rounded-full border border-gray-200 focus:outline-none focus:border-primary font-body text-sm md:text-base"
                />
              </div>
            </div>

            <div className="relative">
              <select className="w-full px-4 py-2 md:py-3 bg-white/90 rounded-full border border-gray-200 focus:outline-none focus:border-primary appearance-none font-body text-sm md:text-base">
                <option value="">Select Service</option>
              </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div className="relative">
                <input
                  type="date"
                  className="w-full px-4 py-2 md:py-3 bg-white/90 rounded-full border border-gray-200 focus:outline-none focus:border-primary font-body text-sm md:text-base"
                />
              </div>

              <div className="relative">
                <input
                  type="time"
                  className="w-full px-4 py-2 md:py-3 bg-white/90 rounded-full border border-gray-200 focus:outline-none focus:border-primary font-body text-sm md:text-base"
                />
              </div>
            </div>

            <div className="space-y-4 md:space-y-6">
              <div className="relative">
                <textarea
                  placeholder="Enter message"
                  rows={4}
                  className="w-full px-4 pl-10 py-2 md:py-3 bg-white/90 rounded-3xl border border-gray-200 focus:outline-none focus:border-primary font-body text-sm md:text-base"
                />
              </div>

              <FadingSlide>
                <div className="w-full md:w-[40%]">
                  <SharedButton renderText="make an appointment" />
                </div>
              </FadingSlide>
            </div>
          </form>
        </div>
      </div>
      <div className="container px-4 sm:px-6 mt-8 md:mt-12">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3772.532833261432!2d73.11336030000001!3d18.996228400000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7e9a1a5a0c18b%3A0x713d135606b6fedf!2sLucien%20Solutions%20LLP!5e0!3m2!1sen!2sin!4v1738760307779!5m2!1sen!2sin"
          width="100%"
          height="400"
          className="h-[50vh] md:h-[80vh] rounded-3xl"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  );
}

const ContactInfoCard = React.memo(({ message, method }: ContactInfoProps) => {
  return (
    <div className="flex items-center gap-3 sm:gap-4">
      <Contact2Icon size={20} className="text-teal-700 w-5 h-5 sm:w-6 sm:h-6" />
      <div className="flex flex-col">
        <span className="text-gray-500 font-body text-xs sm:text-sm">
          {message}
        </span>
        <p className="text-gray-900 font-semibold font-body text-base sm:text-lg hover:text-teal-700 transition-colors">
          {method}
        </p>
      </div>
    </div>
  );
});

ContactInfoCard.displayName = "ContactInfoCard";

export default ContactPageHeroSection;
