import React from 'react';
import { addToDb, removedFromDb } from '../../utilities/fakedb';

const Shopping = (props) => {
    const { name, des, id } = props;

    const addToCart = (id) => {
        addToDb(id)
    }
    const removeFromCart = id => {
        removedFromDb(id);
    }
    return (
        <div className='text-center border-2 border-black w-64 mx-auto mt-10'>
            <div className='p-2'>
                <h1 className='text-3xl'>name :{name}</h1>
                <p>desceription:{des}</p>
                <p>id :{id}</p>
                <button className='bg-orange-500 p-1 rounded-lg mr-3 mt-3' onClick={() => addToCart(id)}>Add to cart</button>
                <button className='bg-orange-500 p-1 rounded-lg' onClick={() => removeFromCart(id)}>Remove</button>
            </div>
        </div>
    );
};

export default Shopping;