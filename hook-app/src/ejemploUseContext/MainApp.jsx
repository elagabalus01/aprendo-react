import {Link, Navigate, Route, Routes} from "react-router-dom";
import {HomePage} from "./HomePage.jsx";
import {AboutPage} from "./AboutPage.jsx";
import {LoginPage} from "./LoginPage.jsx";
import {NavBar} from "./NavBar.jsx";

export const MainApp = ()=>{
    return(
        <>
            <h1>MAIN APP</h1>
            <NavBar></NavBar>
            <hr />
            <Routes>
                <Route path="/" element={<HomePage/>}></Route>
                <Route path="/about" element={<AboutPage/>}></Route>
                <Route path="/login" element={<LoginPage/>}></Route>
                <Route path="/*" element={<Navigate to="/login"/>}></Route>
            </Routes>
        </>
    )

}

