import React, { useState } from 'react';
import TripAdvisor from '../Images/ProjectImages/tripadvisor.jpg';
import GreenDeen from '../Images/ProjectImages/greentrend.jpg';
import weather from '../Images/ProjectImages/weather API.jpg';
import view from '../Images/ProjectImages/link.png';
import github from '../Images/ProjectImages/github.png';

const Projects = () => {
    const [projectData] = useState([
        {
            name: 'TripAdvisor',
            image: TripAdvisor,
            view: view,
            git: github,
            link: 'https://bala-077.github.io/Tripadvisor-clone/',
            gitlink: 'https://github.com/bala-077/Tripadvisor-clone'
        },
        {
            name: 'GreenDeen',
            image: GreenDeen,
            view: view,
            git: github,
            link: 'https://bala-077.github.io/Greenden-Website/index.html',
            gitlink: 'https://github.com/bala-077/Greenden-Website'
        },
        {
            name: 'Weather API',
            image: weather,
            view: view,
            git: github,
            link: 'https://weather-api-sigma-green.vercel.app/',
            gitlink: 'https://github.com/bala-077/Weather-API'
        },
    ]);

    return (
        <div className="w-full py-10 px-5 md:px-20 md:py-16 bg-white dark:bg-gray-800">
            <h1 className='text-2xl mb-10 text-[#003135] dark:text-gray-300 font-medium text-center underline md:text-3xl md:text-start'>
                Projects
            </h1>
            <div className="grid py-0 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:py-10">
                {projectData.map((items, index) => (
                    <div key={index} className="relative group shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out dark:bg-gray-800 dark:hover:bg-gray-700">
                        <img 
                            src={items.image} 
                            alt={items.name} 
                            className="w-full h-52 object-cover rounded-lg"
                        />
                        <div className="absolute bottom-0 w-full flex flex-col justify-center items-center py-2 opacity-100 md:opacity-0 group-hover:opacity-100 transition duration-700 ease-in-out bg-black bg-opacity-60 rounded-b-lg md:hidden">
                            <h1 className="text-white text-lg font-bold mb-2">{items.name}</h1>
                            <div className="flex gap-5">
                                <a href={items.link} target='__blank' className="mx-2 hover:opacity-75 transition-opacity">
                                    <img src={items.view} alt="View" className="w-8 h-8" />
                                </a>
                                <a href={items.gitlink} target='__blank' className="mx-2 hover:opacity-75 transition-opacity">
                                    <img src={items.git} alt="GitHub" className="w-8 h-8" />
                                </a>
                            </div>
                        </div>
                        <div className="hidden md:flex absolute inset-0 flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out bg-black bg-opacity-60 rounded-lg">
                            <h1 className="text-white text-2xl font-bold mb-5">{items.name}</h1>
                            <div className="flex gap-10">
                                <a href={items.link} target='__blank' className="hover:opacity-75 transition-opacity">
                                    <img src={items.view} alt="View" className="w-10 h-10" />
                                </a>
                                <a href={items.gitlink} target='__blank' className="hover:opacity-75 transition-opacity">
                                    <img src={items.git} alt="GitHub" className="w-10 h-10" />
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
