import { Popover, PopoverContent, PopoverTrigger } from "@nextui-org/react";
import Brief from "./brief.tsx";
import UserDetailCard from "./user-detail-card.tsx";
import { User } from "./types.ts";

export default function Friend({ user }: { user: User }) {
  return (
    <Popover placement="bottom" showArrow offset={10}>
      <PopoverTrigger>
        <button>
          <Brief user={user} />
        </button>
      </PopoverTrigger>
      <PopoverContent>
        <UserDetailCard id={user.id} />
      </PopoverContent>
    </Popover>
  );
}
