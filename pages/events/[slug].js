import sanityClient from "@/data/client";
import { Carousel } from "@material-tailwind/react";
import { FaCalendar, FaClock, FaMapMarkerAlt } from "react-icons/fa";
import Navbar from "@/components/Navbar";
import Head from "next/head";
import Image from "next/image";

export default function EventPage({ event }) {
  if (!event) {
    return <div>No event data found.</div>;
  }
  const pageTitle = event.name;
  const pageDescription = event.description;
  const ogImageUrl = "analytika-team.jpeg";
  const siteUrl = "https://analytikanmims.com/";

  const splitDescriptionIntoParagraphs = (description) => {
    const paragraphs = description.split("\n");

    return paragraphs;
  };

  const descriptionParagraphs = splitDescriptionIntoParagraphs(
    event.description
  );

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
          className="rounded-lg my-6 w-[80%]"
          transition={{ duration: 2 }}
          loop
          autoplay
        >
          {event.gallery.map((image, index) => (
            <Image
              key={image}
              src={image}
              width={500}
              height={500}
              alt={`Event Image ${index}`}
              className="w-full max-h-[70vh] rounded-lg shadow-md object-cover"
            />
          ))}
        </Carousel>

        <div className="text-gray-300 flex text-center mt-4 flex-col md:flex-row justify-between rounded-md p-6 px-12 md:px-6 mx-8 bg-gradient-to-tr from-analytikaGreen to-analytikaGreen text-xl md:mx-16">
          <div className="mx-auto md:mx-16 flex flex-col p-4  items-center justify-center">
            <FaCalendar className="mb-4" size={48} />
            <div>
              {new Date(event.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
              <br />
              {new Date(event.date).toLocaleDateString("en-US", {
                weekday: "long",
              })}
            </div>
          </div>
          <div className="mx-auto md:mx-16 flex flex-col p-4 items-center justify-center">
            <FaClock className="mb-4" size={48} />
            <div>{event.time}</div>
          </div>
          <div className="mx-auto md:mx-16 flex text-center flex-col  p-4 items-center justify-center">
            <FaMapMarkerAlt className="mb-4" size={48} />
            <div>{event.venue}</div>
          </div>
        </div>

        <div className="text-gray-400 text-xl font-thin my-8 mx-8 md:mx-16 max-w-[85ch]">
          {descriptionParagraphs.map((paragraph, index) => (
            <p key={index} className="m-2">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps({ params }) {
  const slug = params.slug;
  const events = await fetchEventData();
  console.log("Slud: ",slug);
  const event = events.find((e) => e.name === slug);
  console.log(event)
  if (!event) {
    return {
      notFound: true, 
    };
  }
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
