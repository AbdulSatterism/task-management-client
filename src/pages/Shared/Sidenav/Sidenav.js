import React, { useContext } from 'react';
import logo from '../../../assests/logo/logo.png'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../provider/AuthProvider';

const Sidenav = () => {
    const { logOut, user } = useContext(AuthContext);

    const handleLogout = () => {
        logOut()
            .then(() => {
                // Sign-out successful.
            }).catch((error) => {
                // An error happened.
            });
    }

    const sideItem = <>
        <li className="p-4 hover:bg-gray-700 cursor-pointer"><Link to='/'>My task</Link></li>
        <li className="p-4 hover:bg-gray-700 cursor-pointer"><Link to='/'>Solve task</Link></li>
        <li className="p-4 hover:bg-gray-700 cursor-pointer"><Link to='/'>Pending Task</Link></li>

        <li className="p-4 hover:bg-gray-700 cursor-pointer"><Link to='/'>Pending Task</Link></li>


        {
            user?.uid ?
                <>
                    <li onClick={() => handleLogout()} className="p-4 hover:bg-gray-700 cursor-pointer"><Link to='/login'>Logout</Link></li>
                </>
                :
                <>
                    <li className="p-4 hover:bg-gray-700 cursor-pointer"><Link to='/login'>Login</Link></li>
                </>
        }

    </>

    return (
        <div className="bg-gray-900 h-screen w-36  ml-0 text-white flex flex-col">
            <div className="flex items-center justify-center mx-auto w-16 ">
                <img src={logo} alt="" />
            </div>
            <div className="flex-1 my-2">
                <ul>
                    {sideItem}

                </ul>
            </div>
        </div>
    );
};

export default Sidenav;