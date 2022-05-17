import React from 'react';

const Infocard = ({img, cardTitle, cardDescription, bgDyne}) => {

    return (
        <div className=' justify-evenly'>
            <div class={` px-4 m-6 flex-col card lg:card-side ${bgDyne} shadow-xl`}>
                <figure><img src={img}alt="Album"/></figure>
                <div class="card-body text-white">
                    <h2 class="card-title">{cardTitle}</h2>
                    <p>{cardDescription}</p> 
                </div>
            </div>
        </div>
    );
};

export default Infocard;