import React from 'react';
import { FaEye, FaRegThumbsUp } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';
import ChefCard from './ChefCard/ChefCard';

const ChefDetails = () => {
    const chefs = useLoaderData();
    console.log(chefs);
    const { id, name, items , description, img, years_of_experience, number_of_recipes, likes } = chefs;



    return (
        <div className=' mx-20  mt-16'>
            <div className="card card-side bg-base-100 shadow-xl p-10 my-10">
                <figure>
                    <img className='image-full' src={img} alt="Movie" />
                </figure>
                <div className="card-body ">
                    <h2 className="card-title text-3xl font-bold"> Name: {name} </h2>
                    <p className='font-semibold'>{description}</p>
                    <p className='font-semibold'>Years of experience : {years_of_experience}</p>
                    <p className='font-semibold mt-0'>Number of recupes : {number_of_recipes}</p>
                    <p className='flex items-center gap-1'>Likes :<FaRegThumbsUp className='text-red-500'></FaRegThumbsUp> {likes}</p>
                    
                </div>
            </div>
            <h1 className='text-5xl text-center my-10'>Here are some recipe </h1>
            <ChefCard></ChefCard>
          
        </div>
    );
};

export default ChefDetails;