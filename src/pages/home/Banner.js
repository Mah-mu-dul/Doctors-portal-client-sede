import React from 'react';
import chair from '../../assets/images/chair.png'
import bg from '../../assets/images/bg.png'
import PrimaryBtn from '../share/PrimaryBtn';
const Banner = () => {
    return (
        <div className="hero py-20" style={{ backgroundImage: `url('${bg}')`, backgroundRepeat: 'no-repeat', overflow: 'hidden' }}>
            <div className='hero-content flex-col lg:flex-row-reverse ' >
                <img src={chair} className="max-w-sm w-auto rounded-lg shadow-2xl" />
                <div className='  left-0 m-3'>
                    <h1 className="text-5xl font-bold ">Your New Smile Starts Here</h1>
                    <p className="py-6 ">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                    <PrimaryBtn>GET STARTED</PrimaryBtn>
                </div>
            </div>
        </div>
    );
};

export default Banner;