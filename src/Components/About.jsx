import React from 'react';

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300 flex justify-center items-center">
      <div className="max-w-[1000px] w-full p-4 flex flex-col justify-center h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600">About</p>
        </div>

        {/* Main Content */}
        <div className="grid sm:grid-cols-2 gap-8">
          <div className="sm:text-right text-4xl font-bold">
            <p>Hi, I'm Aisha. Nice to meet you! Please take a look around.</p>
          </div>
          <div>
            <p className="text-lg">
              I am passionate about creating excellent software that improves the lives of those around me. I specialize
              in developing software for clients ranging from individuals and small businesses to large enterprises. What
              would you do if you had a software expert available at your fingertips?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
