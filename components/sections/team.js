import Link from "next/link";
import TeamCard from "../TeamCard.js";

const TeamPage = ({ teamMembers }) => {
  const customRoleOrder = {
    "Faculty Mentor": 0,
    President: 3,
    "Joint President": 4,
    "Vice President": 7,
    Secretary: 5,
    Treasurer: 6,
  };

  teamMembers.sort((a, b) => {
    const roleOrderA = customRoleOrder[a.role];
    const roleOrderB = customRoleOrder[b.role];

    if (roleOrderA === roleOrderB) {
      if (a.department === "Technical" && b.department !== "Technical") return -1;
      if (a.department !== "Technical" && b.department === "Technical") return 1;
      return 0;
    }

    return roleOrderA - roleOrderB;
  });

  return (
    <div
      className="flex flex-col items-center justify-center uppercase pt-20"
      id="team"
    >
      <h2 className="text-4xl font-extrabold my-6 text-transparent bg-clip-text bg-gradient-to-tr from-analytikaGreen to-analytikaYellow">
        Our Team
      </h2>
      <ul className="flex flex-wrap   justify-center mt-6">
        {teamMembers.map((member) => (
          <TeamCard member={member} key={member._id} />
        ))}
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
