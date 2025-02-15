import { BlogCardProps } from "@/types";
import Image from "next/image";
import React from "react";

const RecentBlogCard = React.memo(
  ({ title, author, date, imageUrl }: BlogCardProps) => {
    return (
      <div className="flex flex-col md:flex-row rounded-lg cursor-pointer overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
        <div className="relative w-full md:w-24 h-24">
          <Image
            src={imageUrl}
            alt={title}
            layout="fill"
            objectFit="cover"
            className="rounded-t-lg md:rounded-l-lg md:rounded-t-none"
          />
        </div>

        <div className="flex flex-col flex-grow py-2 px-3">
          <h2 className="text-sm md:text-xl font-heading font-bold text-gray-900 mb-4 line-clamp-2">
            {title}
          </h2>
          <div className="flex items-center text-sm font-body text-gray-600 mb-2">
            <span className="uppercase font-body text-xs md:text-sm">BY {author}</span>
            <span className="mx-2">•</span>
            <span className="font-body">{date}</span>
          </div>
        </div>
      </div>
    );
  }
);

export default RecentBlogCard;
