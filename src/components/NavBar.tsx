import { Link, Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@nextui-org/react"
import { ThemeSwitcher } from "./ThemeSwitcher"
import { useTranslation } from 'react-i18next'
import { LanguageSwitcher } from "./LanguageSwitcher"

interface NavBarProps {
  aboutRef: React.RefObject<HTMLDivElement>;
  experienceRef: React.RefObject<HTMLDivElement>;
  projectsRef: React.RefObject<HTMLDivElement>;
  intro: React.RefObject<HTMLDivElement>;
}

export const NavBar = ({ intro, aboutRef, experienceRef, projectsRef }: NavBarProps) => {
  const { t } = useTranslation('global')

  const scrollTo = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <Navbar shouldHideOnScroll>
      <NavbarBrand className="cursor-pointer" onClick={() => scrollTo(intro)}>
        {t('Navbar.Home')}
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
      <NavbarItem>
          <Link className="cursor-pointer" color="foreground" onClick={() => scrollTo(aboutRef)}>
            {t('Navbar.About')}
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link className="cursor-pointer" onClick={() => scrollTo(experienceRef)} aria-current="page">
            {t('Navbar.Experience')}
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="cursor-pointer" color="foreground" onClick={() => scrollTo(projectsRef)}>
            {t('Navbar.Projects')}
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <ThemeSwitcher />
        </NavbarItem>
        <NavbarItem className="flex justify-center items-center gap-2">
          <p>🇨🇴</p>
          <LanguageSwitcher />
          <p>🇺🇸</p>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  )
}
