import { Carousel, Typography, Button } from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";
import { useNextSanityImage } from "next-sanity-image";
import sanityClient from "@/data/client"; // Import your Sanity client

export default function Events({ events }) {
  return (
    <div className="max-w-screen-lg mx-auto p-4">
      <Carousel className="rounded-xl">
        {events.map((event, index) => {
          const imageProps = useNextSanityImage(sanityClient, event.image);
          return (
            <div key={index} className="relative overflow-hidden">
              <div className="relative w-full max-h-[500px]">
                <Image
                  {...imageProps}
                  className="w-full h-80" // Set the width to 100% to occupy full width
                  alt={event.image.alt || ""}
                />
              </div>
              <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
                <div className="w-3/4 text-center md:w-2/4">
                  <Typography
                    variant="h1"
                    color="white"
                    className={`mb-4  font-extrabold leading-tight`}
                  >
                    {event.name}
                  </Typography>
                  <Typography variant="lead" color="white" className={`mb-12 `}>
                    {event.description}
                  </Typography>
                  <Link href={`/event/${event.name}`}>
                    <p>
                      <Button size="lg" color="white" bg="bg-blue-500">
                        Explore
                      </Button>
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}


