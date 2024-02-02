import { useSearchParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

/**
 *
 * @param data: array of objects and each object have tags array.
 * @returns
 */

const useTags = (data: any): [any, (text: string) => void] => {
  const [currentTag, setCurrentTag] = useState("");

  const searchParams = useSearchParams();

  useEffect(() => {
    if (searchParams.get("tag") !== undefined) {
      setCurrentTag(searchParams.get("tag") as string);
    }
  }, [searchParams]);

  const memoizedData = useMemo(() => {
    if (currentTag) {
      return data.filter((item: any) => item.tags.includes(currentTag));
    }

    return data;
  }, [currentTag, data]);

  return [memoizedData, (text) => setCurrentTag(text)];
};

export default useTags;
