import Link from "next/link";
import TeamCard from "../TeamCard.js";

const TeamPage = ({ teamMembers }) => {
  const filteredTeamMembers = teamMembers.filter((member) =>
    ["President", "Vice President"].includes(member.role)
  );

  filteredTeamMembers.sort((a, b) => {
    if (a.role === "President" && b.role === "Vice President") {
      return -1;
    }
    if (a.role === "Vice President" && b.role === "President") {
      return 1;
    }
    return 0;
  });

  return (
    <div
      className="flex flex-col items-center justify-center uppercase pt-20"
      id="team"
    >
      <h1 className="text-4xl font-extrabold my-6 text-transparent bg-clip-text bg-gradient-to-tr from-analytikaGreen to-analytikaYellow">
        Our Team
      </h1>
      <ul className="flex flex-wrap justify-center mt-6">
        {filteredTeamMembers.map((member) => 
          
          <TeamCard member={member} key={member._id} />
        )}
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
