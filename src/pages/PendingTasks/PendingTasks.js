import React from 'react';
import useTasks from '../../hooks/useTasks';
import Loading from '../../component/Loading';
import Task from '../Home/Tasks/Task';

const PendingTasks = () => {
    const { isLoading, tasks } = useTasks()

    const pendingTask = tasks?.filter(tsk => tsk?.status === 'pending')

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4  p-2 my-4">
            {
                pendingTask?.map(task => <Task
                    key={task?._id}
                    task={task}
                ></Task>)
            }
        </div >
    );
};

export default PendingTasks;