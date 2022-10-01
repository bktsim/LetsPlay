import type { AppProps } from "next/app";
import { NextUIProvider } from "@nextui-org/react";
import { sapTheme } from "./src/components/Theme"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider theme={sapTheme}>
      <Component {...pageProps} />
    </NextUIProvider>
  );
}

export default MyApp;
