import { Carousel, Typography, Button } from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";
import { useNextSanityImage } from "next-sanity-image";
import sanityClient from "@/data/client";
import React, { useState } from "react";

function EventCard({ event }) {
  const imageProps = useNextSanityImage(sanityClient, event.image);
  const maxDescriptionLength = 25;

  const truncatedDescription =
    event.description.length > maxDescriptionLength
      ? event.description.slice(0, maxDescriptionLength) + "..."
      : event.description;

  const [isReadMore, setIsReadMore] = useState(false);

  return (
    <Link href={`/events/${event?.name}`}>
      <div className="relative overflow-hidden w-full cursor-pointer">
        <Image
          {...imageProps}
          className="w-full mx-auto h-80 transition-transform transform scale-100 hover:scale-105"
          alt={event.image.alt || ""}
        />
        <div className="absolute inset-0 grid place-items-center bg-black/75">
          <div className="w-3/4 text-center md:w-2/4">
            <Typography
              variant="h1"
              className="mb-4 font-extrabold leading-tight text-transparent bg-clip-text bg-gradient-to-tr from-analytikaGreen to-analytikaYellow"
            >
              {event.name}
            </Typography>
            <Typography variant="lead" color="white" className="mb-4">
              {isReadMore ? event.description : truncatedDescription}
            </Typography>
            {event.description.length > maxDescriptionLength && (
              <Button
                size="lg"
                className="bg-gradient-to-tr from-analytikaYellow to-analytikaGreen"
              >
                Explore
              </Button>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}

export default function Events({ events }) {
  return (
    <div className="p-4 pt-20" id="events">
      <h1 className="text-4xl text-center font-extrabold text-transparent bg-clip-text bg-gradient-to-tr from-analytikaGreen to-analytikaYellow my-6">
        EVENTS!
      </h1>

      <Carousel className="rounded-xl md:w-4/5 mx-auto">
        {events?.map((event, index) => (
          <EventCard key={index} event={event} />
        ))}
      </Carousel>
    </div>
  );
}
