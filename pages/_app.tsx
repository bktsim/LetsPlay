import type { AppProps } from "next/app";
import { Button, Checkbox, Input, Modal, NextUIProvider, Text, Row } from "@nextui-org/react";
import SAPTheme from "./src/components/Theme";
import { createContext, useContext, useState } from "react";
import { LoginModal } from "./src/components/LoginModal";
import useStorage from "./src/hooks/storage";

export const LoginContext = createContext({
  loggedIn: false,
  setLoggedIn: (loggedIn: boolean) => { }
}
)


function MyApp({ Component, pageProps }: AppProps) {
  const [loggedIn, setLoggedIn] = useState<boolean>(useStorage().getItem("loggedIn", "session") === "true");
  return (
    <LoginContext.Provider value={{ loggedIn, setLoggedIn }}>
      <NextUIProvider theme={SAPTheme}>
        <LoginModal />
        <Component {...pageProps} />
      </NextUIProvider>
    </LoginContext.Provider>
  );
}

export default MyApp;
