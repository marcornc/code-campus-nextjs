import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarBrand,
  NavbarItem,
} from "@nextui-org/navbar";
import { Link } from "@nextui-org/link";
import { Image } from "@nextui-org/image";

import { links, navItems } from "@/config/site";

import { ThemeSwitch } from "@/components/theme-switch";
import { GithubIcon } from "@/components/icons";

export const Navbar = () => {
  return (
    <NextUINavbar maxWidth="xl" position="static" className="py-4 border-b-2">
      <NavbarContent className="basis-1/5 sm:basis-1/3" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <Image
            src="/codeCampus_logo.png"
            width="70"
            height="70"
            alt="Logo"
            className="flex justify-start items-center gap-1"
          />
        </NavbarBrand>
        <h1 className="font-bold text-4xl">codeCampus</h1>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-1/3"
        justify="end"
      >
        <NavbarItem className="hidden sm:flex gap-2">
          <ThemeSwitch />
        </NavbarItem>
        <Link isExternal href={links.github} aria-label="Github">
          <GithubIcon className="text-default-500" />
        </Link>
      </NavbarContent>

      {/* <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
				<Link isExternal href={siteConfig.links.github} aria-label="Github">
					<GithubIcon className="text-default-500" />
				</Link>
				<ThemeSwitch />
				<NavbarMenuToggle />
			</NavbarContent> */}
    </NextUINavbar>
  );
};
