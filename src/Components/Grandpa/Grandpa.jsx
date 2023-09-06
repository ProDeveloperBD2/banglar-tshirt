import React, { createContext, useState } from 'react';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import Aunty from '../Aunty/Aunty';
import './Grandpa.css'
export const ringContext = createContext('gold');
export const moneyContext = createContext(0);

const Grandpa = () => {
    const ring = 'diamond';
    const [money, setMoney] = useState(0)
    return (
        <div className='grandpa'>
            <h2>Grandpa</h2>
            <p>Grndpa Money: {money}</p>
            <moneyContext.Provider value={[money, setMoney]}>
                <section className='flex'>
                    <Father ring={ring}></Father>
                    <Uncle></Uncle>
                    <Aunty ring={ring}></Aunty>
                </section>
            </moneyContext.Provider>
        </div>
    );
};

export default Grandpa;