// [slug].js (Individual Event Page Template)
import { useRouter } from "next/router";

const EventPage = () => {
  const router = useRouter();
  const { slug } = router.query;

  // Find the event by slug



  return (
    <div className="event-page">
      {slug}
    </div>
  );
};

export default EventPage;
