import React from 'react';
import { FaTrash } from "react-icons/fa";

const SignleTask = ({ task, handleDelete }) => {
    const { title, date, description, assignTo, status, problemSituation } = task;


    return (
        <div className="card w-full bg-gray-100 ">
            <div className="card-body">
                <p className={`text-end ${problemSituation === 'serious' ? 'text-red-500' : 'text-green-500'
                    }`}> {problemSituation}</p>
                <h2 className="card-title text-gray-900">{title}</h2>
                <p className=" text-black">{description}</p>

                <div className="card-actions justify-between ">
                    <div>
                        <p className='text-orange-600'>Assign : {assignTo}</p>
                        <p className='text-orange-600'>Date-line : {date}</p>
                    </div>
                    <div>
                        <p className='text-gray-900'>Status: {status}</p>
                        <button onClick={() => handleDelete(task)} className='ml-8 my-1 btn'> < FaTrash className="w-6 h-6 text-red-500" /></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignleTask;