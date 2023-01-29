import type { Dispatch, SetStateAction } from "react";
import { createContext, useState } from "react";

interface AppContextProps {
  isLoading: boolean;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
}

export const AppContext = createContext<AppContextProps>({
  isLoading: false,
  setIsLoading: () => undefined,
});

interface Props {
  children: React.ReactNode;
}

export const AppContextProvider = (props: Props) => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <AppContext.Provider value={{ isLoading, setIsLoading }}>
      {props.children}
    </AppContext.Provider>
  );
};
