import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { ChakraProvider } from "@chakra-ui/react";
import { api } from "../utils/api";

import "../styles/globals.css";
import { colors, theme } from "../client/theme";
import { ThemeProvider } from "styled-components";
import { AppContextProvider } from "../client/context/AppContext";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <AppContextProvider>
      <ThemeProvider theme={{ colors }}>
        <ChakraProvider theme={theme}>
          <SessionProvider session={session}>
            <Component {...pageProps} />
          </SessionProvider>
        </ChakraProvider>
      </ThemeProvider>
    </AppContextProvider>
  );
};

export default api.withTRPC(MyApp);
