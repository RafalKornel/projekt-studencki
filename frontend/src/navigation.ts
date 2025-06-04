import { Role } from "./database/enums";

export type NavigationItem = {
  name: string;
  href: string;
  for: Role[];
};

const navigation: NavigationItem[] = [
  { name: "Test page", href: "/test", for: Object.values(Role) },
  {
    name: "Home",
    href: "/",
    for: [Role.Administrator, Role.Doctor, Role.User],
  },
  {
    name: "Services",
    href: "/services",
    for: [Role.Administrator],
  },
  {
    name: "Appointments",
    href: "/appointments",
    for: [Role.Administrator, Role.Doctor, Role.User],
  },
  { name: "Book appointment", href: "/book-appointment", for: [Role.User] },
];

export const getNavigationItems = (role: Role) =>
  navigation.filter((i) => i.for.includes(role));
