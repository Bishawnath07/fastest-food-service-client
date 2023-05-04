import React, { useEffect, useState } from 'react';
import ChefCard from '../../ChefCart/ChefCard';
import Banner from '../Banner/Banner';
import BlockArticles from '../../BlockArticles/BlockArticles';
import OurMission from '../../OurMission/OurMission';

import Footer from '../../Footer/Footer';

const Chefs = () => {
    const [chefs, setChefs] = useState([])

    useEffect(() => {
        fetch('https://fastest-food-service-server-bishawnath07.vercel.app/chefs/')
            .then(res => res.json())
            .then(data => setChefs(data))
            .catch(error => console.error(error))

    }, [])



    

    return (
        <div>
            
            <Banner></Banner>
            <div className='mt-20'>
                <h1 className='text-5xl text-center my-10'>Here Are Your Favorite Chefe</h1>
                
                <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mx-10 md:mx-20 '>
                    {
                        chefs.map(chef => <ChefCard
                            key={chef.id}
                            chef={chef}
                        ></ChefCard>)
                    }
                </div>
            </div>
            <BlockArticles></BlockArticles>
            <OurMission></OurMission>
            <Footer></Footer>
        </div>
    );
};

export default Chefs;