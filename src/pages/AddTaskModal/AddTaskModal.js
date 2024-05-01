import React, { useContext } from 'react';
import Modal from './Modal';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import Swal from 'sweetalert2';
import { AuthContext } from '../../provider/AuthProvider';
import useTasks from '../../hooks/useTasks';
import { useLocation, useNavigate } from 'react-router-dom';

const AddTaskModal = ({ isOpen, setIsOpen }) => {
    const { register, reset, handleSubmit, formState: { errors } } = useForm();
    const { user } = useContext(AuthContext);
    const { refetch } = useTasks();
    const navigate = useNavigate()
    const location = useLocation()

    const onCancel = () => {
        reset();
        setIsOpen(false)
    }


    const onSubmit = (info) => {
        if (user && user?.email) {
            const tasks = {
                title: info.title,
                description: info.description,
                date: info.date,
                problemSituation: info.problem,
                assignTo: info.assign,
                status: 'pending',
                email: user?.email,
            }

            axios.post('https://task-management-server-0cxv.onrender.com/tasks', tasks)
                .then(data => {
                    if (data.data?.insertedId) {
                        reset()
                        setIsOpen(false);
                        refetch()
                        Swal.fire({
                            position: 'top-center',
                            icon: 'success',
                            title: 'Your problem is submitted, Our team will help you. Thanks ',
                            showConfirmButton: false,
                            timer: 1000
                        })
                    }
                })
        }

        else {
            setIsOpen(false)
            Swal.fire({
                title: 'Please login',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'login now!'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })

                }
            })
        }

    }





    return (
        <Modal isOpen={isOpen} setIsOpen={setIsOpen} title="Task Management">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-col mb-5">
                    <label htmlFor="title" className="mb-2">Title</label>
                    <input
                        className="input input-bordered input-md w-full"
                        type="text" id="title"
                        {...register('title', { required: true })}
                    />
                    {errors.title && <span className='text-red-500'>This field is required</span>}
                </div>
                <div className="flex flex-col mb-5">
                    <label htmlFor="description" className="mb-2">Description</label>
                    <input
                        className="input input-bordered input-md w-full"
                        type="text" id="description"
                        {...register('description', { required: true })}
                    />
                    {errors.description && <span className='text-red-500'>This field is required</span>}
                </div>
                <div className="flex flex-col mb-5">
                    <label htmlFor="date" className="mb-2">DateLine</label>
                    <input
                        className="input input-bordered input-md w-full"
                        type="date" id="date"
                        {...register('date', { required: true })}
                    />
                    {errors.date && <span className='text-red-500'>This field is required</span>}
                </div>
                <div className="flex flex-col mb-5">
                    <label htmlFor="assignTo" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Assign To</label>
                    <select className="text-sm text-gray-900 input input-bordered input-md w-full"
                        id="assignTo"
                        {...register('assign', { required: true })}
                    >
                        <option value="Rohim">Rohim</option>
                        <option value="Karim">Karim</option>
                        <option value="Abdul Satter">Abdul Satter</option>
                    </select>
                    {errors.assign && <span className='text-red-500'>This field is required</span>}
                </div>

                <div className="flex flex-col mb-5">
                    <label htmlFor="problem" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Problem Situation</label>
                    <select className="text-sm text-gray-900 input input-bordered input-md w-full"
                        id="problem"
                        {...register('problem', { required: true })}
                    >
                        <option value="serious">serious</option>
                        <option value="normal">normal</option>

                    </select>
                    {errors.problem && <span className='text-red-500'>This field is required</span>}
                </div>


                <div className='flex justify-end gap-3'>
                    <input onClick={() => onCancel()} type="cancel" className="text-white bg-red-400 btn" value="cancel" />
                    <input className="text-white bg-blue-600 btn" type="submit" value="submit" />
                </div>
            </form>
        </Modal>
    );
};

export default AddTaskModal;