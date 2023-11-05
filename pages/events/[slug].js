import sanityClient from "@/data/client";
import { Carousel } from "@material-tailwind/react";
import { FaCalendar, FaClock, FaMapMarkerAlt } from "react-icons/fa";
import Navbar from "@/components/Navbar";

export default function EventPage({ event }) {
  if (!event) {
    return <div>No event data found.</div>;
  }

  return (
    <>
      <Navbar />

      <div className="py-4 flex flex-col items-center justify-center md:mx-8">
        <h1 className="text-4xl font-extrabold uppercase mb-4 text-transparent bg-clip-text bg-gradient-to-r from-analytikaGreen to-analytikaYellow">
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
              key={image} // Use a more stable key if possible
              src={image}
              alt={`Event Image ${index}`}
              className="w-full h-80 rounded-lg shadow-md"
            />
          ))}
        </Carousel>

        <div className="text-white flex justify-evenly rounded-md p-6 mx-8 bg-gradient-to-tr from-analytikaGreen to-analytikaYellow text-xl md:mx-16">
          <div className="mx-2 md:mx-16 flex-col items-center justify-center">
            <FaCalendar className="mb-4" size={48} />
            <div>{event.date}</div>
          </div>
          <div className="mx-2 md:mx-16 flex-col items-center justify-center">
            <FaClock className="mb-4" size={48} />
            <div>{event.time}</div>
          </div>
          <div className="mx-2 md:mx-16 flex-col max-w-[15ch] items-center justify-center">
            <FaMapMarkerAlt className="mb-4" size={48} />
            <div>{event.venue}</div>
          </div>
        </div>

        <p className="text-white text-xl my-8 mx-8 md:mx-16">{event.description}</p>
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
