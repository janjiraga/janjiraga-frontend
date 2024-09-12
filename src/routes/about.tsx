export function AboutRoute() {
  interface TeamMember {
    name: string;
    role: string;
    image: string;
  }

  const teamMembers: TeamMember[] = [
    {
      name: "M Haidar Hanif",
      role: "Project Manager",
      image:
        "https://ucarecdn.com/cd01eb59-acf2-4625-b716-bbc18bb69d35/-/preview/640x640/",
    },
    {
      name: "Budi Indra Gunawan",
      role: "Fullstack Engineer/UI-UX Designer",
      image:
        "https://ucarecdn.com/7255d1f9-d0d6-48c1-a4e4-1c3b2e12c7dd/-/preview/640x640/",
    },
    {
      name: "Henhen Imam Muldani",
      role: "Backend Engineer",
      image:
        "https://ucarecdn.com/1fc2abf6-40df-4520-9331-9c26e2af5741/-/preview/640x640/",
    },
    {
      name: "Ma'ruf Hasan",
      role: "Frontend Engineer",
      image:
        "https://ucarecdn.com/1180e911-8d09-4310-b3c9-7cf44d5dc2d9/-/preview/640x640/",
    },
  ];

  return (
    <div className="min-h-screen">
      <div className="text-center py-20">
        <h1 className="text-4xl font-bold text-gray-900">Our Team</h1>
        <p className="text-xl text-gray-600 mt-2">
          The dedicated professionals who make our vision a reality
        </p>
      </div>
      <div className="flex justify-center flex-wrap gap-10 px-5 mt-4">
        {teamMembers.map((member, index) => (
          <div key={index} className="flex flex-col items-center">
            <img
              src={member.image}
              alt={member.name}
              className="w-32 h-32 object-cover rounded-full border-4 border-white shadow-lg"
            />
            <h2 className="mt-4 text-xl font-semibold text-gray-800">
              {member.name}
            </h2>
            <p className="text-gray-600">{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
