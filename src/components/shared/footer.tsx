"use client";

import { footerData } from "@/constants/data/index";
import FadingSlide from "./fadingSlide";

function Footer() {
  const { company } = footerData;
  const { workingTime } = footerData;
  const { contactUs } = footerData;
  return (
    <footer className="bg-[#1a3841] py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-start gap-4 md:gap-8 container">
        {/* Company Section */}
        <div className="col-span-1 space-y-4 mb-8 md:mb-0">
          <h3 className="font-heading font-medium capitalize text-white/80 text-2xl md:text-3xl lg:text-4xl">
            {company.title}
          </h3>
          {company.links.map((link) => (
            <p
              key={link.label}
              className="font-body font-normal text-white/80 text-sm md:text-base cursor-pointer hover:text-white/50 transition-colors duration-500"
            >
              {link.label}
            </p>
          ))}
        </div>

        {/* Working Hours Section */}
        <div className="col-span-1 space-y-4 mb-8 md:mb-0">
          <h3 className="font-heading font-medium capitalize text-white/80 text-2xl md:text-3xl lg:text-4xl">
            {workingTime?.title}
          </h3>
          {workingTime?.schedule?.map((times) => (
            <p
              key={times.days}
              className="font-body font-normal text-white/80 text-sm md:text-base cursor-pointer hover:text-white/50 transition-colors duration-500"
            >
              {times.days} {times.hours}
            </p>
          ))}
        </div>

        {/* Contact Section */}
        <div className="col-span-1 space-y-4 mb-8 md:mb-0">
          <h3 className="font-heading font-medium capitalize text-white/80 text-2xl md:text-3xl lg:text-4xl">
            {contactUs.title}
          </h3>
          <p className="font-body font-normal text-white/80 text-sm md:text-base cursor-pointer hover:text-white/50 transition-colors duration-500">
            {contactUs.info.phone}
          </p>
          <p className="font-body font-normal text-white/80 text-sm md:text-base cursor-pointer hover:text-white/50 transition-colors duration-500">
            {contactUs.info.email}
          </p>
          <p className="font-body font-normal text-white/80 text-sm md:text-base cursor-pointer hover:text-white/50 transition-colors duration-500">
            {contactUs.info.address}
          </p>
        </div>

        {/* Newsletter Section */}
        <div className="col-span-1 space-y-4">
          <h3 className="font-heading font-medium capitalize text-white/80 text-2xl md:text-3xl lg:text-4xl">
            Subscribe newsletter
          </h3>
          <p className="font-body font-normal text-white/80 text-sm md:text-base cursor-pointer hover:text-white/50 transition-colors duration-500">
            I'm okay with getting emails and having that tracked to improve my
            experience
          </p>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="container pt-8 mt-8 md:mt-12 border-t border-white/20">
        <div className="container px-4 sm:px-6 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="font-body text-white/80 text-xs md:text-sm order-2 md:order-1">
            © 2024 Horizon Care. All rights reserved
          </p>
          <div className="flex flex-wrap justify-center gap-4 order-1 md:order-2">
            <a
              href="/terms"
              className="font-body text-white/80 text-xs md:text-sm hover:text-white/50 transition-colors duration-500"
            >
              Terms and conditions
            </a>
            <a
              href="/privacy"
              className="font-body text-white/80 text-xs md:text-sm hover:text-white/50 transition-colors duration-500"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
