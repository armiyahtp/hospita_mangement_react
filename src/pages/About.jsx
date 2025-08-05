import React from 'react'
import { useSign } from '../context/SignContext'
import image1 from '/images/about1.png'
import image2 from '/images/about2.png'
import image3 from '/images/about3.png'
import about from '/images/about-l.png'
import tick from '/images/tick.png'
import line from '/images/line2.jpg'
import image4 from '/images/about4.png'
import image5 from '/images/about5.png'
import image6 from '/images/about6.png'
import image7 from '/images/about7.png'
import image8 from '/images/about8.png'
import Login from './Login'
import Singup from './Singup'


const About = () => {

    const { register, login } = useSign()

    return (
        <>
            <div className='px-32 py-20 space-y-24'>
                <div className='flex justify-center gap-10'>
                    <div className='space-y-2'>
                        <div className='flex justify-center'>
                            <img src={image1} alt="" className='w-14 ' />
                        </div>
                        <h3 className='text-xl font-semibold text-center'>Affordable Price</h3>
                        <p className='text-[#636571] text-center'>Lorem ipsum dolor sit amet, consectetur<br />adipiscing elit. Ut elit tellus nec.</p>
                    </div>

                    <div className='space-y-2'>
                        <div className='flex justify-center'>
                            <img src={image2} alt="" className='w-14 ' />
                        </div>
                        <h3 className='text-xl font-semibold text-center'>Professional Dentist</h3>
                        <p className='text-[#636571] text-center'>Lorem ipsum dolor sit amet, consectetur<br />adipiscing elit. Ut elit tellus nec.</p>
                    </div>

                    <div className='space-y-2'>
                        <div className='flex justify-center'>
                            <img src={image3} alt="" className='w-14 ' />
                        </div>
                        <h3 className='text-xl font-semibold text-center'>Satisfactory Service</h3>
                        <p className='text-[#636571] text-center'>Lorem ipsum dolor sit amet, consectetur<br />adipiscing elit. Ut elit tellus nec.</p>
                    </div>
                </div>









                <div className='flex'>
                    <div className='w-[50%] flex justify-center'>
                        <img src={about} alt="" className='w-[75%]' />
                    </div>

                    <div className='w-[50%] flex items-center'>
                        <div className=''>
                            <div className='flex items-center justify-center gap-3 py-2 border rounded-md w-36 mb-5'>
                                <p className='text-sm font-medium text-[#3267FF]'>More About Us</p>
                            </div>

                            <div className='mb-5'>
                                <h1 className='text-5xl font-bold mb-7'>The Best Dental Clinic<br />That You Can Trust</h1>
                                <p className='text-[#636571] mb-4'>
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                                    <br />Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                                    <br />natoque penatibus et magnis dis parturient.
                                </p>
                                <p className='text-[#636571]'>
                                    Nullam quis ante. Etiam sit amet orci eget eros faucibus
                                    <br />tincidunt. Duis leo. Sed fringilla mauris sit amet nibh.
                                </p>
                            </div>

                            <div className='grid grid-cols-2 gap-4 mb-7'>
                                <div className='flex items-center gap-4'>
                                    <img src={tick} alt="" className='w-4' />
                                    <p className='text-sm font-semibold'>Modern Equipment</p>
                                </div>

                                <div className='flex items-center gap-4'>
                                    <img src={tick} alt="" className='w-4' />
                                    <p className='text-sm font-semibold'>Easy Online Appointment</p>
                                </div>

                                <div className='flex items-center gap-4'>
                                    <img src={tick} alt="" className='w-4' />
                                    <p className='text-sm font-semibold'>Comfortable CIinic</p>
                                </div>

                                <div className='flex items-center gap-4'>
                                    <img src={tick} alt="" className='w-4' />
                                    <p className='text-sm font-semibold'>Always Monitored</p>
                                </div>
                            </div>

                            <div className='flex items-center gap-5'>
                                <button className='px-5 py-2 bg-[#3267FF] text-white border border-[#3267FF] rounded-lg'>Learn More</button>
                                <button className='px-5 py-2 border border-[#98B3FF] text-[#3267FF] rounded-lg'>Make an Appointment</button>
                            </div>
                        </div>
                    </div>
                </div>







                <div className='relative flex items-center justify-start'>
                    <div className='pl-32 w-[47%]'>
                        <div className='flex items-center justify-center gap-3 py-2 border rounded-md w-36 mb-4'>
                            <p className='text-sm text-[#3267FF]'>Why Choose Us</p>
                        </div>

                        <div className='relative mb-8'>
                            <h1 className='text-5xl font-bold mb-7'>Helping Your<br />Dental Problems</h1>
                            <p className='text-[#636571]'>
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                                <br />Aenean commodo ligula eget dolor. Aenean massa. Cum
                                <br />sociis natoque penatibus et magnis dis parturient.
                            </p>
                            <img src={line} alt="" className='w-6 absolute top-[24%] right-[16%] -z-10' />
                        </div>

                        <div className="space-y-4 max-w-md">
                            <div>
                                <div className="flex justify-between text-sm font-medium text-gray-900 mb-3">
                                    <span>Dental and Mouth Care</span>
                                    <span>95%</span>
                                </div>
                                <div className="w-full bg-blue-100 rounded-full h-2">
                                    <div className="bg-[#3267FF] h-2 rounded-full" style={{ width: '95%' }}></div>
                                </div>
                            </div>

                            <div>
                                <div className="flex justify-between text-sm font-medium text-gray-900 mb-3">
                                    <span>Cosmetic Treatment</span>
                                    <span>87%</span>
                                </div>
                                <div className="w-full bg-blue-100 rounded-full h-2">
                                    <div className="bg-[#3267FF] h-2 rounded-full" style={{ width: '87%' }}></div>
                                </div>
                            </div>
                        </div>

                    </div>


                    <div className='w-[48%]'>
                        <img src={image4} alt="" className='w-[65%]' />
                    </div>


                    <div className='absolute bg-white z-10 rounded-lg shadow-xl right-0 px-6 py-6'>
                        <div>
                            <h3 className='text-2xl font-bold mb-2'>Don't Hesitate to Do<br />Consultation</h3>
                            <p className='text-[#636571] text-sm mb-5'>Lorem ipsum dolor sit amet, consectetur<br />adipiscing elit. Ut elit tellus, luctus nec.</p>
                        </div>

                        <span className='flex items-center justify-between mb-4'>
                            <p className='font-semibold text-sm'>Monday - Friday</p>
                            <p className='text-[#636571] text-sm'>8AM - 10PM</p>
                        </span>

                        <span className='flex items-center justify-between mb-4'>
                            <p className='font-semibold text-sm'>Satuday</p>
                            <p className='text-[#636571] text-sm'>8AM - 10PM</p>
                        </span>

                        <span className='flex items-center justify-between mb-4'>
                            <p className='font-semibold text-sm'>Sunday</p>
                            <p className='text-[#636571] text-sm'>8AM - 10PM</p>
                        </span>

                        <span className='flex items-center justify-center'>
                            <button className='px-16 py-4 bg-[#3267FF] text-white font-medium rounded-lg'>Call +91 9946275251</button>
                        </span>
                    </div>
                </div>
            </div>










            <div className='py-16 flex justify-center items-center gap-20 bg-[#F1F8FF]'>
                <div className='flex justify-center items-center gap-7'>
                    <img src={image5} alt="" />
                    <div>
                        <p className='text-3xl font-bold'>1200<span className='text-4xl font-bold text-[#3267FF]'>+</span></p>
                        <p className='text-[#636571]'>Happy Client</p>
                    </div>
                </div>

                <div className='flex justify-center items-center gap-7'>
                    <img src={image6} alt="" />
                    <div>
                        <p className='text-3xl font-bold'>15<span className='text-4xl font-bold text-[#3267FF]'>+</span></p>
                        <p className='text-[#636571]'>Year Experience</p>
                    </div>
                </div>

                <div className='flex justify-center items-center gap-7'>
                    <img src={image7} alt="" />
                    <div>
                        <p className='text-3xl font-bold'>70<span className='text-4xl font-bold text-[#3267FF]'>+</span></p>
                        <p className='text-[#636571]'>Doctor & Staff</p>
                    </div>
                </div>

                <div className='flex justify-center items-center gap-7'>
                    <img src={image8} alt="" />
                    <div>
                        <p className='text-3xl font-bold'>340<span className='text-4xl font-bold text-[#3267FF]'>+</span></p>
                        <p className='text-[#636571]'>Online Appointment</p>
                    </div>
                </div>
            </div>

            <div className={`${register} fixed inset-0 z-50`}>
                <Singup />
            </div>

            <div className={`${login} fixed inset-0 z-50`}>
                <Login />
            </div>


        </>
    )
}

export default About
