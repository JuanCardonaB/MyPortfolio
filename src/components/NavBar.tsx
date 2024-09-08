import { Link, Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@nextui-org/react"
import { ThemeSwitcher } from "./ThemeSwitcher"

export const NavBar = () => {
  return (
    <Navbar shouldHideOnScroll>
      <NavbarBrand>
        Home
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
      <NavbarItem>
          <Link color="foreground" href="#">
            Features
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" aria-current="page">
            Customers
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Integrations
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <ThemeSwitcher />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  )
}
