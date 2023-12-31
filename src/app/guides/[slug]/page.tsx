import { allGuides } from "contentlayer/generated";
import ShareViaTwitter from "@/components/ShareViaTwitter";
import Guide from "./guide";
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

  const guide = allGuides.find((guide) => guide.slug === slug);

  if (!guide) {
    return;
  }

  const ogImage = `${baseUrl}/og?title=${guide.title}`;

  return {
    title: guide.title,
    description: guide.description,

    openGraph: {
      title: guide.title,
      description: guide.description,
      type: "article",
      publishedTime: guide.publishedAt,
      url: `https://imadatyat.me/guides/${slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: guide.title,
      description: guide.description,
      images: [ogImage],
    },
  };
};

const GuideDetailsPage = async ({ params }: { params: { slug: string } }) => {
  const slug = params?.slug;

  const guide = allGuides.find((guide) => guide.slug === params?.slug);

  await prisma.views.upsert({
    where: { slug: slug },
    create: { slug: slug },
    update: { count: { increment: 1 } },
  });

  revalidateTag(slug);

  const views = await getViews(slug);

  if (!guide) {
    return redirect("/404");
  }

  return (
    <main className="main-container">
      <article className="flex space-y-4 flex-col items-start justify-center max-w-2xl mx-auto mb-16">
        <header>
          <h1 className="text-3xl font-bold tracking-tight text-center md:text-4xl md:leading-tight lg:text-[2.5rem]">
            {guide.title}
          </h1>
        </header>

        <Guide code={guide.body.code} />

        <footer className="flex items-center justify-between w-full">
          <div>
            <ShareViaTwitter
              title={guide.title}
              slug={guide.slug}
              type="guides"
            />
          </div>

          <div>
            <p>{`${views} views`}</p>
          </div>
        </footer>
      </article>
    </main>
  );
};

export default GuideDetailsPage;
