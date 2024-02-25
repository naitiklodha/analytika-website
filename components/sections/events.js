import { Carousel, Typography, Button } from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";
import { useNextSanityImage } from "next-sanity-image";
import client from "@/data/client";
import React from "react";

function EventCardContent({ event, isUpcoming, buttonContent, imageProps,key }) {
  return (
    <Link
      href={
        isUpcoming && event.registrationLink
          ? event?.registrationLink
          : `/events/${event?.name}`
      }
      target="blank"
      key={key}
    >
      <div className="relative overflow-hidden w-full cursor-pointer">
        <Image
          {...imageProps}
          className="w-full mx-auto h-[350px] md:h-[70vh] transition-transform transform scale-100 hover:scale-105 object-cover"
          alt={event.image.alt || ""}
        />
        <div className="absolute inset-0 grid place-items-center bg-black/75">
          <div className="w-11/12 mx-auto text-center md:w-2/4">
            <Typography
              variant="h1"
              className="mb-4 font-semibold leading-tight text-transparent bg-clip-text bg-gradient-to-tr from-analytikaGreen to-analytikaYellow text-xl md:text-3xl"
            >
              {event.name}
            </Typography>

            <Button className="bg-gradient-to-tr from-analytikaYellow to-analytikaGreen mt-6 p-2 md:p-4 text-sm md:text-base">
              {buttonContent}
            </Button>
          </div>
        </div>
      </div>
    </Link>
  );
}

function EventCard({ event, isUpcoming }) {
  const buttonContent = isUpcoming ? "Register Now" : "Explore";
  const imageProps = useNextSanityImage(client, event.image);

  return (
    <EventCardContent
      event={event}
      key={event._id}
      isUpcoming={isUpcoming}
      buttonContent={buttonContent}
      imageProps={imageProps}
    />
  );
}

function EventSection({ events, isUpcoming }) {
  const filteredEvents = events.filter((event) =>
    isUpcoming
      ? new Date(event.date) > new Date()
      : new Date(event.date) < new Date()
  );

  if (filteredEvents.length === 0) {
    return null;
  }

  return (
    <div className="p-4 pt-20">
      <h2 className="text-4xl mb-10 text-center uppercase font-extrabold text-transparent bg-clip-text bg-gradient-to-tr from-analytikaGreen to-analytikaYellow my-6">
        {isUpcoming ? "Upcoming EVENTS" : "Past events"}
      </h2>
      <Carousel className="rounded-xl mx-auto">
        {filteredEvents.map((event) => (
          <EventCard key={event.id} event={event} isUpcoming={isUpcoming} />
        ))}
      </Carousel>
    </div>
  );
}

export default function Events({ events }) {
  return (
    <div className="p-4 pt-20" id="events">
      <EventSection events={events} isUpcoming={true} />
      <EventSection events={events} isUpcoming={false} />
    </div>
  );
}
