import FadingSlide from "@/components/shared/fadingSlide";
import Heading from "@/components/shared/heading";
import SharedButton from "@/components/shared/sharedButton";
import Image from "next/image";

function ContactSection() {
  return (
    <section className="bg-[url('/images/contact-bg-lg.png')] bg-cover bg-no-repeat px-4 sm:px-6 md:px-8 pt-10 md:pt-0">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 items-start gap-y-8 md:gap-x-12 py-8 md:py-16">
        <div className="col-span-1 space-y-6 md:space-y-8 order-last md:order-first">
          <Heading
            accent="Let'S Discuss About Projects"
            heading1="Make an Appointment"
          />
          <FadingSlide>
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
                <select className="w-full px-4 py-2 md:py-3 bg-white/90 rounded-full border border-gray-200 focus:outline-none focus:border-primary appearance-none font-body text-sm md:text-base"></select>
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

              <div className="grid grid-cols-1 gap-4 md:gap-6">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Enter message"
                    className="w-full px-4 pl-10 py-2 md:py-3 bg-white/90 rounded-full border border-gray-200 focus:outline-none focus:border-primary font-body text-sm md:text-base"
                  />
                </div>
                <FadingSlide>
                  <div className="w-full md:w-[45%]">
                    <SharedButton renderText="make an appointment" />
                  </div>
                </FadingSlide>
              </div>
            </form>
          </FadingSlide>
        </div>

        <div className="col-span-1 order-first md:order-last">
          <Image
            src="/images/contact-right.webp"
            alt="Contact illustration"
            width={700}
            height={700}
            className="w-full h-auto max-w-[700px] mx-auto object-cover rounded-xl"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
