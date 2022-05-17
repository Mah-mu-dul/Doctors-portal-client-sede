import React from 'react';

const ServiceCard = ({ title, description,img,alt}) => {
    return (
        <div>
            <div class="card w-96 bg-base-100 m-5 shadow-xl mx-auto ">
                <figure class="px-10 pt-10">
                    <img src={img} alt={alt} />
                </figure>
                <div class="card-body items-center text-center">
                    <h3 className="text-xl">{title}</h3>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;