import React from 'react';
import { FaEye } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ChefCard = ({chef}) => {
    const {id , name , img , years_of_experience ,number_of_recipes , likes } = chef
    return (
        <div className="card w-76 h-96 bg-base-100 shadow-xl mb-5 m-10">
        <figure className=" pt-10">
            <img src={img} alt="Shoes" className="rounded-xl h-40" />
        </figure>
        <div className="card-body items-center text-center">
            <h2 className="card-title">{name}</h2>
            <p>Years of experience : {years_of_experience}</p>
            <p>Number of recupes : {number_of_recipes}</p>
            <p className='flex justify-between items-center gap-3'><FaEye></FaEye> {likes}</p>
            <div className="card-actions">
                <Link to = {`/details/${id}`}><button className="btn btn-primary">Views Recipe </button></Link>
            </div>
        </div>
    </div>
    );
};

export default ChefCard;