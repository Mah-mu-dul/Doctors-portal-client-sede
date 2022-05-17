import React from 'react';
import qut from '../../assets/icons/quote.svg'
import people1 from '../../assets/images/people1.png'
import people2 from '../../assets/images/people2.png'
import people3 from '../../assets/images/people3.png'
import Reviewes from './Reviewes';

const Testimonial = () => {
    return (
        <section >
            <div className=" flex justify-between">
                <div className="m-4">
                    <h1 className="text-primary text-xl font-bold">Testimonial</h1>
                    <h1 className="text-4xl">What out patients says</h1>
                </div>
                <div className="w-1/2 flex justify-end">
                    <img className='' src={qut} alt="" />
                </div>
            </div>
            <div className="lg:flex sm:block justify-evenly   ">
                <Reviewes place='dhaka' name='kader uddin' img={people1} description='onek vnek valo service aro onek kicu ki r koitam tomakren . ekdom tolonai nek valo service aro onek kicu ki r koitam tomakren . ekdom tolonai hoynahoynaalo service. ekdom tolonai hoyna' ></Reviewes>
                <Reviewes place='dhaka' name='kader uddin' img={people1} description='onek valo service aro onek kicu ki r koitam tomakren . ekdom tolonai hoyna nek valo service aro onek kicu ki r koitam tomakren . ekdom tolonai hoyna aro kicu kikhte hobe soman korte ta na' ></Reviewes>
                <Reviewes place='dhaka' name='kader uddin' img={people1} description='onek valo service. ekdom tolonai nek valo service aro nek valo service aro onek kicu ki r koitam tomakren . ekdom tolonai hoynaonek kicu ki r koitam tomakren . ekdom tolonai hoynahoyna' ></Reviewes>
            </div>
        </section>
    );
};

export default Testimonial;