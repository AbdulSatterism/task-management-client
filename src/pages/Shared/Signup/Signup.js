import React, { useContext, useState } from 'react';
import login from '../../../assests/login/login.jpg'
import { AuthContext } from '../../../provider/AuthProvider';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const Signup = () => {
    const { createUser, userUpdateProfile } = useContext(AuthContext)
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [error, setError] = useState('');

    const location = useLocation();
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || "/";


    const handleOnSubmit = data => {
        setError('')
        createUser(data.email, data.password)
            .then((result) => {
                const user = result.user;
                const saveUser = {
                    name: data.name,
                    email: data.email,
                }
                userUpdateProfile(data.name)
                    .then(() => {
                        // Profile updated!
                        //save user in database
                        // fetch('/users', {
                        //     method: "POST",
                        //     headers: {
                        //         'content-type': 'application/json'
                        //     },
                        //     body: JSON.stringify(saveUser)
                        // })
                        //     .then(res => res.json())
                        //     .then(data => {
                        //         if (data.insertedId) {
                        //             reset()
                        //             Swal.fire({
                        //                 position: "top-center",
                        //                 icon: "success",
                        //                 title: "Login Successfully done !!",
                        //                 showConfirmButton: false,
                        //                 timer: 1500
                        //             });
                        //             navigate(from, { replace: true });
                        //         }
                        // })

                    }).catch((err) => {
                        setError(err.message)
                    });
                console.log('user from sign up', user);
            })
            .catch((err) => {
                setError(err.message)
            });
    }

    return (
        <>

            <div className="min-h-screen p-2 mb-0 hero " style={{ backgroundImage: `url(${login})` }}>

                <div className="w-full max-w-md  shadow-2xl card shadow-gray-900 glass">

                    <form onSubmit={handleSubmit(handleOnSubmit)} className="card-body ">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text"
                                {...register("name", { required: true })}
                                placeholder="name" className="input input-bordered" />
                            {errors.name && <span className='text-red-600'>This name  is required</span>}
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email"
                                {...register("email", { required: true })}
                                placeholder="email" className="input input-bordered" />
                            {errors.email && <span className='text-red-600'>This email is required</span>}

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password"
                                {...register("password", { required: true, minLength: 6 })}
                                placeholder="password" className="input input-bordered" />
                            {errors.password?.type === 'minLength' && <span className='text-red-600'>password minimum 6 character</span>}
                        </div>

                        <div className="mt-6 form-control">
                            <button className="btn bg-gray-900 text-xl mx-2 text-white border-spacing-0">Signup</button>
                        </div>

                        <p className='mx-auto text-center'><small className='text-red-600'>{error}</small></p>

                        <p className='text-center'>have an account? <Link to='/login' className='text-cyan-400' >please login</Link> </p>

                    </form>
                </div>
            </div>

        </>
    );
};

export default Signup;