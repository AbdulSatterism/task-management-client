import React from 'react';
import useTasks from '../../../hooks/useTasks';
import Task from './Task';
import Loading from '../../../component/Loading';
import axios from 'axios';
import Swal from 'sweetalert2';

const Tasks = () => {
    const { tasks, isLoading, refetch } = useTasks();

    if (isLoading) {
        return <Loading></Loading>
    }

    const handleStatusUpdate = (task) => {
        const confirm = window.confirm('are you want to update status')
        if (confirm) {
            axios.patch(`https://task-management-server-0cxv.onrender.com/tasks/update/${task?._id}`)
                .then(data => {
                    if (data.data?.modifiedCount > 0) {
                        refetch()
                        Swal.fire({
                            position: "top-center",
                            icon: "success",
                            title: "status updated successfully!!",
                            showConfirmButton: false,
                            timer: 2000
                        });

                    }
                })
        }
    }

    return (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4  p-2 my-4">
            {
                tasks?.map(task => <Task
                    key={task?._id}
                    task={task}
                    handleStatusUpdate={handleStatusUpdate}
                ></Task>)
            }
        </div >
    );
};

export default Tasks;