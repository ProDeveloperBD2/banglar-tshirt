import React from 'react';
import Friend from '../Friend/Friend';

const Cusin = ({children,ring}) => {
    return (
        <div>
            <h2>Cusin</h2>
            <p>{children}</p>
            {ring&&<Friend ring={ring}></Friend>}
        </div>
    );
};

export default Cusin;