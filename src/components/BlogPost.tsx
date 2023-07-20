import React from "react";
import Link from "next/link";
import Image from "next/image";

// import useSWR from "swr";
import dayjs from "dayjs";

// import fetcher from "@/lib/fetcher";

import type { Blog } from "contentlayer/generated";
// import type { Views } from "@/types/Views";

type Props = Pick<
  Blog,
  "title" | "summary" | "slug" | "publishedAt" | "image" | "blurDataURL"
>;

const BlogPost = ({
  slug,
  title,
  summary,
  publishedAt,
  image,
  blurDataURL,
}: Props) => {
  // const { data } = useSWR<Views>(`/api/views/${slug}`, fetcher);
  // const views = data?.total;
  const views = 0;

  return (
    <Link href={`/blog/${slug}`}>
      <article className="max-w-sm sm:max-w-none group">
        {image ? (
          <div className="flex mb-2">
            <Image
              src={image}
              width="1200"
              height="627"
              alt={title}
              className="rounded-lg"
              placeholder="blur"
              blurDataURL={blurDataURL}
            />
          </div>
        ) : null}

        <div className="space-y-2">
          <h3 className="text-xl font-semibold title-hover">{title}</h3>

          <p className="text-sm text-gray-400">
            {dayjs(publishedAt).format("MMMM D, YYYY")} {` • `}
            {views} views
          </p>
        </div>
      </article>
    </Link>
  );
};

export default BlogPost;
