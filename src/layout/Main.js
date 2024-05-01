import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidenav from '../pages/Shared/Sidenav/Sidenav';
import Navbar from '../pages/Shared/Navbar/Navbar';


const Main = () => {
    return (
        <div>
            <div className="flex h-screen ">
                <Sidenav></Sidenav>
                <div className="flex flex-col flex-1">
                    <Navbar></Navbar>
                    <Outlet></Outlet>
                </div>

            </div>
        </div>
    );
};

export default Main;