import React from 'react';
import data from '../data/soal.json';
import { useState } from 'react';
import Bar from './Bar.jsx';

function Card(){

    const [showAnswer, setShowAnswer] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const soal = data.soal;
    
    const handleNext = () => {
        if (currentIndex < soal.length - 1) {
            setCurrentIndex(currentIndex + 1);
            setShowAnswer(false);
        }
    }

    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
            setShowAnswer(false);
        }
    }

    const handleShowAnswer = () => {
        setShowAnswer(!showAnswer);
    }
    
    return (
        <>
            <div className='mb-4 w-3xl justify-items-start'>
                <Bar number={currentIndex + 1}/>
            </div>   
            <div className="p-2 border-3 border-gray-300 rounded-xl w-3xl h-[450px] flex flex-col gap-2">
                <div className="text-xl items-center bg-gray-100 rounded-lg w-full flex justify-center text-center h-full">
                    {!showAnswer ? (
                        <span className="text-3xl font-bold px-40">
                            {soal[currentIndex].soal}
                        </span>
                    ) : (
                        <span className="px-40">
                            {soal[currentIndex].jawaban}
                        </span>
                    )}
                </div>
                <div className="flex justify-between gap-2 py-3 px-4 bg-gray-100 rounded-lg w-full">
                    <div>
                        {currentIndex > 0 ? (
                            <button className="cursor-pointer text-gray-700 hover:text-black" onClick={handlePrev}>&lt; Prev</button>
                        ) : (
                            <button className="cursor-not-allowed text-gray-400" disabled>&lt; Prev</button>
                        )}
                    </div>
                    <div className="font-bold">
                        {!showAnswer ? (
                            <button onClick={handleShowAnswer} className="cursor-pointer text-gray-700 hover:text-black">
                                Show Answer
                            </button>
                        ) : (
                            <button onClick={handleShowAnswer} className="cursor-pointer text-gray-700 hover:text-black">
                                Hide Answer
                            </button>
                        )}
                    </div>
                    <div>
                        {currentIndex < soal.length - 1 ? (
                            <button className="cursor-pointer text-gray-700 hover:text-black" onClick={handleNext}>Next &gt;</button>
                        ) : (
                            <button className="cursor-not-allowed text-gray-400" disabled>Next &gt;</button>
                        )}
                    </div>
                </div>

            </div>
        </>
    );
}

export default Card;