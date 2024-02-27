import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function ReadMore() {
  const router = useRouter();

  useEffect(() => {
    router.push("https://docs.google.com/forms/d/e/1FAIpQLScbZB8BpadMQWgs2xwabFQKY3DiBNJYU836y4c4kAa7uiFvyg/viewform")
      .then(() => {})
      .catch((error) => {});
  }, []);

  return (
    <div>
      Redirecting.....
    </div>
  );
}
