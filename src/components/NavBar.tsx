import { Link, Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@nextui-org/react"
import { ThemeSwitcher } from "./ThemeSwitcher"
import { useTranslation } from 'react-i18next'
import { LanguageSwitcher } from "./LanguageSwitcher"

export const NavBar = () => {
  const { t } = useTranslation('global')
  return (
    <Navbar shouldHideOnScroll>
      <NavbarBrand>
        {t('Navbar.Home')}
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
      <NavbarItem>
          <Link color="foreground" href="#">
            {t('Navbar.About')}
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" aria-current="page">
            {t('Navbar.Experience')}
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
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
