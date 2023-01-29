import { AddIcon, HamburgerIcon } from "@chakra-ui/icons";
import type { MenuItemProps } from "@chakra-ui/react";
import {
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import type { FC, MouseEventHandler } from "react";

interface HamburgerProps {
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const hamburgerItems: (Omit<MenuItemProps, "value"> & {
  value: "logout" | "test";
})[] = [
  {
    icon: <AddIcon />,
    value: "logout",
    name: "Log Out",
  },
];

export const Hamburger: FC<HamburgerProps> = ({ onClick }) => {
  const menuItems = hamburgerItems.map(({ value, command, icon, name }) => (
    <MenuItem
      sx={{
        display: "flex",
        justifyContent: "flex-end",

        "> span": {
          maxWidth: "fit-content",
        },
      }}
      key={value}
      icon={icon}
      command={command}
      value={value}
      onClick={onClick}
    >
      {name}
    </MenuItem>
  ));

  return (
    <Menu>
      <MenuButton
        as={IconButton}
        aria-label="Options"
        icon={<HamburgerIcon />}
        variant="outline"
        px={2}
        py={2}
        transition="all 0.2s"
        borderRadius="md"
        borderWidth="1px"
        borderColor="rgb(248 250 252 / 0.25)"
        _expanded={{ bg: "rgba(144, 205, 244, 0.12)" }}
      />
      <MenuList
        maxW={"90vw"}
        className="!shadow-lg"
        sx={{
          minWidth: "140px",
          borderColor: "rgb(248 250 252 / 0.06)",
          background: "rgb(30 41 59/var(--tw-bg-opacity))",
          "> button": {
            backgroundColor: "rgb(30 41 59/var(--tw-bg-opacity))",

            ":hover": {
              backgroundColor: "#394353",
            },
          },
        }}
      >
        {menuItems}
      </MenuList>
    </Menu>
  );
};
