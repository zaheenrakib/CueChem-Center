import React from 'react';
import Banner from '../../components/Home/Banner/Banner';
import PartnerShip from '../../components/PartnerShip/PartnerShip';
import CardSection from '../../components/Home/CardSetion/CardSection';
import OverView from '../../components/CountUp/OverView';

const Home = () => {
    return (
        <>
            <Banner />
            <PartnerShip />
            <OverView />
            <CardSection />
        </>
    );
};

export default Home;