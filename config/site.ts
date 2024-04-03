export type SiteConfig = typeof siteConfig;

export const siteConfig = {

  navItems: [
    {
      label: "All",
      href: "/",
	  color: "blue",
    },
    {
      label: "Social",
      href: "/social",
	  color: "yellow",
    },
    {
      label: "Tech",
      href: "/tech",
	  color: "green",
    },
    {
      label: "Online",
      href: "/online",
	  color: "purple",
    },
  ],
  
  links: {
    github: "https://github.com/marcornc/code-campus-nextjs",
    nextJS: "https://nextjs.org",
    nextUI: "https://nextui.org",
    vercel: "https://vercel.com",
  },
};
