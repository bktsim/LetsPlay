import { createTheme } from "@nextui-org/react";

export const SAPTheme = createTheme({
  type: "light",
  theme: {
    fonts: {
      sans: "Gill Sans, sans-serif",
    },
    colors: {
      sapBlue: "#00b9f2",
      primary: "#00b9f2",
      secondary: "#1661be",
      sapWhite: "#ffffff",
      sapDarkBlue: "#1661be",
      sapBlueGrad:
        "linear-gradient(0deg, rgba(22,97,190,1) 0%, rgba(1,156,224,1) 35%, rgba(255,255,255,1) 100%)",
      darkNavy: "#06283D",
    },
    fontSizes: {
      normal: "16px",
      header: "25px",
      header2: "20px",
    },
  },
});
