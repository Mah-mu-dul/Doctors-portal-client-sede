import React from 'react';
import PrimaryBtn from '../share/PrimaryBtn';
import bg from '../../assets/images/appointment.png'

const Contactus = () => {
    return (
        <section style={{
            backgroundImage:`url(${bg})`,
            backgroundSize: 'cover'


        }} className='p-5'>
            <div className="">
                <h2 className='text-primary text-xl text-center font-bold'>Contact Us</h2>
                <h2 className='text-whhite text-5xl text-center text-white'>Stay connected with us</h2>


            </div>
            <div className="w-screenn">
                <div class="form-control mx-auto mt-10   lg:w-[50%]">
                    <input type="text" placeholder="Email Address" class="input input-bordered " />
                    <input type="text" placeholder="Subject" class="my-5 input input-bordered " />
                    <textarea class="textarea textarea-bordered" placeholder="Your messege"></textarea>
                    <div className="mx-auto m-4"><PrimaryBtn >Submit</PrimaryBtn></div>
                </div>
            </div>
        </section>
    );
};

export default Contactus;