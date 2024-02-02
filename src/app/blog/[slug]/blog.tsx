import { useMDXComponent } from "next-contentlayer/hooks";

import MDXComponents from "@/components/MDXComponents";

const Blog = ({ code }: { code: string }) => {
  const Component = useMDXComponent(code);

  return (
    <div className="prose-dark prose w-full max-w-none">
      <Component components={{ ...MDXComponents }} />
    </div>
  );
};

export default Blog;
