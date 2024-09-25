import React, { useState } from 'react';
import { PiGraduationCapLight } from "react-icons/pi";
import { LuBadgeCheck } from "react-icons/lu";
import { BsCalendarDate } from "react-icons/bs";
import { FaUserGraduate } from "react-icons/fa6";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";

const Education = () => {
    const [activeSection, setActiveSection] = useState(null);

    const education = [
        {
            graduation: 'Post Graduation',
            icon: <PiGraduationCapLight />,
            degree: 'MASTER OF COMPUTER APPLICATION',
            studying: 'J.J. College Of Arts & Science',
            YOP: 'Year Of Passing: 2025',
            CGPA: 'CGPA: 8.6',
            bgcolor: 'bg-white dark:bg-gray-900',
            badget: <LuBadgeCheck />,
            date: <BsCalendarDate />,
            graduationicon: <FaUserGraduate />,
            arrow: <IoMdArrowDropdown />,
            uparrow: <IoMdArrowDropup />
        },
        {
            graduation: 'Under Graduation',
            degree: 'BACHELOR OF COMMERCE WITH COMPUTER APPLICATION',
            studying: 'Vidhya Giri College of Arts & Science',
            YOP: 'Year Of Passing: 2023',
            CGPA: 'CGPA: 7.6',
            bgcolor: 'bg-gray-100 dark:bg-gray-900',
            icon: <PiGraduationCapLight />,
            badget: <LuBadgeCheck />,
            date: <BsCalendarDate />,
            graduationicon: <FaUserGraduate />,
            uparrow: <IoMdArrowDropup />,
            arrow: <IoMdArrowDropdown />
        },
        {
            graduation: 'HSC',
            studying: 'Alagappa Model Higher Secondary School',
            YOP: 'Year Of Passing: 2020',
            CGPA: 'PERCENTAGE: 74.7%',
            bgcolor: 'bg-white dark:bg-gray-900',
            icon: <PiGraduationCapLight />,
            badget: <LuBadgeCheck />,
            date: <BsCalendarDate />,
            graduationicon: <FaUserGraduate />,
            arrow: <IoMdArrowDropdown />,
            uparrow: <IoMdArrowDropup />
        }
    ];

    const toggleSection = (index) => {
        setActiveSection(activeSection === index ? null : index);
    };

    return (
        <div className='w-full py-10 px-0 md:py-14 md:px-10 bg-white dark:bg-gray-800'>
            <div className='relative z-20 px-2 md:px-24'>
                <div className="relative before:absolute before:left-6 md:before:left-12 before:top-0 before:h-full before:border before:border-gray-300 dark:before:border-gray-100">
                    {education.map((item, index) => (
                        <div
                            key={index}
                            className={`relative mt-6 p-5 pl-12 md:pl-16 rounded-lg shadow-md transition-all duration-300 ease-in-out cursor-pointer z-20 ${item.bgcolor} hover:bg-gray-200 dark:hover:bg-gray-600 ${activeSection === index ? 'bg-gray-200 dark:bg-gray-600' : item.bgcolor} md:p-6`}
                            onClick={() => toggleSection(index)}
                        >
                            <span className={`absolute left-4 md:left-8 top-8 w-4 h-4 rounded-full ${activeSection === index ? 'bg-green-400' : 'bg-blue-600'}`}></span>

                            <div className='flex items-center justify-between'>
                                <h1 className={`text-lg flex items-center gap-1 font-medium ${activeSection === index ? 'text-gray-900 dark:text-white' : 'text-gray-800 dark:text-gray-400'} md:text-2xl transition-colors duration-300 ease-in-out`}>
                                    {item.graduationicon} {item.graduation}
                                </h1>
                                <p>
                                    {activeSection === index ? item.uparrow : item.arrow}
                                </p>
                            </div>

                            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${activeSection === index ? 'max-h-screen' : 'max-h-0'}`}>
                                <ul className='list-disc list-inside mt-4 space-y-2 text-gray-600 dark:text-gray-300'>
                                    <h1 className='text-lg font-semibold md:text-xl'>{item.degree}</h1>
                                    <li className='flex items-center gap-1 md:gap-2'>{item.icon}{item.studying}</li>
                                    <li className='flex items-center gap-1 md:gap-2'>{item.date}{item.YOP}</li>
                                    <li className='flex items-center gap-1 md:gap-2'>{item.badget}{item.CGPA}</li>
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Education;
