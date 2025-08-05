import React, { useEffect, useRef, useState } from 'react'
import phone from '/images/phone.png'
import image1 from '/images/1.png'
import image2 from '/images/calender.png'
import image3 from '/images/down.png'
import logo from '/images/logo.png'
import { Link } from 'react-router-dom'
import { useSign } from '../context/SignContext'
import "./header.css"



const Header = () => {

    const { showRegister, showLogin } = useSign()

    const [togle, setTogle] = useState("togle-box")
    const [btnOne, setBtnOne] = useState("btn")
    const [btnTwo, setBtnTwo] = useState("btn active")


    const addTogle = () => {
        setTogle("togle-box active")
        setBtnOne("btn active")
        setBtnTwo("btn")
    }

    const removeTogle = () => {
        setTogle("togle-box")
        setBtnOne("btn")
        setBtnTwo("btn active")
    }


    const [open, setOpen] = useState(false);


    return (
        <div className=''>
            <div className='px-[8%] py-5 flex justify-between items-center border-b border-[#7f8084]'>
                <div className='flex'>
                    <div className='flex items-center justify-start gap-3'>
                        <img src={phone} alt="" className='w-4' />
                        <p className='text-[#636468]'>+91 9946275251</p>
                    </div>



                    <span className='text-xl font-semibold text-[#3267FF] mx-4'>|</span>

                    <div className='flex gap-3 items-center justify-center'>
                        <img src={image1} alt="" />
                        <p className='text-[#636468]'>Jl. Patimura II No. 18, Denpasar</p>
                    </div>
                </div>

                <div className='flex items-center justify-start gap-3'>
                    <img src={image2} alt="" className='w-4' />
                    <p className='text-[#636468]'>Monday - Saturday: 9 am - 11.30 pm</p>
                </div>
            </div>

            <div className='px-32 py-5 flex items-center justify-between'>
                <div className='w-[16%]'>
                    <img src={logo} alt="" className='w-full' />
                </div>

                <div>
                    <ul className='flex items-center justify-start gap-16'>
                        <li><Link to="/" className='font-semibold'>Home</Link></li>
                        <li><Link to="/about" className='font-semibold'>About Us</Link></li>
                        <li><Link to="/services" className='font-semibold'>Services</Link></li>
                        <li
                            className="relative flex items-center gap-2 cursor-pointer"
                            onMouseEnter={() => setOpen(true)}
                            onMouseLeave={() => setOpen(false)}
                        >
                            <div className="flex items-center gap-2">
                                <div className="font-semibold">Pages</div>
                                <span>
                                    <img src={image3} alt="arrow" className="mt-1" />
                                </span>
                            </div>

                            {open && (
                                <ul className="absolute top-full left-0 bg-white shadow-lg rounded-md px-4 py-4 space-y-2 z-10 w-40">
                                    <li>
                                        <Link to="/blog" className="block text-gray-700 hover:text-blue-600">
                                            Blog
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/testimonial" className="block text-gray-700 hover:text-blue-600">
                                            Testimonial
                                        </Link>
                                    </li>
                                </ul>
                            )}
                        </li>
                        <li><Link to={"/contact"} className='font-semibold'>Contact Us</Link></li>

                    </ul>
                </div>

                <div className='bg-[#f1f8ff] z-10 shadow-inner rounded-md p-1'>
                    <div className={`${togle} shadow -z-10`}></div>
                    <button onClick={showLogin} onMouseEnter={removeTogle} className={`btn1 px-6 py-[9px] ${btnTwo} z-20 rounded-md`}>Sign In</button>
                    <button onClick={showRegister} onMouseEnter={addTogle} className={`px-6 py-[9x] z-30 ${btnOne} rounded-md `}>Sign Up</button>
                    {/* <button className='bg-[#3267FF] px-7 py-3 text-white rounded-md '>Make an Appointment</button> */}
                </div>

            </div>
        </div>
    )
}

export default Header
