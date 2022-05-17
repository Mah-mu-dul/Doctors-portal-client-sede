import React from 'react';

const Reviewes = ({ description, img, name, place }) => {
    return (
        <div>
            <div className="card lg:w-[90%] bg-base-100 mx-auto my-4 shadow-xl">
                <div className="card-body">

                    <p>{description}</p>
                    <div className="card-actions justify-start mt-4">
                        <div className="avatar">
                            <div className="w-[75px] rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src={img} />
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