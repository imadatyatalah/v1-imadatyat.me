import BlogPost from "@/components/BlogPost";
import GuidePost from "@/components/GuidePost";
import { pick } from "contentlayer/client";
import { allBlogs, allGuides } from "contentlayer/generated";

export const revalidate = 0;

const HomePage = () => {
  const posts = allBlogs
    .map((post) =>
      pick(post, [
        "slug",
        "title",
        "summary",
        "publishedAt",
        "image",
        "blurDataURL",
      ]),
    )
    .sort(
      (a, b) =>
        Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt)),
    );

  const guides = allGuides
    .map((guide) =>
      pick(guide, ["slug", "title", "description", "publishedAt"]),
    )
    .sort(
      (a, b) =>
        Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt)),
    );

  return (
    <main className="my-4">
      <section className="space-y-12">
        <div className="space-y-4">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold">
              Hey, I&apos;m Imad{" "}
              <span className="wave" role="img" aria-label="Waving Hand">
                👋🏼
              </span>
            </h1>

            <p>
              A Front-end React developer passionate about creating beautiful,
              user-friendly web applications.
            </p>
          </div>

          <p className="flex items-center">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>

            <span className="ml-2 text-xs">
              Available for new opportunities
            </span>
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Latest posts</h2>

          <div className="flex flex-col sm:grid space-y-8 sm:space-y-0 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
            {posts.slice(0, 3).map((post) => (
              <BlogPost key={post.slug} {...post} />
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Latest guides</h2>

          <div className="space-y-8">
            {guides.map((guide) => (
              <GuidePost key={guide.slug} {...guide} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
