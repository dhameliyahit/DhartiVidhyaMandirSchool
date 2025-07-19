import React, { useContext, useState } from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import { Link, useLocation } from "react-router-dom";
import { TopBar } from "./TopBar";
import ThemeContext from "../context/ThemeContext";

const Header = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const location = useLocation();
    const {theme} = useContext(ThemeContext)
    //for mapping our Links
    const navigationLinks = [
        { name: "Home", path: "/" },
        { name: "About Us", path: "/about" },
        { name: "Gallery", path: "/Gallery" },
        { name: "Facility", path: "/facility" },
        { name: "Addmission Inquiry", path: "/addmission-inquiry" },
    ];

    return (
        <>
            <TopBar />
            <div className="flex justify-between items-center py-2 shadow-lg">
                <Link to="/">
                    <div className="md:px-5">
                        {" "}
                        {/* Logo & name Component */}
                        <img
                            className="w-50"
                            src={theme === "dark" ? "./asset/DVM_LOGO_dark.png" : "/asset/DVM_LOGO.png"}
                            alt="ShreeMahavir courier Logo"
                        />
                    </div>
                </Link>
                <div className="pr-4 hidden md:flex">
                    {navigationLinks.map((link, index) => {
                        const isActive = location.pathname === link.path;
                        return (
                            <Link
                                key={index}
                                to={link.path}
                                className={`mx-2 uppercase text-sm font-semibold pb-[2px] transition duration-200 border-b-2 
                                    ${isActive ? "text-[#0071D4] border-[#0071D4]" : "border-transparent"}
                                    hover:border-[#0071D4] hover:text-[#0071D4] hover:scale-[1.05] hover:shadow-sm`}
                            >
                                {link.name}
                            </Link>

                        );
                    })}
                </div>

                {/* ------------------------------------*/}

                {/* Hamburger Button */}
                <button
                    className="md:hidden cursor-pointer flex items-center justify-center bg-[#1A2E45] text-white rounded-full p-3 text-2xl mx-2 shadow-md z-50"
                    onClick={() => setIsSidebarOpen(true)}
                >
                    <HiOutlineMenuAlt3 />
                </button>

                {/* Sidebar (Bottom Slide) */}
                <div
                    className={`fixed bottom-0 left-0 w-full bg-white z-50 shadow-lg rounded-t-2xl transition-transform duration-500 ease-in-out 
        ${isSidebarOpen ? "translate-y-0" : "translate-y-full"}`}
                >
                    {/* Header */}
                    <div className="flex items-center justify-between p-4 border-b">
                        <img
                            src="/asset/DVM_LOGO.png"
                            alt="Logo"
                            className="max-w-[130px]"
                        />
                        <button
                            onClick={() => setIsSidebarOpen(false)}
                            className="text-2xl cursor-pointer text-gray-700 hover:text-red-500"
                        >
                            <IoMdClose />
                        </button>
                    </div>

                    {/* Horizontal Nav for Mobile */}
                    <nav className="flex border pb-20 flex-wrap items-center justify-around p-4 gap-3">
                        {navigationLinks.map((link, index) => (
                            <Link
                                key={index}
                                to={link.path}
                                className="text-sm font-semibold uppercase px-4 py-2 rounded-full border hover:bg-[#E31E25] hover:text-white transition-all"
                                onClick={() => setIsSidebarOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>
                </div>

                {/* Overlay */}
                {isSidebarOpen && (
                    <div
                        className="fixed inset-0 bg-black/60 bg-opacity-40 z-40"
                        onClick={() => setIsSidebarOpen(false)}
                    ></div>
                )}
            </div>
        </>
    );
};

export default Header;
