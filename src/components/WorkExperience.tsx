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
      title: t("WorkExperience.Experiences.FullStackInfera.title"),
      company: t("WorkExperience.Experiences.FullStackInfera.company"),
      period: t("WorkExperience.Experiences.FullStackInfera.period"),
      description: t("WorkExperience.Experiences.FullStackInfera.description"),
      technologies: ["React Native", "PHP", "MySQL", "Expo"],
    },
    {
      title: t("WorkExperience.Experiences.FrontendBeach.title"),
      company: t("WorkExperience.Experiences.FrontendBeach.company"),
      period: t("WorkExperience.Experiences.FrontendBeach.period"),
      description: t("WorkExperience.Experiences.FrontendBeach.description"),
      technologies: ["React", "TypeScript", "CSS3", "Figma", "Tailwind CSS"],
    },
    {
      title: t("WorkExperience.Experiences.NoCodeDream.title"),
      company: t("WorkExperience.Experiences.NoCodeDream.company"),
      period: t("WorkExperience.Experiences.NoCodeDream.period"),
      description: t("WorkExperience.Experiences.NoCodeDream.description"),
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
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-3">
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
