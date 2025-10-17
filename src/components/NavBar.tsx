import {
  Link,
  Navbar,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  Switch,
} from "@nextui-org/react";
import { useState } from "react";
import { useTranslation } from "react-i18next";

interface NavBarProps {
  aboutRef: React.RefObject<HTMLDivElement>;
  experienceRef: React.RefObject<HTMLDivElement>;
  projectsRef: React.RefObject<HTMLDivElement>;
  welcomeRef: React.RefObject<HTMLDivElement>;
}

export const NavBar = ({
  aboutRef,
  experienceRef,
  projectsRef,
  welcomeRef,
}: NavBarProps) => {
  const { t, i18n } = useTranslation("global");
  console.log(i18n.language);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isEnglish, setIsEnglish] = useState(i18n.language === "en");

  const scrollTo = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  const handleLanguageChange = (checked: boolean) => {
    const newLanguage = checked ? "en" : "es";
    setIsEnglish(checked);
    i18n.changeLanguage(newLanguage);
    localStorage.setItem("language", newLanguage);
  };

  const menuItems = [
    { label: t("Navbar.Welcome"), ref: welcomeRef },
    { label: t("Navbar.About"), ref: aboutRef },
    { label: t("Navbar.Experience"), ref: experienceRef },
    { label: t("Navbar.Projects"), ref: projectsRef },
  ];

  return (
    <Navbar
      className={"bg-[#212835]/40 backdrop-blur-3xl pointer-events-none"}
      shouldHideOnScroll
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      {/* Mobile Logo */}
      <NavbarContent className="sm:hidden pointer-events-auto" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="text-white"
        />
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex pointer-events-auto"
        justify="start"
      >
        {/* Space to balance */}
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex gap-4 pointer-events-auto"
        justify="center"
      >
        <NavbarItem>
          <Link
            className={`cursor-pointer font-semibold text-[#828b9c]`}
            onPress={() => scrollTo(welcomeRef)}
          >
            {t("Navbar.Welcome")}
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            className={`cursor-pointer font-semibold text-[#828b9c]`}
            onPress={() => scrollTo(experienceRef)}
          >
            {t("Navbar.Experience")}
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            className={`cursor-pointer font-bold text-[#828b9c]`}
            onPress={() => scrollTo(projectsRef)}
          >
            {t("Navbar.Projects")}
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            className={`cursor-pointer font-semibold text-[#828b9c]`}
            onPress={() => scrollTo(aboutRef)}
          >
            {t("Navbar.About")}
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="pointer-events-auto" justify="end">
        <NavbarItem className="flex items-center gap-2">
          <span className="text-[#828b9c] text-sm font-medium">ES</span>
          <Switch
            isSelected={isEnglish}
            onValueChange={handleLanguageChange}
            color="secondary"
            size="sm"
            aria-label="Language toggle"
          />
          <span className="text-[#828b9c] text-sm font-medium">EN</span>
        </NavbarItem>
      </NavbarContent>

      {/* Mobile Menu */}
      <NavbarMenu className="bg-[#212835]/95 backdrop-blur-3xl pt-6">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item.label}-${index}`}>
            <Link
              className="w-full cursor-pointer font-semibold text-[#828b9c] text-lg"
              onPress={() => scrollTo(item.ref)}
              size="lg"
            >
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};
