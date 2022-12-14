import React from 'react'
import Link from 'next/link'
import Image from 'next/image';
import AboutGif from '../public/assets/aboutimage.gif'
const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16 mx-2">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5681a6]">
            About Me
          </p>

          <h2 className="py-4">Oh my god, who is she?!</h2>

          <p className="py-2 text-gray-400 italic font-light">*:･ﾟ✧*:･ﾟ I'm a rookie who wants to rise to the top  *:･ﾟ✧*:･ﾟ</p>

          <p className="py-2 text-gray-600">
            I started my tech journey when I was 12 years old (no joke!) on Tumblr.
            I played around with a lot of HTML and CSS styling as a teenager and decided to learn more about web development. 
            In 2019, I learned HTML, CSS, Javascript, and Git fundamentals online from resources 
            like <i>The Odin Project</i> and <i>Udemy</i>.
          </p>

          <p className="py-2 text-gray-600">
              After receiving my Residency Visa this January, I enrolled with <b>Whitecliffe College of Art and Design</b> for
              their Level 5 Web Development and Design Certificate. Through this 12-month course, I learned backend languages like
              Python and C# where I learned programming models like Object-Oriented Programming (OOP) and Software Development Life Cycle (SDLC) principles.
              I also learned Javascript libraries and frameworks like React JS and Next JS respectively, along with database management using Microsoft SQL Server.
              For my final Capstone Project, I used MongoDB to seed data. I've also heavily used Figma to create wire-frames and prototypes.
          </p>

          <p className="py-2 text-gray-600">
              Currently, I work for a start-up company in Auckland where I utilise my experience in customer service and sales.
              Because of my previous work and academic experiences, I learned to be a self-starter and motivate myself
              to learn and build my projects.
          </p>

          <Link href="/projects">
            <p className="py-2 text-[#8daeca] underline cursor-pointer">
              Check out my work here!
            </p>
          </Link>
        </div>

        <div className="w-full h-auto m-auto shadow-xl shadow-gray-200 rounded-lg flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image src={AboutGif} className="rounded-lg" alt="/" />
        </div>
      </div>
    </div>
  )
}

export default About