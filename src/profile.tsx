import { useEffect, useState } from "react";
import { User } from "./types";
import { get } from "./utilities";
import About from "./about";
import Friends from "./friends";
import Feeds from "./feeds";

export default function Profile({ id }: { id: string }) {
  console.log("Profile render");
  const [user, setUser] = useState<User | null>(null);
  const [friends, setFriends] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function fetchUser() {
      console.log("fetchUser run");
      try {
        setLoading(true);
        const [userData, friendsData] = await Promise.all([
          get<User>(`/users/${id}`),
          get<User[]>(`/users/${id}/friends`),
        ]);
        setUser(userData);
        setFriends(friendsData);
      } catch (error) {
        setError(error as Error);
      } finally {
        setLoading(false);
      }
    }
    fetchUser();
  }, [id]);

  if (loading || !user) return <div>Loading...</div>;

  if (error) return <div>Something went wrong</div>;

  return (
    <div>
      <About user={user} />
      <Friends users={friends} />
      <Feeds category={user.interests[0]}/>
    </div>
  );
}
