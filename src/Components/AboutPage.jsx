import React, { useState } from 'react';
import graphic from '../Images/graphic.png';
import web from '../Images/web.png';
import wordpress from '../Images/wordpress.png';
import programmer from '../Images/programmer.png';
import database from '../Images/database.png';

const AboutPage = () => {
    const [data] = useState([
        {
            name: 'Web developer',
            image: programmer
        },
        {
            name: 'Graphic Designer',
            image: graphic
        },
        {
            name: 'Web Designer',
            image: web
        },
        {
            name: 'Database Management',
            image: database
        },
        {
            name: 'WordPress',
            image: wordpress
        }
    ]);

    const [education] = useState([
        {
            graduation: 'Post Graduation',
            degree: 'MASTER OF COMPUTER APPLICATION',
            studying: 'J.J. College Of Arts & Science',
            YOP: 'Year Of Passing: 2025',
            CGPA: '8.6'
        },
        {
            graduation: 'Under Graduation',
            degree: 'BACHELOR OF COMMERCE WITH COMPUTER APPLICATION',
            studying: 'Vidhya Giri College of Arts & Science',
            YOP: 'Year Of Passing: 2023',
            CGPA: '7.6'
        },
        {
            graduation: 'HSC',
            studying: 'Alagappa Model Higher Secondary School',
            YOP: 'Year Of Passing: 2020',
        }
    ]);

    return (
        <div className='w-full bg-[#f6f4f4] dark:bg-gray-800 py-14 px-3 z-30 md:py-20 md:px-10'>
            <div className='px-2 md:px-24'>
                <h1 className='text-2xl text-[#003135] dark:text-white font-medium text-center underline md:text-4xl md:text-start'>
                    About Me
                </h1>
                <div className='mt-5 relative md:mt-10'>
                    <p className='md:text-xl text-gray-700 dark:text-gray-400'>
                        Hi! I am Bala, a versatile and passionate Full Stack Developer, Web Designer, Photographer, and Video Editor. I specialize in creating fully-fledged websites that not only showcase technical expertise but also deliver exceptional user experiences. My goal is to craft interactive and visually appealing solutions that satisfy customer needs and exceed expectations.
                    </p>
                </div>
            </div>

            <div className='mt-10 px-0 grid grid-cols-2 md:grid-cols-5 md:px-10 gap-6'>
                {data.map((item, index) => (
                    <div key={index} className='flex flex-col items-center p-4 bg-white dark:bg-gray-700 rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-1 transition duration-300'>
                        <img src={item.image} alt={item.name} className='w-16 h-16' />
                        <h1 className='mt-2 text-sm font-semibold text-gray-900 dark:text-white md:text-xl'>{item.name}</h1>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AboutPage;
