import React from "react";
import Link from "next/link";

// import useSWR from "swr";
import dayjs from "dayjs";

// import fetcher from "@/lib/fetcher";

import type { Guides } from "contentlayer/generated";
// import type { Views } from "@/types/Views";

type Props = Pick<Guides, "title" | "description" | "slug" | "publishedAt">;

const GuidePost = ({ title, description, slug, publishedAt }: Props) => {
  // const { data } = useSWR<Views>(`/api/views/${slug}`, fetcher);
  // const views = data?.total;
  const views = 0;

  return (
    <Link className="block" href={`/guides/${slug}`}>
      <article className="w-full group">
        <div className="flex flex-col md:justify-between md:flex-row md:items-center md:mb-1">
          <h3 className="mb-px text-xl font-semibold md:mb-0 title-hover">
            {title}
          </h3>

          <p className="mb-2 text-sm text-gray-500 md:text-right md:mb-0">
            {dayjs(publishedAt).format("MMMM D, YYYY")}
            {` • `}
            {views} views
          </p>
        </div>

        <p className="text-gray-400">{description}</p>
      </article>
    </Link>
  );
};

export default GuidePost;
