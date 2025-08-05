import React from 'react'
import logo from '/images/logo2.png'
import { Link } from 'react-router-dom'
import phone from '/images/phone.png'
import image1 from '/images/1.png'
import media1 from '/images/insta.png'
import media2 from '/images/facebook.png'
import media3 from '/images/twitter.png'
import media4 from '/images/youtube.png'

const Footer = () => {
  return (
    <div className='bg-[#000A2D] px-32 py-10'>
        <div className='flex items-center justify-between '>
            <div className='space-y-6 w-[25%] '>
                <div className='w-[55%] space-y-6'>
                    <img src={logo} alt="" className='w-full' />
                    <p className='text-white w-full text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div>
                    <ul className='flex justify-start items-center space-x-6'>
                        <li><a href=""><img src={media1} alt="" className='w-4 ' /></a></li>
                        <li><a href=""><img src={media2} alt="" className='w-4 ' /></a></li>
                        <li><a href=""><img src={media3} alt="" className='w-4 ' /></a></li>
                        <li><a href=""><img src={media4} alt="" className='w-4' /></a></li>
                    </ul>
                </div>
            </div>
            <div className='w-[25%]'>
                <div className=' mb-3'>
                    <h3 className='text-white text-lg font-semibold'>Helpfull Links</h3>
                </div>
                <div className='border-b-2 border-[#3267FF] mb-3 w-16'></div>
                <div>
                    <ul className='space-y-2'>
                        <li>
                            <Link className='text-white text-sm'>Privacy Policy</Link>
                        </li>
                        <li>
                            <Link className='text-white text-sm'>Support</Link>
                        </li>
                        <li>
                            <Link className='text-white text-sm'>FAQ</Link>
                        </li>
                        <li>
                            <Link className='text-white text-sm'>Terms & Conditions</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='w-[25%]'>
                <div className=' mb-3'>
                    <h3 className='text-white text-lg font-semibold'>Helpfull Links</h3>
                </div>
                <div className='border-b-2 border-[#3267FF] mb-3 w-16'></div>
                <div>
                    <ul className='space-y-2'>
                        <li>
                            <Link className='text-white text-sm'>Privacy Policy</Link>
                        </li>
                        <li>
                            <Link className='text-white text-sm'>Support</Link>
                        </li>
                        <li>
                            <Link className='text-white text-sm'>FAQ</Link>
                        </li>
                        <li>
                            <Link className='text-white text-sm'>Terms & Conditions</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='w-[25%]'>
                <div className=' mb-3'>
                    <h3 className='text-white text-lg font-semibold'>Contact Us</h3>
                </div>
                <div className='border-b-2 border-[#3267FF] mb-4 w-16'></div>
                <div>
                    <div className='w-[94%] bg-white py-1 rounded-md flex items-center justify-between mb-3'>
                        <input type="email" placeholder='Your Email Address' className='outline-none ml-3' />
                        <button className='bg-[#3267FF] px-6 py-2 rounded-md text-sm text-white font-medium mr-1'>Sign Up</button>
                    </div>
                    <ul className='space-y-3'>
                        <li className='flex items-center justify-start gap-3'>
                            <span><img src={image1} alt="" /></span>
                            <Link className='text-white text-sm'>Jl. Patimura II No. 18, Denpasar</Link>
                        </li>
                        <li className='flex items-center justify-start gap-3'>
                            <span><img src={phone} alt="" className='w-4' /></span>
                            <Link className='text-white text-sm'>+91 9946275251</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Footer
