import GuidePost from "@/components/GuidePost";
import { pick } from "contentlayer/client";
import { allGuides } from "contentlayer/generated";
import { Metadata } from "next";

export const revalidate = 0;
export const metadata: Metadata = {
  title: "Guides",
};

const GuidesPage = () => {
  const guides = allGuides
    .map((guide) =>
      pick(guide, ["slug", "title", "description", "publishedAt"]),
    )
    .sort(
      (a, b) =>
        Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt)),
    );

  return (
    <main className="main-container">
      <section className="space-y-4">
        <h1 className="text-3xl font-bold">Guides</h1>

        <div className="space-y-8">
          {guides.map((guide) => (
            <GuidePost key={guide.slug} {...guide} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default GuidesPage;
