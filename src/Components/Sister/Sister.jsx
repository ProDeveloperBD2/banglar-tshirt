import React, { useContext } from 'react';
import { moneyContext } from '../Grandpa/Grandpa';

const Sister = () => {
    const [money] = useContext(moneyContext);
    return (
        <div>
            <h2>Sister</h2>
            <p>sister money: {money}</p>
        </div>
    );
};

export default Sister;