import Image from "next/image";
import { groq } from "next-sanity";
import sanityClient from "@/data/client";
import Navbar from "@/components/Navbar";
import About from "@/components/sections/about-us";
import Events from "@/components/sections/events";
import TeamPage from "@/components/sections/team";
import ContactUs from "@/components/sections/contact-us";
import BlogList from "@/components/sections/blogs";
import Head from "next/head";
import { useState } from "react";
import Link from "next/link";

export default function Home({ teamMembers, events, blogs }) {
  const [showPopup, setShowPopup] = useState(true);

  const pageTitle = "Analytika - The Data Science Club";
  const pageDescription =
    "Analytika, founded by Om Agrawal, Shreya Govil, and Vanshaj Ajmera, is a thriving data science club at NMIMS (Narsee Monjee Institute of Management Studies). We are dedicated to cultivating a data-centric mindset and fostering an environment for realizing the potential of data-driven insights.";
  const ogImageUrl = "analytika-team.jpeg";
  const siteUrl = "https://analytikanmims.com";

  const handlePopupClose = () => {
    setShowPopup(false);
  };

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
      {showPopup && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="p-8 bg-analytikaBlack m-4 rounded-lg relative">
            <button
              className="absolute top-2 right-2 text-gray-400 hover:text-gray-500"
              onClick={handlePopupClose}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <p className="text-lg">
              Executive Recruitments are Live !!{" "}
       <br/>
              <Link
                href="https://forms.gle/7GhU17gJSDazywYZA"
                className="text-transparent bg-clip-text bg-gradient-to-tr from-analytikaGreen to-analytikaYellow underline"
                onClick={handlePopupClose}
                target="blank"
              >
                Click here to apply and join our family.
              </Link>
            </p>
          </div>
        </div>
      )}
      <main
        className={`min-h-screen bg-analytikaBlack text-analytikaWhite p-7 md:max-w-[150ch] mx-auto scrollbar-thumb-red-500`}
      >
        <section className="flex flex-col-reverse mt-8 md:flex-row justify-between space-x-4 md:space-x-0">
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-5xl text-start md:text-7xl font-extrabold mt-12 md:mt-20 tracking-wide mb-6 md:mb-0">
              The only <br />
              <span className="font-black text-transparent bg-clip-text bg-gradient-to-tr from-analytikaGreen to-analytikaYellow">
                Data Science
              </span>
              <br />
              Club of NMIMS MPSTME
            </h1>
          </div>
          <div className="md:w-1/2">
            <Image
              className="transition-transform hover:scale-110 min-w-full"
              src="/Hero-illustration.svg"
              alt="illustration"
              width={800}
              height={600}
              priority
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

export async function getServerSideProps() {
  const query = groq`*[_type == "team" && (role == "President" || role == "Secretary" || role == "Treasurer" || role == "Joint President" || role == "Faculty Mentor" || role == "Vice President")]{_id, name, position, department, role, "image": image.asset->}`;
  const teamMembers = await sanityClient.fetch(query);

  const eventsQuery = groq`*[_type == 'events'] {
    name,
    description,
    date,
    image {
      asset-> {
        _id,
        url
      },
      alt
    },
    registrationLink,
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
