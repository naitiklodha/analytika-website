import Link from "next/link";
import TeamCard from "../TeamCard.js";

const TeamPage = ({ teamMembers }) => {
  const filteredTeamMembers = teamMembers.filter((member) =>
    [
      "Faculty Mentor",
      "President",
      "Joint President",
      "Vice President",
    ].includes(member.role)
  );

  filteredTeamMembers.sort((a, b) => {
    const rolesOrder = [
      "Faculty Mentor",
      "President",
      "Joint President",
      "Vice President",
    ];
    const roleA = a.role;
    const roleB = b.role;
    const indexA = rolesOrder.indexOf(roleA);
    const indexB = rolesOrder.indexOf(roleB);

    if (indexA !== indexB) {
      return indexA - indexB;
    } else {
      const departmentA = a.department || "";
      const departmentB = b.department || "";

      if (departmentA === departmentB) {
        return 0;
      } else if (departmentA === "Technical") {
        return -1;
      } else if (departmentB === "Technical") {
        return 1;
      } else {
        return departmentA.localeCompare(departmentB);
      }
    }
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
        {filteredTeamMembers.map((member) => (
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
