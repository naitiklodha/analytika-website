import sanityClient from "@/data/client";
import { useNextSanityImage } from "next-sanity-image";
import Image from "next/image";
const TeamCard=( {member} )=> {
  const imageProps = useNextSanityImage(sanityClient, member.image);

  return (
    <li
      key={member._id}
      className="m-4 mx-12 rounded-xl transition-transform hover:scale-105"
    >
      {member.image && (
        <Image
          {...imageProps}
          className="w-64 h-auto mx-auto rounded-lg"
          alt={member.image.alt || ""}
        />
      )}
      <h2 className="text-xl text-center m-2 text-analytikaWhite mt-4">
        {member.name}
      </h2>
      <p className="text-lg text-center m-2 text-analytikaGreen mt-2">
        {member.role}
      </p>
      <p className="text-lg text-center m-2 text-analytikaYellow">
        {member.department}
      </p>
    </li>
  );
}

export default TeamCard;