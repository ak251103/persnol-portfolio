import React from 'react';
import project1 from "../assets/project1.png"
import project2 from "../assets/project2.png"
import project4 from "../assets/project4.png"
import project5 from "../assets/project5.png"
import project6 from "../assets/project6.png"
import { AiFillGithub, AiOutlineGithub } from 'react-icons/ai'
import Reveal from './Reveal';

const projects = [
    {
      img: project1,
      title: "Project: Tic-Tac-Toe",
      description: " A simple Tic-Tac-Toe game built with HTML, CSS, and JavaScript, offering real-time gameplay, win/tie detection, and a responsive design for both desktop and mobile devices.",
      links: {
        site: "https://tic-tac-toe-pearl-phi.vercel.app/",
        github: "https://github.com/ak251103/tic-tac-toe",
      },
    },
    {
      img: project2,
      title: "Project: Travel Website",
      description: "A responsive travel website showcasing destinations, packages, and a booking interface, built with HTML5, CSS3, and JavaScript (ES6). The project included form validation and a newsletter subscription feature, with Boxicons and Google Fonts used to maintain design consistency.",
      links: {
        site: "https://ak251103.github.io/Ayush-Travels/",
        github: "https://github.com/ak251103/Ayush-Travels",
      },
    },
    {
      img: project4,
      title: "Project: Amazon Electronics Sales Analysis",
      description: "Analyzed over 50,000 Amazon electronics reviews using Python, Pandas, NumPy, and Matplotlib to identify revenue trends, customer preferences, and product performance. Performed exploratory data analysis (EDA) to uncover top-performing categories and declining segments.",
      links: {
        site: "#",
        github: "https://github.com/ak251103/amazon-electronics-analysis",
      },
    },
    {
      img: project5,
      title: "Project #4",
      description: "A mobile-friendly application using React Native.",
      links: {
        site: "#",
        github: "#",
      },
    },
    {
      img: project6,
      title: "Project: Personal Portfolio",
      description: "A personal portfolio built with Vite and React, featuring a modern design to showcase my projects, skills and a section about me",
      links: {
        site: "#",
        github: "https://github.com/shankershiv3112/prsonal_portfolio",
      },
    },
  ]

const Portfolio = () => {
  return (
    <div className='max-w-[1000px] mx-auto p-6 md:my-20' id="portfolio">
        <h2 className='text-3xl font-bold text-gray-200 mb-8'>Portfolio</h2>
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
                                        transition duration-300'>
                            View Site
                        </a>
                        <a href={project.links.github}
                            className='px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700
                                        transition duration-300'>
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
