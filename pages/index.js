import Image from "next/image";
import { Inter } from "next/font/google";
import { groq } from "next-sanity";
import localFont from "next/font/local";
import sanityClient from "@/data/client";
import Navbar from "@/components/Navbar";
import About from "@/components/sections/about-us";
import Events from "@/components/sections/events";
import TeamPage from "@/components/sections/team";
import ContactUs from "@/components/sections/contact-us";
import BlogList from "@/components/sections/blogs";

const inter = Inter({ subsets: ["latin"] });
const myFont = localFont({ src: "./coolvetica rg.ttf" });

export default function Home({ teamMembers, events, blogs }) {
  return (
    <>
      <Navbar />

      <main
        className={
          "min-h-screen bg-analytikaBlack ${myFont.className} p-7 md:max-w-[150ch] mx-auto "
        }
      >
        <section className="flex flex-col-reverse mt-8 md:flex-row justify-between [&>*]:max-w-[150ch] [&>*]:mx-auto text-center  md:text-left">
          <h1 className="text-5xl md:text-7xl font-extrabold mt-12 md:mt-20 tracking-wide mb-6 md:mb-0">
            The only
            <br />{" "}
            <span className="font-black text-transparent bg-clip-text bg-gradient-to-tr from-analytikaGreen to-analytikaYellow">
              Data Science
            </span>{" "}
            <br />
            club of NMIMS
          </h1>
          <Image
            className="transition ease-linear delay-100 md:hover:scale-110 min-w-full md:min-w-[50%]"
            src="Hero-illustration.svg"
            width={0}
            height={0}
            sizes="100vw"
            alt="illustration"
          />
        </section>
        <About />
        <Events events={events} />
        <BlogList blogs={blogs} />
        <TeamPage teamMembers={teamMembers} />
        <ContactUs />
      </main>
    </>
  );
}
export async function getStaticProps() {
  // Fetch team members from Sanity
  const query = groq`*[_type == "team"]{_id, name, position, department, role, "image": image.asset->}`;
  const teamMembers = await sanityClient.fetch(query);
  const Eventquery = `*[_type == 'events'] {
    name,
    description,
    image {
      asset-> {
        _id,
        url
      },
      alt
    },
    gallery {
      asset-> {
        _id,
        url
      },
      alt
    }
  }`;

  const events = await sanityClient.fetch(Eventquery);

  const blogsQuery = `*[_type == 'blogPost'] {
		_id,
		title,
		description,
		thumbnail,
		mediumURL
	  }`;

  const blogs = await sanityClient.fetch(blogsQuery);
  return {
    props: {
      teamMembers,
      events,
      blogs,
    },
  };
}
