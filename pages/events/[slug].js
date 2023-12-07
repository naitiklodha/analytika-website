import sanityClient from "@/data/client";
import { Carousel } from "@material-tailwind/react";
import { FaCalendar, FaClock, FaMapMarkerAlt } from "react-icons/fa";
import Navbar from "@/components/Navbar";
import Head from "next/head";

export default function EventPage({ event }) {
  if (!event) {
    return <div>No event data found.</div>;
  }
  const pageTitle = event.name;
  const pageDescription =event.description;
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


      <div className="py-4 flex flex-col items-center justify-center md:mx-8">
        <h1 className="text-5xl font-extrabold uppercase mb-4 text-transparent bg-clip-text bg-gradient-to-r from-analytikaGreen to-analytikaYellow">
          {event.name}
        </h1>

        <Carousel
          className="rounded-lg mb-6 "
          transition={{ duration: 2 }}
          loop
          autoplay
        >
          {event.gallery.map((image, index) => (
            <img
              key={image} 
              src={image}
              alt={`Event Image ${index}`}
              className="w-full h-80 rounded-lg shadow-md object-cover"
            />
          ))}
        </Carousel>

        <div className="text-gray-300 flex justify-center rounded-md py-6 mx-8 bg-gradient-to-br from-analytikaYellow to-analytikaGreen text-xl md:mx-16">
          <div className="mx-8 md:mx-16 flex-col items-center justify-center">
            <FaCalendar className="mb-4" size={48} />
            <div>{event.date}</div>
          </div>
          <div className="mx-8 md:mx-16 flex-col items-center justify-center">
            <FaClock className="mb-4" size={48} />
            <div>{event.time}</div>
          </div>
          <div className="mx-8 md:mx-16 flex-col max-w-[15ch] items-center justify-center">
            <FaMapMarkerAlt className="mb-4" size={48} />
            <div>{event.venue}</div>
          </div>
        </div>

        <p className="text-gray-300 text-xl font-thin my-8 mx-8 md:mx-16 max-w-[85ch]">{event.description}</p>
      </div>
    </>
  );
}

export async function getStaticPaths() {
  const events = await fetchEventData();

  const paths = events.map((event) => ({
    params: { slug: event.name },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const slug = params.slug;
  const events = await fetchEventData();
  const event = events.find((e) => e.name === slug);

  return {
    props: { event },
  };
}

async function fetchEventData() {
  const EventQuery = `*[_type == 'events'] {
    name,
    description,
    'image': image.asset->url,
    'gallery': gallery[].asset->url,
    date,
    time,
    venue
  }`;

  try {
    const events = await sanityClient.fetch(EventQuery);
    return events;
  } catch (error) {
    console.error("Error fetching event data:", error);
    return [];
  }
}
