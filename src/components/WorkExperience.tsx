import { useTranslation } from "react-i18next";

interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
}

export const WorkExperience = () => {
  const { t } = useTranslation("global");

  const experiences: Experience[] = [
    {
      title: "Full Stack Developer",
      company: "INFĒRA",
      period: "2024 - Presente",
      description:
        "At INFĒRA, I’ve been responsible for maintaining and improving the company’s mobile application. I migrated the project to a newer version of Expo, simplifying dependency management and ensuring long-term stability. I also identified and resolved key bugs to deliver a more reliable React Native app. On the backend, I developed new PHP endpoints to expand the system’s features and strengthen integration with the frontend.",
      technologies: ["React Native", "PHP", "MySQL", "Expo"],
    },
    {
      title: "Frontend Developer",
      company: "Beach Point Med",
      period: "2023 - 2024",
      description:
        "As a Front-End Developer at BeachPointMed, I enhanced the user experience by building an efficient routing system and optimizing the interface for performance and usability. I implemented reusable styles and components to maintain a consistent design and accelerate development. Additionally, I defined a modular and scalable architecture, organizing routes and components for easier maintenance and future growth of the application.",
      technologies: ["React", "Typescript", "CSS3", "Figma", "Tailwind CSS"],
    },
    {
      title: "No-Code Developer",
      company: "Dream Ventures Studio",
      period: "2023 - 2023",
      description:
        "I developed over 20 high-converting landing pages using Bubble.io within just two months. My work helped the company achieve rapid early growth and build client trust through visually appealing and results-driven web experiences.",
      technologies: ["Bubble.io"],
    },
  ];

  return (
    <section className="min-h-screen bg-[#000] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center mb-16">
          <span className="text-white">{t("WorkExperience.Work")} </span>
          <span className="text-[#596170]">
            {t("WorkExperience.Experience")}
          </span>
        </h2>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-8 sm:left-12 w-0.5 h-full bg-[#596170]" />

          {/* Experiences */}
          <div className="space-y-12 lg:space-y-16">
            {experiences.map((exp, index) => (
              <div key={index} className="relative flex items-start gap-8">
                <div className="flex-shrink-0 w-16 sm:w-24 flex justify-center">
                  <div className="w-5 h-5 bg-purple-600 rounded-full border-4 border-[#000] z-10 mt-1" />
                </div>

                <div
                  className="flex-1 opacity-0 animate-[fadeIn_0.8s_ease-in_forwards]"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-1.5">
                    {exp.title}
                  </h3>
                  <p className="text-base sm:text-lg font-semibold text-[#828b9c] mb-1">
                    {exp.company}
                  </p>
                  <p className="text-xs sm:text-sm text-[#596170] mb-3">
                    {exp.period}
                  </p>
                  <p className="text-xs sm:text-lg text-gray-300 leading-relaxed mb-3">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-purple-600/20 text-purple-300 text-xs rounded-md border border-purple-600/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
