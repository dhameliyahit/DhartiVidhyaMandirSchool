import React from 'react';
import { IoCall } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";

export const TopBar = () => {
    return (
        <div className='bg-[#1A2E45] text-white flex flex-col sm:flex-row justify-between items-center px-4 py-2 text-center shadow-md'>
            
            {/* Welcome Message */}
            <div className='text-base sm:text-lg md:text-xl uppercase mb-1 sm:mb-0'>
                Welcome To <span className='font-semibold text-white'>Dharti Vidhya Mandir</span>
            </div>

            {/* Phone Contact */}
            <div className='flex items-center gap-2 text-sm sm:text-base mb-1 sm:mb-0'>
                <IoCall className='text-xl text-white' />
                <span className='font-semibold uppercase'>Call Us NOW:</span>
                <a href="tel:+918511182137" className='font-bold text-white'>+91-85111 82137</a>
            </div>

            {/* Email Contact */}
            <div className='flex items-center gap-2 text-sm sm:text-base'>
                <MdOutlineMail className='text-xl text-balck' />
                <span className='font-semibold'>Email:</span>
                <a href="mailto:info@dhartividhyamandir.com" className='font-bold hover:underline text-white'>info@dhartividhyamandir.com</a>
            </div>

        </div>
    );
};
