import {AppRouter} from "./router/AppRouter.jsx";
import {Typography} from "@mui/material";

export const JournalApp = ()=>{

    return (
        <>
            <Typography component="h1">Journal APP</Typography>
            <AppRouter/>
        </>
    )
}
