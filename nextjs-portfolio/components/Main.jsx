import React from 'react'
import Image from 'next/image'
import Typewriter from 'typewriter-effect'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { AiOutlineMail } from 'react-icons/ai'

const Main = () => {
  return (
    <div className="w-full h-screen text-center">
        <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
            <div>
                <div className="flex justify-center max-w-4xl my-5 mx-auto">
                    <Image 
                    className=""
                    src="/../public/assets/AltGif.gif"
                    alt="/"
                    width="300"
                    height="100" />
                </div>
                <p className="uppercase text-sm tracking-widest text-gray-600">
                    I COULD SHOW YOU INCREDIBLE THINGS.
                </p>
                <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6 py-4 text-gray-700">
                    Hello! I'm <span className="text-[#5681a6]">Xassha.</span>
                </h1>
                <h2 className="py-2 text-gray-700">
                <Typewriter
                className="md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2"
                    options={{
                        strings: ['Junior developer', 'UX/UI Designer', 'Student'],
                        autoStart: true,
                        loop: true,
                    }}
                    />
                </h2>
                <p className="py-4 text-gray-600 max-w-[70%] m-auto">
                    I specialise in building and designing digital experiences that uphold User Experience principles. 
                    My current goal is to deploy responsive front-end websites while implementing back-end technologies.
                </p>
                <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
                    <a href=
                        'https://www.linkedin.com/in/xassha-david-59b393187/'
                        target='_blank'
                        rel='noreferrer'
                        >
                        <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-300">
                            <FaLinkedinIn />
                        </div>
                    </a>
                    
                    <a href=
                        'https://github.com/xasshad'
                        target='_blank'
                        rel='noreferrer'
                        >
                        <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                        <FaGithub />
                        </div>
                    </a>

                    <a href=
                    '/contact'
                    target='_blank'
                    rel='noreferrer'
                    >
                    <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <AiOutlineMail />
                    </div>
                    </a>

                    <a href=
                    '/cv'
                    target='_blank'
                    rel='noreferrer'
                    >
                    <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <BsFillPersonLinesFill />
                    </div>
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Main