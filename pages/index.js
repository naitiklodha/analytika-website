import Image from "next/image";
import { groq } from "next-sanity";
import localFont from "next/font/local";
import sanityClient from "@/data/client";
import Navbar from "@/components/Navbar";
import About from "@/components/sections/about-us";
import Events from "@/components/sections/events";
import TeamPage from "@/components/sections/team";
import ContactUs from "@/components/sections/contact-us";
import BlogList from "@/components/sections/blogs";
import Head from "next/head";

const myFont = localFont({ src: "./coolvetica rg.ttf" });

export default function Home({ teamMembers, events, blogs }) {
  const pageTitle = "Analytika - The Data Science Club";
  const pageDescription =
    "Analytika, founded by Om Agrawal, Shreya Govil, and Vanshaj Ajmera, is a thriving data science club at NMIMS (Narsee Monjee Institute of Management Studies). We are dedicated to cultivating a data-centric mindset and fostering an environment for realizing the potential of data-driven insights.";
  const ogImageUrl = "analytika-team.jpeg";
  const siteUrl = "https://analytika-web.netlify.app/";
  return (
    <>
      <Head>
        {/* Title */}
        <title>{pageTitle}</title>

        {/* Meta tags */}
        <meta name="description" content={pageDescription} />

        {/* Open Graph (OG) tags for social media sharing */}
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:image" content={ogImageUrl} />
        <meta property="og:url" content={siteUrl} />
        <meta property="og:type" content="website" />
      </Head>
      <Navbar />
      <main
        className={`min-h-screen bg-analytikaBlack text-analytikaWhite p-7 ${myFont.className} md:max-w-[150ch] mx-auto scrollbar-thumb-red-500`}
      >
        <section className="flex flex-col-reverse mt-8 md:flex-row justify-between space-x-4 md:space-x-0">
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-5xl md:text-7xl font-extrabold mt-12 md:mt-20 tracking-wide mb-6 md:mb-0">
              The only
              <br />
              <span className="font-black text-transparent bg-clip-text bg-gradient-to-tr from-analytikaGreen to-analytikaYellow">
                Data Science
              </span>
              <br />
              club of NMIMS
            </h1>
          </div>
          <div className="md:w-1/2">
            <Image
              className="transition-transform hover:scale-110 min-w-full"
              src="/Hero-illustration.svg"
              alt="illustration"
              width={800}
              height={600}
            />
          </div>
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
  const query = groq`*[_type == "team" && (role == "President" || role == "Vice President")]{_id, name, position, department, role, "image": image.asset->}`;
  const teamMembers = await sanityClient.fetch(query);

  const eventsQuery = groq`*[_type == 'events'] {
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
  const events = await sanityClient.fetch(eventsQuery);

  const blogsQuery = groq`*[_type == 'blogPost'] {
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
