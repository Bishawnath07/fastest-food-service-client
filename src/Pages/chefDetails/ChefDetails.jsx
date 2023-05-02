import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ChefDetails = () => {
    const chefs = useLoaderData();
    console.log(chefs);
    
    return (
        <div>
            <h3>chefs details comming soon !! </h3>
        </div>
    );
};

export default ChefDetails;