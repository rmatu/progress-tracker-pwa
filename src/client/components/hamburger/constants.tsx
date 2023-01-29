import { AddIcon, ExternalLinkIcon } from "@chakra-ui/icons";
import type { MenuItemProps } from "@chakra-ui/react";
import { LogoutIcon } from "../icons";

export const accountHamburgerItems: (Omit<MenuItemProps, "value"> & {
  value: "user" | "test";
})[] = [
  {
    icon: <AddIcon />,
    value: "user",
    name: "User",
  },
  {
    icon: <ExternalLinkIcon />,
    value: "test",
    name: "Test",
  },
];

export const otherHamburgerItems: (Omit<MenuItemProps, "value"> & {
  value: "logout";
})[] = [
  {
    icon: <LogoutIcon width="12.8" height="12.8" />,
    value: "logout",
    name: "Log Out",
  },
];
