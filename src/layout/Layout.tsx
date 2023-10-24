import { Outlet } from "react-router-dom"
import Header from "./Header";
import '../stylesheets/Layout.scss'
import { useState } from "react";
import Sidebar from "./Sidebar";

function Layout() {
    const [showSidebar, setShowSidebar] = useState<boolean>(false);

    const toggleMenu = (): void => {
        setShowSidebar(!showSidebar)
    }

    return (
        <div className='layout'>
            <Header toggleMenu={toggleMenu} />
            <div className='container'>
                <Sidebar showSideBar={showSidebar}/>
                <div className='outlet_container'>
                    <Outlet />
                </div>
            </div>
        </div>
    );
}

export default Layout;