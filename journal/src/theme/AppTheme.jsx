import {CssBaseline, ThemeProvider} from "@mui/material";
import {CustomTheme} from "./CustomTheme.jsx";

export const AppTheme = ({children})=>{

    return (
        <ThemeProvider theme={CustomTheme} >
            <CssBaseline />
            {children}
        </ThemeProvider>

    )


}
