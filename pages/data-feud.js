import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function ReadMore() {
  const router = useRouter();

  useEffect(() => {
    router.push("https://forms.gle/2B2y45rUZzdjkdiS6")
      .then(() => {})
      .catch((error) => {});
  }, []);

  return (
    <div>
      Redirecting.....
    </div>
  );
}
