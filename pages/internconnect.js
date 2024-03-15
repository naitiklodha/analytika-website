import { useEffect } from "react";
import { useRouter } from "next/router";

export default function ReadMore() {
  const router = useRouter();

  useEffect(() => {
    router
      .push(
        "https://drive.google.com/drive/folders/1-N5FtolNGGR-dWopW4hXJ2YtacuPA0N1"
      )
      .then(() => {})
      .catch((error) => {});
  }, []);

  return <div>Redirecting.....</div>;
}
