import { User } from "./types";

export default function About({ user }: { user: User }) {
  return (
    <div className="flex items-center gap-x-4 p-6 border border-solid border-stone-200">
      {Boolean(user.avatar) && (
        <div>
          <img src={user.avatar} alt={`User ${user.name} avatar`} />
        </div>
      )}
      <div className="flex flex-col gap-y-4">
        <div>{user.name}</div>
        <div>{user.bio}</div>
      </div>
    </div>
  );
}
