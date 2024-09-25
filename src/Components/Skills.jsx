import React, { useEffect, useRef } from 'react';
import styles from '../CSS/Skills.module.css';

// Images
import html from '../Images/skill images/html.png';
import css from '../Images/skill images/css.png';
import js from '../Images/skill images/js.png';
import react from '../Images/skill images/react.png';
import node from '../Images/skill images/node.png';
import express from '../Images/skill images/express.png';
import mongoDb from '../Images/skill images/mongoDB.png';
import sqlDb from '../Images/skill images/html.png';
import photoshop from '../Images/skill images/photoshop.png';
import figma from '../Images/skill images/figma.png';
import postman from '../Images/skill images/postman.png';
import wordpress from '../Images/skill images/wordpress.png';

const Skills = () => {
  const skillSectionRef = useRef(null);

  const frontendSkills = [
    { name: 'HTML', percentage: '100%', color: 'bg-blue-500' },
    { name: 'CSS', percentage: '90%', color: 'bg-blue-400' },
    { name: 'JavaScript', percentage: '90%', color: 'bg-blue-300' },
    { name: 'React', percentage: '85%', color: 'bg-blue-600' },
    { name: 'Tailwind', percentage: '91%', color: 'bg-blue-400' }
  ];

  const backendSkills = [
    { name: 'Node.js', percentage: '83%', color: 'bg-blue-500' },
    { name: 'Express.js', percentage: '94%', color: 'bg-blue-600' },
    { name: 'MongoDB', percentage: '93%', color: 'bg-blue-400' },
    { name: 'SQL', percentage: '79%', color: 'bg-blue-300' },
    { name: 'Postman', percentage: '82%', color: 'bg-blue-400' },
  ];

  const designSkills = [
    { name: 'Photoshop', percentage: '98%', color: 'bg-blue-600' },
    { name: 'Figma', percentage: '84%', color: 'bg-blue-500' },
    { name: 'WordPress', percentage: '55%', color: 'bg-blue-300' },
  ];

  // Handle scrolling and trigger animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const skillBars = entry.target.querySelectorAll('.skill-bar');
            skillBars.forEach((bar) => {
              bar.style.width = bar.getAttribute('data-percentage');
            });
          }
        });
      },
      { threshold: 0.5 }
    );

    if (skillSectionRef.current) {
      observer.observe(skillSectionRef.current);
    }

    return () => {
      if (skillSectionRef.current) {
        observer.unobserve(skillSectionRef.current);
      }
    };
  }, []);

  const renderSkillBars = (skills) => {
    return skills.map((skill, index) => (
      <div key={index} className='flex items-center gap-3'>
        <p className='text-sm font-semibold w-20 text-gray-700 dark:text-gray-200'>{skill.name}</p>
        <div className='w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3'>
          <div
            className={`skill-bar ${skill.color} h-3 rounded-full`}
            data-percentage={skill.percentage}
            style={{ width: '0%', transition: 'width 1.5s ease' }}
          ></div>
        </div>
        <span className='text-sm font-medium ml-2 text-gray-600 dark:text-gray-300'>{skill.percentage}</span>
      </div>
    ));
  };

  return (
    <div className='w-full bg-gray-100 dark:bg-gray-800 py-10 z-30 md:py-14'>
      <div className='px-0'>
        <h1 className='text-2xl px-12 text-gray-800 dark:text-gray-100 font-medium text-center underline md:text-3xl md:text-start'>
          Skills
        </h1>

        <div className='mt-5 px-5 md:mt-5 md:px-12 pb-5'>
          <p className='text-md md:text-lg text-gray-700 dark:text-gray-300'>
            I am a skilled full stack developer specializing in crafting dynamic, responsive web applications using HTML, CSS, JavaScript, and React.js. I excel in backend development with Node.js and Express.js, and manage databases with MongoDB and SQL. My expertise in Tailwind CSS ensures clean, modern designs, while my proficiency in Figma and Photoshop enhances UI/UX. Additionally, I’m adept at version control with Git & GitHub and experienced in WordPress for versatile website development. My focus is on delivering seamless user experiences and scalable solutions that drive innovation and efficiency.
          </p>
        </div>

        <div className='mt-8 bg-white dark:bg-gray-700 py-4'>
          <div className={styles.marqueeWrapper}>
            <div className={styles.marqueeContainer}>
              {[html, css, js, react, node, express, mongoDb, sqlDb, photoshop, figma, postman, wordpress].map((item, index) => (
                <img key={index} src={item} alt={`Skill ${index}`} className={styles.skillIcon} />
              ))}
              {[html, css, js, react, node, express, mongoDb, sqlDb, photoshop, figma, postman, wordpress].map((item, index) => (
                <img key={index + 12} src={item} alt={`Skill ${index + 12}`} className={styles.skillIcon} />
              ))}
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div ref={skillSectionRef} className='hidden md:grid mt-10 mb-10 grid-cols-1 px-3 lg:grid-cols-3 gap-8 md:px-12'>
          <div>
            <h2 className='text-lg font-bold text-gray-800 dark:text-gray-100 mb-2'>Frontend Skills</h2>
            <div className='grid gap-4'>{renderSkillBars(frontendSkills)}</div>
          </div>

          <div>
            <h2 className='text-lg font-bold text-gray-800 dark:text-gray-100 mb-2'>Backend Skills</h2>
            <div className='grid gap-4'>{renderSkillBars(backendSkills)}</div>
          </div>

          <div>
            <h2 className='text-lg font-bold text-gray-800 dark:text-gray-100 mb-2'>Design Skills</h2>
            <div className='grid gap-4'>{renderSkillBars(designSkills)}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
