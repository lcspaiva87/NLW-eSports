import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  styles: {
    global: {
      body: {
        background: "#121214",
        fontFamily: "Inter ",
        WebKitFontSmoothing: "antialiased",
        MozOsxFontSmoothing: "grayscale",
        margin: 0,
        padding: 0,
        boxSizing: " border-box",
        bgImage:
          "linear-gradient(#633bbc1c, rgb(0 0 0 / 0%)), url(/nevoa.png),url(/estrelas.png) ",
        color: "#fff",
        backgroundRepeat: "no-repeat",
      },
      code: {
        fontFamily: "Inter ",
      },
      colors: {
        brand: {
          input: "#18181B",
          violet: "#8B5CF6",
          default: "#71717A",
          footer: "#2A2634",
          info: "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.9) 67.08%)",
          gradient: {
            gren: "rgba(67, 231, 173, 1)",
            purple: ",rgba(149, 114, 252, 1)",
            yellow: "rgba(225, 213, 93, 1)",
            white: "rgba(255, 255, 255, 1)",
          },
          ads: "rgba(161, 161, 170, 1)",
        },
      },
    },
  },
});
