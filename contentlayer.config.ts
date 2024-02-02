import {
  ComputedFields,
  defineDocumentType,
  makeSource,
} from "contentlayer/source-files";
import readingTime from "reading-time";
import { rehypeAccessibleEmojis } from "rehype-accessible-emojis";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeCodeTitles from "rehype-code-titles";
import rehypePrism from "rehype-prism-plus";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import remarkToc from "remark-toc";

const computedFields: ComputedFields = {
  readingTime: { type: "json", resolve: (doc) => readingTime(doc.body.raw) },

  wordCount: {
    type: "number",
    resolve: (doc) => doc.body.raw.split(/\s+/gu).length,
  },

  slug: {
    type: "string",
    resolve: (doc) => doc._raw.sourceFileName.replace(/\.mdx$/, ""),
  },
};

const Blog = defineDocumentType(() => ({
  name: "Blog",
  filePathPattern: "blog/*.mdx",
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    publishedAt: { type: "string", required: true },
    summary: { type: "string", required: true },
    image: { type: "string", required: false },
    blurDataURL: { type: "string", required: true },
  },
  computedFields,
}));

const Guides = defineDocumentType(() => ({
  name: "Guides",
  filePathPattern: "guides/*.mdx",
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    publishedAt: { type: "string", required: true },
    description: { type: "string", required: true },
    image: { type: "string", required: false },
  },
  computedFields,
}));

const OtherPage = defineDocumentType(() => ({
  name: "OtherPage",
  filePathPattern: "*.mdx",
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
  },
  computedFields,
}));

const contentLayerConfig = makeSource({
  contentDirPath: "data",
  documentTypes: [Blog, Guides, OtherPage],
  mdx: {
    remarkPlugins: [remarkGfm, remarkToc],
    rehypePlugins: [
      rehypeAccessibleEmojis,
      rehypeSlug,
      rehypeCodeTitles,
      rehypePrism,
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ["anchor"],
          },
        },
      ],
    ],
  },
});

export default contentLayerConfig;
