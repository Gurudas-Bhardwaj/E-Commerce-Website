import React from 'react'
import { Link } from 'react-router-dom'
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { FaFacebook,FaInstagram,FaTwitter   } from "react-icons/fa6";


function Footer() {
  return (
    <>
        <footer className='Footer w-screen flex flex-col justify-center items-center *:font-Popins' style={{maxHeight:"2000px"}}>
            <div className='w-screen md:w-4/5 mt-28 pl-3 md:pr-4  gap-14   flex flex-col md:grid md:grid-cols-4'>
              <div className='flex flex-col md:pt-5   justify-center md:justify-normal '>
                <h1 className='text-lg  font-medium'>VegeFood</h1>
                <span className='pt-7  '>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</span>
                <div className='flex gap-8 mt-12'>
                <FaFacebook className="h-6 w-6" />
                <FaInstagram className="h-6 w-6" />
                <FaTwitter className="h-6 w-6" />
                </div>
              </div>
              <div className='flex flex-col gap-2 md:pt-5 md:pb-5  '>
                <div className='flex flex-col  gap-3'>
                  <h1 className='font-medium text-xl  '>Menu</h1>
                    <Link className="mt-4" to="/Shop">Shop</Link>
                    <Link>About</Link>
                    <Link>My Profile</Link>
                    <Link>Contact Us</Link>
                  </div>
              </div>
              <div className='flex flex-col gap-2 md:pt-5 md:pb-5  '>
                  <h1 className='font-medium text-xl  '>Help</h1>
                  <div className='flex flex-col gap-3'>
                    <Link className="mt-4">Shipping Information</Link>
                    <Link>Returns & Exchange</Link>
                    <Link>Term and Condition</Link>
                    <Link>Privacy Policy</Link>
                  </div>
              </div>
              <div className='flex flex-col gap-2 md:pt-5 md:pb-5  '>
                  <h1 className='font-medium text-xl  '>Have a Question?</h1>
                  <div className='flex flex-col gap-3'>
                    <p className="mt-4 flex"><FaLocationDot className="mr-1 mt-1" />148 North Street Konaha,<br />Hidden Leaf Village <br /> 
                    </p>
                    <p className="flex"><FaPhone className="mr-2 mt-1 " />+78586529575</p>
                    <p className="flex"><IoMail className="mt-1 mr-2     " />Info@Information.com</p>
                  </div>
              </div>
            </div>
              <div className='pt-24 flex justify-center items-center pb-24 w-screen'>
                <h1 className='flex text-center'>Copyright ©2024 All rights reserved | This Website is Created By  Gurudas </h1>
              </div>
        </footer>
    </>
  )
}

export default Footer