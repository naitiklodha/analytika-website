import EventCard from "@/components/EventCard";
import Navbar from "@/components/Navbar";
import eventData from "@/data/eventData";

const EventsList = () => {
  return (
    <>
      <Navbar />
      <section className="min-h-screen bg-analytikaBlack text-white py-16">
        <div className="container mx-auto">
          <h1 className="text-4xl font-semibold mb-12 text-center uppercase">
            <span className="text-transparent font-bold bg-clip-text bg-gradient-to-r from-analytikaGreen to-analytikaYellow">
              EVENTS
            </span>
          </h1>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {eventData.map((event) => (
              <EventCard key={event.slug} event={event} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default EventsList;
