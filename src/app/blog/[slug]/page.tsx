import { allBlogs } from "contentlayer/generated";
import { useMDXComponent } from "next-contentlayer/hooks";
import MDXComponents from "@/components/MDXComponents";
import dayjs from "dayjs";
import ShareViaTwitter from "@/components/ShareViaTwitter";

const BlogDetailsPage = ({ params }: { params: { slug: string } }) => {
  const post = allBlogs.find((post) => post.slug === params?.slug);

  // @ts-ignore
  const Component = useMDXComponent(post.body.code);

  if (!post) {
    return <div>404</div>;
  }

  return (
    <main>
      <article className="flex space-y-4 flex-col items-start justify-center max-w-2xl mx-auto mb-16">
        <header className="w-full">
          <h1 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl md:leading-tight lg:text-[2.5rem]">
            {post.title}
          </h1>

          <div className="text-sm md:flex md:justify-between md:w-full">
            <p>
              Imad Atyat-Allah /{" "}
              {dayjs(post.publishedAt).format("MMMM D, YYYY")}
            </p>

            <p>
              {post.readingTime.text} {` • `}
              {/* <ViewCounter slug={slug} /> */}
            </p>
          </div>
        </header>

        <div className="w-full prose prose-dark max-w-none">
          <Component components={{ ...MDXComponents }} />
        </div>

        <footer>
          <ShareViaTwitter title={post.title} slug={post.slug} type="blog" />
        </footer>
      </article>
    </main>
  );
};

export default BlogDetailsPage;
