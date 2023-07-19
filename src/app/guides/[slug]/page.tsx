import { allGuides } from "contentlayer/generated";
import { useMDXComponent } from "next-contentlayer/hooks";
import MDXComponents from "@/components/MDXComponents";
import ShareViaTwitter from "@/components/ShareViaTwitter";

const GuideDetailsPage = ({ params }: { params: { slug: string } }) => {
  const guide = allGuides.find((guide) => guide.slug === params?.slug);

  // @ts-ignore
  const Component = useMDXComponent(guide.body.code);

  if (!guide) {
    return <div>404</div>;
  }

  return (
    <main>
      <article className="flex space-y-4 flex-col items-start justify-center max-w-2xl mx-auto mb-16">
        <header>
          <h1 className="mb-4 text-3xl font-bold tracking-tight text-center md:text-4xl md:leading-tight lg:text-[2.5rem]">
            {guide.title}
          </h1>
        </header>

        <div className="w-full prose prose-dark max-w-none">
          <Component components={{ ...MDXComponents }} />
        </div>

        <footer className="flex justify-between w-full mt-8 font-medium">
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
