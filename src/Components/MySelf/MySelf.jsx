import React from 'react';
import Special from '../Special/Special';

const MySelf = ({ring}) => {
    return (
        <div>
            <h2>MySelf</h2>
            <section className='flex'>
                <Special ring={ring}>Sadifa</Special>
            </section>
        </div>
    );
};

export default MySelf;