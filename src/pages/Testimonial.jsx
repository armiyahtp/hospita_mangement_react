import React from 'react'
import { useSign } from '../context/SignContext'
import Singup from './Singup'
import Login from './Login'
import image1 from '/images/test1.png'
import image2 from '/images/test2.png'
import image3 from '/images/test3.png'


const Testimonial = () => {

    const { register, login } = useSign()

    return (
        <div>

            <div className='flex items-start justify-between px-32 py-20'>
                <div className='w-[50%]'>
                    <div className='flex items-center justify-start gap-3 px-3 py-2 border rounded-md w-44 mb-4'>
                        <img src="" alt="" />
                        <p className='text-sm text-[#3267FF]'> Hey! We Are Dentic</p>
                    </div>
                    <div className='mb-6'>
                        <h1 className='text-5xl font-bold mb-6'>
                            The Honest Review
                            <br />From Our Client
                        </h1>
                        <p className='text-[#636571]'>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                            <br />Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                            <br />natoque penatibus et magnis dis parturient.
                        </p>
                    </div>
                    <button className='bg-[#3267FF] px-5 py-2 text-white rounded-md'>See All Reviews</button>
                </div>

                <div className='w-[50%]'>
                    <div className='relative bg-white rounded-md flex items-center justify-between mb-10' style={{ boxShadow: '0 0 20px rgba(21, 63, 131, 0.19)' }}>
                        <div className='px-7'>
                            <p className='text-[#636571] mb-7'>
                                <i>
                                    Lorem ipsum dolor sit amet, consectetuer
                                    <br />adipiscing elit. Aenean commodo ligula eget
                                    <br />dolor. Aenean massa.
                                </i>
                            </p>
                            <h3 className='text-lg font-semibold mb-1'>José Correia</h3>
                            <p className='text-[#636571]'>Marketing Manager</p>
                        </div>
                        <img src={image1} alt="" />
                        <img src={image3} alt="" className='absolute w-12 bg-white -left-7 top-8' />
                    </div>

                    <div className='relative bg-white rounded-md flex items-center justify-between' style={{ boxShadow: '0 0 20px rgba(21, 63, 131, 0.19)' }}>
                        <div className='px-7'>
                            <p className='text-[#636571] mb-7'>
                                <i>
                                    Lorem ipsum dolor sit amet, consectetuer
                                    <br />adipiscing elit. Aenean commodo ligula eget
                                    <br />dolor. Aenean massa.
                                </i>
                            </p>
                            <h3 className='text-lg font-semibold mb-1'>José Correia</h3>
                            <p className='text-[#636571]'>Marketing Manager</p>
                        </div>
                        <img src={image2} alt="" />
                        <img src={image3} alt="" className='absolute w-12 bg-white -left-7 top-8' />
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

export default Testimonial
