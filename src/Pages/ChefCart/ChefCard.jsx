import { FaRegThumbsUp } from 'react-icons/fa';
import LazyLoad from 'react-lazy-load';
import { Link } from 'react-router-dom';


const ChefCard = ({ chef }) => {
    const { id, name, img, years_of_experience, number_of_recipes, likes } = chef;


  


    return (


        <div  className="card  bg-base-100 shadow-xl mb-5 ">
            
            <figure className="px-10 pt-10">
                <LazyLoad>
                    <img src={img} alt="Shoes" className="rounded-xl" />
                </LazyLoad>
            </figure>
            
            <div className="card-body items-center text-center">
                <h2 className="card-title font-bold"> Name: {name} </h2>
                <p className='font-semibold'>Years of experience : {years_of_experience}</p>
                <p className='font-semibold mt-0'>Number of recupes : {number_of_recipes}</p>
                <p className='flex items-center gap-1'> <FaRegThumbsUp className='text-red-500 text-2xl'></FaRegThumbsUp> {likes}</p>
                <div className="card-actions">
                    <Link to={`/details/${id}`}><button className="btn btn-primary">Views Recipe </button></Link>                </div>
            </div>
        </div>
    );
};

export default ChefCard;