import sanityClient from "@/data/client";
import { Carousel } from "@material-tailwind/react";
import { FaCalendar, FaClock, FaMapMarkerAlt } from "react-icons/fa";
import Navbar from "@/components/Navbar";

export default function EventPage({ event }) {
  return (
    <>
      <Navbar />

      <div className="py-4 flex flex-col items-center justify-center text-white">
        <h1 className="text-4xl font-extrabold uppercase mb-4 text-transparent bg-clip-text">
          {event.name}
        </h1>

        <Carousel
          className="rounded-lg mb-6 w-4/5"
          transition={{ duration: 2 }}
          loop
          autoplay
        >
          {event.gallery.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Event Image ${index}`}
              className="w-full h-80 rounded-lg shadow-md"
            />
          ))}
        </Carousel>

        <div className="flex flex-wrap justify-center p-4 md:p-8 bg-gradient-to-r from-analytikaYellow to-analytikaGreen  ">
          <div className="text-center mb-4 md:w-1/3">
            <FaCalendar className="mb-4 text-analytikaGreen" size={48} color="analytikaYellow" />
            <div className="text-analytikaYellow">{event.date}</div>
          </div>
          <div className="text-center mb-4 md:w-1/3">
            <FaClock className="mb-4 text-analytikaGreen" size={48} color="analytikaYellow" />
            <div className="text-analytikaYellow">{event.time}</div>
          </div>
          <div className="text-center mb-4 md:w-1/3">
            <FaMapMarkerAlt className="mb-4 text-analytikaGreen" size={48} color="analytikaYellow" />
            <div className="text-analytikaYellow">{event.venue}</div>
          </div>
        </div>
        <p className="text-white mt-8 mx-4 md:mx-16">{event.description}</p>
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
