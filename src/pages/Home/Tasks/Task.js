import React from 'react';


const Task = ({ task, handleStatusUpdate }) => {
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
                        <p className='text-gray-900'>Status: <span className={`${status === 'solved' ? 'text-green-500' : 'text-orange-600'}`}>{status}</span> </p>
                        <button onClick={() => handleStatusUpdate(task)} className="btn btn-sm btn-primary cursor-pointer">update status</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Task;