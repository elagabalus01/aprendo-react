import {Route, Router, Routes} from "react-router-dom";
import {AuthRoutes} from "./AuthRoutes.jsx";
import {JournalRouter} from "./JournalRouter.jsx";

export const AppRouter = ()=>{

    return (

        <Routes>
            <Route path="/auth/*" element={<AuthRoutes/>}/>
            <Route path="/*" element={<JournalRouter/>}/>
        </Routes>

    )

}
