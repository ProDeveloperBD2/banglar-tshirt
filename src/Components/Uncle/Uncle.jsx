import React, { useContext } from 'react';
import Cusin from '../Cusin/Cusin';
import { moneyContext } from '../Grandpa/Grandpa';

const Uncle = () => {
    const [money, setMoney] = useContext(moneyContext)
    return (
        <div>
            <h2>Uncle</h2>
            <p>Uncle Money: {money}</p>
            <button onClick={() => setMoney(money + 1000)}>Boost 1000tk</button>
            <section className='flex'>
                <Cusin>Nabila</Cusin>
                <Cusin>Kabila</Cusin>
            </section>
        </div>
    );
};

export default Uncle;