import Link from "next/link";
import Image from "next/image";

import dayjs from "dayjs";
import prisma from "@/lib/prisma";

import type { Blog } from "contentlayer/generated";

type Props = Pick<
  Blog,
  "title" | "summary" | "slug" | "publishedAt" | "image" | "blurDataURL"
>;

const BlogPost = async ({
  slug,
  title,
  publishedAt,
  image,
  blurDataURL,
}: Props) => {
  const views = await prisma.views.findUnique({ where: { slug } });

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
            {views?.count.toString()} views
          </p>
        </div>
      </article>
    </Link>
  );
};

export default BlogPost;
