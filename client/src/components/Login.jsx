import axios from 'axios';
import React from 'react'
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom'


function Login() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    // const onSubmit = (data) => console.log(data);
    const onSubmit = async (data) =>{
                    const userInfo={
                email:data.email,
                password:data.password,
            }
           await axios.post("http://localhost:4001/user/login", userInfo).then((res)=>{
                console.log(res.data)
                if(res.data)
                {
                    toast.success("Login Succesfully");
                    document.getElementById("my_modal").close();
                    setTimeout(()=>{
                        window.location.reload();
                        localStorage.setItem("Users",JSON.stringify(res.data.user));

                    },500)
                    
                    
                }
                
            }).catch((err)=>{
                if(err.response)
                {
                    console.log(err);
                    
                    toast.error("error: "+err.response.data.message);
                    setTimeout(()=>{},1000)
                }

            });
    }
    return (
        <>
            <div>
                <dialog id="my_modal" className="modal">
                    <div className="modal-box bg-white text-black">
                        <form onSubmit={handleSubmit(onSubmit)} method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <Link className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                            onClick={()=>document.getElementById("my_modal").closest()}
                            >✕</Link>
                        
                        <h3 className="font-bold text-lg">Login</h3>
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
                            <input type="password"   placeholder='Enter your password'
                                className='w-80 px-3 py-1 border rounded-md outline-none'
                                {...register("password", { required: true })}
                            /> <br />
                            {errors.password && <span className='text-sm text-red-500'>This field is required</span>}
                        </div>
                        {/* login */}
                        <div className='flex justify-around mt-4'>
                            <button type='submit' className="btn btn-secondary hover:bg-pink-700 duration-200">Login</button>
                            <p>
                                Not registered? <Link to="/signup" className='underline text-blue-400'>Signup</Link>{" "}
                            </p>
                        </div>
                        </form>
                    </div>
                </dialog>
            </div>

        </>
    )
}

export default Login
