import React from 'react';
import Banner from './Banner';
import Exceptional from './Exceptional';
import HomeAppointment from './HomeAppointment';
import Info from './Info';
import Services from './Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <Exceptional></Exceptional>
            <HomeAppointment></HomeAppointment>
        </div>
    );
};

export default Home;