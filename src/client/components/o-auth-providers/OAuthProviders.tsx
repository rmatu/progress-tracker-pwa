import { Button, ButtonGroup, VisuallyHidden } from "@chakra-ui/react";
import { signIn } from "next-auth/react";
import type { Dispatch, FC, SetStateAction } from "react";
import { GitHubIcon, DiscordIcon, TwitterIcon } from "./ProviderIcons";

const providers = [
  {
    name: "Discord",
    icon: <DiscordIcon />,
    onClick: () => void signIn("discord"),
  },
  { name: "GitHub", icon: <GitHubIcon boxSize="5" /> },
  { name: "Twitter", icon: <TwitterIcon boxSize="5" /> },
];

interface OAuthButtonGroupProps {
  setIsPageLoadingOnRedirect: Dispatch<SetStateAction<boolean>>;
}

export const OAuthButtonGroup: FC<OAuthButtonGroupProps> = ({
  setIsPageLoadingOnRedirect,
}) => {
  const handleClick = (onClick: () => void) => {
    onClick();
    setIsPageLoadingOnRedirect(true);
  };

  return (
    <ButtonGroup variant="outline" spacing="4" width="full">
      {providers.map(({ name, icon, onClick }) => (
        <Button key={name} width="full" onClick={() => handleClick(onClick)}>
          <VisuallyHidden>Sign in with {name}</VisuallyHidden>
          {icon}
        </Button>
      ))}
    </ButtonGroup>
  );
};
