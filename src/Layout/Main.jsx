import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Home/Footer/Footer';
import AwesomeNav from '../components/Head/AwesomeNav';

const Main = () => {
    return (
        <>
            <AwesomeNav></AwesomeNav>
            <Outlet></Outlet>
            {/* <Footer></Footer> */}
        </>
    );
};

export default Main;