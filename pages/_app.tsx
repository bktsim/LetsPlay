import type { AppProps } from "next/app";
import { NextUIProvider } from "@nextui-org/react";
import { SAPTheme } from "./src/components/Theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider theme={SAPTheme}>
      <Component {...pageProps} />
    </NextUIProvider>
  );
}

export default MyApp;
