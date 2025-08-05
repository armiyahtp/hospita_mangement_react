import React from 'react'
import { useSign } from '../context/SignContext'
import Singup from './Singup'
import Login from './Login'
import arrow from '/images/right-arrow.png'
import image1 from '/images/blog1.png'
import image2 from '/images/blog2.png'
import image3 from '/images/blog3.png'

const Blog = () => {

    const { register, login } = useSign()

    return (
        <>

            <div className='px-4 sm:px-6 md:px-16 lg:px-24 xl:px-32 py-10 md:py-16 lg:py-20'>
                <div className='text-center mb-10 md:mb-14 lg:mb-20'>
                    <div className='flex items-center justify-center'>
                        <div className='py-2 border rounded-md w-24 sm:w-28 mb-4 sm:mb-5'>
                            <p className='text-sm font-medium text-[#3267FF]'>Our Blogs</p>
                        </div>
                    </div>
                    <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 lg:mb-7'>Blogs &</h2>
                    <p className='text-[#636571] text-sm sm:text-base mb-3 sm:mb-4 px-0 md:px-20'>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                        Aenean commodo ligula aenean massa.
                    </p>
                </div>

                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10'>
                    <div>
                        <div className='relative mb-3'>
                            <img src={image1} alt="" className='rounded-md w-full' />
                            <span className='bg-white absolute bottom-0 left-0 right-[85%] flex items-end h-[24px] sm:h-[27px] rounded-se-md'>
                                <p className='text-[#3267FF] text-xs sm:text-sm'>News</p>
                            </span>
                        </div>

                        <div>
                            <h2 className='text-lg sm:text-xl font-semibold mb-3'>
                                Oral Cancer Awareness: Signs,
                                Symptoms, and Prevention
                            </h2>
                            <p className='text-[#636571] text-sm sm:text-base mb-4 sm:mb-5'>
                                Lorem ipsum dolor sit amet, consectetuer adipiscing
                                elit. Aenean commodo ligula eget dolor. Aenean
                                massa. Cum sociis natoque...
                            </p>
                            <button className='flex items-center bg-[#3267FF] text-white px-4 sm:px-5 py-2 rounded-md text-sm sm:text-base'>
                                Read More
                                <span><img src={arrow} alt="" className='w-3 ml-2 sm:ml-3' /></span>
                            </button>
                        </div>
                    </div>

                    <div>
                        <div className='relative mb-3'>
                            <img src={image2} alt="" className='rounded-md w-full' />
                            <span className='bg-white absolute bottom-0 left-0 right-[85%] flex items-end h-[24px] sm:h-[27px] rounded-se-md'>
                                <p className='text-[#3267FF] text-xs sm:text-sm'>Tips</p>
                            </span>
                        </div>

                        <div>
                            <h2 className='text-lg sm:text-xl font-semibold mb-3'>
                                Oral Cancer Awareness: Signs,
                                Symptoms, and Prevention
                            </h2>
                            <p className='text-[#636571] text-sm sm:text-base mb-4 sm:mb-5'>
                                Lorem ipsum dolor sit amet, consectetuer adipiscing
                                elit. Aenean commodo ligula eget dolor. Aenean
                                massa. Cum sociis natoque...
                            </p>
                            <button className='flex items-center bg-[#3267FF] text-white px-4 sm:px-5 py-2 rounded-md text-sm sm:text-base'>
                                Read More
                                <span><img src={arrow} alt="" className='w-3 ml-2 sm:ml-3' /></span>
                            </button>
                        </div>
                    </div>

                    <div>
                        <div className='relative mb-3'>
                            <img src={image3} alt="" className='rounded-md w-full' />
                            <span className='bg-white absolute bottom-0 left-0 right-[85%] flex items-end h-[24px] sm:h-[27px] rounded-se-md'>
                                <p className='text-[#3267FF] text-xs sm:text-sm'>Health</p>
                            </span>
                        </div>

                        <div>
                            <h2 className='text-lg sm:text-xl font-semibold mb-3'>
                                Oral Cancer Awareness: Signs,
                                Symptoms, and Prevention
                            </h2>
                            <p className='text-[#636571] text-sm sm:text-base mb-4 sm:mb-5'>
                                Lorem ipsum dolor sit amet, consectetuer adipiscing
                                elit. Aenean commodo ligula eget dolor. Aenean
                                massa. Cum sociis natoque...
                            </p>
                            <button className='flex items-center bg-[#3267FF] text-white px-4 sm:px-5 py-2 rounded-md text-sm sm:text-base'>
                                Read More
                                <span><img src={arrow} alt="" className='w-3 ml-2 sm:ml-3' /></span>
                            </button>
                        </div>
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

export default Blog
