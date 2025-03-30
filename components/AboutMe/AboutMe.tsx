import React from 'react'

export const AboutMe = () => {
  return (
    <div className="bg-black text-white px-6 md:px-40 min-h-screen flex items-center justify-center">
      <div className="w-full flex flex-col md:flex-row items-center justify-between">
        {/* Text Section */}
        <div className="flex-1 p-6 md:p-12 flex flex-col justify-center items-center text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 md:mb-6">About Me</h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-red-500">Web Developer & Designer</h2>
          <p className="text-gray-400 mt-4 md:mt-6 text-base md:text-lg max-w-xl">
            I am a passionate web developer and designer with a creative mind and a love for building
            beautiful and functional websites. I enjoy bringing ideas to life through coding and design,
            and I'm always eager to learn and explore new technologies to create amazing online experiences.
          </p>
          <div className="mt-6 md:mt-8 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">
            <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-full transition">
              Let's Talk
            </button>
            <button className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-full transition">
              My CV
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="mt-6 md:mt-0 bg-red-400 flex items-center justify-center">
          <img 
            src="https://kemahasiswaan.upertis.ac.id/wp-content/uploads/2017/10/user9.jpg" 
            alt="About Me Image" 
            className="w-[300px] md:w-[460px] h-[40vh] md:h-[50vh] object-cover"        
          />
        </div>
      </div>
    </div>
  )
}
