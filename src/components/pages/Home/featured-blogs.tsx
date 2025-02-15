import FadingSlide from "@/components/shared/fadingSlide";
import Heading from "@/components/shared/heading";
import SharedButton from "@/components/shared/sharedButton";
import { featuredBlogCards } from "@/constants/data";
import { FeaturedBlogCardProps } from "@/types";
import Image from "next/image";
import React from "react";

function FeaturedBlogs() {
  return (
    <section className="px-4 sm:px-6 md:px-8">
      <div className="container grid grid-cols-1 md:grid-cols-12 items-start gap-y-8 md:gap-x-12 py-8 md:py-16">
        <div className="md:col-span-4 space-y-6 lg:space-y-8">
          <Heading
            accent="FEATURED THIS WEEK"
            heading1="Most Reliable Insures"
            heading2="Efficient Consulting Agency"
            subhead="Empowering businesses with strategic consulting solutions to drive growth and efficiency. Our visionary approach ensures impactful results, transforming challenges into opportunities."
          />
          <FadingSlide>
            <div className="w-full md:w-1/2 lg:w-[50%]">
              <SharedButton renderText="read more" />
            </div>
          </FadingSlide>
        </div>
        <div className="md:col-span-8 space-y-6 md:space-y-8 lg:space-y-12">
          {featuredBlogCards?.map((featuredBlog) => (
            <FadingSlide key={featuredBlog.title}>
              <BlogCard {...featuredBlog} />
            </FadingSlide>
          ))}
        </div>
      </div>
    </section>
  );
}

const BlogCard = React.memo(
  ({ title, author, date, imageUrl }: FeaturedBlogCardProps) => {
    return (
      <div className="flex flex-col md:flex-row rounded-lg overflow-hidden border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
        <div className="relative w-full md:w-48 h-48">
          <Image
            src={imageUrl}
            alt={title}
            layout="fill"
            objectFit="cover"
            className="rounded-t-lg md:rounded-l-lg md:rounded-t-none"
          />
        </div>

        <div className="flex flex-col flex-grow p-6">
          <div className="flex items-center text-sm font-body text-gray-600 mb-2">
            <span className="capitalize text-xs md:text-sm">BY {author}</span>
            <span className="mx-2">•</span>
            <span className="font-body text-xs md:text-sm">{date}</span>
          </div>

          <h2 className="text-sm md:text-xl font-heading font-bold text-gray-900 mb-4 line-clamp-2">
            {title}
          </h2>

          <div className="mt-auto w-[70%] md:w-[40%]">
            <SharedButton renderText="read more" />
          </div>
        </div>
      </div>
    );
  }
);
BlogCard.displayName = "BlogCard";

export default FeaturedBlogs;
