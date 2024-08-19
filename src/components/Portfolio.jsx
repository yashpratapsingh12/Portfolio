import React from 'react';
import project1 from "../assets/project1.png"
import project2 from "../assets/project2.png"

import { AiFillGithub, AiOutlineGithub } from 'react-icons/ai'
import Reveal from './Reveal';

const projects = [
    {
      img: project1,
      title: "Glide",
      description: "Dynamic social media platform where users can effortlessly create, delete, and update their posts, as well as interact with posts of other user and I have created this by using ReactJs,Tailwind CSS ,Reactquery and Appwrite.",
      links: {
        site: "https://glide-ecru.vercel.app/",
        github: "https://github.com/yashpratapsingh12/Glidee",
      },
    },
    {
      img: project2,
      title: "BuildHard",
      description: "Fitness website where you can get most of the exercise details and correct manner to do the exercise by searching the name of the exercise or related muscle group with their youtube videos also.",
      links: {
        site: "https://buildhard.netlify.app/",
        github: "https://github.com/yashpratapsingh12/Build-hard",
      },
    },
,
  ]

const Portfolio = () => {
  return (
    <div className='max-w-[1000px] mx-auto p-6 md:my-20' id="portfolio">
        <h2 className='text-3xl font-bold text-gray-200 mb-8'>Projects</h2>
        {projects.map((project, index) => (
            <Reveal>
            <div key={index} 
            className={`flex flex-col md:flex-row ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''} mb-12`}>
                <div className='w-full md:w-1/2 p-4'>
                    <img
                        src={project.img}
                        alt={project.title}
                        className='w-full h-full object-cover rounded-lg shadow-lg'
                    />
                </div>
                <div className='w-full md:w-1/2 p-4 flex flex-col justify-center'>
                    <h3 className='text-2xl font-semibold text-gray-200 mb-4'>{project.title}</h3>
                    <p className='text-gray-300 mb-4'>{project.description}</p>
                    <div className='flex space-x-4'>
                        <a href={project.links.site}
                            className='px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700
                                        transition duration-300'  target="_blank" rel="noreferrer">
                            View Site
                        </a>
                        <a href={project.links.github}
                            className='px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700
                                        transition duration-300'
                                        target="_blank" rel="noreferrer">
                            <AiOutlineGithub/>
                        </a>

                    </div>

                </div>

            </div>
            </Reveal>
        ))}
        
    </div>
  )
}

export default Portfolio