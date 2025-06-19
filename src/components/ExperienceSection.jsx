export const ExperienceSection = () => {
  const experiences = [
    {
      role: "AI Application Developer Intern",
      company: "UPSIDE Foods",
      location: "Berkeley, CA",
      date: "Jun 2025 – Aug 2025",
      description:
        "Working on building scalable AI and ML models.",
    },
    {
      role: "Software Engineer",
      company: "Deutsche Bank",
      location: "Pune, India",
      date: "July 2022 – July 2024",
      description:
        "Worked on the Working Capital team delivering full stack solutions using Java, Spring Boot, ReactJS, GraphQL, and Oracle, alongside proprietary frameworks (Axiom, VAS, Rtdb). Gained deep understanding of the business domain and architecture while contributing to critical deliverables and production fixes. \nAwarded the Rising Star Award for exceptional performance. Actively engaged in the GenAI Global Hackathon, Mental Health Hackathon, and team volunteering initiatives.",
    },
    {
      role: "Project Intern",
      company: "Veritas Technologies",
      location: "Pune, India",
      date: "October 2021 – April 2022",
      description:
        "Worked on a serverless architecture for cloud-native data protection using AWS services. Gained in-depth knowledge of serverless computing, data security, Docker, and Kubernetes.",
    },
    {
      role: "Software Development Intern",
      company: "Deutsche Bank",
      location: "Pune, India",
      date: "May 2021 – July 2021",
      description:
        "Developed a full stack data visualization app using ReactJS, Spring Boot, and MySQL to present dynamic insights through interactive charts and dashboards.",
    },
  ];

  return (
    <section id="experience" className="py-24 px-4 bg-background">
      <div className="container mx-auto max-w-4xl text-left">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          &lt; Experi<span className="text-sky-400">ence /&gt;</span>
        </h2>

        <div className="relative">
          {/* Right vertical line */}
          <div className="absolute right-0 top-0 h-full w-1 bg-sky-400/20 rounded" />

          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative mb-10 pr-8 border-l-4 border-transparent group"
            >
              {/* Dot */}
              <div className="absolute right-[-12px] top-2 w-4 h-4 rounded-full bg-sky-400 border-[3px] border-white shadow-md transition-transform duration-300 group-hover:scale-110 group-hover:shadow-[0_0_10px_rgba(139,92,246,0.4)]" />

              {/* Card */}
              <div
                className="bg-card p-6 rounded-md border border-border shadow-sm 
                           transition-all duration-300 hover:shadow-lg 
                           hover:scale-[1.02] hover:border-sky-400/50"
              >
                {/* Top Row: Company + Date/Location */}
                <div className="flex flex-col sm:flex-row sm:justify-between">
                  {/* Left: Company Name */}
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">{exp.company}</h3>
                    <div className="w-10 h-[2px] bg-sky-400 rounded mt-1 mb-3" />
                  </div>

                  {/* Right: Date + Location */}
                  <div className="text-right mb-3 sm:mb-0">
                    <p className="text-sm text-muted-foreground">{exp.date}</p>
                    <p className="text-sm italic text-muted-foreground">{exp.location}</p>
                  </div>
                </div>

                {/* Role */}
                <p className="text-sm font-medium text-sky-400 mb-2">{exp.role}</p>

                {/* Description */}
                <p className="text-sm text-muted-foreground whitespace-pre-line">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
