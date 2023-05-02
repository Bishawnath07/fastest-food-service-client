import React from 'react';
import { FaEye } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';

const ChefDetails = () => {
    const chefs = useLoaderData();
    console.log(chefs);
    const { id, name, img, years_of_experience, number_of_recipes, likes } = chefs ;



    return (
        <div className="card card-side bg-base-100 shadow-xl ms-20">
            <figure><img className='h-80 w-72' src={img} alt="Movie" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name} </h2>
                <p>Click the button to watch on Jetflix app.</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Faveriot</button>
                </div>
            </div>
        </div>
    );
};

export default ChefDetails;