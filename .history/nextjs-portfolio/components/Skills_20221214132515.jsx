import React from 'react'
import Image from 'next/image'
import HTML from '../public/assets/html5.png'

const Skills = () => {
  return (
    <div className="w-full lg:h-screen p-2">
        <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
            <p className="text-xl tracking-widest uppercase text-[#5681a6]">Skills</p>
            <h2>What do I know?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cold-4 gap-8">
              
              <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                <div className="grid grid-cols-2 gap-4 justify-center items-center">
                  <div className="m-auto">
                    <Image 
                    src={HTML}
                    width="64"
                    height="64"
                    alt="html.png"
                    />
                  </div>
                  
                  <div className="flex flex-col items-center justify-center">
                    <h3>HTML</h3>
                  </div>
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Skills