import GoogleFontLoader from "react-google-font-loader"
import { WorkExperienceCard } from "./WorkExperienceCard"
import { useTranslation } from "react-i18next"

export const WorkExperience = () => {
  const {t} = useTranslation('global')
  const currentLanguage = localStorage.getItem('lang') || 'en'

  return (
    <div className="flex flex-col justify-center items-center mt-[280px] w-full">
      <GoogleFontLoader fonts={[{ font: 'Shrikhand', weights: [400, 700] }]} />

      <div className="max-w-[1024px] w-full">
        <div className="flex flex-col md:flex-row justify-center items-center md:gap-3">
          <h2 className="text-[40px] sm:text-[50px] mb-[-20px] md:mb-0" style={{ fontFamily: 'Shrikhand, sans-serif' }} >{currentLanguage === 'en' ? t('WorkExperience.Work') : t('WorkExperience.Experience')}</h2>
          <h2 className="text-[45px] sm:text-[50px] text-violet-800" style={{ fontFamily: 'Shrikhand, sans-serif' }}>{currentLanguage === 'en' ? t('WorkExperience.Experience') : t('WorkExperience.Work')} 💼</h2>
        </div>
        <div className="flex justify-center w-full mt-10 gap-10">
          <div className="h-[650px] w-1 bg-violet-800 rounded-lg">
            <div className="w-2 h-2 bg-white mt-20 ml-[-2px] rounded-full"></div>
            <div className="w-2 h-2 bg-white mt-56 ml-[-2px] rounded-full"></div>
            <div className="w-2 h-2 bg-white mt-56 ml-[-2px] rounded-full"></div>
          </div>

          <div className="pt-8 flex flex-col gap-16">
            <WorkExperienceCard jobTitle="INFERA" rol="Full Stack Mobile Developer" technologies={['PHP','React Native','SQL']} time="2024 - present" />
            <WorkExperienceCard jobTitle="BP Med" rol="Full Stack Web Developer" technologies={['Python','React','Fast API']} time="2024 - 2024" />
            <WorkExperienceCard jobTitle="INFERA" rol="Full Stack Mobile Developer" technologies={['PHP','React Native','SQL']} time="2024 - present" />
          </div>
        </div>
      </div>
    </div>
  )
}
