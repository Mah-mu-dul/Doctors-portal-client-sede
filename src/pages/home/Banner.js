import React from 'react';
import chair from '../../assets/images/chair.png'
import bg from '../../assets/images/bg.png'
const Banner = () => {
    return (
            <div class="hero min-h-screen " style={{ backgroundImage: `url('${bg}')`, backgroundRepeat: 'no-repeat', overflow: 'hidden' }}>
                <div className='hero-content flex-col lg:flex-row-reverse ' >
                    <img src={chair} class="max-w-sm w-auto rounded-lg shadow-2xl" />
                    <div className='  left-0 m-3'>
                        <h1 class="text-5xl font-bold ">Your New Smile Starts Here</h1>
                        <p class="py-6 ">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                        <button class="btn btn-primary text-white font-bold bg-gradient-to-r from-secondary to-primary">Get Started</button>
                    </div>
                </div>
            </div>
    );
};

export default Banner;