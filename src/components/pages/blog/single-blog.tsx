"use client";
import MainBlogCard from "./main-blog-card";
import { blogData, tags } from "@/constants/data/index";
import { Input } from "@/components/shadcn/input";
import SharedButton from "@/components/shared/sharedButton";
import RecentBlogCard from "./recent-blog-card";
import FadingSlide from "@/components/shared/fadingSlide";

function SingleBlog({ id }: { id: string }) {
  const currentBlog = blogData.find((blog) => blog.id === id);
  return (
    <section className="">
      <div className="flex flex-col items-center justify-center gap-0 space-y-4 md:space-y-6 bg-cover bg-no-repeat h-[20vh] md:h-[60vh] bg-[url('/images/services-hero.jpeg')]">
        <h1 className="font-heading font-bold capitalize text-4xl sm:text-5xl md:text-7xl text-white text-center px-4">
          Blog Details
        </h1>
        <p className="font-body font-medium capitalize text-white/80 text-sm md:text-base">
          Horizon care &gt; Blog Details
        </p>
      </div>

      <div className="container grid grid-cols-1 md:grid-cols-12 items-start gap-4 md:gap-8 py-6 md:py-12 px-4 sm:px-6">
        <div className="md:col-span-8 space-y-6 md:space-y-8">
          <MainBlogCard
            author={currentBlog?.author}
            category={currentBlog?.category}
            date={currentBlog?.date}
            description={currentBlog?.description}
            imageUrl={currentBlog?.imageUrl}
            title={currentBlog?.title}
          />
        </div>

        <div className="md:col-span-4 space-y-6 md:space-y-8">
          <FadingSlide vertical>
            <form className="flex items-center w-full border border-black rounded-full overflow-hidden">
              <Input
                className="border-none rounded-full flex-1 text-sm md:text-base px-4 md:px-6 py-2 md:py-3"
                type="text"
                placeholder="Search..."
              />
              <div className="w-[50%]">
                <SharedButton renderText="search" />
              </div>
            </form>
          </FadingSlide>

          <div className="space-y-6 md:space-y-8">
            <div className="p-4 md:p-6 lg:p-8 bg-gray-300/30 rounded-xl lg:rounded-2xl space-y-4 md:space-y-6">
              <h3 className="capitalize font-heading font-medium text-xl md:text-2xl text-hover">
                Recent Blogs
              </h3>
              {blogData?.slice(0, 5).map((blog, index) => (
                <FadingSlide key={index}>
                  <RecentBlogCard
                    author={blog.author}
                    category={blog.category}
                    date={blog.date}
                    description={blog.description}
                    imageUrl={blog.imageUrl}
                    title={blog.title}
                  />
                </FadingSlide>
              ))}
            </div>

            <div className="p-4 md:p-6 lg:p-8 bg-gray-300/30 rounded-xl lg:rounded-2xl space-y-4 md:space-y-6">
              <h3 className="capitalize font-heading font-medium text-xl md:text-2xl text-hover">
                Tags
              </h3>
              <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 gap-2">
                {tags.map((tag) => (
                  <div
                    key={tag.id}
                    className="py-1 px-2 md:px-3 md:py-1.5 border border-gray-300 rounded-full bg-white hover:bg-primary hover:text-white transition-all duration-500 cursor-pointer flex items-center justify-center"
                  >
                    <span className="font-body capitalize text-xs md:text-sm">
                      {tag.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SingleBlog;
