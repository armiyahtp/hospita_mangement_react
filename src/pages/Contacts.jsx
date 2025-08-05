import React from 'react'
import image1 from '/images/contact.png'

const Contacts = () => {
  return (
    <div className='px-6 md:px-16 lg:px-24 xl:px-32 py-10 md:py-20'>
      <div className='bg-[#F1F8FF] rounded-md mt-20 md:mt-40'>
        <div className='relative flex flex-col items-center lg:flex-row'>
          <div className='w-full md:w-[60%] px-6 md:px-0 py-10 md:py-14'>
            <div className='flex items-center justify-start gap-3 px-3 py-2 border rounded-md w-fit mb-4'>
              <p className='text-sm text-[#3267FF]'>Contact Us</p>
            </div>
            <div className='mb-6'>
              <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold mb-6'>
                Become The Next
                <br />Our
              </h1>
              <p className='text-[#636571] text-sm md:text-base lg:w-[60%] w-full'>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                Aenean commodo ligula eget dolor. Aenean massa.
              </p>
            </div>
            <button className='bg-[#3267FF] px-5 py-3 text-white rounded-md text-sm md:text-base'>
              Book an Appointment
            </button>
          </div>

          <img
            src={image1}
            alt=""
            className='mx-auto lg:absolute lg:bottom-0 lg:right-0'
          />
        </div>
      </div>
    </div>
  )
}

export default Contacts
