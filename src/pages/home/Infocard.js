import React from 'react';

const Infocard = ({ img, cardTitle, cardDescription, bgDyne }) => {

    return (
        <div className=' justify-evenly'>
            <div className={` px-4 m-6 flex-col card lg:card-side ${bgDyne} shadow-xl`}>
                <figure><img className='mt-4' src={img} alt="Album" /></figure>
                <div className="card-body text-white">
                    <h2 className="card-title">{cardTitle}</h2>
                    <p>{cardDescription}</p>
                </div>
            </div>
        </div>
    );
};

export default Infocard;