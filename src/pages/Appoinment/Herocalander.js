import React from 'react';
import chair from '../../assets/images/chair.png'
import bg from '../../assets/images/bg.png'
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';


const Herocalander = ( {selected, setSelected}) => {
    return (
        <section>
            <div className="hero " style={{ backgroundImage: `url('${bg}')`, backgroundRepeat: 'no-repeat', overflow: 'hidden' }}>
                <div className='hero-content justify-evenly flex flex-col lg:flex-row-reverse  w-[100%]' >
                    <div className="">
                        <img src={chair} className="mx-auto max-w-sm flex-1 w-auto rounded-lg shadow-2xl" alt='' />
                    </div>
                    <div className='   mx-[10%] '>
                        <div className="">
                            <DayPicker

                                mode="single"
                                selected={selected}
                                onSelect={setSelected}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Herocalander;