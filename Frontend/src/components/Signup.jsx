import React from 'react'
import { Link } from 'react-router-dom'
import Login from './Login';
import { useForm } from "react-hook-form"

const Signup = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => console.log(data)
    return (
        <div className='flex h-screen items-center justify-center bg-white text-gray-800'>

            <div className="relative md:w-[500px] shadow-lg shadow-gray-900 p-6 rounded-md bg-white w-80">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Link to="/" className="absolute right-2 top-2 text-xl">✕</Link>

                    <h3 className="font-bold text-lg">Signup</h3>

                    {/* Name */}
                    <div className='mt-4 space-y-2'>
                        <span>Name</span>
                        <br />
                        <input
                            type="text"
                            placeholder='Enter your name'
                            className='md:w-80 px-3 py-1 border rounded-md outline-none'
                            {...register("name", { required: true })}
                        />
                        <br />
                        {errors.name && <span className='text-sm text-red-500'>This field is required</span>}
                    </div>

                    {/* Email */}
                    <div className='mt-4 space-y-2'>
                        <span>Email</span>
                        <br />
                        <input
                            type="email"
                            placeholder='Enter your email'
                            className='md:w-80 px-3 py-1 border rounded-md outline-none'
                            {...register("email", { required: true })}
                        />
                        <br />
                        {errors.email && <span className='text-sm text-red-500'>This field is required</span>}
                    </div>

                    {/* Password */}
                    <div className='mt-4 space-y-2'>
                        <span>Password</span>
                        <br />
                        <input
                            type="password"
                            placeholder='Enter your password'
                            className='md:w-80 px-3 py-1 border rounded-md outline-none'
                            {...register("password", { required: true })}
                        />
                        <br />
                        {errors.password && <span className='text-sm text-red-500'>This field is required</span>}
                    </div>

                    {/* Button */}
                    <div className='flex justify-between mt-4 items-center'>
                        <button className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200'>
                            Signup
                        </button>

                        <p className='text-sm'>
                            Have account?
                            <button
                                type="button"
                                className='underline text-blue-700 cursor-pointer'
                                onClick={() =>
                                    document.getElementById("my_modal_3").showModal()
                                }
                            >
                                Login
                            </button>
                        </p>
                    </div>
                </form>
                <Login />
            </div>

        </div>
    )
}

export default Signup