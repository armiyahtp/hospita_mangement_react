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
            <div className='px-4 sm:px-10 lg:px-32 py-20 space-y-24'>
                <div className='flex flex-col lg:flex-row justify-center gap-10'>
                    {[image1, image2, image3].map((img, i) => (
                        <div className='space-y-2' key={i}>
                            <div className='flex justify-center'>
                                <img src={img} alt="" className='w-14' />
                            </div>
                            <h3 className='text-xl font-semibold text-center'>
                                {["Affordable Price", "Professional Dentist", "Satisfactory Service"][i]}
                            </h3>
                            <p className='text-[#636571] text-center'>
                                Lorem ipsum dolor sit amet, consectetur<br />adipiscing elit. Ut elit tellus nec.
                            </p>
                        </div>
                    ))}
                </div>

                <div className='flex flex-col lg:flex-row gap-10'>
                    <div className='w-full lg:w-1/2 flex justify-center'>
                        <img src={about} alt="" className='w-[75%]' />
                    </div>

                    <div className='w-full lg:w-1/2 flex items-center'>
                        <div>
                            <div className='flex justify-center lg:justify-start'>
                                <div className='flex items-center justify-center gap-3 py-2 border rounded-md w-36 mb-5'>
                                    <p className='text-sm font-medium text-[#3267FF]'>More About Us</p>
                                </div>
                            </div>


                            <div className='mb-5'>
                                <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold mb-7'>The Best Dental Clinic<br />That You Can Trust</h1>
                                <p className='text-[#636571] mb-4'>
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                                    Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                                    natoque penatibus et magnis dis parturient.
                                </p>
                                <p className='text-[#636571]'>
                                    Nullam quis ante. Etiam sit amet orci eget eros faucibus
                                    tincidunt. Duis leo. Sed fringilla mauris sit amet nibh.
                                </p>
                            </div>

                            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 mb-7'>
                                {["Modern Equipment", "Easy Online Appointment", "Comfortable CIinic", "Always Monitored"].map((text, i) => (
                                    <div className='flex items-center gap-4' key={i}>
                                        <img src={tick} alt="" className='w-4' />
                                        <p className='text-sm font-semibold'>{text}</p>
                                    </div>
                                ))}
                            </div>

                            <div className='flex flex-col sm:flex-row items-center gap-5'>
                                <button className='px-5 py-2 bg-[#3267FF] text-white border border-[#3267FF] rounded-lg'>Learn More</button>
                                <button className='px-5 py-2 border border-[#98B3FF] text-[#3267FF] rounded-lg'>Make an Appointment</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='relative flex flex-col lg:flex-row items-center lg:items-center justify-start gap-10'>
                    <div className='flex flex-col md:flex-row gap-10 md:gap-0'>
                        <div className='w-full lg:w-[47%] px-2 lg:pl-32'>
                            <div className='flex justify-center lg:justify-start w-full'>
                                <div className='flex items-center justify-center gap-3 py-2 border rounded-md w-36 mb-4'>
                                    <p className='text-sm text-[#3267FF]'>Why Choose Us</p>
                                </div>
                            </div>


                            <div className='relative mb-8'>
                                <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold mb-7'>Helping Your<br />Dental Problems</h1>
                                <p className='text-[#636571]'>
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                                    Aenean commodo ligula eget dolor. Aenean massa. Cum
                                    sociis natoque penatibus et magnis dis parturient.
                                </p>
                                <img src={line} alt="" className='w-4 md:w-6 absolute top-[19%] right-[25%] md:top-[20%] md:right-[8%] lg:top-[24%] lg:right-[14%] -z-10 ' />
                            </div>

                            <div className="space-y-4 max-w-md">
                                {[
                                    { label: "Dental and Mouth Care", percent: "95%" },
                                    { label: "Cosmetic Treatment", percent: "87%" }
                                ].map((bar, i) => (
                                    <div key={i}>
                                        <div className="flex justify-between text-sm font-medium text-gray-900 mb-3">
                                            <span>{bar.label}</span>
                                            <span>{bar.percent}</span>
                                        </div>
                                        <div className="w-full bg-blue-100 rounded-full h-2">
                                            <div className="bg-[#3267FF] h-2 rounded-full" style={{ width: bar.percent }}></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className='w-full lg:w-[48%] flex justify-center lg:justify-start'>
                            <img src={image4} alt="" className='w-[65%] md:w-[100%] lg:w-[65%]' />
                        </div>
                    </div>


                    <div className='lg:absolute bg-white z-10 rounded-lg shadow-xl lg:top-12 lg:right-0 px-6 py-6 w-[90%] sm:w-[70%] lg:w-auto'>
                        <div>
                            <h3 className='text-2xl font-bold mb-2'>Don't Hesitate to Do<br />Consultation</h3>
                            <p className='text-[#636571] text-sm mb-5'>Lorem ipsum dolor sit amet, consectetur<br />adipiscing elit. Ut elit tellus, luctus nec.</p>
                        </div>

                        {["Monday - Friday", "Satuday", "Sunday"].map((day, i) => (
                            <span className='flex items-center justify-between mb-4' key={i}>
                                <p className='font-semibold text-sm'>{day}</p>
                                <p className='text-[#636571] text-sm'>8AM - 10PM</p>
                            </span>
                        ))}

                        <span className='flex items-center justify-center'>
                            <button className='px-8 sm:px-16 py-4 bg-[#3267FF] text-white font-medium rounded-lg'>Call +91 9946275251</button>
                        </span>
                    </div>
                </div>
            </div>

            <div className='py-16 px-28 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 bg-[#F1F8FF]'>
                {[
                    { img: image5, label: "Happy Client", value: "1200+" },
                    { img: image6, label: "Year Experience", value: "15+" },
                    { img: image7, label: "Doctor & Staff", value: "70+" },
                    { img: image8, label: "Online Appointment", value: "340+" },
                ].map((item, i) => (
                    <div className='flex items-center gap-3 lg:gap-4' key={i}>
                        <img src={item.img} alt="" className='' />
                        <div>
                            <p className='text-xl sm:text-2xl font-bold'>{item.value.split('+')[0]}<span className='text-2xl sm:text-3xl font-bold text-[#3267FF]'>+</span></p>
                            <p className='text-[#636571] text-xs lg:text-base'>{item.label}</p>
                        </div>
                    </div>
                ))}
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
