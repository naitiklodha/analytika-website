import { useRouter } from "next/router";

const EventCard = ({ event }) => {
  const router = useRouter();

  const handleCardClick = () => {
    // Navigate to the individual event page
    router.push(`/events/${event.slug}`);
  };

  return (
    <div
      className="rounded-lg m-4 overflow-hidden shadow-md hover:shadow-lg transition-transform transform hover:scale-105 cursor-pointer border-analytikaWhite border-2"
      onClick={handleCardClick}
    >
      <div className="relative h-64 md:h-72">
        <img
          src={event.images[0]} // Use the first image as the event cover image
          alt={event.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-analytikaGreen to-analytikaYellow">
            {event.name}
          </span>
        </h2>
        <p className="text-gray-600 mb-4">{event.description}</p>
        <div className="flex justify-between items-center">
          <div>
            <p className="text-sm text-gray-500">
              Date: {event.date}, Time: {event.time}
            </p>
          </div>
          <p className="text-analytikaGreen cursor-pointer hover:underline">Read More</p>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
