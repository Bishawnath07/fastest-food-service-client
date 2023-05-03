import React, { useState } from 'react';
import { FaStar, FaStarHalf } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ChefCard = ({ item }) => {
    const chefs = useLoaderData();
    console.log(chefs.items)

    const [isFavorite, setIsFavorite] = useState(false);


    const handleClick = () => {
        setIsFavorite(true);
         showToast("Recipe marked as favorite!");
         toast("Wow so easy!");
         return ;

    }

    const showToast = (message) => {
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
        <div className='grid grid-cols-1 md:grid-cols-3 gap-10 space-x-10'>
            {
                chefs.items.map(item =>
                    <div className="card my-10 glass ">
                        <figure className='flex flex-col gap-4'>
                            <img className='pt-10' src={item.image} alt="car!" />
                            <p className='flex items-center gap-2 text-red-400'><FaStar></FaStar> <FaStar></FaStar> <FaStar></FaStar> <FaStar></FaStar> <FaStarHalf></FaStarHalf> {item.rating}</p>
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">{item.recipe_name} </h2>
                            <p><span className='text-emerald-700 font-semibold text-xl'>Ingredients</span> : {item.ingredients}</p>
                            <p><span className='text-xl mt-0 text-emerald-800 font-semibold'>Cooking method</span>: {item.cooking_method}</p>
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
                                <ToastContainer></ToastContainer>

                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default ChefCard;