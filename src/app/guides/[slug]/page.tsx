import { allGuides } from "contentlayer/generated";
import ShareViaTwitter from "@/components/ShareViaTwitter";
import Guide from "./guide";
import { redirect } from "next/navigation";

const GuideDetailsPage = ({ params }: { params: { slug: string } }) => {
  const guide = allGuides.find((guide) => guide.slug === params?.slug);

  if (!guide) {
    return redirect("/404");
  }

  return (
    <main className="my-4">
      <article className="flex space-y-4 flex-col items-start justify-center max-w-2xl mx-auto mb-16">
        <header>
          <h1 className="text-3xl font-bold tracking-tight text-center md:text-4xl md:leading-tight lg:text-[2.5rem]">
            {guide.title}
          </h1>
        </header>

        <Guide code={guide.body.code} />

        <footer className="flex justify-between w-full">
          <div>
            <ShareViaTwitter
              title={guide.title}
              slug={guide.slug}
              type="guides"
            />
          </div>

          <div>{/* <ViewCounter slug={slug} /> */}</div>
        </footer>
      </article>
    </main>
  );
};

export default GuideDetailsPage;
