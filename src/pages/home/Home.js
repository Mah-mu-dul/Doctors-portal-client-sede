import React from 'react';
import Banner from './Banner';
import Contactus from './Contactus';
import Exceptional from './Exceptional';
import HomeAppointment from './HomeAppointment';
import Info from './Info';
import Services from './Services';
import Testimonial from './Testimonial';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <Exceptional></Exceptional>
            <HomeAppointment></HomeAppointment>
            <Testimonial></Testimonial>
            <Contactus></Contactus>
        </div>
    );
};

export default Home;