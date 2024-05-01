import React, { useContext, useState } from 'react';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import AddTaskModal from '../../AddTaskModal/AddTaskModal';
import { AuthContext } from '../../../provider/AuthProvider';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { user } = useContext(AuthContext);

    return (

        <div className="navbar bg-white shadow-sm">
            <div className="flex-1">
                <button onClick={() => setIsOpen(!isOpen)} className="btn btn-primary">Add Task</button>
                <AddTaskModal isOpen={isOpen} setIsOpen={setIsOpen}></AddTaskModal>
            </div>
            <div className="flex-none gap-2">
                <div className="form-control">
                    <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
                </div>
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="rounded-full">
                            <FaUser></FaUser>
                        </div>
                    </div>
                    <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-gray-800 text-white rounded-box w-52">
                        <li>
                            <Link className="justify-between">
                                {user?.displayName}
                            </Link>
                        </li>
                        <li><Link>Settings</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;