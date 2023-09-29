import {Route, Routes} from "react-router-dom";

export const AuthRoutes = ()=>{
    return (

        <Routes>
            <Route path={"/login"} element={
                <h1>LOGGED IN</h1>
            }></Route>
        </Routes>
    )
}
