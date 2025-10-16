import { Card, CardBody, Chip } from "@nextui-org/react";
import { useTranslation } from "react-i18next";

interface Project {
  title: string;
  description: string;
  technologies: string[];
}

export const Projects = () => {
  const { t } = useTranslation("global");

  const projects: Project[] = [
    {
      title: "E-commerce Platform",
      description:
        "Plataforma completa de comercio electrónico con React, Node.js y Stripe. Incluye panel de administración y analytics en tiempo real.",
      technologies: ["React", "Node.js", "MongoDB"],
    },
    {
      title: "Task Management App",
      description:
        "Aplicación de gestión de tareas con colaboración en tiempo real. Integra notificaciones push y sincronización offline.",
      technologies: ["Vue.js", "Firebase", "PWA"],
    },
    {
      title: "AI Analytics Dashboard",
      description:
        "Dashboard inteligente con machine learning para análisis predictivo de datos empresariales y visualizaciones interactivas.",
      technologies: ["Python", "TensorFlow", "D3.js"],
    },
    {
      title: "Blockchain Wallet",
      description:
        "Wallet descentralizada para criptomonedas con integración DeFi. Soporta para múltiples blockchains y staking automático.",
      technologies: ["Solidity", "Web3.js", "Ethereum"],
    },
    {
      title: "IoT Smart Home",
      description:
        "Sistema domótico completo con sensores IoT, control por voz y automatización inteligente basada en patrones de uso.",
      technologies: ["Arduino", "MQTT", "React Native"],
    },
    {
      title: "AR Learning Platform",
      description:
        "Plataforma educativa con realidad aumentada para aprendizaje inmersivo. Incluye tracking de progreso y gamificación.",
      technologies: ["Unity", "ARCore", "C#"],
    },
  ];

  return (
    <section className="min-h-screen bg-[#000] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* title */}
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center mb-16">
          <span className="text-[#596170]">{t("Projects.titleProjects")} </span>
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="opacity-0 animate-[fadeIn_0.8s_ease-in_forwards]"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Card className="bg-[#2a3441] border-none shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 h-full">
                <CardBody className="p-6">
                  <div className="aspect-video bg-[#3a4551] rounded-lg mb-4 flex items-center justify-center text-[#828b9c] text-sm">
                    {project.title}
                  </div>

                  {/* Project Content */}
                  <div className="space-y-4">
                    <h3 className="text-lg sm:text-xl font-bold text-white">
                      {project.title}
                    </h3>

                    <p className="text-sm text-gray-300 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tecnologías */}
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Chip
                          key={techIndex}
                          size="sm"
                          className="bg-purple-600/20 text-purple-300 border border-purple-600/30"
                        >
                          {tech}
                        </Chip>
                      ))}
                    </div>
                  </div>
                </CardBody>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
