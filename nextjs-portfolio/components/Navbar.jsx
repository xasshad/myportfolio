import Image from 'next/image'
import Link from 'next/link'
import React, {useState} from 'react'
import {AiOutlineMenu, AiOutlineClose, AiOutlineMail} from 'react-icons/ai'
import {FaLinkedinIn, FaGithub} from 'react-icons/fa'
import {BsFillPersonLinesFill} from 'react-icons/bs'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    
    const handleNav = () => {
        setNav(!nav)
    }
  return (
    <div className="fixed w-full h-20 shadow-xl z-[100]">
        <div className="flex justify-between md:justify-evenly items-center w-full h-full px-2xl:px-16">
            <Image src="/../public/assets/MenuLogo.png" 
            alt="/" 
            width="80" 
            height="25"
            />
            <div>
                <ul className="hidden md:flex">
                    <Link href="/">
                        <li className="ml-10 text-sm uppercase hover:border-b">Home</li>
                    </Link>

                    <Link href="/">
                        <li className="ml-10 text-sm uppercase hover:border-b">About</li>
                    </Link>

                    <Link href="/">
                        <li className="ml-10 text-sm uppercase hover:border-b">Skills</li>
                    </Link>
                    
                    <Link href="/">
                        <li className="ml-10 text-sm uppercase hover:border-b">CV</li>
                    </Link>

                    <Link href="/">
                        <li className="ml-10 text-sm uppercase hover:border-b">Contact</li>
                    </Link>
                </ul>
                <div onClick={handleNav} className="ml-4 md:hidden">
                    <AiOutlineMenu size={25} />
                </div>
            </div>
        </div>
        
        <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''}>
            <div className={nav 
                ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#deeefc] p-10 ease-in duration-500' 
                : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'}>
                <div>
                    <div className="flex w-full items-center justify-between">
                        <Image src="/../public/assets/MenuLogo.png" 
                        alt="/" 
                        width="125" 
                        height="50" />

                        <div onClick={handleNav} className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer">
                            <AiOutlineClose />
                        </div>
                    </div>

                    <div className="border-b border-gray-300 my-4">
                    <p className="w-[85%] md:w-[90%] py-4">Nice to meet you, where you been? ™</p>
                    </div>

                    <div className="py-4 flex flex-col">
                        <ul className="uppercase">
                            <Link href="/">
                            <li onClick={() => setNav(false)} className="py-4 text-sm">Home</li>
                            </Link>

                            <Link href="/">
                            <li onClick={() => setNav(false)} className="py-4 text-sm">About</li>
                            </Link>

                            <Link href="/">
                            <li onClick={() => setNav(false)} className="py-4 text-sm">Skills</li>
                            </Link>

                            <Link href="/">
                            <li onClick={() => setNav(false)} className="py-4 text-sm">CV</li>
                            </Link>

                            <Link href="/">
                            <li onClick={() => setNav(false)} className="py-4 text-sm">Contact</li>
                            </Link>
                        </ul>
                        <div className="pt-40">
                            <p className="uppercase tracking-widest text-[#5681a6]">Get In Touch</p>
                            <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                                <a href=
                                'https://www.linkedin.com/in/xassha-david-59b393187/'
                                target='_blank'
                                rel='noreferrer'
                                >
                                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-115 ease-in duration-300">
                                    <FaLinkedinIn />
                                </div>
                                </a>

                                <a href=
                                'https://github.com/xasshad'
                                target='_blank'
                                rel='noreferrer'
                                >
                                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-115 ease-in duration-300">
                                    <FaGithub />
                                </div>
                                </a>

                                <a href=
                                '/contact'
                                target='_blank'
                                rel='noreferrer'
                                >
                                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-115 ease-in duration-300">
                                    <AiOutlineMail />
                                </div>
                                </a>

                                <a href=
                                '/cv'
                                target='_blank'
                                rel='noreferrer'
                                >
                                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-115 ease-in duration-300">
                                    <BsFillPersonLinesFill />
                                </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar