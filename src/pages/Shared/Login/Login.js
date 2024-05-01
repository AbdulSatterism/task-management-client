import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import { AuthContext } from '../../../provider/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import login from '../../../assests/login/login.jpg'

const Login = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [error, setError] = useState('');
    const { signInUser } = useContext(AuthContext)
    const location = useLocation();
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || "/";


    const handleOnSubmit = data => {
        setError('');
        signInUser(data.email, data.password)
            .then((result) => {
                const user = result.user;
                reset()
                Swal.fire({
                    position: "top-center",
                    icon: "success",
                    title: "Login Successfully done !!",
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate(from, { replace: true });
            })
            .catch((err) => {
                setError(err.message)
            });
    }


    return (
        <>
            <div className="min-h-screen p-8 mb-0 hero" style={{ backgroundImage: `url(${login})` }}>

                <div className="w-full max-w-md shadow-2xl card shadow-cyan-400 glass ">

                    <form onSubmit={handleSubmit(handleOnSubmit)} className="card-body">
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
                            <button className="btn bg-[#21acb1] text-xl mx-2 text-white border-spacing-0">Login</button>
                        </div>

                        <p className='mx-auto text-center'><small className='text-red-600'>{error}</small></p>

                        <p className='text-center'>new? <Link to='/signup' className='text-cyan-400' >please sign up</Link> </p>

                    </form>

                </div>
            </div>
        </>
    );
};

export default Login;