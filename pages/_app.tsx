import type { AppProps } from "next/app";
import { NextUIProvider } from "@nextui-org/react";
import SAPTheme from "./src/components/Theme";
import { createContext, useState } from "react";
import { LoginModal } from "./src/components/LoginModal";
import { User } from "../controller/models/user";
import useStorage from "./src/hooks/storage";

export const LoginContext = createContext({
  loggedIn: false,
  setLoggedIn: (loggedIn: boolean) => {},
  user: {} as User,
  setUser: (user: User) => {},
});

function MyApp({ Component, pageProps }: AppProps) {
  const [loggedIn, setLoggedIn] = useState<boolean>(
    useStorage().getItem("loggedIn", "session") === "true"
  );
  const userStrorage: string = useStorage().getItem("user", "session");
  const parsedUser: Object = userStrorage ? JSON.parse(userStrorage) : {};
  const [user, setUser] = useState<User>(parsedUser as User);
  return (
    <LoginContext.Provider value={{ loggedIn, setLoggedIn, user, setUser }}>
      <NextUIProvider theme={SAPTheme}>
        <div style={{ display: !loggedIn ? "block" : "none" }}>
          <LoginModal />
        </div>

        <div style={{ display: loggedIn ? "block" : "none" }}>
          <Component {...pageProps} />
        </div>
      </NextUIProvider>
    </LoginContext.Provider>
  );
}

export default MyApp;
