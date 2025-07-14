import React, { useEffect, useState } from "react";
import { FaUser, FaEnvelope, FaCommentDots, FaPhone, FaCheck } from "react-icons/fa";
import { FaClipboardUser } from "react-icons/fa6";
import { useForm } from "react-hook-form";
import Layout from "../Layout/Layout";
import { toast } from 'react-hot-toast';
import axios from 'axios'
import LoadingSpinner from "../components/LoadingSpinner";


const VITE_API_URL = import.meta.env.VITE_API_URL

const Admission = ({ isLayout = true }) => {
    const [loading, setLoading] = useState(false)
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        console.log("Form Data:", data);
        try {
            setLoading(true)
            const res = await axios.post(`${VITE_API_URL}/api/admission`, { data })
            if (res.data.message) {
                setLoading(false)
                toast.success("Admission Inquiry Successfully Send");
            }
        } catch (error) {
            console.error("Error While Submitting Information...")
            toast.error("Form Submit Faild ...")
            setLoading(false)
        }
        // Submit logic
    };

    const content = (
        <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-white overflow-hidden" id="contact">
            <div className="max-w-6xl mx-auto text-center relative z-10">
                <p className="text-blue-700 font-semibold italic mb-3 text-lg sm:text-xl animate-fade-in-down">
                    If You Have Any Query then Contact Us 👋
                </p>
                <h2 className="text-4xl sm:text-5xl font-extrabold text-blue-900 mb-4 leading-tight animate-fade-in-up">
                    Admission <span className="text-black inline-block transform transition-transform duration-300 hover:scale-105">Inquiry</span>
                </h2>
                <div className="h-1.5 w-36 mx-auto bg-gradient-to-r from-green-400 via-green-600 to-green-400 rounded-full mb-12 animate-pulse-slow shadow-lg"></div>

                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="bg-white/95 backdrop-blur-lg shadow-3xl rounded-4xl px-8 py-12 grid gap-8 md:grid-cols-2 border border-blue-100 transform transition-transform duration-500 ease-out hover:scale-[1.01] relative z-10 animate-fade-in"
                >
                    {/* Name */}
                    <div className="flex flex-col relative group">
                        <label className="text-sm text-gray-700 mb-1 flex items-center gap-2 font-medium">
                            <FaUser className="text-blue-500 group-hover:text-blue-700 transition-colors" /> Name
                        </label>
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Your Full Name"
                                {...register("name", { required: "Name is required" })}
                                className="w-full px-4 py-3 pl-11 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-200 bg-white/80 hover:bg-white text-gray-700 placeholder-gray-400"
                            />
                            <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-blue-500" />
                        </div>
                        {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>}
                    </div>

                    {/* Email */}
                    <div className="flex flex-col relative group">
                        <label className="text-sm text-gray-700 mb-1 flex items-center gap-2 font-medium">
                            <FaEnvelope className="text-blue-500 group-hover:text-blue-700 transition-colors" /> Email Address
                        </label>
                        <div className="relative">
                            <input
                                type="email"
                                placeholder="example@email.com"
                                {...register("email", {
                                    required: "Email is required",
                                    pattern: {
                                        value: /^\S+@\S+$/i,
                                        message: "Invalid email address",
                                    },
                                })}
                                className="w-full px-4 py-3 pl-11 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-200 bg-white/80 hover:bg-white text-gray-700 placeholder-gray-400"
                            />
                            <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-blue-500" />
                        </div>
                        {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
                    </div>

                    {/* Phone */}
                    <div className="flex flex-col relative group">
                        <label className="text-sm text-gray-700 mb-1 flex items-center gap-2 font-medium">
                            <FaPhone className="text-blue-500 group-hover:text-blue-700 transition-colors" /> Phone
                        </label>
                        <div className="relative">
                            <input
                                type="tel"
                                placeholder="1234567890"
                                {...register("phone", {
                                    required: "Phone is required",
                                    pattern: {
                                        value: /^[0-9]{10}$/,
                                        message: "Enter valid 10-digit number",
                                    },
                                })}
                                className="w-full px-4 py-3 pl-11 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-200 bg-white/80 hover:bg-white text-gray-700 placeholder-gray-400"
                            />
                            <FaPhone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-blue-500" />
                        </div>
                        {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>}
                    </div>

                    {/* Standard */}
                    <div className="flex flex-col relative group">
                        <label className="text-sm text-gray-700 mb-1 flex items-center gap-2 font-medium">
                            <FaClipboardUser className="text-blue-500 group-hover:text-blue-700 transition-colors" /> Standard
                        </label>
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Ex: 1st to 12th"
                                {...register("standard", { required: "Standard is required" })}
                                className="w-full px-4 py-3 pl-11 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-200 bg-white/80 hover:bg-white text-gray-700 placeholder-gray-400"
                            />
                            <FaClipboardUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-blue-500" />
                        </div>
                        {errors.standard && <p className="mt-1 text-sm text-red-600">{errors.standard.message}</p>}
                    </div>

                    {/* Message */}
                    <div className="md:col-span-2 flex flex-col relative group">
                        <label className="text-sm text-gray-700 mb-1 flex items-center gap-2 font-medium">
                            <FaCommentDots className="text-blue-500 group-hover:text-blue-700 transition-colors" /> Message
                        </label>
                        <div className="relative">
                            <textarea
                                placeholder="How can we help you?"
                                rows={5}
                                {...register("message", { required: "Message is required" })}
                                className="w-full px-4 py-3 pl-11 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-200 bg-white/80 hover:bg-white text-gray-700 placeholder-gray-400 resize-y min-h-[120px]"
                            ></textarea>
                            <FaCommentDots className="absolute left-3 top-4 text-gray-400 group-focus-within:text-blue-500" />
                        </div>
                        {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>}
                    </div>

                    {/* Agreement + Submit */}
                    <div className="md:col-span-2 flex flex-col sm:flex-row justify-between items-start sm:items-center mt-6 gap-6">
                        <div className="flex flex-col">
                            <label className="flex items-start gap-2 text-sm text-gray-600 cursor-pointer">
                                <input
                                    type="checkbox"
                                    {...register("agree", { required: "You must agree before submitting." })}
                                    className="mt-1 w-4 h-4 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500 focus:ring-2"
                                />
                                <span className="select-none">I agree that my submitted data is being collected and stored.</span>
                            </label>
                            {errors.agree && <p className="mt-1 text-sm text-red-600">{errors.agree.message}</p>}
                        </div>

                        <button
                            type="submit"
                            className="flex cursor-pointer items-center justify-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-800 text-white font-medium rounded-lg hover:from-blue-700 hover:to-blue-900 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                        >
                            <FaCheck className="text-xl" /> Get In Touch
                        </button>
                    </div>
                </form>
            </div>
        </section>
    )

    return (
        <>
            {loading && <LoadingSpinner />}
            {isLayout ? <Layout>{content}</Layout> : content}
        </>
    );
};

export default Admission;