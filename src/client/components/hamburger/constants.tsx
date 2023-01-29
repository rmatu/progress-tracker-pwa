import { AddIcon, ExternalLinkIcon } from "@chakra-ui/icons";
import type { MenuItemProps } from "@chakra-ui/react";
import { LogoutIcon } from "../icons";

export const actionHamburgerItems: (Omit<MenuItemProps, "value"> & {
  value: "add-resolution" | "test";
})[] = [
  {
    icon: <AddIcon />,
    value: "add-resolution",
    name: "Add Resolution",
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

export type HamburgerActionTypes =
  | (typeof actionHamburgerItems)[number]["value"]
  | (typeof otherHamburgerItems)[number]["value"];
