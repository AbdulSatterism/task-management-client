import React from 'react';
import useTasks from '../../hooks/useTasks';
import Loading from '../../component/Loading';
import Task from '../Home/Tasks/Task';

const Rahim = () => {
    const { isLoading, tasks } = useTasks()

    const rahim = tasks?.filter(tsk => tsk?.assignTo === 'Rohim')

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4  p-2 my-4">
            {
                rahim?.map(task => <Task
                    key={task?._id}
                    task={task}
                ></Task>)
            }
        </div >
    );
};

export default Rahim;