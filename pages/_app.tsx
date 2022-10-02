import type { AppProps } from "next/app";
import { Button, Checkbox, Input, Modal, NextUIProvider, Text, Row } from "@nextui-org/react";
import SAPTheme from "./src/components/Theme";
import { createContext, useContext, useState } from "react";
import { LoginModal } from "./src/components/LoginModal";
import { User } from "../controller/models/user"
import useStorage from "./src/hooks/storage";
import { StringDecoder } from "string_decoder";

export const LoginContext = createContext({
  loggedIn: false,
  setLoggedIn: (loggedIn: boolean) => { },
  user: {} as User,
  setUser: (user: User) => {
  }
})


function MyApp({ Component, pageProps }: AppProps) {
  const [loggedIn, setLoggedIn] = useState<boolean>(useStorage().getItem("loggedIn", "session") === "true");
  const userStrorage: string = useStorage().getItem("user", "session");
  const parsedUser: Object = userStrorage ? JSON.parse(userStrorage) : {};
  const [user, setUser] = useState<User>(parsedUser as User)
  return (
    <LoginContext.Provider value={{ loggedIn, setLoggedIn, user, setUser }}>
      <NextUIProvider theme={SAPTheme}>
        <LoginModal />
        <Component {...pageProps} />
      </NextUIProvider>
    </LoginContext.Provider>
  );
}

export default MyApp;
