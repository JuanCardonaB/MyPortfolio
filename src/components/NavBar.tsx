import {
  Link,
  Navbar,
  NavbarContent,
  NavbarItem,
  Switch,
} from "@nextui-org/react";
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
  const { t } = useTranslation("global");

  const scrollTo = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Navbar
      className={"bg-[#212835]/40 backdrop-blur-3xl pointer-events-none"}
      shouldHideOnScroll
    >
      <NavbarContent className="pointer-events-auto" justify="start">
        <p className="cursor-pointer font-semibold text-[#828b9c]`">
          {t("Navbar.Portfolio")}
        </p>
      </NavbarContent>

      <NavbarContent
        className="flex gap-4 pointer-events-auto"
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
            onPress={() => scrollTo(aboutRef)}
          >
            {t("Navbar.About")}
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link
            className={`cursor-pointer font-semibold text-[#828b9c]`}
            onPress={() => scrollTo(experienceRef)}
            aria-current="page"
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
      </NavbarContent>

      <NavbarContent className="pointer-events-auto" justify="end">
        <NavbarItem>
          <Switch color="secondary" />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};
