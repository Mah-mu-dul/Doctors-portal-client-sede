import React, { useState } from 'react';
import Footer from '../share/Footer/Footer';
import AvailableApoinment from './AvailableApoinment';
import Herocalander from './Herocalander';

const Appinment = () => {
    const [selected, setSelected] = useState(new Date())
    

    return (
        <div>
            <Herocalander selected={selected} setSelected={setSelected}></Herocalander>
            <AvailableApoinment selected={selected}></AvailableApoinment>


            <Footer></Footer>

        </div>
    );
};

export default Appinment;