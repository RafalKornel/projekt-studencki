"use client";

import { DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import classNames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { getNavigationItems, NavigationItem } from "../../navigation";
import { useSession } from "next-auth/react";

type Props = {
  navigationItems: NavigationItem[];
}

export const NavigationDesktop = ({navigationItems}: Props) => {
  const pathname = usePathname();

  return (
    <DisclosurePanel className="sm:hidden">
      <div className="space-y-1 px-2 pt-2 pb-3">
        {navigationItems.map((item) => {
          const isCurrent = pathname === item.href;

          return (
            <DisclosureButton
              key={item.name}
              as={Link}
              href={item.href}
              aria-current={isCurrent ? "page" : undefined}
              className={classNames(
                isCurrent
                  ? "bg-gray-900 text-white"
                  : "text-gray-300 hover:bg-gray-700 hover:text-white",
                "block rounded-md px-3 py-2 text-base font-medium"
              )}
            >
              {item.name}
            </DisclosureButton>
          );
        })}
      </div>
    </DisclosurePanel>
  );
};

export const NavigationMobile = ({navigationItems}: Props) => {
  const pathname = usePathname();

  return (
    <div className="hidden sm:ml-6 sm:block">
      <div className="flex space-x-4">
        {navigationItems.map((item) => {
          const isCurrent = item.href === pathname;

          return (
            <Link
              key={item.name}
              href={item.href}
              aria-current={isCurrent ? "page" : undefined}
              className={classNames(
                isCurrent
                  ? "bg-gray-900 text-white"
                  : "text-gray-300 hover:bg-gray-700 hover:text-white",
                "rounded-md px-3 py-2 text-sm font-medium"
              )}
            >
              {item.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export const NavigationMobileButton = () => (
  <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset">
    <span className="absolute -inset-0.5" />
    <span className="sr-only">Open main menu</span>
    <Bars3Icon
      aria-hidden="true"
      className="block size-6 group-data-open:hidden"
    />
    <XMarkIcon
      aria-hidden="true"
      className="hidden size-6 group-data-open:block"
    />
  </DisclosureButton>
);
