import Link from "next/link";

import dayjs from "dayjs";

import type { Guides } from "contentlayer/generated";
import { Suspense } from "react";
import ViewsCounter from "./ViewsCounter";

type Props = Pick<Guides, "title" | "description" | "slug" | "publishedAt">;

const GuidePost = ({ title, description, slug, publishedAt }: Props) => {
  return (
    <Link className="block" href={`/guides/${slug}`}>
      <article className="w-full group space-y-2 md:space-y-1">
        <div className="flex space-y-px md:space-y-0 flex-col md:justify-between md:flex-row md:items-center">
          <h3 className="text-xl font-semibold title-hover">{title}</h3>

          <p className="text-sm text-gray-400 md:text-right">
            {dayjs(publishedAt).format("MMMM D, YYYY")}
            {` • `}
            <Suspense fallback="views">
              <ViewsCounter slug={slug} />
            </Suspense>
          </p>
        </div>

        <p className="text-gray-400">{description}</p>
      </article>
    </Link>
  );
};

export default GuidePost;
