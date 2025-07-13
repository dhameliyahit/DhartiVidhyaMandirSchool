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

            <section className="min-h-screen flex items-center justify-center bg-gray-100">
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm"
                >
                    <h2 className="text-2xl font-bold mb-6 text-center text-blue-700">
                        Login
                    </h2>

                    {/* Email */}
                    <div className="mb-4">
                        <label className="block mb-1 font-medium">Email</label>
                        <input
                            type="email"
                            {...register("email", {
                                required: "Email is required",
                                pattern: {
                                    value: /^\S+@\S+$/i,
                                    message: "Invalid email address",
                                },
                            })}
                            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        {errors.email && (
                            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                        )}
                    </div>

                    {/* Password */}
                    <div className="mb-6">
                        <label className="block mb-1 font-medium">Password</label>
                        <input
                            type="password"
                            {...register("password", {
                                required: "Password is required",
                                minLength: {
                                    value: 4,
                                    message: "Password must be at least 4 characters",
                                },
                            })}
                            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                        className="w-full cursor-pointer bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded"
                    >
                        Login
                    </button>
                </form>
            </section>
        </Layout>
    );
};

export default Login;
