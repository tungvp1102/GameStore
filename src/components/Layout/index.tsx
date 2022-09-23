import Header from "./Header/Header"
import Footer from "./Footer/Footer"
import SideBar from "./SideBar/SideBar"
import { Outlet } from "./Outlet/Outlet"
import React from "react"

export const Layout = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}