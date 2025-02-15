"use client";

import BenefitsSection from "./benefits";
import ContactSection from "./contact";
import FAQSection from "./faq";
import FeaturedBlogs from "./featured-blogs";
import OurGallery from "./gallery";
import HeroSection from "./hero";
import MainServices from "./main-services";
import ServiceSection from "./service";
import TestimonialsSection from "./testimonials";

function HomePage() {
  return (
    <main>
      <HeroSection />
      <BenefitsSection />
      <ServiceSection />
      <OurGallery />
      <ContactSection />
      <TestimonialsSection />
      <FAQSection />
      <MainServices />
      <FeaturedBlogs />
    </main>
  );
}

export default HomePage;
