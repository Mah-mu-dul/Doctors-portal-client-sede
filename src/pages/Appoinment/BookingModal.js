import React from 'react';
import ModalForm from './ModalForm';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';


const BookingModal = ({ treatment, date, setTreatment}) => {
    const {name, slots} = treatment
    const [user] = useAuthState(auth)
    return (
        <div>
            <input type="checkbox" id="bookingModal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="bookingModal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-3xl text-center font-bold text-5xl">{name}</h3>
                    <ModalForm 
                    date={date}
                    slots = {slots}
                    setTreatment ={setTreatment}
                    treatment={treatment}
                    user={user}

                    ></ModalForm>
                    
                </div>
            </div>
        </div>
    );
};

export default BookingModal;