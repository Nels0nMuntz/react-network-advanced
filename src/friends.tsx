import { User } from "./types";
import About from "./about";

export default function Friends({ users }: { users: User[] }) {
  console.log("Friends render");
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
