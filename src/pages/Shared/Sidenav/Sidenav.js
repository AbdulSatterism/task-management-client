import React, { useContext } from 'react';
import logo from '../../../assests/logo/logo.png'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../provider/AuthProvider';
import { FaHome, FaUserCircle } from 'react-icons/fa';
import { FcParallelTasks } from 'react-icons/fc';
import { MdIncompleteCircle } from 'react-icons/md';
import { GrStatusGood } from 'react-icons/gr';
import { AiOutlineLogin, AiOutlineLogout } from 'react-icons/ai';

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
        <li className="p-1 my-2 hover:bg-gray-700 cursor-pointer"><Link to='/'><FaHome /> Home</Link></li>
        <li className="p-1 my-2 hover:bg-gray-700 cursor-pointer"><Link to='/my-task'><FcParallelTasks /> My task</Link></li>

        <li className="p-1 my-2 hover:bg-gray-700 cursor-pointer"><Link to='pending-task'><MdIncompleteCircle />Pending Task</Link></li>


        <li className="p-1 my-2 hover:bg-gray-700 cursor-pointer"><Link to='/solved-task'><GrStatusGood />Solved Task</Link></li>

        <div className="divider divider-accent">Assaign To</div>

        <li className="p-1 my-2 hover:bg-gray-700 cursor-pointer"><Link to='/rahim'><FaUserCircle />Rohim</Link></li>
        <li className="p-1 my-2 hover:bg-gray-700 cursor-pointer"><Link to='/karim'><FaUserCircle />Karim</Link></li>
        <li className="p-1 my-2 hover:bg-gray-700 cursor-pointer"><Link to='/abdul-satter'><FaUserCircle />Abdul Satter</Link></li>

        {
            user?.uid ?
                <>
                    <li onClick={() => handleLogout()} className="p-1 my-2 hover:bg-gray-700 cursor-pointer"><Link to='/login'><AiOutlineLogout /> Logout</Link></li>
                </>
                :
                <>
                    <li className="p-1 my-2 hover:bg-gray-700 cursor-pointer"><Link to='/login'><AiOutlineLogin /> Login</Link></li>
                </>
        }

    </>

    return (
        <div className="bg-gray-900 h-screen text-white flex flex-col my-auto">

            <div className="flex items-center justify-center mx-auto w-16 ">
                <img src={logo} alt="" />
            </div>
            <div className="flex-1 my-2">
                <ul className="menu  w-full text-[20px]">
                    {sideItem}
                </ul>
            </div>

        </div>
    );
};

export default Sidenav;