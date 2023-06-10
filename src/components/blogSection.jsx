import React from 'react'
import data from '../API/data'

const BlogSection = () => {
    return (
        <div className='w-[50%] mx-auto'>
            {
                data.map((data, index) => {
                    return (
                        <div key={index} className='w-full'>
                            <h1 className='text-xl font-bold mt-3'>{data.heading}</h1>
                            <p className='mt-4'>{data.about}</p>
                            <img src={data.img} className='w-[90%] h-[90%] mx-auto mt-3 mb-2'></img>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default BlogSection
