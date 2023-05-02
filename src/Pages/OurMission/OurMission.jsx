import React from 'react';
import img from './image/hggh.jpg'
import icon1 from './icons/icon1.png'
import icon2 from './icons/icon2.png'
import icon3 from './icons/icon3.png'
import icon4 from './icons/icon4.png'


const OurMission = () => {
    return (
        <div className='mx-20'>
            <h1 className='text-5xl font-bold text-center my-10'>We bake fresh, handmade bread, pastries and cakes every day</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10 my-16'>
                <div>
                    <img className=' rounded-lg' src={img} alt="" />
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                    <div className='text-center card  bg-base-100 shadow-xl p-5'>
                        <img className='h-20 w-20 mx-auto' src={icon1} alt="" />
                        <h3 className='text-2xl my-5'>BAKED FRESH DAILY</h3>
                        <p>Our bread is baked fresh daily, contains no preservatives and is very high in quality. It is also especially nice and soft</p>
                        </div>
                    <div className='text-center card  bg-base-100 shadow-xl p-5'>
                        <img className='h-20 w-20 mx-auto' src={icon2} alt="" />
                        <h3 className='text-2xl my-5'>GREAT VALUE</h3>
                        <p>With the most competitive prices on the market we are able to deliver great value without compromising on taste</p>
                    </div>
                    <div className='text-center card  bg-base-100 shadow-xl p-5'>
                        <img className='h-20 w-20 mx-auto' src={icon3} alt="" />
                        <h3 className='text-2xl my-5'>INSTITUTIONS</h3>
                        <p>We serve a wide range of institutions including universities, airlines, hotels and schools. Order daily for tomorrow</p>
                    </div>
                    <div className='text-center card  bg-base-100 shadow-xl p-5'>
                        <img className='h-20 w-20 mx-auto' src={icon4} alt="" />
                        <h3 className='text-2xl my-5'>DELIVERY TO YOUR DOOR</h3>
                        <p>Sample text. Click to select the text box. Click again or double click to start editing the text.</p>
                    </div>
                  
                </div>
            </div>
        </div>
    );
};

export default OurMission;