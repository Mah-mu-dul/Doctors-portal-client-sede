import React from 'react';
import doctor from '../../assets/images/doctor-small.png'
import appointment from '../../assets/images/appointment.png'
import PrimaryBtn from '../share/PrimaryBtn';

const Homeappointment = () => {
    return (
        <section  style={
            {
                backgroundImage:`url(${appointment})`
            }
        } className='flex justify-center items-center mt-[100px] '>
            <div className="flex-1 hidden lg:block">
                <img className='mt-[-100px]' src={doctor} alt="" />
            </div>
            <div className="flex-1 p-6 ">
                <h1 className="text-primary text-2xl my-8">Appointment</h1>
                <h3 className="text-white text-5xl">Make an Appoinment today </h3>
                <p className="text-white my-8">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet eius quis, ipsam nam repellat error odio vel et perspiciatis totam iure aperiam illo suscipit libero a quas corporis inventore amet! Odit sapiente at eum autem, dignissimos blanditiis! Quibusdam laborum autem nisi facere nam nobis consequuntur impedit, sit velit. Fuga, ab.</p>
                <PrimaryBtn>get started</PrimaryBtn>
            </div>
        </section>
    );
};

export default Homeappointment;