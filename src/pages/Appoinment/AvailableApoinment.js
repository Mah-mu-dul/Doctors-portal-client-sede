import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingModal from './BookingModal';
import Service from './Service';

const AvailableApoinment = ({ selected }) => {
    const [services, setServices] = useState([])
    const [treatment, setTreatment] = useState(null)
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <section className='mt-4'>
            <p className='text-center text-secondary'>Available sercice on {format(selected, 'PP')}.</p>
            <p className='text-center text-[#939393]'>Please select a service</p>
            <div className="grid grid-cols-1 lg:grid-cols-3"> 
            {
                services.map(service => <Service
                key={service._id}
                service={service}
                setTreatment={setTreatment}
                >
                </Service>)
            }
                {treatment && <BookingModal  
                date={format(selected, 'PP')}
                 treatment={treatment}
                 setTreatment = {setTreatment}
                 
                 ></BookingModal>}
            </div>


        </section>
    );
};

export default AvailableApoinment;