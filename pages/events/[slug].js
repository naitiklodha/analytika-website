// [slug].js (Individual Event Page Template)
import { useRouter } from "next/router";
import eventData from "@/data/eventData";

const EventPage = () => {
  const router = useRouter();
  const { slug } = router.query;

  // Find the event by slug
  const event = eventData.find((e) => e.slug === slug);

  if (!event) {
    return <p>Event not found</p>;
  }

  return (
    <div className="event-page">
      <h1>{event.name}</h1>
      <p>{event.description}</p>
      {/* Display event gallery, date, and time here */}
    </div>
  );
};

export default EventPage;
