import Link from "next/link";
import Image, { ImageProps } from "next/image";

const CustomLink = (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
  const href = props.href;
  const isInternalLink = href && (href.startsWith("/") || href.startsWith("#"));

  if (isInternalLink) {
    return (
      <Link {...props} href={href}>
        {props.children}
      </Link>
    );
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />;
};

const CustomImage = ({ alt, ...props }: ImageProps) => (
  <div className="flex">
    <Image alt={alt} className="rounded-lg" {...props} />
  </div>
);

const MDXComponents = {
  a: CustomLink,
  Image: CustomImage,
};

export default MDXComponents;
