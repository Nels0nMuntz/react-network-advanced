import { useEffect, useState } from "react";
import { get } from "./utilities";
import { Feed } from "./types";

export default function Feeds({ category }: { category: string }) {
  console.log("Feed render");
  const [feeds, setFeeds] = useState<Feed[]>([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    async function fetchFeeds() {
      console.log("fetchFeeds run");
      try {
        setLoading(true);
        const data = await get<Feed[]>(`/articles/${category}`);
        setFeeds(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
    fetchFeeds();
  }, [category]);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-6">Feeds</h2>
      <div className="flex flex-col gap-y-4">
        {feeds.map((feed) => (
          <div className="flex flex-col gap-y-2" key={feed.id}>
            <h3 className="text-xl font-medium">{feed.title}</h3>
            <p>{feed.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
