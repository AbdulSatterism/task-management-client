import React from 'react';
import Modal from './Modal';
import { useForm } from 'react-hook-form';

const AddTaskModal = ({ isOpen, setIsOpen }) => {
    const { register, reset, handleSubmit, formState: { errors } } = useForm();

    const onCancel = data => {
        reset();
        setIsOpen(false)
    }

    const onSubmit = (data) => {
        console.log(data);
        onCancel()
    }

    return (
        <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
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
                    <select className="text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500"
                        id="assign"
                        {...register('assign', { required: true })}
                    >
                        <option value="Rohim">Rohim</option>
                        <option value="Robat">Karim</option>
                        <option value="baiden">Abdul Satter</option>
                    </select>
                    {errors.assign && <span className='text-red-500'>This field is required</span>}
                </div>

                <div className="flex flex-col mb-5">
                    <label htmlFor="problem" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Problem Situation</label>
                    <select className="text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500"
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