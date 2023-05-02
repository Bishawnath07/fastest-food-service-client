import React from 'react';
import img2 from '../../../assets/cartoon-chef.jpg'

const Banner = () => {
    return (
        
        <div className='grid grid-cols-1 md:grid-cols-2 mt-10 md:mx-20 '>
            <div className=' md:py-20  px-16 '>
                <h1 className='text-5xl font-bold mt-10'>Most Faster food</h1>
                <h1  className='text-4xl font-bold mb-8'>Delivery service</h1>
                <p className='text-xl'>
                Flour, water, sea salt, and leavening: four simple ingredients that—when mixed, shaped, fermented, and baked—make one of the most basic foods that has nourished humans for thousands of years. Since such few ingredients are involved, two things set great bread apart: quality ingredients and time.
                </p>
                <button className="btn btn-primary mt-10">Get Started</button>
            </div>
            <div className=' px-10'>
                <img  className='rounded-lg h-98' src={img2} alt="" />
            </div>
        </div>
    );
};

export default Banner;