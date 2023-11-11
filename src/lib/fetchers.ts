import prisma from "@/lib/prisma";

export const getViews = async (slug: string) => {
  const views = await prisma.views.findUnique({ where: { slug } });

  return views?.count.toString();
};
