import React from 'react';
import qut from '../../assets/icons/quote.svg'
import people1 from '../../assets/images/people1.png'
import people2 from '../../assets/images/people2.png'
import people3 from '../../assets/images/people3.png'
import Reviewes from './Reviewes';

const Testimonial = () => {
    const reviews = [
        {
            _id: 1,
            name: 'Kader Uddin',
            place: 'Dhaka',
            img: people1,
            description: 'onek vnek valo service aro onek kicu ki r koitam tomakren . ekdom tolonai nek valo service aro onek kicu ki r koitam tomakren . ekdom tolonai hoynahoynaalo service. ekdom tolonai hoyna'

        },
        {
            _id: 2,
            name: 'Chokina Begom',
            place: 'Dhaka',
            img: people2,
            description: 'onek vnek valo service aro onek kicu ki r koitam tomakren . ekdom tolonai nek valo service aro onek kicu ki r koitam tomakren . ekdom tolonai hoynahoynaalo service. ekdom tolonai hoyna'

        },
        {
            _id: 3,
            name: 'Komola Sundhori',
            place: 'Dhaka',
            img: people3,
            description: 'onek vnek valo service aro onek kicu ki r koitam tomakren . ekdom tolonai nek valo service aro onek kicu ki r koitam tomakren . ekdom tolonai hoynahoynaalo service. ekdom tolonai hoyna'

        }
        
    ]
    return (
        <section className='mt-12'>
            <div className=" flex justify-between m-10 lg:m-16 sm:m-5">
                <div className="m-4">
                    <h1 className="text-primary text-xl font-bold">Testimonial</h1>
                    <h1 className="text-4xl">What out patients says</h1>
                </div>
                <div className="w-1/2 flex justify-end">
                    <img className='w-[150px]' src={qut} alt="" />
                </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5 mb-4">
                {
                    reviews.map(review =>
                        <Reviewes key={review._id} place={review.place} name={review.name} img={review.img} description={review.description}></Reviewes>
                    )
                }

            </div>
        </section>
    );
};

export default Testimonial;