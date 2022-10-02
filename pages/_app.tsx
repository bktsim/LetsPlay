import type { AppProps } from "next/app";
import { NextUIProvider } from "@nextui-org/react";
import SAPTheme from "./src/components/Theme";
import { createContext, useState } from "react";
import { LoginModal } from "./src/components/LoginModal";
import { User } from "../controller/models/user";
import useStorage from "./src/hooks/storage";

export const LoginContext = createContext({
  loggedIn: false,
  setLoggedIn: (loggedIn: boolean) => { },
  user: {} as User,
  setUser: (user: User) => { },
});

export const DataContext = createContext({
  allUsers: [] as User[],
  setAllUsers: (users: User[]) => { },
  allInterests: [] as string[],
  setAllInterests: (interests: string[]) => { },
});

export async function callGetAllUsers(): Promise<User[]> {
  return await fetch("/api/user", {
    method: "GET",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  }).then((res) => {
    if (res.status === 200) {
      return res.json().then((json) => json.users);
    } else {
      return [];
    }
  });
}

function MyApp({ Component, pageProps }: AppProps) {
  const [loggedIn, setLoggedIn] = useState<boolean>(
    useStorage().getItem("loggedIn", "session") === "true"
  );
  const userStrorage: string = useStorage().getItem("user", "session");
  const parsedUser: Object = userStrorage ? JSON.parse(userStrorage) : {};
  const [user, setUser] = useState<User>(parsedUser as User);
  const [allUsers, setAllUsers] = useState<User[]>([]);
  const [allInterests, setAllInterests] = useState<string[]>([]);
  return (
    <LoginContext.Provider value={{ loggedIn, setLoggedIn, user, setUser }}>
      <DataContext.Provider
        value={{ allUsers, setAllUsers, allInterests, setAllInterests }}
      >
        <NextUIProvider theme={SAPTheme}>
          <LoginModal />

          <Component {...pageProps} />
        </NextUIProvider>
      </DataContext.Provider>
    </LoginContext.Provider>
  );
}

export default MyApp;
