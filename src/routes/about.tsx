import Haidar from "../assets/haidar.jpg";
import Budi from "../assets/budi.jpg";
import Hasan from "../assets/hasan.jpeg";
import Hen from "../assets/hasan.jpeg";

export function AboutRoute() {
  interface TeamMember {
    name: string;
    role: string;
    image: string;
  }

  const teamMembers: TeamMember[] = [
    { name: "M Haidar Hanif", role: "Project Manager", image: Haidar },
    { name: "Budi Indra Gunawan", role: "Fullstack Engineer/UI-UX Designer", image: Budi },
    { name: "Henhen Imam Muldani", role: "Backend Engineer", image: Hen },
    { name: "Ma'ruf Hasan", role: "Frontend Engineer", image: Hasan },
  ];

  return (
    <div className="min-h-screen">
      <div className="text-center py-10">
        <h1 className="text-4xl font-bold text-gray-900">Our Team</h1>
        <p className="text-xl text-gray-600 mt-2">The dedicated professionals who make our vision a reality.”</p>
      </div>
      <div className="flex justify-center flex-wrap gap-10 px-5">
        {teamMembers.map((member, index) => (
          <div key={index} className="flex flex-col items-center">
            <img src={member.image} alt={member.name} className="w-32 h-32 rounded-full border-4 border-white shadow-lg" />
            <h2 className="mt-4 text-xl font-semibold text-gray-800">{member.name}</h2>
            <p className="text-gray-600">{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
