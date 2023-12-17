import sanityClient from "@/data/client";
import { useState, useEffect } from "react";
import Head from "next/head";
import Navbar from "@/components/Navbar";
import TeamCard from "@/components/TeamCard";
import { groq } from "next-sanity";

const TeamPage = ({ teamMembers }) => {
  const [selectedPosition, setSelectedPosition] = useState("Super Core");
  const uniquePositions = ["Faculty Mentor","Founder","Super Core","Core"]

  const customRoleOrder = {
    "Faculty Mentor": 0,
    President: 1,
    "Joint President": 2,
    "Vice President": 3,
    Secretary: 4,
    Treasurer: 5,
    Founder: 6,
    "Co-Founder": 7,
    Head: 8,

  };

  const [filteredMembers, setFilteredMembers] = useState([...teamMembers]);

filteredMembers.sort((a, b) => {
  const roleOrderA = customRoleOrder[a.role];
  const roleOrderB = customRoleOrder[b.role];

  const isTechnical = (member) => member.department === "Technical";
  const isHead = (member) => member.position === "Head";

  if (roleOrderA === roleOrderB) {
    if (isTechnical(a) && isTechnical(b)) {
      if (isHead(a) && !isHead(b)) {
        return -1;
      } else if (!isHead(a) && isHead(b)) {
        return 1;
      } else {
        return a.name.localeCompare(b.name);
      }
    } else if (isTechnical(a) && !isTechnical(b)) {
      return -1;
    } else if (!isTechnical(a) && isTechnical(b)) {
      return 1;
    } else {
      if (a.department === b.department) {
        return a.name.localeCompare(b.name);
      }
      return a.department.localeCompare(b.department);
    }
  }

  return roleOrderA - roleOrderB;
});

  

  const pageTitle = "Team Analytika";
  const pageDescription =
    "This is team Analytika Page designed and developed by Naitik";
  const ogImageUrl = "analytika-team.jpeg";
  const siteUrl = "https://analytikanmims.com";

  const filterMembers = (position) => {
    if (position === "All") {
      setFilteredMembers([...teamMembers]);
    } else {
      const filtered = teamMembers.filter((member) => member.position === position);
      setFilteredMembers(filtered);
    }
  };

  useEffect(() => {
    filterMembers(selectedPosition);
  }, [selectedPosition, teamMembers]);

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
      <div className="flex flex-col items-center justify-center uppercase">
        <h1 className="text-4xl font-extrabold my-6">
          Our{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-tr from-analytikaGreen to-analytikaYellow">
            Team
          </span>
        </h1>
        <div className="flex flex-wrap gap-4 justify-center">
          <div
            onClick={() => setSelectedPosition("All")}
            className={`px-4 py-2 text-xl md:text-2xl hover:scale-105 rounded-md hover:text-analytikaGreen hover:cursor-pointer border-analytikaYellow transition duration-300 ease-in-out ${
              selectedPosition === "All"
                ? "font-bold bg-clip-text text-transparent bg-gradient-to-tr from-analytikaGreen to-analytikaYellow"
                : ""
            }`}
          >
            All
          </div>
          {uniquePositions.map((position) => (
            <div
              key={position}
              onClick={() => setSelectedPosition(position)}
              className={`px-4 py-2 text-xl md:text-2xl hover:scale-105  hover:text-analytikaGreen rounded-md hover:cursor-pointer transition duration-300 ease-in-out ${
                selectedPosition === position
                  ? "font-bold bg-clip-text text-transparent bg-gradient-to-tr from-analytikaGreen to-analytikaYellow"
                  : ""
              }`}
            >
              {position}
            </div>
          ))}
        </div>
        <ul className="flex flex-wrap justify-center mt-6 md:mx-16">
          {filteredMembers.map((member) => (
            <TeamCard key={member._id} member={member} />
          ))}
        </ul>
      </div>
    </>
  );
};

export default TeamPage;

export async function getStaticProps() {
  const query = groq`*[_type == "team"]{_id, name, position, department, role, "image": image.asset->}`;
  const teamMembers = await sanityClient.fetch(query);

  if (Array.isArray(teamMembers)) {
    return {
      props: {
        teamMembers,
      },
    };
  } else {
    return {
      notFound: true, 
    };
  }
}
