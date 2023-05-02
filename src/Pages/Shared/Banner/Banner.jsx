import React from 'react';
import img2 from '../../../assets/cartoon-chef.jpg'

const Banner = () => {
    return (
        
        <div className='grid grid-cols-1 md:grid-cols-2 mt-10 md:mx-20 '>
            <div className=' md:py-20  px-16 '>
                <h1 className='text-4xl font-bold mt-10'>Most Faster food</h1>
                <h1  className='text-4xl font-bold mb-8'>Delivery service</h1>
                <p className='text-md'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores voluptatibus voluptatem soluta deleniti rem repudiandae modi accusamus minus. Facere, provident.</p>
                <button className="btn btn-primary mt-10">Get Started</button>
            </div>
            <div className=' px-10'>
                <img  className='rounded-lg h-98' src={img2} alt="" />
            </div>
        </div>
    );
};

export default Banner;