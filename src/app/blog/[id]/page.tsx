import SingleBlog from "@/components/pages/blog/single-blog";
import { useRouter } from "next/router";

function SingleBlogPage({ params }: { params: { id: string } }) {
  return <SingleBlog id={params.id} />;
}

export default SingleBlogPage;
