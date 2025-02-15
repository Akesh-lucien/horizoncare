import Image from "next/image";
import { BlogCardProps } from "@/types/index";
import { Calendar, User } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

function MainBlogCard({
  id,
  title,
  description,
  author,
  date,
  category,
  imageUrl,
}: BlogCardProps) {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push(`/blog/${id}`)}
      className="max-w-4xl mx-auto bg-gray-300/50 rounded-2xl overflow-hidden shadow-sm"
    >
      {/* Hero Image */}
      <div className="relative w-full h-[40vh] md:h-[60vh]">
        <Image
          src={imageUrl}
          alt="Team meeting"
          className="object-cover rounded-t-2xl"
          fill
          priority
        />
      </div>

      {/* Content Section */}
      <div className="py-6 px-4 md:px-12 space-y-4">
        <div className="grid grid-cols-2 md:grid-cols-3 items-center space-x-6 text-gray-600 text-sm">
          <div className="flex items-center space-x-2">
            <User size={16} />
            <span className="font-body">{author}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Calendar size={16} />
            <span className="font-body">{date}</span>
          </div>
          <Link
            href="#"
            className="text-green-700 font-body hover:text-green-800"
          >
            {category}
          </Link>
        </div>

        {/* Title */}
        <h2 className="text-2xl font-normal font-heading text-gray-800 leading-tight">
          {title}
        </h2>

        {/* Description */}
        <p className="text-gray-600 font-body text-sm leading-relaxed">
          {description}
        </p>

        {/* Read More */}
        <div>
          <Link
            href="#"
            className="inline-flex items-center font-body text-green-700 hover:text-green-800"
          >
            Read More
            <svg
              className="ml-1 w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default MainBlogCard;
