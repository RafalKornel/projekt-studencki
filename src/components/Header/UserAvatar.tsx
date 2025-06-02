import { User } from "next-auth";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

type Props = {
  user: User;
};

export function UserAvatar({ user }: Props) {
  return (
    <Avatar>
      {user.image && (
        <AvatarImage src={user.image} alt={user.name || "user-image"} />
      )}
      {user.name && (
        <AvatarFallback>
          {user.name
            .split(" ")
            .map((p) => p[0])
            .join(" ")}
        </AvatarFallback>
      )}
    </Avatar>
  );
}
