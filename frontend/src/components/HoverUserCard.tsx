import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { User } from "@/types";

type Props = {
  user: User;
};

export function HoverUserCard({ user }: Props) {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="outline" className="text-center">
          {user.fullname}
        </Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-full">
        <div className="flex justify-between gap-4">
          <Avatar>
            <AvatarFallback>
              {user.fullname
                .split(" ")
                .map((p) => p[0])
                .join(" ")}
            </AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <div className="flex justify-between items-center">
              <h4 className="text-sm font-semibold">{user.fullname}</h4>
              <div className="text-muted-foreground text-xs">{user.role}</div>
            </div>
            <p className="text-sm">Email: {user.email}</p>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}
