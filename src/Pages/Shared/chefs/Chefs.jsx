import React, { useEffect, useState } from 'react';
import ChefCard from '../../ChefCart/ChefCard';
import Banner from '../Banner/Banner';

const Chefs = () => {
    const [chefs , setChefs] = useState([])

    useEffect(() =>{
        fetch('http://localhost:3000/chefs/')
        .then(res => res.json())
        .then(data => setChefs(data))
        .catch(error => console.error(error))

    } , [])
    return (
        <div>
            <Banner></Banner>
            <h1 className='text-5xl text-center my-10'>Here Are Your Favorite Chefe</h1>
            <div className='grid grid-cols-3 bg-slate-400 mx-20'>
            {
                chefs.map(chef => <ChefCard
                key={chef.id}
                chef={chef}
                ></ChefCard>)
            }
            </div>
        </div>
    );
};

export default Chefs;