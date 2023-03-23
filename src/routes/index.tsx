import { Routes, Route, Navigate } from "react-router-dom"
import { Home } from "../pages/home"


export const Router = () => {
    return(
        <Routes>
            <Route path="/" element={<Home></Home>}/>
            <Route path="*" element={ <Navigate to="/home"/>}/>
        </Routes>
    )
}