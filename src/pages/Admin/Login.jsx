import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import Layout from "../../Layout/Layout";
import { useNavigate } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import { IoIosEyeOff } from "react-icons/io";

// ✅ Sample users (can later be replaced with API)
const users = [
    { email: "sh03@group.com", password: "SH03@shaileshbhai" },
    { email: "hello1@gmail.com", password: "hello1" },
];

const Login = () => {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    // ✅ Redirect if already authenticated
    useEffect(() => {
        const isAuth = localStorage.getItem("isAuthenticated");
        if (isAuth === "true") {
            navigate("/admin/dashboard");
        }
    }, [navigate]);

    // ✅ Handle form submit
    const onSubmit = ({ email, password }) => {
        const isValid = users.some(
            (user) => user.email === email && user.password === password
        );

        if (isValid) {
            localStorage.setItem("isAuthenticated", "true"); // save login session
            toast.success("Login successful!");
            navigate("/admin/dashboard");
        } else {
            toast.error("Invalid credentials");
        }
    };

    return (
        <Layout>
            <section
                className="min-h-screen flex items-center justify-center px-4"
                style={{
                    backgroundImage:
                        "url('https://plus.unsplash.com/premium_photo-1671229454899-3ba177f87592?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHB1cnBsZSUyMGdyYWRpZW50JTIwbGFuZHNjYXBlJTIwYmFja2dyb3VuZHxlbnwwfHwwfHx8MA%3D%3D')",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                }}
            >
                <div className="w-full max-w-md backdrop-blur-sm border border-white rounded-lg shadow-lg overflow-hidden">
                    <div className="p-8">
                        <h2 className="text-2xl font-bold text-center text-white mb-6">
                            Login
                        </h2>

                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                            {/* Email */}
                            <div>
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium text-white mb-1"
                                >
                                    Username
                                </label>
                                <input
                                    id="email"
                                    type="email"
                                    {...register("email", {
                                        required: "Email is required",
                                        pattern: {
                                            value: /^\S+@\S+$/i,
                                            message: "Invalid email format",
                                        },
                                    })}
                                    className="w-full text-white px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 bg-transparent"
                                />
                                {errors.email && (
                                    <p className="mt-1 text-sm text-red-600">
                                        {errors.email.message}
                                    </p>
                                )}
                            </div>

                            {/* Password */}
                            <div>
                                <label
                                    htmlFor="password"
                                    className="block text-sm font-medium text-white mb-1"
                                >
                                    Password
                                </label>
                                <div className="flex items-center w-full text-white border border-gray-300 rounded-md">
                                    <input
                                        id="password"
                                        type={showPassword ? "text" : "password"}
                                        {...register("password", {
                                            required: "Password is required",
                                            minLength: { value: 4, message: "Minimum 4 characters" },
                                        })}
                                        className="flex-1 bg-transparent py-2 px-2 outline-none focus:outline-none focus:ring-2 focus:ring-purple-500"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="px-2 text-xl cursor-pointer"
                                    >
                                        {showPassword ? <IoIosEyeOff /> : <FaEye />}
                                    </button>
                                </div>
                                {errors.password && (
                                    <p className="mt-1 text-sm text-red-600">
                                        {errors.password.message}
                                    </p>
                                )}
                            </div>

                            {/* Login Button */}
                            <div>
                                <button
                                    type="submit"
                                    className="w-full border border-white py-3 rounded-t-full rounded-b-full relative overflow-hidden group cursor-pointer flex justify-center px-4 shadow-sm text-sm font-medium text-white bg-purple-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                                >
                                    <span className="relative z-10 hover:text-black font-bold">
                                        Login
                                    </span>
                                    <span className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-out z-0"></span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default Login;
