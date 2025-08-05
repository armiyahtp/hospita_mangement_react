import { useForm } from "react-hook-form"
import { Link } from "react-router-dom"
import image1 from '/images/login.png'
import { useSign } from "../context/SignContext"
import { X } from 'lucide-react';


export default function Singup() {

    const { hideRegister, showLogin } = useSign()

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()


    const onSubmit = (data) => console.log(data)


    return (
        <div className="bg-[#191414ca] w-full h-screen">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">
                <div className="flex justify-center rounded-xl shadow-xl">

                    <div className="w-[40%] bg-[#3267FF] rounded-s-xl flex items-end">
                        <img src={image1} alt="" />
                    </div>


                    <form onSubmit={handleSubmit(onSubmit)} className="w-[60%] px-8 py-7 rounded-e-xl bg-white">

                        <div onClick={hideRegister} className="absolute right-3 top-3 cursor-pointer">
                            <X size={20} className="text-gray-500" />
                        </div>

                        <h1 className="text-3xl font-bold text-[#3267FF] text-center mb-16">Sing Up</h1>


                        <div className="flex gap-7">
                            <div>
                                <input
                                    type="text"
                                    name="first_name"
                                    id="first_name"
                                    placeholder="First Name"
                                    className="w-full px-5 py-2 rounded-lg bg-gray-50 border"
                                    {...register("first_name", {
                                        required: "First name is required"
                                    })}
                                />

                                {errors.first_name && (
                                    <span className="text-red-400">{errors.first_name.message}</span>
                                )}
                            </div>

                            <div>
                                <input
                                    type="text"
                                    name="last_name"
                                    id="last_name"
                                    placeholder="Last Name"
                                    className="w-full px-5 py-2 rounded-lg bg-gray-50 border"
                                    {...register("last_name", {
                                        required: "Last name is required"
                                    })}
                                />

                                {errors.last_name && (
                                    <span className="text-red-400">{errors.last_name.message}</span>
                                )}
                            </div>
                        </div>





                        <div className="mb-7 mt-7">
                            <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="Enter Email"
                                className="w-full px-5 py-2 rounded-lg bg-gray-50 border"
                                {...register("email", {
                                    required: "Email name is required",
                                    pattern: {
                                        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                        message: 'Invalid email format'
                                    }
                                })}
                            />

                            {errors.email && (
                                <span className="text-red-400">{errors.email.message}</span>
                            )}
                        </div>

                        <div className="mb-7">
                            <input
                                type="password"
                                name="password"
                                id="password"
                                placeholder="Enter Password"
                                className="w-full px-5 py-2 rounded-lg bg-gray-50 border"
                                {...register('password', {
                                    required: "Password is required",
                                    pattern: {
                                        value: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
                                        message: "Must include letter, number & symbol"
                                    }
                                })}
                            />

                            {errors.password && (
                                <span className="text-red-400">{errors.password.message}</span>
                            )}
                        </div>

                        <div className="flex flex-col justify-center items-center">
                            <input
                                type="submit"
                                className="px-8 py-2 rounded-md bg-[#3267FF] text-white cursor-pointer"
                            />
                            <p className="mt-6 mb-5">Already have an account? <span onClick={showLogin} className="text-[#3267FF] cursor-pointer">login</span></p>
                        </div>

                    </form>
                </div>
            </div>
        </div>

    )
}