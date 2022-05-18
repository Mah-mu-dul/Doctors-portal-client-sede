import React from 'react';
import PrimaryBtn from '../share/PrimaryBtn';

const Service = ({ service, setTreatment}) => {
    const {name, slots} = service
    return (
        <div>
            <div className="card lg:maxw-lg m-[30px] shadow-xl">
                <div className="card-body">
                    <h2 className="card-title mx-auto text-secondary">{name}</h2>
                    <p className='text-center'>{slots.length ? ` ${slots.length} ${slots.length>1 ? 'spaces' : 'space'} Available` : <span  className='text-[red]'>No Space Available Today</span>}</p>
                    <div className="card-actions justify-center">
                        <label disabled={slots.length === 0} onClick={() => setTreatment(service)} htmlFor="bookingModal" className="btn modal-button btn-secondary uppercase text-white">Book Appoinment</label>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;