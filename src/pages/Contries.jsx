import axios from 'axios'
import React, { useEffect, useState } from 'react'
import "./contry.css"

const Contries = () => {

    const [contries, setContries] = useState([])

    useEffect(() => {
        const fetchContries = async () => {
            try {
                const response = await axios.get("https://restcountries.com/v3.1/all?fields=name,cca3,flags")
                console.log(response.data)
                setContries(response.data)
            }
            catch (error) {
                console.log(error)
            }
        }
        fetchContries()
    }, [])

    return (

        <div className='px-20 py-10 grid grid-cols-3 gap-20'>
            {
                contries.map((items, index) => (
                    <div className='p-6 bg-slate-200 rounded-xl overflow-auto h-[410px] custom-scroll'>
                        <div key={index} className=''>
                            <h1 className='text-2xl font-bold text-center mb-7'>{items.name.common}</h1>
                            <img src={items.flags.png} alt="" className='mb-8 w-full' />
                            <p className='text-xl font-semibold mb-5'><span className='text-xl font-bold'>Official Name: </span>{items.name.official}</p>
                            <p>{items.flags.alt}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Contries
