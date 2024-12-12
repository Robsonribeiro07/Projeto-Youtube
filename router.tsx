import { Route, Routes, Navigate} from "react-router-dom";
import { DefaultLayout } from "./Layout/DefaultLayout";
import { HomePage } from "./Pages/Home";
import { VideoPageHome } from "./Pages/VideoPage";




export function AppRouter() {

    return(
        <Routes>
             <Route path="/" element={<Navigate to="/home" />} />


            <Route path="/"  element={<DefaultLayout/>}>
            <Route path="home" element={<HomePage/>} />
            <Route path="watch" element={<VideoPageHome/>} />
            </Route>
        </Routes>
    )
}