import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Button as HeadlessButton,
} from "@headlessui/react";
import Link from "next/link";
import { Button } from "../ui/button";
import { UserAvatar } from "./UserAvatar";
import { logout } from "@/lib/actions";
import { auth } from "@/auth";

export async function ProfileMenu() {
  const session = await auth();

  if (!session?.user) {
    return (
      <Link href="/login">
        <Button className="hover:cursor-pointer">Log in</Button>
      </Link>
    );
  }

  return (
    <Menu as="div" className="relative ml-3">
      <div className="cursor-pointer">
        <MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden cursor-pointer">
          <span className="absolute -inset-1.5" />
          <span className="sr-only">Open user menu</span>
          <UserAvatar user={session.user} />
        </MenuButton>
      </div>
      <MenuItems
        transition
        className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
      >
        <MenuItem>
          <Link
            href="/profile"
            className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden"
          >
            Your Profile
          </Link>
        </MenuItem>
        <form action={logout} style={{ all: "unset", display: "block" }}>
          <MenuItem>
            <HeadlessButton
              formAction={logout}
              type="submit"
              className="px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden w-full text-start hover:cursor-pointer"
            >
              Sign out
            </HeadlessButton>
          </MenuItem>
        </form>
      </MenuItems>
    </Menu>
  );
}
