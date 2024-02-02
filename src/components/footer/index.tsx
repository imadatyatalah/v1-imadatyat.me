import DevIcon from "@/icons/DevIcon";
import GithubIcon from "@/icons/GithubIcon";
import LinkedInIcon from "@/icons/LinkedInIcon";
import TwitterIcon from "@/icons/TwitterIcon";

const SOCIAL_LINKS = [
  {
    title: "Github",
    href: "https://github.com/imadatyatalah",
    icon: GithubIcon,
  },
  {
    title: "Twitter",
    href: "https://twitter.com/ImadAtyat",
    icon: TwitterIcon,
  },
  {
    title: "Dev",
    href: "https://dev.to/imadatyat",
    icon: DevIcon,
  },
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/imadatyat",
    icon: LinkedInIcon,
  },
];

const Footer = () => {
  return (
    <footer
      className="flex h-[120px] flex-col items-center justify-center space-y-4 text-center"
      id="global-footer"
    >
      <div className="flex items-center justify-center">
        {SOCIAL_LINKS.map(({ title, href, icon: Icon }) => (
          <a
            aria-label={title}
            title={title}
            className="mx-1"
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            key={title}
          >
            <Icon className="fill-[#dedede]" />
          </a>
        ))}
      </div>

      <p className="text-sm">
        &copy; 2021-present Imad Atyat-Allah. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
