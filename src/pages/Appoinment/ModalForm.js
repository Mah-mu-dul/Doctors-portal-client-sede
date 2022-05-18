import React from 'react';

const ModalForm = ({ date, slots, setTreatment, treatment }) => {
    const BookingHandle = (event) => {
        event.preventDefault()
        const slot = event.target.slot.value
        const name = event.target.name.value
        const phone = event.target.phone.value
        const email = event.target.email.value
        setTreatment(null)

            ;
    }
    return (
        <div>
            <div className="card flex-shrink-0 w-full max-w-sm mx-auto shadow-2xl bg-base-100">
                <div className="card-body ">
                    <form onSubmit={BookingHandle}>
                        <div className="form-control">
                            <input disabled type="text" value={date} placeholder="email" className="bg-[#E6E6E6]  input input-bordered" />
                            <select name='slot' className="my-3 select select-bordered w-full max-w-xs">
                                {
                                    slots.map(slot => <option  value={slot}>{slot}</option>)
                                }

                            </select>                        </div>
                        <div className="form-control">
                            <input type="text" name='name' placeholder="Name" className="input input-bordered" />
                            <input type="tel" name='phone' placeholder="Phone umber" className="my-3 input input-bordered" />
                            <input type="email" name='email' placeholder="Email" className="input input-bordered" />
                            <input type="submit" className="btn btn-accent " />
                        </div>

                        <div className="form-control mt-6">
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ModalForm;