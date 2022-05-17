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
            <div className="">
                <div class="form-control mx-auto mt-10  w-80 ">
               
                    <input type="text" placeholder="Email Address" class="input input-bordered w-full max-w-xs" />
                    <input type="text" placeholder="Subject" class="input input-bordered w-full my-4 max-w-xs" />
                    <textarea class="textarea textarea-bordered" placeholder="Your messege"></textarea>
                    <div className="mx-auto m-4"><PrimaryBtn >Submit</PrimaryBtn></div>
                </div>
            </div>
        </section>
    );
};

export default Contactus;