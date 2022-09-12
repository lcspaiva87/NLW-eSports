import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
    styles: {
        global: {
            body: {
                fontFamily:
                    "sans-serif,Inter ", 
                WebKitFontSmoothing: "antialiased",
                MozOsxFontSmoothing: "grayscale",
                margin: 0,
                padding: 0,
                boxSizing:' border-box',
                bgImage:"linear-gradient(rgba(99, 59, 188, 1), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0),rgb(0, 0, 0),rgb(0, 0, 0),rgb(0, 0, 0),rgb(0, 0, 0)) ,url(/nevoa.png),url(/estrelas.png) ",
                //background:'',
              
            },

            code: {
                fontFamily:
                "sans-serif,Inter ", 
                
            },
            colors: {
                brand: {
                    input: '#18181B',
                    violet:"#8B5CF6",
                    default:"#71717A",
                    modal:'#2A2634',
                    gradient:{
                        gren:'rgba(67, 231, 173, 1)',
                        purple:',rgba(149, 114, 252, 1)',
                        yellow:'rgba(225, 213, 93, 1)',
                        white:'rgba(255, 255, 255, 1)'
                    }
                },
            },
        },
    },
});
