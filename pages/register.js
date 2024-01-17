import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function ReadMore() {
  const router = useRouter();

  useEffect(() => {
    router.push('https://unstop.com/hackathons/datathon-20-nmims-indore-861145?lb=CzilqFD')
      .then(() => {})
      .catch((error) => {});
  }, []);

  return (
    <div>
      Redirecting.....
    </div>
  );
}
