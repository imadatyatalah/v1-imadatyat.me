import React from "react";

import { baseUrl } from "@/lib/constants";
import TwitterIcon from "@/icons/TwitterIcon";

const ShareViaTwitter = ({
  title,
  slug,
  type,
}: {
  title: string;
  slug: string;
  type: "blog" | "guides";
}) => {
  const tweetShareURL = `https://twitter.com/intent/tweet?text=Check out: ${title}&url=${baseUrl}/${type}/${slug}%0D%0A&via=ImadAtyat`;

  return (
    <a
      href={tweetShareURL}
      target="_blank"
      rel="noopener noreferrer"
      className="flex text-sm items-center text-blue-400 fill-blue-400"
    >
      <TwitterIcon width={22} height={22} />

      <span className="ml-2 font-medium hover:underline">
        Share via Twitter
      </span>
    </a>
  );
};

export default ShareViaTwitter;
