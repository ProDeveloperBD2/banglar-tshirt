import React, { useContext } from 'react';
import { moneyContext } from '../Grandpa/Grandpa';

const Friend = ({ ring }) => {
    const [money] = useContext(moneyContext);
    return (
        <div>
            <h2>Friend</h2>
            <p>Ring: {ring}</p>
            <p>Friend Money: {money}</p>
        </div>
    );
};

export default Friend;