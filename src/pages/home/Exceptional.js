import React from 'react';
import treatment from '../../assets/images/treatment.png'
import PrimaryBtn from '../share/PrimaryBtn';

const Exceptional = () => {
    return (
        <div>
            <div class="card grid lg:grid-cols-2  sm:grid-cols-1 bg-base-100  shadow-xl">
                <figure className='m-6 '>
                    <img className=' rounded-md lg:w-3/5 ' src={treatment} alt="Movie" />
                </figure>
                <div class="card-body w-4/5  p-5 flex items-baseline mx-auto">
                    <div className="my-auto sm:text-center  ">
                        <h2 class="text-5xl font-bold ">Exceptional Dental Care, on Your Terms</h2>
                        <p className='my-5'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        <PrimaryBtn>get started</PrimaryBtn>
                    </div>

                    
                </div>
            </div>
        </div>
    );
};

export default Exceptional;