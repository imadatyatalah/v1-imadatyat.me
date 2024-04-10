import { allGuides } from "contentlayer/generated";
import { Metadata } from "next";
import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";
import { Suspense } from "react";

import ShareViaTwitter from "@/components/ShareViaTwitter";
import ViewsCounter from "@/components/ViewsCounter";
import { baseUrl } from "@/lib/constants";
import prisma from "@/lib/prisma";

import Guide from "./guide";

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

  // await prisma.views.upsert({
  //   where: { slug: slug },
  //   create: { slug: slug },
  //   update: { count: { increment: 1 } },
  // });

  // revalidateTag(slug);

  if (!guide) {
    return redirect("/404");
  }

  return (
    <main className="main-container">
      <article className="mx-auto mb-16 flex max-w-2xl flex-col items-start justify-center space-y-4">
        <header>
          <h1 className="text-center text-3xl font-bold tracking-tight md:text-4xl md:leading-tight lg:text-[2.5rem]">
            {guide.title}
          </h1>
        </header>

        <Guide code={guide.body.code} />

        <footer className="flex w-full items-center justify-between">
          <div>
            <ShareViaTwitter
              title={guide.title}
              slug={guide.slug}
              type="guides"
            />
          </div>

          {/* <div>
            <p>
              <Suspense fallback="views">
                <ViewsCounter slug={slug} />
              </Suspense>
            </p>
          </div> */}
        </footer>
      </article>
    </main>
  );
};

export default GuideDetailsPage;
