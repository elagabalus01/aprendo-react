import {Route, Routes} from "react-router-dom";
import {JournalPage} from "../pages/JournalPage.jsx";

export const JournalRouter = ()=>{

    return (
        <Routes>
            <Route path="/journal" element={<JournalPage/>} ></Route>
        </Routes>

    )

}
