import React from 'react'
import hand from '/images/hand.png'
import line from '/images/line2.jpg'
import home from '/images/hom-r.png'
import user1 from '/images/user1.png'
import user2 from '/images/user2.png'
import user3 from '/images/user3.png'
import plus from '/images/plus.png'
import star from '/images/star.png'
import email from '/images/email.png'
import phone from '/images/phone.png'
import calender from '/images/calender.png'
import doc from '/images/doc.png'
import Login from './Login'
import { useSign } from '../context/SignContext'
import Singup from './Singup'

const Home = () => {
    const { register, login } = useSign()

    return (
        <div className='relative flex flex-col lg:flex-row items-start justify-between px-6 md:px-16 pt-10 lg:pt-28'>

            <div className='relative flex flex-col md:flex-row items-start justify-between'>
                <div className='w-full md:w-[60%] lg:w-1/2'>
                    <div className='flex items-center justify-start gap-3 px-3 py-2 border rounded-md w-fit mb-4'>
                        <img src={hand} alt="" />
                        <p className='text-sm text-[#3267FF]'> Hey! We Are Dentic</p>
                    </div>
                    <div className='relative'>
                        <h1 className='text-3xl md:text-3xl lg:text-5xl font-bold mb-5 lg:mb-7'>
                            Helping You to <br />Bring Back Your <br />Happy Smile
                        </h1>
                        <p className='text-[#636571] text-sm lg:text-base'>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                            Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                            natoque penatibus et magnis dis parturient.
                        </p>
                        <img src={line} alt="" className='w-6 absolute md:right-[27%] md:top-[32%] lg:right-[52%] lg:top-[40%] -z-10 hidden md:block' />
                    </div>
                </div>


                <div className='relative bg-[#F1F8FF] w-full md:w-[40%] md:h-[245px] lg:h-auto lg:w-1/2 mt-10 md:mt-0 flex justify-center md:justify-end'>
                    <img src={home} alt="" className='w-[80%] md:w-[65%]' />
                    <div className='absolute left-auto top-[120px] pl-5 pr-8 pt-4 pb-2 bg-[#ffffff83] rounded-lg shadow hidden lg:block'>
                        <div className='flex items-center justify-between mb-3'>
                            <div className='flex'>
                                <img src={user1} alt="" className='w-9' />
                                <img src={user2} alt="" className='w-9 absolute ml-6 z-10' />
                                <img src={user3} alt="" className='w-9 absolute ml-12 z-20 ' />
                            </div>
                            <div className='flex items-center relative'>
                                <p className='text-2xl font-bold mr-1'>180</p>
                                <img src={plus} alt="" className='w-5 absolute right-0' />
                            </div>
                        </div>
                        <span className='text-sm font-semibold'>Satisfied Customer</span>
                        <div className='flex items-start justify-between mt-2'>
                            <img src={star} alt="" className='w-20 mr-2' />
                            <p className='text-xs text-[#636571]'>4.9/5 Review</p>
                        </div>
                    </div>
                </div>
            </div>



            <div className='lg:absolute flex flex-col lg:flex-row items-start lg:items-end gap-8 lg:left-[18%] lg:top-[75%] bg-white shadow-md px-6 py-5 rounded-lg w-[90%] lg:w-auto my-10 '>
                <div className='w-full'>
                    <label htmlFor="email" className='flex items-center justify-start gap-4 mb-3'>
                        <img src={email} alt="" className='w-4' />
                        <span>Email Address</span>
                    </label>
                    <input type="email" id='email' placeholder='Your Email' className='outline-none border px-5 py-2 rounded-lg w-full' />
                </div>
                <div className='w-full'>
                    <label htmlFor="number" className='flex items-center justify-start gap-4 mb-3'>
                        <img src={phone} alt="" className='w-4' />
                        <span>Phone Number</span>
                    </label>
                    <input type="number" id='number' placeholder='Telephone' className='outline-none border px-5 py-2 rounded-lg w-full' />
                </div>
                <div className='w-full'>
                    <label htmlFor="date" className='flex items-center justify-start gap-4 mb-3'>
                        <img src={calender} alt="" className='w-4' />
                        <span>Date</span>
                    </label>
                    <input type="text" id='date' placeholder='Date' className='outline-none border px-5 py-2 rounded-lg w-full' />
                </div>
                <div className='w-full flex items-center justify-center'>
                    <div className='flex items-center gap-4 bg-[#3267FF] px-4 py-3 rounded-lg mt-4 lg:mt-0'>
                        <img src={doc} alt="" className='w-3' />
                        <button className='text-white text-sm'>Book Now</button>
                    </div>
                </div>

            </div>


            <div className={`${register} fixed inset-0 z-50`}>
                <Singup />
            </div>
            <div className={`${login} fixed inset-0 z-50`}>
                <Login />
            </div>
        </div>
    )
}

export default Home
