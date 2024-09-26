import React from 'react';
import { data } from "../Data/Data.js";


const Work = () => {

    // projects file
    const project = data;
    //setProject(data);
  
  return (
    <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>
            Work
          </p>
          <p className='py-6'>Check out some of my recent work</p>
        </div>

{/* container for projects */}
<div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          
          {/* Gird Item */}
          {project.map((item, index) => (
  <div
    key={index}
    style={{ backgroundImage: `url(${item.image})` }}
    className="shadow-lg shadow-[#040c16] group container rounded-md 
              flex justify-center text-center items-center mx-auto content-div "
  >
    {/* Hover effect for images */}
    <div className="opacity-0 group-hover:opacity-100 ">
      <span className="text-2xl font bold text-white tracking-wider ">
        {item.name}
      </span>
      <div className="pt-8 text-center ">
        {/* eslint-disable-next-line */}
        <a href={item.github} target="_blank">
          <button
            className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg"
          >
            Code
          </button>
        </a>
        {/* eslint-disable-next-line */}
        <a href={item.live} target="_blank">
          <button
            className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg"
          >
            Live
          </button>
        </a>
      </div>
    </div>
  </div>
))}


</div>
      </div>
    </div>
  );
};

export default Work;

/*
import React from 'react';
import WorkImg from "../assets/Projects/workImg.jpeg";
import realState from "../assets/Projects/realestate.jpg";

const projects = [
  {
    img: WorkImg,
    title: "React JS Application 1",
    demoLink: "/",
    codeLink: "/",
  },
  {
    img: realState,
    title: "React JS Application 2",
    demoLink: "/",
    codeLink: "/",
  },
  {
    img: WorkImg,
    title: "React JS Application 3",
    demoLink: "/",
    codeLink: "/",
  },
  {
    img: realState,
    title: "React JS Application 4",
    demoLink: "/",
    codeLink: "/",
  },
];

const Work = () => {
  return (
    <>
      <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>Work</p>
          <p className='py-6'>// Check out some of my recent works</p>
        </div>

        {/* Container for project cards */
        /*
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
          {projects.map((project, index) => (
            <div
              key={index}
              style={{ backgroundImage: `url(${project.img})` }}
              className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
            >
              <div className='opacity-0 group-hover:opacity-100'>
                <span className='text-2xl font-bold text-white tracking-wider'>
                  {project.title}
                </span>
                <div className='pt-8 text-center'>
                  <a href={project.demoLink}>
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                      Demo
                    </button>
                  </a>
                  <a href={project.codeLink}>
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                      Code
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Work;*/

