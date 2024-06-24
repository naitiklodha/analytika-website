import Link from "next/link";
import { useNextSanityImage } from "next-sanity-image";
import Image from "next/image";
import sanityClient from "@/data/client";

const BlogList = ({ blogs }) => {
  return (
    <div className="mb-8 pt-20" id="blogs">
      <h2 className="text-4xl uppercase font-bold text-center my-8 bg-clip-text text-transparent bg-gradient-to-tr from-analytikaBlue to-analytikaPurple">
        Blogs
      </h2>
      <ul className="grid grid-cols-1 gap-8 place-items-center md:mx-8">
        {blogs?.map((blog) => {
          const imageProps = useNextSanityImage(sanityClient, blog.thumbnail);

          return (
            <Link
              href={blog.mediumURL}
              key={blog._id}
              className="flex flex-col items-center  border border-gray-200 rounded-lg shadow md:flex-row md:max-w-3xl"
            >
              <Image
                className="object-cover w-full rounded-t-lg h-full md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
                {...imageProps}
                width={200}
                height={0}
                alt={blog.thumbnail.alt || blog.title}
              />

              <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-transparent bg-gradient-to-tr from-analytikaBlue to-analytikaPurple bg-clip-text ">
                  {blog.title}
                </h5>
                <p className="mb-3 font-normal text-gray-400">
                  {blog.description}
                </p>
              </div>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default BlogList;
