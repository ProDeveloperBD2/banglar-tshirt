import React, { useContext } from 'react';
import { ringContext } from '../Grandpa/Grandpa';

const Special = ({ ring }) => {
    const Angti = useContext(ringContext)
    return (
        <div>
            <h2>Special</h2>
            <p>Ring: {ring}</p>
            <p>Angti: {Angti}</p>
        </div>
    );
};

export default Special;