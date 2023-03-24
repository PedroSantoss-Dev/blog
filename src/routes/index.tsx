import { Routes, Route, Navigate } from "react-router-dom"
import { Home } from "../pages/home"
import { PostsById } from "../pages/postsById"


export const Router = () => {
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/posts/:id" element={<PostsById/>}/>
            <Route path="*" element={ <Navigate to="/home"/>}/>
        </Routes>
    )
}