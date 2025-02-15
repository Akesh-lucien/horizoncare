import FadingSlide from "@/components/shared/fadingSlide";
import Heading from "@/components/shared/heading";
import SharedButton from "@/components/shared/sharedButton";
import React from "react";
import { blogPosts } from "@/constants/data";
import { BlogPostCardProps } from "@/types/index";

function RecentBlogs() {
  return (
    <section className="container py-8 md:py-12 space-y-6 md:space-y-8">
      <Heading
        accent="Latest News Update"
        heading1="Everything about the business"
        heading2="world in one place."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {blogPosts.map((blogData) => (
          <FadingSlide key={blogData.title}>
            <BlogCard key={blogData.title} {...blogData} />
          </FadingSlide>
        ))}
      </div>
    </section>
  );
}

const BlogCard = React.memo(
  ({ category, author, date, title, imageUrl, slug }: BlogPostCardProps) => {
    return (
      <div className="max-w-xl bg-white rounded-3xl overflow-hidden shadow-sm">
        <div className="relative">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-64 object-cover"
          />

          <div className="absolute top-4 left-4">
            <span className="bg-white px-4 py-1 uppercase rounded-full text-sm font-body font-medium">
              {category}
            </span>
          </div>
        </div>

        <div className="p-6 bg-gray-50">
          {/* Author */}
          <div className="flex items-center gap-2 font-body uppercase text-gray-600 text-sm mb-3">
            <span className="text-xs md:text-lg">BY {author}</span>
            <span>•</span>
            <span className="font-body uppercase text-xs md:text-lg">{date}</span>
          </div>

          <h2 className="text-[#1B4B43] font-heading text-lg md:text-2xl font-bold leading-tight mb-6">
            {title}
          </h2>
          <div className="w-[70%] md:w-[50%]">
            <SharedButton renderText="read more" />
          </div>
        </div>
      </div>
    );
  }
);

export default RecentBlogs;
