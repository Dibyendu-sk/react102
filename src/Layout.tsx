// import { Header } from "./pages/Header";
// import { Footer } from "./pages/Footer";
import { Outlet } from "react-router";

export function Layout() {
    return <>
        {/* <Header/> */}
        <Outlet />
        {/* <Footer/> */}
    </>
}