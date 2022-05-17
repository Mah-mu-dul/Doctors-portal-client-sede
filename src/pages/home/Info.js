import React from 'react';
import Infocard from './Infocard';

import clock from '../../assets/icons/clock.svg'
import marker from '../../assets/icons/marker.svg'
import phone from '../../assets/icons/phone.svg'

const Info = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3'>
            <Infocard bgDyne={'bg-gradient-to-r from-secondary to-primary '}  cardTitle='Opening hours' cardDescription='every friday 8 pm' img={marker}></Infocard>
            <Infocard bgDyne={'bg-accent '} cardTitle='Visit our location' cardDescription='Brooklyn, NY 10036, United States' img={phone}></Infocard>
            <Infocard bgDyne={'bg-gradient-to-r from-secondary to-primary '} cardTitle='Contact us now' cardDescription='+000 123 456789' img={clock}></Infocard>
            
        </div>
    );
};

export default Info;