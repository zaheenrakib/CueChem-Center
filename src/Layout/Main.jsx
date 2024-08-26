import React from 'react';
import { Outlet } from 'react-router-dom';
import AwesomeNav from '../components/Head/AwesomeNav';
import Footer from '../components/Shared/Footer';

const Main = () => {
    return (
        <>
            <AwesomeNav></AwesomeNav>
            <Outlet></Outlet>
            <Footer />
        </>
    );
};

export default Main;