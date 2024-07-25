import { User } from "./types";

export default function Brief({ user }: { user: User }) {
  return (
    <div className="flex items-center gap-x-4 p-6 border border-solid border-stone-200">
      <div className="p-1 border border-solid border-slate-300 rounded-full">
        <img
          src={`https://i.pravatar.cc/150?u=${user.id}`}
          width={32}
          height={32}
          alt={`User ${user.name} avatar`}
          className="rounded-full"
        />
      </div>
      <div className="flex flex-col gap-y-2 text-left">
        <span>{user.name}</span>
        <span>{user.bio}</span>
      </div>
    </div>
  );
}
