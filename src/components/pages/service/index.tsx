"use client";

import ServicePageHeroSection from "./hero";
import RecentBlogs from "./recent-blogs";
import WhyChooseUs from "./why-choose-us";

function ServicePage() {
  return (
    <main className="">
      <ServicePageHeroSection />
      <WhyChooseUs />
      <RecentBlogs />
    </main>
  );
}

export default ServicePage;
