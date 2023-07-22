import TwitterIcon from "@/icons/TwitterIcon";
import GithubIcon from "@/icons/GithubIcon";
import DevIcon from "@/icons/DevIcon";
import LinkedInIcon from "@/icons/LinkedInIcon";

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
      className="space-y-4 h-[120px] text-center flex items-center flex-col justify-center"
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
        &copy; 2023-present Imad Atyat-Allah. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
