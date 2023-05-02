import React from 'react';
import img from '../../../assets/mediterranean-diet-recipes-pinterest-1.jpg'

const Banner = () => {
    return (
        <div className='grid grid-cols-2 mt-10 mx-20'>
            <div className='bg-slate-300 py-20  px-16'>
                <h1 className='text-4xl font-bold mt-10'>Most Faster food</h1>
                <h1  className='text-4xl font-bold mb-8'>Delivery service</h1>
                <p className='text-md'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores voluptatibus voluptatem soluta deleniti rem repudiandae modi accusamus minus. Facere, provident.</p>
            </div>
            <div className='bg-slate-400'>
                <img src={img} alt="" />
            </div>
        </div>
    );
};

export default Banner;