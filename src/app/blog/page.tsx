import BlogPost from "@/components/BlogPost";
import { pick } from "contentlayer/client";
import { allBlogs } from "contentlayer/generated";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
};

const BlogPage = () => {
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

  return (
    <main className="main-container">
      <section className="space-y-4">
        <h1 className="text-3xl font-bold">Blog</h1>

        <div className="flex flex-col sm:grid space-y-8 sm:space-y-0 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {posts.map((post) => (
            <BlogPost key={post.slug} {...post} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default BlogPage;
