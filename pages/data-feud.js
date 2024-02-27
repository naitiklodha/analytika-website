import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function ReadMore() {
  const router = useRouter();

  useEffect(() => {
    router.push("https://docs.google.com/forms/d/e/1FAIpQLSerGuP4er0P_YeWtde_EN8miZNrImD6VnxJlxSjGhReJ6ok1g/viewform")
      .then(() => {})
      .catch((error) => {});
  }, []);

  return (
    <div>
      Redirecting.....
    </div>
  );
}
