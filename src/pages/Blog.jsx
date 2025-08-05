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

            <div className='px-32 py-20'>
                <div className='text-center mb-20'>
                    <div className='flex items-center justify-center'>
                        <div className='py-2 border rounded-md w-28 mb-5'>
                            <p className='text-sm font-medium text-[#3267FF]'>Our Blogs</p>
                        </div>
                    </div>
                    <h2 className='text-5xl font-bold mb-7'>Blogs &</h2>
                    <p className='text-[#636571] mb-4'>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                        <br />Aenean commodo ligula aenean massa.
                    </p>
                </div>

                <div className='grid grid-cols-3'>
                    <div>
                        <div className='relative mb-3'>
                            <img src={image1} alt="" className='rounded-md' />
                            <span className='bg-white absolute bottom-0 left-0 right-[85%] flex items-end h-[27px] rounded-se-md'>
                                <p className='text-[#3267FF]'>News</p>
                            </span>
                        </div>

                        <div>
                            <h2 className='text-xl font-semibold mb-3'>
                                Oral Cancer Awareness: Signs,
                                <br />Symptoms, and Prevention
                            </h2>
                            <p className='text-[#636571] mb-5'>
                                Lorem ipsum dolor sit amet, consectetuer adipiscing
                                <br />elit. Aenean commodo ligula eget dolor. Aenean
                                <br />massa. Cum sociis natoque...
                            </p>
                            <button className='flex items-center bg-[#3267FF] text-white px-5 py-2 rounded-md'>
                                Read More 
                                <span><img src={arrow} alt="" className='w-3 ml-3' /></span>
                            </button>
                        </div>
                    </div>


                    <div>
                        <div className='relative mb-3'>
                            <img src={image2} alt="" className='rounded-md' />
                            <span className='bg-white absolute bottom-0 left-0 right-[85%] flex items-end h-[27px] rounded-se-md'>
                                <p className='text-[#3267FF]'>Tips</p>
                            </span>
                        </div>

                        <div>
                            <h2 className='text-xl font-semibold mb-3'>
                                Oral Cancer Awareness: Signs,
                                <br />Symptoms, and Prevention
                            </h2>
                            <p className='text-[#636571] mb-5'>
                                Lorem ipsum dolor sit amet, consectetuer adipiscing
                                <br />elit. Aenean commodo ligula eget dolor. Aenean
                                <br />massa. Cum sociis natoque...
                            </p>
                            <button className='flex items-center bg-[#3267FF] text-white px-5 py-2 rounded-md'>
                                Read More 
                                <span><img src={arrow} alt="" className='w-3 ml-3' /></span>
                            </button>
                        </div>
                    </div>


                    <div>
                        <div className='relative mb-3'>
                            <img src={image3} alt="" className='rounded-md' />
                            <span className='bg-white absolute bottom-0 left-0 right-[85%] flex items-end h-[27px] rounded-se-md'>
                                <p className='text-[#3267FF]'>Health</p>
                            </span>
                        </div>

                        <div>
                            <h2 className='text-xl font-semibold mb-3'>
                                Oral Cancer Awareness: Signs,
                                <br />Symptoms, and Prevention
                            </h2>
                            <p className='text-[#636571] mb-5'>
                                Lorem ipsum dolor sit amet, consectetuer adipiscing
                                <br />elit. Aenean commodo ligula eget dolor. Aenean
                                <br />massa. Cum sociis natoque...
                            </p>
                            <button className='flex items-center bg-[#3267FF] text-white px-5 py-2 rounded-md'>
                                Read More 
                                <span><img src={arrow} alt="" className='w-3 ml-3' /></span>
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
