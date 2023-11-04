import Link from "next/link";

const BlogList = ({ blogs }) => {
  return (
    <div>
      <h1>Blog Posts</h1>
      <ul>
        {blogs?.map((blog) => (
          <li key={blog._id}>
            <Link href={blog.mediumURL}>
              <a>
                <h2>{blog.title}</h2>
                <p>{blog.description}</p>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogList;
