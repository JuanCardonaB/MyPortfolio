import { Switch } from "@nextui-org/react"
import i18next from "i18next"
import { useState } from "react"

export const LanguageSwitcher = () => {
    const [lang] = useState(localStorage.getItem('lang') === 'en' ? true : false)

    const toggleLanguage = (lang: boolean) => {
        if(lang) {
            i18next.changeLanguage('en')
            localStorage.setItem('lang', 'en')
        }
        else {
            i18next.changeLanguage('es')
            localStorage.setItem('lang', 'es')
        }
    }

    return (
        <div>
            <Switch defaultSelected={lang} className="mr-[-4px]" size="md" onChange={(e) => toggleLanguage(e.target.checked)} />
        </div>
    )
}
