import React from 'react'
import { Link } from "react-router-dom"
import { useForm } from "react-hook-form"

const Contact = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => console.log(data)
    return (
        <div className="flex h-screen items-center justify-center bg-white">
            <div className="p-6 md:w-[410px] rounded-md bg-white w-96">
            <h3 className="font-bold text-2xl">Contact Us</h3>
                <form onSubmit={handleSubmit(onSubmit)}>
                    {/* Name */}
                    <div className='mt-4 space-y-2'>
                        <span>Name</span>
                        <br />
                        <input
                            type="name"
                            placeholder='Enter your name'
                            className='w-90 px-4 py-1 border rounded-md outline-none'
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
                            className='w-90 px-4 py-1 border rounded-md outline-none'
                            {...register("email", { required: true })}
                        />
                        <br />
                        {errors.email && <span className='text-sm text-red-500'>This field is required</span>}
                    </div>

                    {/* Message */}
                    <div className='mt-4 space-y-2'>
                        <span>Message</span>
                        <br />
                        <textarea
                            placeholder='Type your message'
                            className='w-90 h-25 px-3 py-1 border rounded-md outline-none'
                            {...register("message", { required: true })}
                        />
                        <br />
                        {errors.message && <span className='text-sm text-red-500'>This field is required</span>}
                    </div>
                    {/* Botton & Sign Up */}
                    <div className='flex justify-around mt-4'>
                        <button className='bg-blue-500 text-white rounded-md px-3 py-1 hover:bg-blue-700 duration-200'>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact