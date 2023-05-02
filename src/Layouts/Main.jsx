import React from 'react';
import Header from '../Pages/Shared/Header/Header';
import Footer from '../Pages/Shared/footer/Footer';
import { Outlet } from 'react-router-dom';
import Banner from '../Pages/Shared/Banner/Banner';

const Main = () => {
    return (
        <>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </>
    );
};

export default Main;