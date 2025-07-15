import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import Layout from "../../Layout/Layout";
import { useNavigate } from "react-router-dom";
// Sample users array for login
const users = [
    { email: "test1@example.com", password: "password1" },
    { email: "demo2@example.com", password: "123456" },
];

const Login = () => {
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = ({ email, password }) => {
        const isValid = users.some(
            (user) => user.email === email && user.password === password
        );

        if (isValid) {
            localStorage.setItem("isAuthenticated", "true");
            navigate("/admin/dashboard");
        } else {
            toast.error("Invalid credentials");
        }
    };

    return (
        <Layout>

            <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 px-4">
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="bg-white p-8 sm:p-10 rounded-2xl shadow-xl w-full max-w-sm border border-blue-200"
                >
                    <h2 className="text-3xl font-bold mb-6 text-center text-blue-700 tracking-tight">
                        Welcome Back
                    </h2>

                    {/* Email */}
                    <div className="mb-4">
                        <label className="block mb-1 text-sm font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            {...register("email", {
                                required: "Email is required",
                                pattern: {
                                    value: /^\S+@\S+$/i,
                                    message: "Invalid email address",
                                },
                            })}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                            placeholder="you@example.com"
                        />
                        {errors.email && (
                            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                        )}
                    </div>

                    {/* Password */}
                    <div className="mb-6">
                        <label className="block mb-1 text-sm font-medium text-gray-700">Password</label>
                        <input
                            type="password"
                            {...register("password", {
                                required: "Password is required",
                                minLength: {
                                    value: 4,
                                    message: "Password must be at least 4 characters",
                                },
                            })}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                            placeholder="••••••••"
                        />
                        {errors.password && (
                            <p className="text-red-500 text-sm mt-1">
                                {errors.password.message}
                            </p>
                        )}
                    </div>

                    {/* Submit */}
                    <button
                        type="submit"
                        className="w-full cursor-pointer bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
                    >
                        Login
                    </button>

                </form>
            </section>

        </Layout>
    );
};

export default Login;
