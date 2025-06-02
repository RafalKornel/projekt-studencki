import { Disclosure } from "@headlessui/react";
import Image from "next/image";
import { ProfileMenu } from "./ProfileMenu";
import {
  NavigationDesktop,
  NavigationMobile,
  NavigationMobileButton,
} from "./Navigation";
import { ThemeSwitcher } from "../ThemeSwitcher";
import { auth } from "@/auth";
import { getNavigationItems } from "@/navigation";

export async function Header() {
  const session = await auth();

  const navigationItems = session?.user
    ? getNavigationItems(session.user.role)
    : [];

  return (
    <Disclosure as="nav" className="bg-gray-800">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <NavigationMobileButton />
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex shrink-0 items-center">
              <Image
                className="dark:invert"
                src="/next.svg"
                alt="Next.js logo"
                width={90}
                height={19}
                priority
              />
            </div>
            <NavigationMobile navigationItems={navigationItems} />
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 gap-4">
            <ThemeSwitcher />
            <ProfileMenu />
          </div>
        </div>
      </div>

      <NavigationDesktop navigationItems={navigationItems} />
    </Disclosure>
  );
}
