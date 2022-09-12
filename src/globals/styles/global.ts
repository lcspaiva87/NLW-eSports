import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
    styles: {
        global: {
            body: {
                fontFamily:
                    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen','Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',sans-serif,'Inter' ", 
                WebKitFontSmoothing: "antialiased",
                MozOsxFontSmoothing: "grayscale",
            },

            code: {
                fontFamily:
                    "source-code-pro, Menlo, Monaco, Consolas, 'Courier New',monospace",
            },
            colors: {
                brand: {
                    input: '#18181B',
                    violet:"#8B5CF6",
                    default:"#71717A",
                    modal:'#2A2634',
                    gradient:'rgba(149, 114, 252, 1)'
                },
            },
        },
    },
});
