import Link from "next/link";
import { useNextSanityImage } from "next-sanity-image";
import Image from "next/image";
import sanityClient from "@/data/client";

const truncateText = (text, maxLength) => {
  if (text.length > maxLength) {
    return text.slice(0, maxLength) + "...";
  }
  return text;
};

const BlogList = ({ blogs }) => {
  return (
    <div className="mb-8 pt-20" id="blogs">
      <h1 className="text-4xl uppercase font-bold text-center my-8 bg-clip-text text-transparent bg-gradient-to-tr from-analytikaYellow to-analytikaGreen">
        Blogs
      </h1>
      <ul className="grid grid-cols-1 md:mx-8">
        {blogs?.map((blog) => {
          const imageProps = useNextSanityImage(sanityClient, blog.thumbnail);
          const truncatedTitle = truncateText(blog.title, 20); // Adjust the character limit as needed

          return (
            <Link href={blog.mediumURL} key={blog._id}>
              <li
                className="border-white border-2 rounded-lg shadow-lg overflow-hidden md:w-4/5 mx-auto flex transform hover:scale-105 transition-transform"
                key={blog._id}
              >
                {imageProps && (
                  <div className="">
                    <Image
                      {...imageProps}
                      width={200}
                      height={0}
                      className="w-32 h-32"
                      alt={blog.thumbnail.alt || ""}
                    />
                  </div>
                )}
                <div className="p-4">
                  <h2 className="text-2xl font-bold bg-gradient-to-r from-analytikaGreen to-analytikaYellow text-transparent bg-clip-text transition hover:scale-105">
                    {truncatedTitle}
                  </h2>
                  <div className="mt-2 text-gray-400">
                    <div className="line-clamp-2 overflow-hidden transition hover:line-clamp-3">
                      {blog.description}
                    </div>
                  </div>
                  <p
                    className="text-transparent bg-clip-text bg-gradient-to-tr from-analytikaGreen to-analytikaYellow hover:underline"
                  >
                    Read More
                  </p>
                </div>
              </li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default BlogList;
