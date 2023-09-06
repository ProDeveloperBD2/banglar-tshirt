import React from 'react';
import Cusin from '../Cusin/Cusin';

const Aunty = ({ring}) => {
    return (
        <div>
            <h2>Aunty</h2>
            <section className='flex'>
                <Cusin>Abul</Cusin>
                <Cusin ring={ring}>Babul</Cusin>
            </section>
        </div>
    );
};

export default Aunty;