import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import {useForm} from "react-hook-form";
import axios from 'axios';
import toast from 'react-hot-toast';



function Signup() {
    const location = useLocation();
    const navigate =useNavigate();
    const from = location.state?.from?.pathname || "/"
        const {
            register,
            handleSubmit,
            formState: { errors },
        } = useForm();
    
        // const onSubmit = (data) => console.log(data);
        const onSubmit =async (data) =>{
            const userInfo={
                fullname:data.fullname,
                email:data.email,
                password:data.password,
            }
           await  axios.post("http://localhost:4001/user/signup", userInfo).then((res)=>{
                console.log(res.data)
                if(res.data)
                {
                    toast.success("signup Succesfully");
                    navigate(from, {replace:true});
                }
                localStorage.setItem("Users", JSON.stringify(res.data.user));
            }).catch((err)=>{
                if(err.response)
                {
                    console.log(err);
                    toast.error("error: "+err.response.data.message);
                }

            });
        };

    return (
        <>
            <div className='flex flex-col h-screen items-center justify-center '>
                        <h1 className="text-4xl font-bold text-center text-gray-900 mb-2">
          Book<span className="text-pink-600">Store</span>
        </h1>
        <p className="text-center text-gray-600 mb-8 pb-6">
          “Unlock the world of knowledge — join our community of readers today.”
        </p>
                <div id="my_modal " className='border-[2px] p-4 shadow-md'>
                    <div className=" bg-white text-black">
                        <form onSubmit={handleSubmit(onSubmit)} method="div">
                            {/* if there is a button in form, it will close the modal */}
                            <Link to="/"className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                            
                            >✕</Link>
                        
                        <h3 className="font-bold text-lg">Signup</h3>
                        {/* name */}
                        <div className='mt-4 space-y-2 text-black'>
                            <span>FullName</span> <br />
                            <input type="text"  placeholder='Enter your name'
                             className='w-80 px-3 py-1 border rounded-md outline-none text-black'
                             {...register("fullname", { required: true })}
                             /> <br />
                             {errors.fullname && <span className='text-sm text-red-500'>This field is required</span>}
                        </div>
                        {/* email */}
                        <div className='mt-4 space-y-2 text-black'>
                            <span>Email</span> <br />
                            <input type="email"  placeholder='Enter your email' 
                            className='w-80 px-3 py-1 border rounded-md outline-none text-black'
                            {...register("email", { required: true })}
                            /> <br />
                            {errors.email && <span className='text-sm text-red-500'>This field is required</span>}
                        </div>
                        {/* Password */}
                        <div className='mt-4 space-y-2'>
                            <span>Password</span> <br />
                            <input type="password" name="" id="" placeholder='Enter your password' 
                            className='w-80 px-3 py-1 border rounded-md outline-none' 
                            {...register("password", { required: true })}
                            /> <br />
                            {errors.password && <span className='text-sm text-red-500'>This field is required</span>}
                        </div>
                        {/* login */}
                        <div className='flex justify-around mt-4'>
                            <button className="btn btn-secondary hover:bg-pink-700 duration-200">Signup</button>
                            <p>
                                have a Account? <Link to="/" className='underline text-blue-400'>Login</Link>{" "}
                            </p>
                        </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signup;
