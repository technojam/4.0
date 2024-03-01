import React from 'react'
import { ReactTyped } from "react-typed";
import { FaInstagram, FaFacebookSquare, FaYoutube, FaLinkedin, FaTwitter } from "react-icons/fa";


const Hero = () => {
  return (
    <div className='text-white flex flex-row justify-between my-[90px] m-8'>
    
        {/*RIGHT SECTION DIV  */}
        <div className='max-w-[800px] mt-[-95px] w-full h-screen  flex flex-col justify-center '>

            <h1 className='text-[#619e90] p-2
             md:text-6xl sm:text-5xl text-3xl font-bold md:py-3 '>Dexterix 4.0</h1>
            <p className='text-[25px] font-bold p-2'>Organised by,</p>
            <p className='text-[20px] font-bold p-2'>School of Computing Science and Engineering and Team TechnoJam</p>


           {/*REACT TYPED */}
            <div>
                {/* <p className='md:text-5xl sm:text-4xl text-3xl '>Mar 11-12, 2022</p> */}
                <ReactTyped className='md:text-4xl sm:text-3xl text-2xl font-bold p-2' strings={["Mar 11-12, 2024"]} typeSpeed={40} backSpeed={50} loop/>
            </div>

            <p className='text-gray-600 text-[20px] font-bold p-2'>Galgotias University, Greater Noida</p>

            {/*REGISTER BUTTON */}
            <button className='bg-[#619e90] p-2 w-[150px] rounded-md font-medium text-xl my-4  py-3 hover:bg-[#41645c] ease-in-out duration-200 transform hover:scale-95'>Register</button>


            {/*SOCIAL MEDIA ICONS */}
            <div className='flex gap-2 text-xl p-2'>  
                <FaLinkedin className='ease-in-out duration-200 transform hover:scale-125 cursor-pointer'/>
                <FaFacebookSquare className='ease-in-out duration-200 transform hover:scale-125 cursor-pointer'/>
                <FaInstagram className='ease-in-out duration-200 transform hover:scale-125 cursor-pointer'/>
                <FaTwitter className='ease-in-out duration-200 transform hover:scale-125 cursor-pointer'/>
                <FaYoutube className='ease-in-out duration-200 transform hover:scale-125 cursor-pointer'/>
            </div>

            
        </div>

        {/* LEFT SECTION DIV */}
        <div className='flex items-center'>
            <h1></h1>
        </div>
        
    </div>
  )
}

export default Hero