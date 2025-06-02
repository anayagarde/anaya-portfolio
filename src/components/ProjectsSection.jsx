import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import project4 from "../assets/project4.png";
import project9 from "../assets/project9.png";
import project6 from "../assets/project6.png";
import project3 from "../assets/project3.png";
import project1 from "../assets/project1.jpeg";
import project2 from  "../assets/project2.png";
import project5 from "../assets/project5.jpeg";
import project10 from "../assets/project10.png";


const projects = [
  {
    id: 1,
    title: "Serverless Data Protection in Cloud",
    description:
      "Serverless framework to discover, backup, and recover cloud-native assets using AWS Lambda, Boto3, and Docker.",
    image: project4,
    tags: ["Python", "AWS", "Boto3", "Docker"],
    githubUrl: "https://ieeexplore.ieee.org/document/10112206",
  },
  {
    id: 2,
    title: "Weather Application",
    description:
      "Interactive weather app built with MEAN stack and SwiftUI. Visualizes forecasts and deployed on GCP.",
    image: project9,
    tags: ["TypeScript", "SwiftUI", "GCP"],
    githubUrl: "https://github.com/anayagarde/Weather-App",
  },
  {
    id: 3,
    title: "InferPDF",
    description:
      "RAG-based PDF Data Extraction Chat App. Used Cohere and Streamlit to analyze multiple PDF documents.",
    image: project10,
    tags: ["RAG", "LLM", "LangChain", "FAISS"],
    githubUrl: "https://github.com/anayagarde/InferPDF",
  },
  {
    id: 4,
    title: "Clearing Feed Generation",
    description:
      "Feed generation tool using Spring Boot and Angular. Supports MySQL-based backend integration for banking workflows.",
    image: project6,
    tags: ["Spring Boot", "Angular", "MySQL"],
    githubUrl: "https://github.com/anayagarde/ClearingFeedGeneration_Group9",
  },
  {
    id: 5,
    title: "Machine Learning Projects",
    description:
      "Includes book recommendation (KNN), color extraction (KMeans), house price prediction, and text recognition with CNN.",
    image: project3,
    tags: ["KNN", "OpenCV", "CNN", "Gradio"],
    githubUrl: "https://github.com/anayagarde/MLProjects",
  },
  {
    id: 6,
    title: "Recipelicious – Recipe App",
    description:
      "Easily store and manage your favorite recipes with a clean, user-friendly interface. A handbook for quick access to your secret recipes",
    image: project1,
    tags: ["React", "Spring Boot", "MySQL"],
    githubUrl: "https://github.com/anayagarde/recipelicious-web-application",
  },
  {
    id: 7,
    title: "Grocery Delivery – Dijkstra",
    description:
      "Java application to calculate optimal grocery delivery routes during COVID using Dijkstra’s algorithm.",
    image: project2,
    tags: ["Java", "Graphs", "Dijkstra"],
    githubUrl: "https://github.com/anayagarde/grocery-delivery",
  },
  {
    id: 8,
    title: "Fitness Tracking System",
    description:
      "Tracks fitness parameters using C++ and linked list data structures. Built with a console-based UI.",
    image: project5,
    tags: ["C++", "Linked List", "DSA"],
    githubUrl: "https://github.com/anayagarde/fitness-tracker",
  },
];


export const ProjectsSection = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [swiperReady, setSwiperReady] = useState(false);

  useEffect(() => {
    // Give time for refs to be attached
    setTimeout(() => {
      setSwiperReady(true);
    }, 100);
  }, []);

  return (
    <section id="projects" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          &lt; Proj<span className="text-sky-400">ects /&gt;</span>
        </h2>

        <div className="flex justify-between items-center mb-4 px-2">
          <button ref={prevRef} className="text-sm text-sky-500 hover:underline">← Prev</button>
          <button ref={nextRef} className="text-sm text-sky-500 hover:underline">Next →</button>
        </div>

        {swiperReady && (
          <Swiper
            modules={[Navigation]}
            loop={true}
            spaceBetween={30}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {projects.map((project) => (
              <SwiperSlide key={project.id}>
                <div className="h-full flex flex-col bg-card rounded-lg border border-border shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden">
                  <div className="group h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>

                  <div className="p-6 flex flex-col justify-between flex-grow">
                    <div>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <h3 className="text-lg font-semibold mb-2">
                        {project.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4 line-clamp-4">
                        {project.description}
                      </p>
                    </div>
                    <div className="text-center mt-auto">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-sky-400 hover:underline"
                      >
                        View Project
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </section>
  );
};