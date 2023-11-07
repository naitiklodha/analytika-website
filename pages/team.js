import sanityClient from "@/data/client";
import { useState } from "react";
import Head from "next/head";
import Navbar from "@/components/Navbar";
import { groq } from "next-sanity";
import TeamCard from "@/components/TeamCard";

const TeamPage = ({ teamMembers }) => {
  const [selectedPosition, setSelectedPosition] = useState("All");
  const uniquePositions = Array.from(
    new Set(teamMembers.map((member) => member.position))
  );

  const customRoleOrder = {
    President: 0,
    "Joint President": 1,
    "Vice President": 2,
    Secretary: 3,
    Treasurer: 4,
    Head: 5,
    "Sub Head": 6,
    "Co-Founder": 7,
    "Faculty Mentor": 8,
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
            className={`px-4 py-2 text-xl md:text-2xl rounded-md  hover:text-analytikaGreen hover:cursor-pointer border-analytikaYellow hover:bg-analytikaGreentransition duration-300 ease-in-out ${
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
              className={`px-4 py-2 text-xl md:text-2xl hover:text-analytikaGreen rounded-md hover:cursor-pointer transition duration-300 ease-in-out ${
                selectedPosition === position
                  ? "underline font-bold bg-clip-text text-transparent bg-gradient-to-tr from-analytikaGreen to-analytikaYellow"
                  : ""
              }`}
            >
              {position}
            </div>
          ))}
        </div>
        <ul className="flex flex-wrap justify-center mt-6 md:mx-16">
          {teamMembers.map((member) => {
            if (
              selectedPosition === "All" ||
              member.position === selectedPosition
            ) {
              return <TeamCard key={member._id} member={member} />;
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
