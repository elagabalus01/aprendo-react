import {Route, Routes} from "react-router-dom";

export const JournalRouter = ()=>{

    return (
        <Routes>
            <Route path="/journal" element={
                <h1>JOURNAL </h1>
            } ></Route>
        </Routes>

    )

}
