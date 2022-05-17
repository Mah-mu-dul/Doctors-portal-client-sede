import React from 'react';

const Reviewes = ({description, img, name, place}) => {
    return (
        <div>
            <div class="card lg:w-[90%] bg-base-100 mx-auto my-4 shadow-xl">
                <div class="card-body">
                
                    <p>{description}</p>
                    <div class="card-actions justify-start mt-4">
                        <div class="avatar">
                            <div class="w-[75px] rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src={img}/>
                            </div>
                        </div>
                        <div className="mx-5 my-auto">
                            <h1 className="text-xl font-bold">{name}</h1>
                            <h1 className="text-xl ">{place}</h1>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reviewes;