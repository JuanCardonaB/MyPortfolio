import { Button } from "@nextui-org/react";
import { useTranslation } from "react-i18next";
import profileImage from "../assets/IMG_9882.jpg";

export const AboutMe = () => {
  const { t } = useTranslation("global");

  const handleDownloadCV = () => {
    // Aquí puedes agregar la lógica para descargar el CV
    console.log("Descargando CV...");
  };

  return (
    <section className="min-h-screen bg-[#000] py-16 px-4 sm:px-6 lg:px-8 flex items-center">
      <div className="max-w-4xl mx-auto w-full">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center mb-16 opacity-0 animate-[fadeIn_0.8s_ease-in_forwards]">
          <span className="text-[#596170]">{t("AboutMe.title")}</span>
        </h2>

        <div className="flex flex-col items-center space-y-8 lg:space-y-12">
          <div className="opacity-0 animate-[fadeIn_0.8s_ease-in_0.2s_forwards]">
            <img
              src={profileImage}
              alt="Profile"
              className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 rounded-full object-cover border-2 border-[#3a4551]"
            />
          </div>

          <div className="max-w-3xl text-center space-y-6 opacity-0 animate-[fadeIn_0.8s_ease-in_0.4s_forwards]">
            <p className="text-sm sm:text-base lg:text-lg text-gray-300 leading-relaxed">
              {t("AboutMe.description")}
            </p>

            <div className="pt-4">
              <Button
                onClick={handleDownloadCV}
                className="bg-[#3a4551] text-white font-semibold hover:bg-[#4a5561] transition-colors duration-300 px-6 py-2"
                startContent={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7,10 12,15 17,10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                }
              >
                {t("AboutMe.downloadCV")}
              </Button>
            </div>
          </div>

          <div className="pt-8 opacity-0 animate-[fadeIn_0.8s_ease-in_0.8s_forwards]">
            <p className="text-xs sm:text-sm text-[#596170] text-center">
              {t("AboutMe.footer")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
