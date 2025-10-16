import { Button } from "@nextui-org/react";
import { useTranslation } from "react-i18next";

export const Welcome = () => {
  const { t } = useTranslation("global");
  return (
    <section className="relative flex justify-center items-center flex-col h-[calc(100vh-40px)] overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <svg className="absolute w-full h-full opacity-20">
          <path
            d="M-100 100 Q 200 50, 500 100 T 1100 100"
            stroke="url(#gradient1)"
            strokeWidth="2"
            fill="none"
            className="animate-[moveLine_8s_ease-in-out_infinite]"
          />
          <path
            d="M-100 200 Q 200 150, 500 200 T 1100 200"
            stroke="url(#gradient1)"
            strokeWidth="2"
            fill="none"
            className="animate-[moveLine_10s_ease-in-out_infinite]"
            style={{ animationDelay: "1s" }}
          />
          <path
            d="M-100 300 Q 200 250, 500 300 T 1100 300"
            stroke="url(#gradient1)"
            strokeWidth="2"
            fill="none"
            className="animate-[moveLine_12s_ease-in-out_infinite]"
            style={{ animationDelay: "2s" }}
          />
          <path
            d="M-100 400 Q 200 350, 500 400 T 1100 400"
            stroke="url(#gradient1)"
            strokeWidth="2"
            fill="none"
            className="animate-[moveLine_9s_ease-in-out_infinite]"
            style={{ animationDelay: "0.5s" }}
          />
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="white" stopOpacity="0" />
              <stop offset="50%" stopColor="#a855f7" stopOpacity="1" />
              <stop offset="100%" stopColor="white" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="flex justify-center items-center flex-col mt-[-60px] relative z-10 px-4">
        <div className="flex justify-center items-center flex-col text-center">
          <h1 className="font-bold text-[32px] sm:text-[48px] lg:text-[60px] bg-gradient-to-r from-white via-purple-500 to-white bg-[length:200%_100%] bg-clip-text text-transparent opacity-0 animate-[fadeIn_0.6s_ease-in_forwards,gradient_3s_linear_infinite]">
            {t("Welcome.SoftwareDeveloper&")}
          </h1>
          <h1 className="font-bold text-[32px] sm:text-[48px] lg:text-[60px] bg-gradient-to-r from-white via-purple-500 to-white bg-[length:200%_100%] bg-clip-text text-transparent opacity-0 animate-[fadeIn_0.6s_ease-in_0.3s_forwards,gradient_3s_linear_0.6s_infinite]">
            {t("Welcome.DataAnalyst")}
          </h1>
        </div>
        <h3 className="font-semibold text-white text-[16px] sm:text-[18px] lg:text-[20px] mt-2 sm:mt-2s opacity-0 animate-[fadeIn_0.6s_ease-in_0.6s_forwards]">
          {t("Welcome.JuanJoseCardonaBolivar")}
        </h3>
      </div>
      <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-2 mt-6 sm:mt-8 opacity-0 animate-[fadeIn_0.6s_ease-in_0.9s_forwards] relative z-10 px-4">
        <Button
          as="a"
          href="https://linkedin.com/in/juan-jose-cardona-bolivar"
          target="_blank"
          rel="noopener noreferrer"
          variant="bordered"
          className="font-semibold text-white w-full sm:w-auto"
          startContent={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect width="4" height="12" x="2" y="9" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          }
        >
          LinkedIn
        </Button>

        <Button
          as="a"
          href="https://github.com/JuanCardonaB"
          target="_blank"
          rel="noopener noreferrer"
          variant="solid"
          className="font-semibold text-black bg-white w-full sm:w-auto"
          startContent={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
              <path d="M9 18c-4.51 2-5-2-7-2" />
            </svg>
          }
        >
          GitHub
        </Button>
      </div>
    </section>
  );
};
