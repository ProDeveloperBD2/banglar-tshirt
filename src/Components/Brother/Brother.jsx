import React, { useContext } from 'react';
import { ringContext } from '../Grandpa/Grandpa';

const Brother = () => {
    const ring = useContext(ringContext);
    return (
        <div>
            <h2>Brother</h2>
            <p>Ring: {ring}</p>
        </div>
    );
};

export default Brother;