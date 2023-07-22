import { allBlogs, allGuides } from "contentlayer/generated";

const sitemap = async () => {
  const posts = allBlogs.map((post) => ({
    url: `https://imadatyat.me/blog/${post.slug}`,
    lastModified: post.publishedAt,
  }));

  const guides = allGuides.map((post) => ({
    url: `https://imadatyat.me/guides/${post.slug}`,
    lastModified: post.publishedAt,
  }));

  const routes = ["", "/about", "/blog", "/guides", "/projects"].map(
    (route) => ({
      url: `https://imadatyat.me${route}`,
      lastModified: new Date().toISOString().split("T")[0],
    }),
  );

  return [...routes, ...posts, ...guides];
};

export default sitemap;
