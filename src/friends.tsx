import { useEffect, useState } from "react";
import { get } from "./utilities";
import { User } from "./types";
import About from "./about";

export default function Friends({ id }: { id: string }) {
  console.log("Friends render");
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    async function fetchUsers() {
      console.log("fetchUsers run");
      try {
        setLoading(true);
        const data = await get<User[]>(`/users/${id}/friends`);
        setUsers(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
    fetchUsers();
  }, [id]);
  if (loading) return <div>Loading...</div>;
  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold">Friends</h2>
      <div className="flex flex-col gap-y-4 mt-6">
        {users.map((user) => (
          <About user={user} key={user.id} />
        ))}
      </div>
    </div>
  );
}
