import MDXComponents from "@/components/MDXComponents";
import { useMDXComponent } from "next-contentlayer/hooks";

const Blog = ({ code }: { code: string }) => {
  const Component = useMDXComponent(code);

  return (
    <div className="w-full prose prose-dark max-w-none">
      <Component components={{ ...MDXComponents }} />
    </div>
  );
};

export default Blog;
