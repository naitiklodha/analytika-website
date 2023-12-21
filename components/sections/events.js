import { Carousel, Typography, Button } from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";
import { useNextSanityImage } from "next-sanity-image";
import sanityClient from "@/data/client";
import React, { useState } from "react";

function EventCard({ event }) {
  const imageProps = useNextSanityImage(sanityClient, event.image);

  const truncateDescription = (description, limit) => {
    const words = description.split(" ");
    if (words.length > limit) {
      return words.slice(0, limit).join(" ") + "...";
    }
    return description;
  };

  const truncatedDescription = truncateDescription(event.description, 15);

  return (
    <Link href={`/events/${event?.name}`}>
      <div className="relative overflow-hidden w-full cursor-pointer">
        <Image
          {...imageProps}
          className="w-full mx-auto max-h-[70vh] transition-transform transform scale-100 hover:scale-105 object-cover"
          alt={event.image.alt || ""}
        />
        <div className="absolute inset-0 grid place-items-center bg-black/75">
          <div className="w-3/4 text-center md:w-2/4">
            <Typography
              variant="h1"
              className="mb-4 font-semibold leading-tight text-transparent bg-clip-text bg-gradient-to-tr from-analytikaGreen to-analytikaYellow"
            >
              {event.name}
            </Typography>

            <Button className="bg-gradient-to-tr  from-analytikaYellow to-analytikaGreen mt-6 p-4">
              Explore
            </Button>
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

      <Carousel className="rounded-xl  mx-auto">
        {events?.map((event, index) => (
          <EventCard key={index} event={event} />
        ))}
      </Carousel>
    </div>
  );
}
