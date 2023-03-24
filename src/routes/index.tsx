import { Routes, Route, Navigate } from "react-router-dom"
import { Home } from "../pages/home"
import { PostsById } from "../pages/postsById"
import { Users } from "../pages/users"


export const Router = () => {
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/posts/:id" element={<PostsById/>}/>
            <Route path="/users" element={<Users/>}/>
            <Route path="*" element={ <Navigate to="/home"/>}/>
        </Routes>
    )
}