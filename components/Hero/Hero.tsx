import React from 'react';
import { TypeWriter } from '../TypeWriter/TypeWriter';

export const Hero = () => {
  return (
    <div className="h-[100vh] w-full select-none dark:bg-black bg-black dark:bg-grid-white/[0.2] bg-grid-white/[0.2] relative flex flex-col items-center justify-center px-4 sm:px-8">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

      <div className="flex flex-col sm:flex-row items-center sm:items-start">
        <span className="text-3xl sm:text-5xl md:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-4 sm:py-8">
          Hi,
        </span>
        <span className="text-3xl sm:text-5xl md:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-4 sm:py-8">
          &nbsp;I'm
        </span>
        <div className="py-4 sm:py-8 relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500">
          <span className="text-3xl sm:text-5xl md:text-7xl font-bold">
            &nbsp;
            <span className="hidden sm:inline">
              <TypeWriter text={`Ankit Prajapati`} delay={50} infinite={false} />
            </span>
            <span className="inline sm:hidden">Ankit Prajapati</span>
          </span>
        </div>
      </div>
      <p className="text-2xl sm:text-4xl md:text-6xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-4 sm:py-8 text-center sm:text-left">
        a software engineer
      </p>
    </div>
  );
};
