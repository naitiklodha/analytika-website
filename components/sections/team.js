import { useState } from "react";
import sanityClient from "@/data/client";
import { useNextSanityImage } from "next-sanity-image";
import Image from "next/image";


const TeamPage = ({ teamMembers }) => {
  const [selectedPosition, setSelectedPosition] = useState("All");
  const uniquePositions = Array.from(
    new Set(teamMembers.map((member) => member.position))
  );

  return (
    <div className="flex flex-col items-center justify-center uppercase" id="team">
      <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-tr from-analytikaGreen to-analytikaYellow my-6">
        Team ANALYTIKA
      </h1>
      <div className="flex flex-wrap gap-4">
        <div
          onClick={() => setSelectedPosition("All")}
          className={`px-4 py-2 text-xl rounded-md hover:cursor-pointer border-analytikaYellow hover:bg-analytikaGreentransition duration-300 ease-in-out ${
            selectedPosition === "All"
              ? "underline font-bold bg-clip-text text-transparent bg-gradient-to-tr from-analytikaGreen to-analytikaYellow"
              : ""
          }`}
        >
          All
        </div>

        {uniquePositions.map((position) => (
          <div
            key={position}
            onClick={() => setSelectedPosition(position)}
            className={`px-4 py-2 text-xl rounded-md hover:cursor-pointer transition duration-300 ease-in-out ${
              selectedPosition === position
                ? "underline font-bold bg-clip-text text-transparent bg-gradient-to-tr from-analytikaGreen to-analytikaYellow"
                : ""
            }`}
          >
            {position}
          </div>
        ))}
      </div>
      <ul className="flex flex-wrap justify-center mt-6">
        {teamMembers.map((member) => {
          const imageProps = useNextSanityImage(sanityClient, member.image);

          if (
            selectedPosition === "All" ||
            member.position === selectedPosition
          ) {
            return (
              <li key={member._id} className="m-4 mx-8 rounded-lg">
                {member.image && (
                  <Image
                    {...imageProps}
                    className="w-80 h-80" // Set the width to 100% to occupy full width
                    alt={member.image.alt || ""}
                  />
                )}
                <h2 className="text-xl text-center m-2  text-analytikaWhite mt-4">
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
          return null;
        })}
      </ul>
    </div>
  );
};


export default TeamPage;
