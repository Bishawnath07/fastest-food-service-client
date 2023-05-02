import React from 'react';
import img from './Butter-Chicken-PictureTheRecipe.jpg'

const BlockArticles = () => {
    return (
        <div className='my-20 mx-10 md:mx-20'>
            <div className='my-8'>
                <h1 className='text-4xl font-bold text-center'>READ RECENT BLOG ARTICLES</h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 space-x-10 border-2 p-8 rounded-md'>
                <div>
                    <img  src={img} alt="" />
                </div>
                <div>
                    <h2 className='text-3xl font-semibold my-5'>Tender Pieces of Paneer are Grilled Golden on a Tnadoor with Spices galore.</h2>
                    <p className='text-xl'>JULY 22, 2020 BUTTER CHICKEN Jump to Recipe  Print Recipe Grilled chicken in a luscious tomato-based spiced curry sauce.There’s about a bazillion versions of this very popular Indian dish, which is why I haven’t gotten around with sharing my own version on here before. Also it’s one of those recipes that I usually make from memory and had never....</p>
                    <button className="btn btn-outline btn-primary my-5">Continue Reading</button>
                </div>
            </div>
        </div>
    );
};

export default BlockArticles;