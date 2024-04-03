export type SiteConfig = typeof siteConfig;

export const siteConfig = {

  navItems: [
    {
      label: "All",
      href: "/",
	  color: "primary",
    },
    {
      label: "Social",
      href: "/social",
	  color: "warning",
    },
    {
      label: "Tech",
      href: "/tech",
	  color: "success",
    },
    {
      label: "Online",
      href: "/online",
	  color: "secondary",
    },
  ],
  
  links: {
    github: "https://github.com/marcornc/code-campus-nextjs",
    nextJS: "https://nextjs.org",
    nextUI: "https://nextui.org",
    vercel: "https://vercel.com",
  },
};
