import Link from "next/link";
import sanityClient from "@/data/client";
import { useNextSanityImage } from "next-sanity-image";
import Image from "next/image";

const TeamPage = ({ teamMembers }) => {
  const filteredTeamMembers = teamMembers.filter((member) =>
    ["Faculty Mentor", "Co-Founder", "President"].includes(member.role)
  );
  const customRoleOrder = {
    "Faculty Mentor": 0,
    "Co-Founder": 1,
    "President": 2,
  };
  teamMembers.sort((a, b) => customRoleOrder[a.role] - customRoleOrder[b.role]);

  return (
    <div
      className="flex flex-col items-center justify-center uppercase pt-20"
      id="team"
    >
      <h1 className="text-4xl font-extrabold my-6 text-transparent bg-clip-text bg-gradient-to-tr from-analytikaGreen to-analytikaYellow">
        Our Team
      </h1>
      <ul className="flex flex-wrap justify-center mt-6">
        {filteredTeamMembers.map((member) => {
          const imageProps = useNextSanityImage(sanityClient, member.image);

          return (
            <li
              key={member._id}
              className="m-4 mx-8 rounded-xl transition-transform hover:scale-105"
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
        })}
      </ul>
      <Link href="/team">
        <h1 className="text-transparent bg-clip-text bg-gradient-to-tr from-analytikaGreen to-analytikaYellow mt-4 text-2xl cursor-pointer transition-transform hover:scale-105">
          View all
        </h1>
      </Link>
    </div>
  );
};

export default TeamPage;
