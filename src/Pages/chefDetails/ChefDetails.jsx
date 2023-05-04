import React, { useState } from 'react';
import { FaEye, FaRegThumbsUp, FaStar, FaStarHalf } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';
import Footer from '../Footer/Footer'
import { ToastContainer, toast } from 'react-toastify';

const ChefDetails = () => {
    const chefs = useLoaderData();
    console.log(chefs.items[1]);
    const { id, name, items, description, img, years_of_experience, number_of_recipes, likes } = chefs;
    const { recipe_name1, rating1, ingredients1, cooking_method1 ,recipe_name2, rating2, ingredients2, cooking_method2 , recipe_name3, rating3, ingredients3, cooking_method3 } = chefs.items[0];


    const [isFavorite, setIsFavorite] = useState(false);
    const [isFavorite2, setIsFavorite2] = useState(false);
    const [isFavorite3, setIsFavorite3] = useState(false);


    const handleClick = () => {
        setIsFavorite(true);
        toast("Recipe marked as favorite!");
        return;

    }
    const handleClick2 = () => {
        setIsFavorite2(true);
        toast("Recipe marked as favorite!");
        return;

    }
    const handleClick3 = () => {
        setIsFavorite3(true);
        toast("Recipe marked as favorite!");
        return;

    }

    

    const showToast1 = (message) => {
        const toast = document.createElement("div");
        toast.className = "toast";
        toast.textContent = message;
        document.body.appendChild(toast);

        // Hide toast after 3 seconds
        setTimeout(() => {
            document.body.removeChild(toast);
        }, 3000);
    };
    const showToast2 = (message) => {
        const toast = document.createElement("div");
        toast.className = "toast";
        toast.textContent = message;
        document.body.appendChild(toast);

        // Hide toast after 3 seconds
        setTimeout(() => {
            document.body.removeChild(toast);
        }, 3000);
    };
    const showToast3 = (message) => {
        const toast = document.createElement("div");
        toast.className = "toast";
        toast.textContent = message;
        document.body.appendChild(toast);

        // Hide toast after 3 seconds
        setTimeout(() => {
            document.body.removeChild(toast);
        }, 3000);
    };

    return (
        <div>
            <div className=' mx-20  mt-16'>
            <div className="card card-side bg-base-100 shadow-xl md:p-10 my-10">
                <figure>
                    <img className='p-5 md:p-0 image-full' src={img} alt="Movie" />
                </figure>
                <div className="card-body ">
                    <h2 className="card-title texl-xl md:text-3xl font-bold"> Name: {name} </h2>
                    <p className='text-sm md:text-lg font-semibold'>{description}</p>
                    <p className='font-semibold'>Years of experience : {years_of_experience} years</p>
                    <p className='font-semibold mt-0'>Number of recupes : {number_of_recipes}</p>
                    <p className='flex items-center gap-1'>Likes :<FaRegThumbsUp className='text-red-500'></FaRegThumbsUp> {likes}</p>

                </div>
            </div>


           {/* Here are chefs recipe  */}


            <h1 className='text-5xl text-center my-10'>Here are some recipe </h1>
            <div className='grid  grid-cols-1 md:grid-cols-3 gap-8'>
                <div className="card my-10 glass ">
                    <figure className='flex flex-col gap-4'>
                        <img className='pt-10' src={items[0].image1} alt="car!" />
                        <p className='flex items-center gap-2 text-red-400'><FaStar></FaStar> <FaStar></FaStar> <FaStar></FaStar> <FaStar></FaStar> <FaStarHalf></FaStarHalf> {items[0].rating1}</p>
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">{items.recipe_name1} </h2>
                        <p><span className='text-emerald-700 font-semibold text-xl'>Ingredients</span> : {items[0].ingredients1}</p>
                        <p><span className='text-xl mt-0 text-emerald-800 font-semibold'>Cooking method</span>: {items[0].cooking_method1}</p>
                        <div className="card-actions justify-center mt-5">

                            <button
                                className="favorite-button"
                                onClick={handleClick}
                                disabled={isFavorite}
                            >
                                {isFavorite ? <button className="btn btn-success">Favorite</button> :
                                    <button className="btn btn-accent">Mark as Favorite</button>

                                }
                            </button>

                        </div>
                    </div>
                </div>
                <div className="card my-10 glass ">
                    <figure className='flex flex-col gap-4'>
                        <img className='pt-10' src={items[1].image2} alt="car!" />
                        <p className='flex items-center gap-2 text-red-400'><FaStar></FaStar> <FaStar></FaStar> <FaStar></FaStar> <FaStar></FaStar> <FaStarHalf></FaStarHalf> {items[1].rating2}</p>
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">{items.recipe_name2} </h2>
                        <p><span className='text-emerald-700 font-semibold text-xl'>Ingredients</span> : {items[1].ingredients2}</p>
                        <p><span className='text-xl mt-0 text-emerald-800 font-semibold'>Cooking method</span>: {items[1].cooking_method2}</p>
                        <div className="card-actions justify-center mt-5">

                            <button
                                className="favorite-button"
                                onClick={handleClick2}
                                disabled={isFavorite2}
                            >
                                {isFavorite2 ? <button className="btn btn-success">Favorite</button> :
                                    <button className="btn btn-accent">Mark as Favorite</button>

                                }
                            </button>
                            <ToastContainer></ToastContainer>

                        </div>
                    </div>
                </div>
                <div className="card my-10 glass ">
                    <figure className='flex flex-col gap-4'>
                        <img className='pt-10' src={items[2].image3} alt="car!" />
                        <p className='flex items-center gap-2 text-red-400'><FaStar></FaStar> <FaStar></FaStar> <FaStar></FaStar> <FaStar></FaStar> <FaStarHalf></FaStarHalf> {items[2].rating3}</p>
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">{items.recipe_name3} </h2>
                        <p><span className='text-emerald-700 font-semibold text-xl'>Ingredients</span> : {items[2].ingredients3}</p>
                        <p><span className='text-xl mt-0 text-emerald-800 font-semibold'>Cooking method</span>: {items[2].cooking_method3}</p>
                        <div className="card-actions justify-center mt-5">

                            <button
                                className="favorite-button"
                                onClick={handleClick3}
                                disabled={isFavorite3}
                            >
                                {isFavorite3 ? <button className="btn btn-success">Favorite</button> :
                                    <button className="btn btn-accent">Mark as Favorite</button>

                                }
                            </button>
                            

                        </div>
                    </div>
                </div>
            </div>
            
        </div>
            <Footer></Footer>
        </div>
    );
};

export default ChefDetails;