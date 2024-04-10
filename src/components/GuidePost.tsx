import type { Guides } from "contentlayer/generated";
import dayjs from "dayjs";
import Link from "next/link";
import { Suspense } from "react";

import ViewsCounter from "./ViewsCounter";

type Props = Pick<Guides, "title" | "description" | "slug" | "publishedAt">;

const GuidePost = ({ title, description, slug, publishedAt }: Props) => {
  return (
    <Link className="block" href={`/guides/${slug}`}>
      <article className="group w-full space-y-2 md:space-y-1">
        <div className="flex flex-col space-y-px md:flex-row md:items-center md:justify-between md:space-y-0">
          <h3 className="title-hover text-xl font-semibold">{title}</h3>

          <p className="text-sm text-gray-400 md:text-right">
            {dayjs(publishedAt).format("MMMM D, YYYY")}
            {/* {` • `}
            <Suspense fallback="views">
              <ViewsCounter slug={slug} />
            </Suspense> */}
          </p>
        </div>

        <p className="text-gray-400">{description}</p>
      </article>
    </Link>
  );
};

export default GuidePost;
