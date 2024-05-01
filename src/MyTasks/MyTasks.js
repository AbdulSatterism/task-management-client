import React from 'react';
import Loading from '../component/Loading';
import useMyTask from '../hooks/useMyTask';
import SignleTask from './SignleTask';
import axios from 'axios';
import Swal from 'sweetalert2';


const MyTasks = () => {
    const { myTasks, isLoading, refetch } = useMyTask()

    if (isLoading) {
        return <Loading></Loading>
    }

    const handleDelete = (task) => {
        const confirm = window.confirm('want to delete this')
        if (confirm) {
            axios.delete(`https://task-management-server-0cxv.onrender.com/tasks/${task?._id}`)
                .then(data => {
                    if (data.data?.deletedCount > 0) {
                        refetch()
                        Swal.fire({
                            position: "top-center",
                            icon: "success",
                            title: "deleted successfully!!",
                            showConfirmButton: false,
                            timer: 2000
                        });

                    }
                })
        }
    }



    return (
        <div className="grid lg:grid-cols-2  gap-4  p-2 my-4">
            {
                myTasks?.map(task => <SignleTask
                    key={task?._id}
                    task={task}
                    handleDelete={handleDelete}
                ></SignleTask>)
            }
        </div >
    );
};

export default MyTasks;