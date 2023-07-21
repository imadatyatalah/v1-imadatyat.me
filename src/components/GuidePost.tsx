import Link from "next/link";

import dayjs from "dayjs";
import prisma from "@/lib/prisma";

import type { Guides } from "contentlayer/generated";

type Props = Pick<Guides, "title" | "description" | "slug" | "publishedAt">;

const GuidePost = async ({ title, description, slug, publishedAt }: Props) => {
  const views = await prisma.views.findUnique({ where: { slug } });

  return (
    <Link className="block" href={`/guides/${slug}`}>
      <article className="w-full group space-y-2 md:space-y-1">
        <div className="flex space-y-px md:space-y-0 flex-col md:justify-between md:flex-row md:items-center">
          <h3 className="text-xl font-semibold title-hover">{title}</h3>

          <p className="text-sm text-gray-400 md:text-right">
            {dayjs(publishedAt).format("MMMM D, YYYY")}
            {` • `}
            {views?.count.toString()} views
          </p>
        </div>

        <p className="text-gray-400">{description}</p>
      </article>
    </Link>
  );
};

export default GuidePost;
