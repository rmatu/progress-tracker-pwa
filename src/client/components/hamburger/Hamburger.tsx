import { HamburgerIcon } from "@chakra-ui/icons";
import {
  IconButton,
  Menu,
  MenuButton,
  MenuDivider,
  MenuGroup,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import type { FC, MouseEventHandler } from "react";
import { actionHamburgerItems, otherHamburgerItems } from "./constants";

interface HamburgerProps {
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const Hamburger: FC<HamburgerProps> = ({ onClick }) => {
  const actionItems = actionHamburgerItems.map(
    ({ value, command, icon, name }) => (
      <MenuItem
        pl={6}
        key={value}
        icon={icon}
        command={command}
        value={value}
        onClick={onClick}
      >
        {name}
      </MenuItem>
    )
  );

  const otherMenuItems = otherHamburgerItems.map(
    ({ value, command, icon, name }) => (
      <MenuItem
        pl={6}
        key={value}
        icon={icon}
        command={command}
        value={value}
        onClick={onClick}
      >
        {name}
      </MenuItem>
    )
  );

  return (
    <Menu placement="bottom-end">
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
        className="!shadow-lg"
        sx={{
          borderColor: "rgb(248 250 252 / 0.06)",
          background: "rgb(30 41 59/var(--tw-bg-opacity))",
          button: {
            backgroundColor: "rgb(30 41 59/var(--tw-bg-opacity))",

            ":hover": {
              backgroundColor: "#394353",
            },
          },
        }}
      >
        <MenuGroup title="Actions">{actionItems}</MenuGroup>
        <MenuDivider />
        <MenuGroup title="Other">{otherMenuItems}</MenuGroup>
      </MenuList>
    </Menu>
  );
};

export { Hamburger };
