import { groq } from "next-sanity";
import { useState } from "react";
import sanityClient from "@/data/client";
import { useNextSanityImage } from "next-sanity-image";
import Image from "next/image";
import Head from "next/head";
import Navbar from "@/components/Navbar";

const TeamPage = ({ teamMembers }) => {
  const [selectedPosition, setSelectedPosition] = useState("All");
  const uniquePositions = Array.from(
    new Set(teamMembers.map((member) => member.position))
  );

  const customRoleOrder = {
    "Faculty Mentor": 0,
    "Co-Founder": 1,
    President: 2,
    "Joint President": 3,
    "Secretary": 4,
    "Vice President": 5,
    "Head": 6,
    "Sub Head": 7,
  };

  // Sort the teamMembers array based on the custom role order
  teamMembers.sort((a, b) => customRoleOrder[a.role] - customRoleOrder[b.role]);
  const pageTitle = "Team Analytika";
  const pageDescription =
    "This is team Analytika Page designed and developed by Naitik";
  const ogImageUrl = "analytika-team.jpeg";
  const siteUrl = "https://analytika-web.netlify.app/";

  return (
    <>
      <Head>
        <title>{pageTitle}</title>

        {/* Meta tags */}
        <meta name="description" content={pageDescription} />

        {/* Open Graph (OG) tags for social media sharing */}
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:image" content={ogImageUrl} />
        <meta property="og:url" content={siteUrl} />
        <meta property="og:type" content="website" />
      </Head>
      <Navbar />
      <div className="flex flex-col items-center justify-center uppercase ">
        <h1 className="text-4xl font-extrabold  my-6">
          Our{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-tr from-analytikaGreen to-analytikaYellow">
            Team
          </span>
        </h1>
        <div className="flex flex-wrap gap-4 justify-center">
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
        <ul className="flex flex-wrap justify-center mt-6 mx-10">
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
                      className="w-64 h-auto mx-auto rounded-xl" // Set the width to 100% to occupy full width
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
    </>
  );
};

export default TeamPage;

export async function getStaticProps() {
  // Fetch team members from Sanity
  const query = groq`*[_type == "team"]{_id, name, position, department, role, "image": image.asset->}`;
  const teamMembers = await sanityClient.fetch(query);
  return {
    props: {
      teamMembers,
    },
  };
}
