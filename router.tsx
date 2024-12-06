import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./Layout/DefaultLayout";
import { HomePage } from "./Pages/Home";
import { VideoPageHome } from "./Pages/VideoPage";




export function AppRouter() {

    return(
        <Routes>
            <Route path="/" element={<DefaultLayout/>}>
            <Route path="home" element={<HomePage/>} />
            <Route path="watch" element={<VideoPageHome/>} />
            </Route>
        </Routes>
    )
}