import Header from "./Header/Header"
import Footer from "./Footer/Footer"
import SideBar from "./SideBar/SideBar"
import React from "react"
import { Outlet } from "react-router-dom"

export const Layout = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}