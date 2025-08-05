import React, { useState } from 'react'
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

    const [open, setOpen] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <div className=''>
            
            <div className='px-4 md:px-[8%] py-3 md:py-5 flex flex-wrap justify-between items-center border-b border-[#7f8084] text-sm'>
                <div className='flex flex-col md:flex-row gap-2 md:gap-4'>
                    <div className='flex items-center gap-2'>
                        <img src={phone} alt="" className='w-4' />
                        <p className='text-[#636468]'>+91 9946275251</p>
                    </div>
                    <div className='hidden md:block text-xl font-semibold text-[#3267FF]'>|</div>
                    <div className='flex items-center gap-2'>
                        <img src={image1} alt="" />
                        <p className='text-[#636468]'>Jl. Patimura II No. 18, Denpasar</p>
                    </div>
                </div>

                <div className='flex items-center gap-2 mt-3 md:mt-0'>
                    <img src={image2} alt="" className='w-4' />
                    <p className='text-[#636468]'>Mon - Sat: 9 am - 11.30 pm</p>
                </div>
            </div>

            
            <div className='px-4 md:px-16 lg:px-32 py-4 flex flex-wrap items-center justify-between'>
                
                <div className='w-[40%] lg:w-[16%]'>
                    <img src={logo} alt="" className='w-full max-w-[150px]' />
                </div>

                
                <div className="lg:hidden">
                    <button onClick={() => setMenuOpen(!menuOpen)} className="focus:outline-none">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                        </svg>
                    </button>
                </div>

                
                <div className={`w-full lg:w-auto mt-4 lg:mt-0 ${menuOpen ? "block" : "hidden"} lg:block`}>
                    <ul className='flex flex-col lg:flex-row items-start lg:items-center gap-4 lg:gap-16'>
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
                                    <img src={image3} alt="arrow" className="mt-1 w-3" />
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
                        <li><Link to="/contact" className='font-semibold'>Contact Us</Link></li>
                    </ul>
                </div>

                
                <div className='hidden lg:flex bg-[#f1f8ff] z-10 shadow-inner rounded-md p-1 ml-4'>
                    <div className={`${togle} shadow -z-10`}></div>
                    <button onClick={showLogin} onMouseEnter={removeTogle} className={`btn1 px-6 py-[9px] ${btnTwo} rounded-md`}>Sign In</button>
                    <button onClick={showRegister} onMouseEnter={addTogle} className={`px-6 py-[9px] ${btnOne} rounded-md`}>Sign Up</button>
                </div>
            </div>
        </div>
    )
}

export default Header
