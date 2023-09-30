import {Navigate, Route, Routes} from "react-router-dom";
import {LoginComponent} from "../components/index.js";

export const AuthRoutes = ()=>{
    return (

        <Routes>
            <Route path={"login"} element={
                <LoginComponent/>
            }></Route>
            <Route path='/*' element={ <Navigate to="/auth/login" /> } />
        </Routes>
    )
}
