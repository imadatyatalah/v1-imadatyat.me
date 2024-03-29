import { unstable_noStore } from "next/cache";

import { getViews } from "@/lib/fetchers";

const ViewsCounter = async ({ slug }: { slug: string }) => {
  unstable_noStore();
  const views = await getViews(slug);

  return <>{views} views</>;
};

export default ViewsCounter;
