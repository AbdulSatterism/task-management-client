import React from 'react';
import Loading from '../../component/Loading';
import Task from '../Home/Tasks/Task';
import useTasks from '../../hooks/useTasks';

const SolvedTasks = () => {
    const { isLoading, tasks } = useTasks()

    const solvedTask = tasks?.filter(tsk => tsk?.status === 'solved')

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4  p-2 my-4">
            {
                solvedTask?.map(task => <Task
                    key={task?._id}
                    task={task}
                ></Task>)
            }
        </div >
    );
};

export default SolvedTasks;