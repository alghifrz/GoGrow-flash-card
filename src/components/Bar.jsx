import React from 'react';
import data from '../data/soal.json';

function Bar ({number}) {
    const count = data.soal.length;
    const percentage = (number / count) * 100;

    return (
        <>
            <div className="flex flex-col justify-left items-center w-full">
                <div className='mb-2 flex justify-between w-full'>
                    <h1 className='text-4xl text-left font-bold'>Flash Card {number}</h1>
                    <span>{number} of {count}</span>
                </div>
                <div className="w-full bg-white rounded-xl h-[50px] p-1 border-3 border-gray-300">
                    <div className="bg-gray-300 h-full rounded-lg items-center align-middle flex text-right justify-end p-2" style={{ width: `${(percentage)}%` }}>{(percentage).toFixed(0)}%</div>
                </div>
            </div>    
        </>
    )
}

export default Bar