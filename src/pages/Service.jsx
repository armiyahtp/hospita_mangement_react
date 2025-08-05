import React from 'react'
import './page.css'
import { useSign } from '../context/SignContext'
import Singup from './Singup'
import Login from './Login'
import arrow from '/images/arrow.png'
import image1 from '/images/service1.png'
import image2 from '/images/service2.png'
import image3 from '/images/service3.png'
import image4 from '/images/service4.png'
import image5 from '/images/service5.png'
import image6 from '/images/service6.png'
import image7 from '/images/service7.png'
import image8 from '/images/service8.png'
import image9 from '/images/service9.png'
import image10 from '/images/service10.png'
import image11 from '/images/service11.png'
import image12 from '/images/service12.png'
import image13 from '/images/service13.png'




const Service = () => {

    const { register, login } = useSign()

    return (
        <>
            <div className='relative'>
                <div className='bg-[#F1F8FF] diagonal-left w-[55%] h-[490px]'>
                    <div className='px-32 py-20 z-10'>
                        <div className='flex items-center justify-center gap-3 py-2 border rounded-md w-36 mb-5'>
                            <p className='text-sm font-medium text-[#3267FF]'>The Best Services</p>
                        </div>

                        <div className='mb-7'>
                            <h1 className='text-5xl font-bold mb-7'>Dedicated to Give You <br />The Best Services</h1>
                            <p className='text-[#636571] mb-4'>
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                                <br />Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                                <br />natoque penatibus et magnis dis parturient.
                            </p>
                        </div>

                        <button className='bg-[#3267FF] px-7 py-3 text-white rounded-md '>Contact Us</button>
                    </div>
                </div>
                <img src={image1} alt="" className='absolute top-0  right-0 -z-10 w-[80%] h-[489px] ' />
            </div>





            <div className='px-32 py-20'>
                <div className='text-center'>
                    <div className='flex items-center justify-center'>
                        <div className='py-2 border rounded-md w-28 mb-5'>
                            <p className='text-sm font-medium text-[#3267FF]'>Our Services</p>
                        </div>
                    </div>
                    <h2 className='text-5xl font-bold mb-7'>Services</h2>
                    <p className='text-[#636571] mb-4'>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                        <br />Aenean commodo ligula aenean massa.
                    </p>
                </div>


                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 p-10">
                    <div className="relative rounded-lg overflow-hidden shadow-md">
                        <img src={image2} className="w-full h-[410px]" />
                        <div className="absolute bottom-0 left-0 right-28 bg-white rounded-se-md p-4">
                            <div className="flex items-center space-x-2 mb-3">
                                <img src={image3} alt="" />
                                <h3 className="text-lg font-semibold text-gray-800">Teeth Checkup</h3>
                            </div>
                            <p className="text-gray-600 text-sm">
                                Lorem ipsum dolor sit amet,
                                <br />consectetur adipiscing elit
                            </p>
                            <a href="#" className="text-blue-600 mt-7 flex items-center gap-2 font-medium text-sm hover:underline">
                                <span>Learn More</span><img src={arrow} alt="" className='w-3' />
                            </a>
                        </div>
                    </div>


                    <div className="relative rounded-lg overflow-hidden shadow-md">
                        <img src={image4} className="w-full h-[410px]" />
                        <div className="absolute bottom-0 left-0 right-28 bg-white rounded-se-md p-4">
                            <div className="flex items-center space-x-2 mb-3">
                                <img src={image5} alt="" />
                                <h3 className="text-lg font-semibold text-gray-800">Teeth Checkup</h3>
                            </div>
                            <p className="text-gray-600 text-sm">
                                Lorem ipsum dolor sit amet,
                                <br />consectetur adipiscing elit
                            </p>
                            <a href="#" className="text-blue-600 mt-7 flex items-center gap-2 font-medium text-sm hover:underline">
                                <span>Learn More</span><img src={arrow} alt="" className='w-3' />
                            </a>
                        </div>
                    </div>


                    <div className="relative rounded-lg overflow-hidden shadow-md">
                        <img src={image6} className="w-full h-[410px]" />
                        <div className="absolute bottom-0 left-0 right-28 bg-white rounded-se-md p-4">
                            <div className="flex items-center space-x-2 mb-3">
                                <img src={image7} alt="" />
                                <h3 className="text-lg font-semibold text-gray-800">Teeth Checkup</h3>
                            </div>
                            <p className="text-gray-600 text-sm">
                                Lorem ipsum dolor sit amet,
                                <br />consectetur adipiscing elit
                            </p>
                            <a href="#" className="text-blue-600 mt-7 flex items-center gap-2 font-medium text-sm hover:underline">
                                <span>Learn More</span><img src={arrow} alt="" className='w-3' />
                            </a>
                        </div>
                    </div>


                    <div className="relative rounded-lg overflow-hidden shadow-md">
                        <img src={image8} className="w-full h-[410px]" />
                        <div className="absolute bottom-0 left-0 right-28 bg-white rounded-se-md p-4">
                            <div className="flex items-center space-x-2 mb-3">
                                <img src={image9} alt="" />
                                <h3 className="text-lg font-semibold text-gray-800">Teeth Checkup</h3>
                            </div>
                            <p className="text-gray-600 text-sm">
                                Lorem ipsum dolor sit amet,
                                <br />consectetur adipiscing elit
                            </p>
                            <a href="#" className="text-blue-600 mt-7 flex items-center gap-2 font-medium text-sm hover:underline">
                                <span>Learn More</span><img src={arrow} alt="" className='w-3' />
                            </a>
                        </div>
                    </div>


                    <div className="relative rounded-lg overflow-hidden shadow-md">
                        <img src={image10} className="w-full h-[410px]" />
                        <div className="absolute bottom-0 left-0 right-28 bg-white rounded-se-md p-4">
                            <div className="flex items-center space-x-2 mb-3">
                                <img src={image11} alt="" />
                                <h3 className="text-lg font-semibold text-gray-800">Teeth Checkup</h3>
                            </div>
                            <p className="text-gray-600 text-sm">
                                Lorem ipsum dolor sit amet,
                                <br />consectetur adipiscing elit
                            </p>
                            <a href="#" className="text-blue-600 mt-7 flex items-center gap-2 font-medium text-sm hover:underline">
                                <span>Learn More</span><img src={arrow} alt="" className='w-3' />
                            </a>
                        </div>
                    </div>


                    <div className="relative rounded-lg overflow-hidden shadow-md">
                        <img src={image12} className="w-full h-[410px]" />
                        <div className="absolute bottom-0 left-0 right-28 bg-white rounded-se-md p-4">
                            <div className="flex items-center space-x-2 mb-3">
                                <img src={image13} alt="" />
                                <h3 className="text-lg font-semibold text-gray-800">Teeth Checkup</h3>
                            </div>
                            <p className="text-gray-600 text-sm">
                                Lorem ipsum dolor sit amet,
                                <br />consectetur adipiscing elit
                            </p>
                            <a href="#" className="text-blue-600 mt-7 flex items-center gap-2 font-medium text-sm hover:underline">
                                <span>Learn More</span><img src={arrow} alt="" className='w-3' />
                            </a>
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

export default Service
