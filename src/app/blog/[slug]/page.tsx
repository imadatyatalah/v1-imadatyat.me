import { allBlogs } from "contentlayer/generated";
import dayjs from "dayjs";
import ShareViaTwitter from "@/components/ShareViaTwitter";
import Blog from "./blog";
import { redirect } from "next/navigation";
import prisma from "@/lib/prisma";
import { Metadata } from "next";
import { baseUrl } from "@/lib/constants";
import { getViews } from "@/lib/fetchers";
import { revalidateTag } from "next/cache";

export const generateMetadata = ({
  params,
}: {
  params: { slug: string };
}): Metadata | undefined => {
  const slug = params?.slug;

  const post = allBlogs.find((post) => post.slug === slug);

  if (!post) {
    return;
  }

  const ogImage = `${baseUrl}/og?title=${post.title}`;

  return {
    title: post.title,
    description: post.summary,

    openGraph: {
      title: post.title,
      description: post.summary,
      type: "article",
      publishedTime: post.publishedAt,
      url: `https://imadatyat.me/blog/${slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.summary,
      images: [ogImage],
    },
  };
};

const BlogDetailsPage = async ({ params }: { params: { slug: string } }) => {
  const slug = params?.slug;

  const post = allBlogs.find((post) => post.slug === slug);

  await prisma.views.upsert({
    where: { slug: slug },
    create: { slug: slug },
    update: { count: { increment: 1 } },
  });

  revalidateTag(slug);

  const views = await getViews(slug);

  if (!post) {
    return redirect("/404");
  }

  return (
    <main className="main-container">
      <article className="flex space-y-4 flex-col items-start justify-center max-w-2xl mx-auto mb-16">
        <header className="w-full space-y-4">
          <h1 className="text-3xl font-bold tracking-tight md:text-4xl md:leading-tight lg:text-[2.5rem]">
            {post.title}
          </h1>

          <div className="text-sm md:flex md:justify-between md:w-full">
            <p>
              Imad Atyat-Allah /{" "}
              {dayjs(post.publishedAt).format("MMMM D, YYYY")}
            </p>

            <p>
              {post.readingTime.text} {` • `}
              {`${views} views`}
            </p>
          </div>
        </header>

        <Blog code={post.body.code} />

        <footer>
          <ShareViaTwitter title={post.title} slug={post.slug} type="blog" />
        </footer>
      </article>
    </main>
  );
};

export default BlogDetailsPage;
