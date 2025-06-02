export const EducationSection = () => {
    const education = [
        {
            degree: "Master of Science in Computer Science",
            institution: "University of Southern California",
            location: "Los Angeles, CA",
            date: "Aug 2024 – May 2026",
            cgpa: "3.82 / 4.0",
            description:
                "Focusing on advanced coursework and projects in AI, Machine Learning, LLMs, and full-stack web development. Actively engaged in research and hands-on applications."

        },
        {
            degree: "Bachelor of Technology in Computer Engineering",
            institution: "Cummins College of Engineering for Women",
            location: "Pune, India",
            date: "Aug 2018 – May 2022",
            cgpa: "9.39 / 10",
            description:
                "Graduated as a gold medalist, with hands-on experience through hackathons and coding competitions. Completed comprehensive coursework in Operating Systems, DBMS, Data Structures & Algorithms, Statistics, Machine Learning, and Software Engineering.",
        },
    ];

    return (
        <section id="education" className="py-24 px-4 bg-background">
            <div className="container mx-auto max-w-4xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    &lt; Educa<span className="text-sky-400">tion /&gt;</span>
                </h2>

                {/* Timeline container */}
                <div className="relative ml-6">
                    {/* Vertical Line */}
                    <div className="absolute left-2 top-0 h-full w-1 bg-sky-200/20 rounded-full" />

                    {education.map((item, index) => (
                        <div key={index} className="mb-14 relative group pl-8">
                            {/* Interactive Dot */}
                            <div className="absolute left-0 top-2 w-4 h-4 rounded-full bg-sky-400 border-2 border-white shadow-md transition-transform duration-300 group-hover:scale-125 group-hover:shadow-[0_0_10px_rgba(139,92,246,0.6)]" />

                            {/* Card */}
                            <div className="bg-card p-6 rounded-lg text-left transition-all duration-300 shadow-md group-hover:shadow-lg group-hover:scale-[1.02] border  group-hover:border-sky-200/50">
                                <div className="flex flex-col sm:flex-row sm:justify-between mb-2">

                                    <div>
                                        <h3 className="text-xl font-bold text-foreground mb-1">{item.institution}</h3>
                                        <div className="w-10 h-[2px] bg-sky-400 rounded mb-1" />
                                    </div>

                                    <div className="text-right text-sm text-muted-foreground">
                                        <p>{item.date}</p>
                                        <p className="italic">{item.location}</p>
                                    </div>
                                </div>
                                <p className="text-sm font-medium text-sky-400 mb-2">{item.degree}</p>
                                <p className="text-sm text-muted-foreground mb-2">GPA: {item.cgpa}</p>
                                <p className="text-sm text-muted-foreground">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
