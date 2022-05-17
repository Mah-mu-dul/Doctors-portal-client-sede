import React from 'react';
import ServiceCard from './ServiceCard';
import fluoride from '../../assets/images/fluoride.png'
import cavity from '../../assets/images/cavity.png'
import whitening from '../../assets/images/whitening.png'

const Services = () => {
    return (
        <div className='my-14'>
            <div className="text-center">
                <h2 className="text-xl text-secondary">our services</h2>
                <h2 className="text-3xl ">services we provide</h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 mb-10">
                <ServiceCard description='lorem kifdjf dkfhdfhenwf fsjfhweufrefdfd fjdfhweufdf dkfhuf' title='Fluoride Treatment' img={fluoride}></ServiceCard>
                <ServiceCard description='lorem kifdjf dkfhdfhenwf fsjfhweufrefdfd fjdfhweufdf dkfhuf' title='Cavity Filling' img={cavity}></ServiceCard>
                <ServiceCard description='lorem kifdjf dkfhdfhenwf fsjfhweufrefdfd fjdfhweufdf dkfhuf' title='Teeth Whitening' img={whitening}></ServiceCard>
            </div>
        </div>
    );
};

export default Services;