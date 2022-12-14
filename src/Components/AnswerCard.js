import React from 'react';
import Answer from './Answer';

const AnswerCard = ({options, correctAnswer}) => {
    // console.log(options)
    
    return (
        <div className=" bg-gray-600 shadow-dark rounded-2xl w-full">
        <div className="pt-6 pb-2">
            {options.map(answer => 
                <Answer
                key={answer}
                answer={answer}
                correctAnswer={correctAnswer}
                ></Answer>
            )}
        </div>
    </div>
    );
};

export default AnswerCard;