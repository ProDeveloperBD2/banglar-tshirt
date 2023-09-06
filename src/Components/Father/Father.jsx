import React from 'react';
import Sister from '../Sister/Sister';
import MySelf from '../MySelf/MySelf';
import Brother from '../Brother/Brother';

const Father = ({ring}) => {
    return (
        <div>
            <h2>Father</h2>
            <section className='flex'>
                <Sister></Sister>
                <MySelf ring={ring}></MySelf>
                <Brother></Brother>
            </section>
        </div>
    );
};

export default Father;